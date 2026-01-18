import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight, RefreshCcw, Users, Globe, Star, BookOpen, FileText, Brain, Smile, Sparkles, HelpCircle, Check, Square, Map } from 'lucide-react';
import { unitContents } from './data/unitContents';
import { exercises } from './data/exercises';
import { examScenarios } from './data/scenarios';
import { evaluateEssayAnswer, generateMockExam } from './gemini-service';

// Audio Assets
const clickSound = new Audio('/src/assets/adventure/click_wood.mp3');
const rustleSound = new Audio('/src/assets/adventure/paper_rustle.mp3');

const playClick = () => {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => { });
};

const playRustle = () => {
    rustleSound.currentTime = 0;
    rustleSound.play().catch(() => { });
};

// Typewriter Component
const TypewriterText = ({ text, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    React.useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, 35);
            return () => clearTimeout(timeout);
        } else {
            if (onComplete) onComplete();
        }
    }, [index, text, onComplete]);

    return <span>{displayText}</span>;
};

// IzciRobot Component (Emotions & Animations)
const IzciRobot = ({ mood = 'happy', isTalking = false }) => {
    const getEyes = () => {
        if (mood === 'thinking') return (
            <g>
                <path d="M 70 85 Q 82 75 94 85" stroke="#334155" strokeWidth="4" fill="none" />
                <path d="M 106 85 Q 118 75 130 85" stroke="#334155" strokeWidth="4" fill="none" />
            </g>
        );
        if (mood === 'excited') return (
            <g>
                <path d="M 72 85 L 82 75 L 92 85" stroke="#334155" strokeWidth="4" fill="none" />
                <path d="M 108 85 L 118 75 L 128 85" stroke="#334155" strokeWidth="4" fill="none" />
            </g>
        );
        return (
            <g>
                <circle cx="82" cy="85" r="10" fill="#334155" />
                <circle cx="82" cy="83" r="3" fill="white" />
                <circle cx="118" cy="85" r="10" fill="#334155" />
                <circle cx="118" cy="83" r="3" fill="white" />
            </g>
        );
    };

    return (
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} className="animate-float">
            {/* Antenna */}
            <line x1="100" y1="60" x2="100" y2="20" stroke="#64748B" strokeWidth="3" />
            <circle cx="100" cy="20" r="6" fill={isTalking ? "#F59E0B" : "#FBBF24"}>
                {isTalking && <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" />}
            </circle>

            {/* Head */}
            <rect x="60" y="60" width="80" height="60" rx="16" fill="#FFFFFF" stroke="#475569" strokeWidth="3" />

            {/* Eyes */}
            {getEyes()}

            {/* Mouth */}
            <path
                d={mood === 'thinking' ? "M 85 110 L 115 110" : "M 80 105 Q 100 115 120 105"}
                stroke="#334155"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />

            {/* Body */}
            <path d="M 65 130 L 135 130 L 145 180 L 55 180 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="3" />

            {/* Screen */}
            <rect x="80" y="145" width="40" height="25" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            {isTalking && <rect x="85" y="152" width="30" height="4" rx="2" fill="#F59E0B" className="animate-pulse" />}
        </svg>
    );
};

// Ünite kartları için tematik görseller
const unitAssets = {
    1: { color: '#f97316', icon: '/src/assets/adventure/icon_unit1.png' },
    2: { color: '#10b981', icon: '/src/assets/adventure/icon_unit2.png' },
    3: { color: '#8b5cf6', icon: '/src/assets/adventure/icon_unit3.png' }
};

export default function IzciApp() {
    const [step, setStep] = useState('welcome');
    const [userName, setUserName] = useState('');
    const [selectedGrade, setSelectedGrade] = useState(null);
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [activeSection, setActiveSection] = useState(0);
    const [selectedExam, setSelectedExam] = useState(null);
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [inventory, setInventory] = useState(() => {
        const saved = localStorage.getItem('izci_inventory');
        return saved ? JSON.parse(saved) : [];
    });

    // Save inventory to localStorage
    React.useEffect(() => {
        localStorage.setItem('izci_inventory', JSON.stringify(inventory));
    }, [inventory]);

    const addToInventory = (item) => {
        if (!inventory.some(i => i.id === item.id)) {
            setInventory([...inventory, item]);
            return true;
        }
        return false;
    };
    const [aiExamQuestions, setAiExamQuestions] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [aiExamActiveQuestion, setAiExamActiveQuestion] = useState(0);
    const [aiExamAnswers, setAiExamAnswers] = useState({});
    const [showInput, setShowInput] = useState(false);

    // Exercise system state
    const [currentExercise, setCurrentExercise] = useState(0);
    const [exerciseAnswers, setExerciseAnswers] = useState({});
    const [showAnswers, setShowAnswers] = useState(false);
    const [aiEvaluation, setAiEvaluation] = useState(null);
    const [isEvaluating, setIsEvaluating] = useState(false);

    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (userName.trim()) setStep('grade');
    };

    const handleGradeSelect = (grade) => {
        playClick();
        setSelectedGrade(grade);
        setStep('choice');
    };

    const handleChoiceSelect = (choice) => {
        playRustle();
        if (choice === 'study' && selectedGrade === 5) {
            setStep('units');
        } else if (choice === 'practice' && selectedGrade === 5) {
            setStep('exercise_units'); // Ünite seçimi göster
        } else if (choice === 'scenario' && selectedGrade === 5) {
            setStep('exam_terms'); // Sınav dönemi seçimi
        } else {
            setStep('coming_soon');
        }
    };

    const handleUnitSelect = (unitId) => {
        setSelectedUnit(unitId);
        setActiveSection(0);
        setStep('unit_content');
    };

    const handleExerciseUnitSelect = (unitId) => {
        setSelectedUnit(unitId);
        setStep('exercise_topics'); // Show topic selection
    };

    const handleStartAiExam = async () => {
        if (!selectedExam || !selectedScenario) return;

        setIsGenerating(true);
        setStep('ai_exam_loading');

        try {
            const scenarioData = examScenarios[selectedExam].scenarios[selectedScenario];
            const questions = await generateMockExam(scenarioData);
            setAiExamQuestions(questions);
            setAiExamActiveQuestion(0);
            setAiExamAnswers({});
            setStep('ai_exam');
        } catch (error) {
            console.error('Sınav üretilirken hata:', error);
            setStep('choice');
            alert('Sınav hazırlanırken bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleAiExamEvaluate = async () => {
        const q = aiExamQuestions[aiExamActiveQuestion];
        const studentAnswer = aiExamAnswers[aiExamActiveQuestion];

        if (!studentAnswer || studentAnswer.trim() === '') return;

        setIsEvaluating(true);
        try {
            const evaluation = await evaluateEssayAnswer(q.question, studentAnswer, q.answerKey);
            setAiEvaluation(evaluation);
        } catch (error) {
            console.error('Değerlendirme hatası:', error);
        } finally {
            setIsEvaluating(false);
        }
    };

    const handleExerciseTopicSelect = (sectionId) => {
        setActiveSection(sectionId);
        setCurrentExercise(0);
        setExerciseAnswers({});
        setShowAnswers(false);
        setAiEvaluation(null);
        setStep('exercises');
    };

    const resetApp = () => {
        setStep('welcome');
        setUserName('');
        setSelectedGrade(null);
        setSelectedUnit(null);
        setActiveSection(0);
        setShowInput(false);
    };

    const selectedUnitData = selectedUnit ? unitContents[selectedUnit] : null;

    return (
        <div
            className="nature-bg"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem 1rem 10rem 1rem',
                position: 'relative',
                overflowX: 'hidden',
                overflowY: 'auto',
                transition: 'all 0.5s ease'
            }}
        >
            {/* Universal Immersive Background Elements */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {/* Clouds */}
                <div style={{ position: 'absolute', top: '10%', left: '10%', opacity: 0.6 }} className="animate-float" >
                    <svg width="120" height="60" viewBox="0 0 120 60" fill="white">
                        <circle cx="30" cy="35" r="25" /><circle cx="60" cy="25" r="25" /><circle cx="90" cy="35" r="25" />
                    </svg>
                </div>
                <div style={{ position: 'absolute', top: '15%', right: '15%', opacity: 0.4, animationDelay: '1s' }} className="animate-float">
                    <svg width="150" height="75" viewBox="0 0 150 75" fill="white">
                        <circle cx="40" cy="45" r="30" /><circle cx="75" cy="30" r="35" /><circle cx="110" cy="45" r="30" />
                    </svg>
                </div>

                {/* Trees in Background */}
                <div style={{ position: 'absolute', bottom: '15%', left: '5%', opacity: 0.8 }}>
                    <svg width="100" height="150" viewBox="0 0 100 150">
                        <path d="M50 10 L10 120 L90 120 Z" fill="#166534" />
                        <rect x="45" y="120" width="10" height="30" fill="#451a03" />
                    </svg>
                </div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', opacity: 0.6 }}>
                    <svg width="120" height="180" viewBox="0 0 100 150">
                        <path d="M50 20 L20 130 L80 130 Z" fill="#15803d" />
                        <rect x="45" y="130" width="10" height="20" fill="#451a03" />
                    </svg>
                </div>
            </div >

            {/* Main Content Container (Floating over nature) */}
            <div style={{
                position: 'relative', zIndex: 10, width: '100%', maxWidth: '1000px',
                margin: '0 auto',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '2rem'
            }}>
                {/* Header (Only shown after welcome as a floating sign) */}
                {
                    step !== 'welcome' && (
                        <div style={{
                            marginBottom: '1rem', display: 'flex', alignItems: 'center',
                            justifyContent: 'space-between', flexShrink: 0
                        }}>
                            <div className="wood-sign" style={{
                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                padding: '0.75rem 1.5rem', transform: 'rotate(-1deg)'
                            }}>
                                <div style={{
                                    background: 'white', padding: '0.4rem', borderRadius: '10px',
                                    color: '#78350f', display: 'flex'
                                }}>
                                    <Smile size={20} />
                                </div>
                                <div>
                                    <h1 style={{
                                        fontWeight: '900', fontSize: '1.2rem', color: 'white',
                                        margin: 0, lineHeight: 1
                                    }}>İZCİ</h1>
                                    <p style={{
                                        fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)',
                                        fontWeight: '600', margin: 0
                                    }}>Eğitim Yoldaşın 🚀</p>
                                </div>
                            </div>
                            {userName && (
                                <div style={{
                                    background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem',
                                    borderRadius: '9999px', color: 'white', fontSize: '0.875rem',
                                    fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem'
                                }}>
                                    <span style={{
                                        width: '8px', height: '8px', background: '#4ade80',
                                        borderRadius: '50%'
                                    }}></span>
                                    {userName}
                                </div>
                            )}
                        </div>
                    )
                }

                {/* Content Container */}
                <div style={{
                    width: '100%', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'flex-start',
                    position: 'relative', zIndex: 1
                }}>

                    {/* WELCOME STEP */}
                    {step === 'welcome' && (
                        <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            gap: '2.5rem', width: '100%', maxWidth: '600px',
                            animation: 'fadeIn 0.8s ease-out'
                        }}>
                            {/* Robot Hero */}
                            <div style={{ width: '200px', height: '200px' }} className="animate-float">
                                <IzciRobot mood="happy" isTalking={!showInput} />
                            </div>

                            {/* Wooden Welcome Sign */}
                            <div className="wood-sign" style={{ width: '100%', textAlign: 'center' }}>
                                <p style={{
                                    fontSize: '1.5rem', fontWeight: '900', margin: 0, lineHeight: '1.4'
                                }}>
                                    <TypewriterText
                                        text="Merhaba maceracı! Ben İzci 🎓 Sosyal Bilgiler yolculuğunda sana eşlik edeceğim!"
                                        onComplete={() => setShowInput(true)}
                                    />
                                </p>
                            </div>

                            {/* Parchment Input Area */}
                            <div style={{
                                width: '100%', opacity: showInput ? 1 : 0,
                                transform: showInput ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                pointerEvents: showInput ? 'auto' : 'none'
                            }}>
                                <div className="parchment-box" style={{ padding: '2rem', textAlign: 'center' }}>
                                    <h3 style={{ color: '#92400e', marginBottom: '1.5rem', fontWeight: '800', fontSize: '1.2rem' }}>
                                        Keşfe başlamak için adını yazar mısın? ✨
                                    </h3>
                                    <form onSubmit={handleNameSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <input
                                            type="text"
                                            required
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            placeholder="Adını buraya fısılda..."
                                            style={{
                                                width: '100%', padding: '1.25rem 1.5rem', borderRadius: '12px',
                                                border: '3px solid #d97706', background: 'white',
                                                fontSize: '1.2rem', color: '#78350f', fontWeight: '700',
                                                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)',
                                                outline: 'none'
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            className="adventure-btn"
                                            style={{ padding: '1.25rem', fontSize: '1.6rem', width: '100%' }}
                                        >
                                            MACERAYA BAŞLA! 🚀
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* GRADE SELECTION */}
                    {step === 'grade' && (
                        <div style={{
                            width: '100%', maxWidth: '800px', display: 'flex',
                            flexDirection: 'column', gap: '3rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(1deg)' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    Hoş geldin maceracı {userName}! 🎉
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#eab308', margin: '0.5rem 0 0 0', fontWeight: '700' }}>
                                    Yolculuğun hangi seviyeden başlıyor?
                                </p>
                            </div>

                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                                gap: '2rem'
                            }}>
                                {[5, 6, 7, 8].map((grade) => (
                                    <button
                                        key={grade}
                                        onClick={() => handleGradeSelect(grade)}
                                        className="wood-sign animate-wobble-hover"
                                        style={{
                                            padding: '2.5rem 1rem', display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', gap: '1rem', cursor: 'pointer',
                                            background: '#78350f'
                                        }}
                                    >
                                        <span style={{
                                            fontSize: '4rem', fontWeight: '950', color: '#fbbf24',
                                            textShadow: '0 4px 0 #451a03'
                                        }}>{grade}</span>
                                        <span style={{
                                            fontSize: '1rem', fontWeight: '800', color: 'white',
                                            letterSpacing: '0.1em'
                                        }}>. SINIF</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CHOICE */}
                    {step === 'choice' && (
                        <div style={{
                            width: '100%', maxWidth: '900px', display: 'flex',
                            flexDirection: 'column', gap: '3rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(-1deg)' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    Ne Yapmak İstersin? 🎯
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#eab308', margin: '0.5rem 0 0 0', fontWeight: '700' }}>
                                    Sana en uygun yolu seç ve maceraya başla!
                                </p>
                            </div>
                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '2rem'
                            }}>
                                {[
                                    { id: 'study', icon: '/src/assets/adventure/icon_study.png', title: 'Sınava Hazırlan', desc: 'Konu tekrarı yap', color: '#f97316' },
                                    { id: 'scenario', icon: '/src/assets/adventure/icon_scenario.png', title: 'Sınav Senaryoları', desc: 'Örnek sorular gör', color: '#10b981' },
                                    { id: 'practice', icon: '/src/assets/adventure/icon_ai.png', title: 'İzci ile Çalış', desc: 'Akıllı değerlendirme', color: '#8b5cf6' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleChoiceSelect(item.id)}
                                        className="parchment-box animate-wobble-hover"
                                        style={{
                                            padding: '2rem 1.5rem', borderRadius: '24px',
                                            cursor: 'pointer', transition: 'all 0.3s ease',
                                            display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', gap: '1.5rem',
                                            border: '4px solid #d97706',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <div style={{
                                            width: '120px', height: '120px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                                        }}>
                                            <img src={item.icon} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>
                                        <div>
                                            <h3 style={{
                                                fontSize: '1.4rem', fontWeight: '900',
                                                color: '#78350f', margin: '0 0 0.5rem 0'
                                            }}>{item.title}</h3>
                                            <p style={{
                                                fontSize: '0.9rem', color: '#92400e', margin: 0, fontWeight: '700'
                                            }}>{item.desc}</p>
                                        </div>
                                        <div className="adventure-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%', marginTop: 'auto' }}>
                                            SEÇ ➡
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* UNITS */}
                    {step === 'units' && (
                        <div style={{
                            width: '100%', maxWidth: '900px', display: 'flex',
                            flexDirection: 'column', gap: '3rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(1deg)' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    Hangi Üniteyi Çalışalım? 📚
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#eab308', margin: '0.5rem 0 0 0', fontWeight: '700' }}>
                                    5. Sınıf Sosyal Bilgiler
                                </p>
                            </div>
                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '2rem'
                            }}>
                                {[1, 2, 3].map((unitId) => {
                                    const unit = unitContents[unitId];
                                    const asset = unitAssets[unitId];
                                    return (
                                        <button
                                            key={unitId}
                                            onClick={() => handleUnitSelect(unitId)}
                                            className="wood-sign animate-wobble-hover"
                                            style={{
                                                padding: '2rem 1rem', display: 'flex', flexDirection: 'column',
                                                alignItems: 'center', gap: '1.5rem', cursor: 'pointer',
                                                background: '#78350f', border: '4px solid #451a03'
                                            }}
                                        >
                                            <div style={{
                                                width: '120px', height: '120px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))'
                                            }}>
                                                <img src={asset.icon} alt={unit.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <h3 style={{
                                                    fontSize: '1.1rem', fontWeight: '900',
                                                    color: 'white', margin: '0 0 0.5rem 0',
                                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                                }}>{unit.title}</h3>
                                                <div className="adventure-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
                                                    {unit.sections.length} KONU
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* UNIT CONTENT */}
                    {step === 'unit_content' && selectedUnitData && (
                        <div style={{
                            width: '100%', height: '100%', display: 'flex',
                            flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(-0.5deg)', flexShrink: 0 }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    {selectedUnitData.title}
                                </h2>
                            </div>

                            {/* Section Tabs */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '0.75rem',
                                padding: '1rem',
                                background: 'rgba(120, 53, 15, 0.1)',
                                borderRadius: '16px',
                                border: '2px solid #78350f',
                                marginBottom: '0.5rem',
                                flexShrink: 0
                            }}>
                                {selectedUnitData.sections.map((section, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSection(idx)}
                                        className={activeSection === idx ? "adventure-btn" : "parchment-box"}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            fontWeight: '800',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.2s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.6rem',
                                            border: activeSection === idx ? 'none' : '2px solid #d97706',
                                            boxShadow: activeSection === idx ? `0 4px 12px rgba(217, 119, 6, 0.3)` : 'none',
                                            color: activeSection === idx ? 'white' : '#78350f'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {section.icon}
                                        </div>
                                        <span style={{ textAlign: 'center' }}>{section.title}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Section Content */}
                            <div style={{
                                width: '100%',
                                display: 'flex', flexDirection: 'column', gap: '1.5rem'
                            }}>
                                {selectedUnitData.sections[activeSection].content.map((item, idx) => (
                                    <div key={idx} style={{
                                        background: 'white', border: `2px solid ${unitAssets[selectedUnit].color}30`,
                                        borderRadius: '12px', padding: '1.25rem',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                    }}>
                                        {item.type === 'image' && (
                                            <div style={{
                                                marginBottom: '1rem',
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                                            }}>
                                                <img
                                                    src={item.src}
                                                    alt={item.caption}
                                                    style={{
                                                        width: '100%',
                                                        maxHeight: '400px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                                {item.caption && (
                                                    <div style={{
                                                        padding: '0.75rem',
                                                        background: '#f8fafc',
                                                        borderTop: '1px solid #e2e8f0',
                                                        textAlign: 'center',
                                                        fontSize: '0.9rem',
                                                        fontWeight: '600',
                                                        color: '#64748b'
                                                    }}>
                                                        {item.caption}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {item.type === 'def' && (
                                            <div>
                                                <div style={{
                                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                                    marginBottom: '0.75rem'
                                                }}>
                                                    <HelpCircle size={18} color={unitAssets[selectedUnit].color} />
                                                    <h4 style={{
                                                        fontSize: '1rem', fontWeight: '700',
                                                        color: '#1e293b', margin: 0
                                                    }}>{item.title}</h4>
                                                </div>
                                                <p style={{
                                                    fontSize: '0.95rem', color: '#475569',
                                                    lineHeight: '1.6', margin: 0, paddingLeft: '1.75rem'
                                                }}>{item.text}</p>
                                            </div>
                                        )}

                                        {item.type === 'section_header' && (
                                            <div>
                                                <h3 style={{
                                                    fontSize: '1.125rem', fontWeight: '800',
                                                    color: unitAssets[selectedUnit].color, margin: '0 0 0.5rem 0'
                                                }}>{item.title}</h3>
                                                <p style={{
                                                    fontSize: '0.95rem', color: '#64748b',
                                                    lineHeight: '1.5', margin: 0
                                                }}>{item.text}</p>
                                            </div>
                                        )}

                                        {item.type === 'list' && (
                                            <div>
                                                <h4 style={{
                                                    fontSize: '1rem', fontWeight: '700',
                                                    color: '#1e293b', margin: '0 0 0.75rem 0'
                                                }}>{item.title}</h4>
                                                <ul style={{
                                                    margin: 0, paddingLeft: '1.5rem',
                                                    display: 'flex', flexDirection: 'column', gap: '0.5rem'
                                                }}>
                                                    {item.items.map((li, i) => (
                                                        <li key={i} style={{
                                                            fontSize: '0.9rem', color: '#475569',
                                                            lineHeight: '1.5'
                                                        }}>{li}</li>
                                                    ))}
                                                </ul>
                                                {item.footer && (
                                                    <p style={{
                                                        fontSize: '0.85rem', color: '#64748b',
                                                        fontStyle: 'italic', margin: '0.75rem 0 0 0',
                                                        paddingLeft: '1.5rem'
                                                    }}>{item.footer}</p>
                                                )}
                                            </div>
                                        )}

                                        {item.type === 'alert' && (
                                            <div style={{
                                                background: `${unitAssets[selectedUnit].color}10`,
                                                border: `2px solid ${unitAssets[selectedUnit].color}`,
                                                borderRadius: '8px', padding: '1rem'
                                            }}>
                                                <p style={{
                                                    fontSize: '0.9rem', color: '#1e293b',
                                                    fontWeight: '600', margin: 0
                                                }}>
                                                    <strong>{item.title}:</strong> {item.text}
                                                </p>
                                            </div>
                                        )}

                                        {item.type === 'grid_list' && item.items && (
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                                gap: '1rem', marginTop: '0.5rem'
                                            }}>
                                                {item.items.map((gridItem, i) => (
                                                    <div key={i} style={{
                                                        background: `${unitAssets[selectedUnit].color}05`,
                                                        border: `1px solid ${unitAssets[selectedUnit].color}20`,
                                                        borderRadius: '8px', padding: '1rem',
                                                        textAlign: 'center'
                                                    }}>
                                                        <div style={{
                                                            display: 'flex', justifyContent: 'center',
                                                            marginBottom: '0.5rem'
                                                        }}>
                                                            {gridItem.icon}
                                                        </div>
                                                        <h5 style={{
                                                            fontSize: '0.875rem', fontWeight: '700',
                                                            color: '#1e293b', margin: '0 0 0.25rem 0'
                                                        }}>{gridItem.title}</h5>
                                                        <p style={{
                                                            fontSize: '0.75rem', color: '#64748b',
                                                            margin: 0, lineHeight: '1.4'
                                                        }}>{gridItem.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {item.type === 'code' && (
                                            <div style={{
                                                background: '#1e293b', color: 'white',
                                                borderRadius: '8px', padding: '1rem',
                                                textAlign: 'center'
                                            }}>
                                                <p style={{
                                                    fontSize: '0.75rem', color: '#94a3b8',
                                                    textTransform: 'uppercase', letterSpacing: '0.1em',
                                                    margin: '0 0 0.5rem 0'
                                                }}>{item.title}</p>
                                                <p style={{
                                                    fontSize: '0.95rem', fontWeight: '700',
                                                    color: '#4ade80', margin: 0, fontFamily: 'monospace'
                                                }}>{item.text}</p>
                                            </div>
                                        )}

                                        {item.type === 'compare_detailed' && (
                                            <div style={{
                                                display: 'grid', gridTemplateColumns: '1fr 1fr',
                                                gap: '1rem'
                                            }}>
                                                <div style={{
                                                    background: '#dcfce710', border: '2px solid #dcfce7',
                                                    borderRadius: '8px', padding: '1rem'
                                                }}>
                                                    <h5 style={{
                                                        fontSize: '0.875rem', fontWeight: '800',
                                                        color: '#16a34a', textAlign: 'center',
                                                        margin: '0 0 0.75rem 0'
                                                    }}>{item.leftTitle}</h5>
                                                    <div style={{
                                                        display: 'flex', flexDirection: 'column', gap: '0.5rem'
                                                    }}>
                                                        {item.leftItems.map((li, i) => (
                                                            <div key={i}>
                                                                <strong style={{
                                                                    fontSize: '0.8rem', color: '#16a34a',
                                                                    display: 'block'
                                                                }}>{li.sub}:</strong>
                                                                <span style={{
                                                                    fontSize: '0.8rem', color: '#475569'
                                                                }}>{li.txt}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div style={{
                                                    background: '#fed7aa10', border: '2px solid #fed7aa',
                                                    borderRadius: '8px', padding: '1rem'
                                                }}>
                                                    <h5 style={{
                                                        fontSize: '0.875rem', fontWeight: '800',
                                                        color: '#ea580c', textAlign: 'center',
                                                        margin: '0 0 0.75rem 0'
                                                    }}>{item.rightTitle}</h5>
                                                    <div style={{
                                                        display: 'flex', flexDirection: 'column', gap: '0.5rem'
                                                    }}>
                                                        {item.rightItems.map((ri, i) => (
                                                            <div key={i}>
                                                                <strong style={{
                                                                    fontSize: '0.8rem', color: '#ea580c',
                                                                    display: 'block'
                                                                }}>{ri.sub}:</strong>
                                                                <span style={{
                                                                    fontSize: '0.8rem', color: '#475569'
                                                                }}>{ri.txt}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* EXERCISE UNITS SELECTION */}
                    {step === 'exercise_units' && (
                        <div style={{
                            width: '100%', maxWidth: '900px', display: 'flex',
                            flexDirection: 'column', gap: '3rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(-1deg)' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    Hangi Üniteyi Çalışalım? 🎯
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#eab308', margin: '0.5rem 0 0 0', fontWeight: '700' }}>
                                    Etkinliklerle pekiştirmek istediğin üniteyi seç!
                                </p>
                            </div>
                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '2rem'
                            }}>
                                {[
                                    { id: 1, title: 'Birlikte Yaşamak', icon: '👥', color: '#f97316', available: true },
                                    { id: 2, title: 'Evimiz Dünya', icon: '🌍', color: '#10b981', available: true },
                                    { id: 3, title: 'Ortak Mirasımız', icon: '⭐', color: '#8b5cf6', available: true }
                                ].map((unit) => (
                                    <button
                                        key={unit.id}
                                        onClick={() => unit.available && handleExerciseUnitSelect(unit.id)}
                                        disabled={!unit.available}
                                        className="parchment-box animate-wobble-hover"
                                        style={{
                                            padding: '2rem 1.5rem', borderRadius: '24px',
                                            cursor: unit.available ? 'pointer' : 'not-allowed',
                                            transition: 'all 0.3s ease',
                                            display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', gap: '1rem',
                                            border: '4px solid #d97706',
                                            opacity: unit.available ? 1 : 0.6,
                                            textAlign: 'center'
                                        }}
                                    >
                                        <div style={{
                                            fontSize: '3rem',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {unit.icon}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.2rem', fontWeight: '900',
                                            color: '#78350f', margin: '0'
                                        }}>{unit.title}</h3>
                                        <div className="adventure-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', width: '100%', marginTop: 'auto' }}>
                                            {unit.available ? 'BAŞLA ➡' : 'YAKINDA'}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setStep('choice')}
                                className="adventure-btn"
                                style={{ padding: '1rem', background: '#dc2626', borderBottomColor: '#991b1b', width: 'fit-content', alignSelf: 'center' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <ArrowLeft size={18} /> GERİ DÖN
                                </div>
                            </button>
                        </div>
                    )}

                    {/* EXERCISE TOPICS SELECTION */}
                    {step === 'exercise_topics' && selectedUnit && exercises[selectedUnit] && (
                        <div style={{
                            width: '100%', maxWidth: '900px', display: 'flex',
                            flexDirection: 'column', gap: '3rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(1deg)' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    Konu Seçimi 🎯
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#eab308', margin: '0.5rem 0 0 0', fontWeight: '700' }}>
                                    Hangi konuda uzmanlaşmak istersin?
                                </p>
                            </div>
                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '2rem'
                            }}>
                                {Object.entries(exercises[selectedUnit]).map(([sectionId, sectionData]) => (
                                    <button
                                        key={sectionId}
                                        onClick={() => handleExerciseTopicSelect(parseInt(sectionId))}
                                        className="parchment-box animate-wobble-hover"
                                        style={{
                                            padding: '2rem', borderRadius: '24px',
                                            cursor: 'pointer', transition: 'all 0.3s ease',
                                            display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', gap: '1rem',
                                            border: '4px solid #d97706',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <div style={{
                                            fontSize: '3rem',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {sectionId === '1' ? '👥' : sectionId === '2' ? '🌍' : '🤝'}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.3rem', fontWeight: '900',
                                            color: '#78350f', margin: '0 0 0.5rem 0'
                                        }}>{sectionData.title.replace(' - Etkinlikler', '')}</h3>
                                        <div className="adventure-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', width: '100%' }}>
                                            {sectionData.questions.length} ETKİNLİK
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setStep('exercise_units')}
                                className="adventure-btn"
                                style={{ padding: '1rem', background: '#dc2626', borderBottomColor: '#991b1b', width: 'fit-content', alignSelf: 'center' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <ArrowLeft size={18} /> GERİ DÖN
                                </div>
                            </button>
                        </div>
                    )}

                    {/* EXAM TERMS SELECTION */}
                    {step === 'exam_terms' && (
                        <div style={{
                            width: '100%', maxWidth: '900px', display: 'flex',
                            flexDirection: 'column', gap: '3rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(-1deg)' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    Hangi Sınav İçin Hazırlanıyoruz? 📝
                                </h2>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                {Object.entries(examScenarios).map(([key, data]) => (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            setSelectedExam(key);
                                            setStep('scenarios');
                                        }}
                                        className="parchment-box animate-wobble-hover"
                                        style={{
                                            padding: '2.5rem', display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', gap: '1.5rem', cursor: 'pointer',
                                            border: '4px solid #d97706'
                                        }}
                                    >
                                        <div style={{
                                            width: '90px', height: '90px', borderRadius: '50%',
                                            background: '#10b98120', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', color: '#059669',
                                            border: '3px solid #059669'
                                        }}>
                                            <FileText size={48} />
                                        </div>
                                        <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#78350f', margin: 0 }}>
                                            {data.title}
                                        </h3>
                                        <div className="adventure-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '1rem', width: '100%' }}>
                                            SENARYOLARI GÖR ➡
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setStep('choice')}
                                className="adventure-btn"
                                style={{ padding: '1rem', background: '#dc2626', borderBottomColor: '#991b1b', width: 'fit-content', alignSelf: 'center' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <ArrowLeft size={18} /> GERİ DÖN
                                </div>
                            </button>
                        </div>
                    )}

                    {/* SCENARIO SELECTION */}
                    {step === 'scenarios' && selectedExam && (
                        <div style={{
                            width: '100%', maxWidth: '950px', display: 'flex',
                            flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.6s ease-out',
                            height: '100%'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(0.5deg)', flexShrink: 0 }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    {examScenarios[selectedExam].title}
                                </h2>
                                <p style={{ fontSize: '1rem', color: '#eab308', margin: '0.4rem 0 0 0', fontWeight: '700' }}>
                                    Bir senaryo seçerek detayları incele
                                </p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', flexShrink: 0 }}>
                                {Object.entries(examScenarios[selectedExam].scenarios).map(([id, scenario]) => (
                                    <button
                                        key={id}
                                        onClick={() => setSelectedScenario(id)}
                                        className={selectedScenario === id ? "adventure-btn" : "parchment-box animate-wobble-hover"}
                                        style={{
                                            padding: '1rem', cursor: 'pointer',
                                            border: '3px solid #d97706', fontWeight: '800',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        {scenario.title}
                                    </button>
                                ))}
                            </div>

                            {selectedScenario && (
                                <div style={{ width: '100%', marginTop: '1rem' }}>
                                    <h3 style={{
                                        fontSize: '1.4rem', fontWeight: '900',
                                        color: '#78350f', marginBottom: '1.5rem', display: 'flex',
                                        alignItems: 'center', gap: '0.75rem'
                                    }}>
                                        <Sparkles size={28} color="#d97706" />
                                        {examScenarios[selectedExam].scenarios[selectedScenario].title} Soru Dağılımı
                                    </h3>
                                    <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '4px solid #78350f', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                            <thead>
                                                <tr style={{ background: '#78350f', color: 'white' }}>
                                                    <th style={{ padding: '1.25rem', textAlign: 'left', fontWeight: '900' }}>Konu / Kazanım</th>
                                                    <th style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '900' }}>Soru</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {examScenarios[selectedExam].scenarios[selectedScenario].topics.map((item, idx) => (
                                                    <tr key={idx} style={{ borderBottom: '2px solid #fed7aa', background: idx % 2 === 0 ? '#fffcf0' : 'white' }}>
                                                        <td style={{ padding: '1rem' }}>
                                                            <strong style={{ display: 'block', color: '#78350f', fontSize: '1.05rem' }}>{item.topic}</strong>
                                                            <span style={{ fontSize: '0.9rem', color: '#92400e', fontWeight: '600' }}>{item.outcome}</span>
                                                        </td>
                                                        <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '950', color: '#b45309', fontSize: '1.4rem' }}>
                                                            {item.count}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                                        <button
                                            onClick={() => setStep('exam_terms')}
                                            className="adventure-btn"
                                            style={{ padding: '1rem 2rem', background: '#94a3b8', borderBottomColor: '#64748b' }}
                                        >
                                            VAZGEÇ
                                        </button>
                                        <button
                                            onClick={handleStartAiExam}
                                            className="adventure-btn"
                                            style={{ padding: '1.25rem 3rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                                        >
                                            <Brain size={32} /> SINAVI BAŞLAT!
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* AI EXAM LOADING */}
                    {step === 'ai_exam_loading' && (
                        <div style={{
                            width: '100%', maxWidth: '600px', display: 'flex',
                            flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '3rem',
                            animation: 'fadeIn 0.6s ease-out', textAlign: 'center'
                        }}>
                            <div style={{ width: '120px', height: '120px' }}>
                                <Brain size={80} color="#10b981" className="animate-pulse" />
                            </div>
                            <div className="wood-sign" style={{ width: '100%' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    Sınav Kağıdını Hazırlıyorum... ✏️
                                </h2>
                            </div>
                            <div className="parchment-box" style={{ padding: '1.5rem', width: '100%' }}>
                                <p style={{ fontSize: '1.1rem', color: '#78350f', lineHeight: '1.6', margin: 0, fontWeight: '700' }}>
                                    İzci, seçtiğin senaryodaki kazanımları inceliyor ve <br />
                                    sana özel sorular hazırlıyor. Birazdan başlayacağız!
                                </p>
                            </div>
                        </div>
                    )}

                    {/* AI EXAM */}
                    {step === 'ai_exam' && (
                        aiExamQuestions && aiExamQuestions.length > 0 ? (
                            <div style={{
                                width: '100%', display: 'flex',
                                flexDirection: 'column', gap: '2rem', animation: 'fadeIn 0.6s ease-out'
                            }}>
                                {/* Themed Progress Map */}
                                <div className="parchment-box" style={{
                                    padding: '1rem', border: '3px solid #d97706', flexShrink: 0,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: '#fef3c7 url("https://www.transparenttextures.com/patterns/papyros.png")'
                                }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', maxWidth: '600px' }}>
                                        <Map size={24} color="#78350f" />
                                        <div style={{ flex: 1, height: '12px', background: '#d9770640', borderRadius: '10px', position: 'relative', overflow: 'hidden', border: '2px solid #78350f' }}>
                                            <div style={{
                                                position: 'absolute', top: 0, left: 0, height: '100%',
                                                width: `${((aiExamActiveQuestion + 1) / aiExamQuestions.length) * 100}%`,
                                                background: 'linear-gradient(90deg, #f59e0b, #d97706)',
                                                transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}></div>
                                        </div>
                                        <span style={{ fontWeight: '900', color: '#78350f', minWidth: '80px', textAlign: 'right' }}>
                                            {aiExamActiveQuestion + 1} / {aiExamQuestions.length} 🚩
                                        </span>
                                    </div>
                                </div>

                                {/* Content container - no more fixed height scroll box */}
                                <div style={{
                                    width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem'
                                }}>
                                    <div style={{ borderLeft: '6px solid #d97706', paddingLeft: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', color: '#92400e', fontWeight: '800', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            {aiExamQuestions[aiExamActiveQuestion].title}
                                        </h3>
                                        <p style={{ fontSize: '1.4rem', color: '#78350f', fontWeight: '900', margin: 0, lineHeight: 1.4 }}>
                                            {aiExamQuestions[aiExamActiveQuestion].question}
                                        </p>
                                    </div>

                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <textarea
                                            value={aiExamAnswers[aiExamActiveQuestion] || ''}
                                            onChange={(e) => {
                                                const newAnswers = { ...aiExamAnswers };
                                                newAnswers[aiExamActiveQuestion] = e.target.value;
                                                setAiExamAnswers(newAnswers);
                                            }}
                                            placeholder="Cevabını buraya yaz sevgili maceracı..."
                                            style={{
                                                flex: 1, minHeight: '150px', padding: '1.5rem',
                                                borderRadius: '16px', border: '3px solid #d9770620',
                                                background: 'rgba(255,255,255,0.5)', fontSize: '1.1rem',
                                                color: '#78350f', fontWeight: '600', resize: 'none',
                                                outline: 'none', transition: 'all 0.2s',
                                                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#d97706'}
                                            onBlur={(e) => e.target.style.borderColor = '#d9770620'}
                                        />

                                        {aiEvaluation && (
                                            <div className="animate-fade-in" style={{
                                                padding: '1.5rem', borderRadius: '16px', background: '#fff',
                                                border: '3px solid #10b981', boxShadow: '0 8px 24px rgba(16,185,129,0.1)'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                                    <div style={{ width: '40px', height: '40px', background: '#10b98120', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                                                        <Brain size={24} />
                                                    </div>
                                                    <h4 style={{ margin: 0, color: '#065f46', fontWeight: '900', fontSize: '1.1rem' }}>İzci'nin Geri Bildirimi</h4>
                                                    <div style={{ marginLeft: 'auto', background: '#10b981', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '12px', fontWeight: '900', fontSize: '1rem' }}>
                                                        Puan: {aiEvaluation.score}/10
                                                    </div>
                                                </div>
                                                <p style={{ color: '#064e3b', fontWeight: '600', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.5 }}>
                                                    "{aiEvaluation.message}"
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: 'auto' }}>
                                        <button
                                            onClick={handleAiExamEvaluate}
                                            disabled={isEvaluating || !aiExamAnswers[aiExamActiveQuestion]}
                                            className="adventure-btn"
                                            style={{ padding: '1rem 2rem', flex: 1, opacity: (!aiExamAnswers[aiExamActiveQuestion] || isEvaluating) ? 0.6 : 1 }}
                                        >
                                            {isEvaluating ? (
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                                    <div className="animate-spin" style={{ width: '20px', height: '20px', border: '3px solid white', borderTopColor: 'transparent', borderRadius: '50%' }}></div>
                                                    DEĞERLENDİRİLİYOR...
                                                </div>
                                            ) : 'CEVABIMI DEĞERLENDİR'}
                                        </button>
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <button
                                                onClick={() => setAiExamActiveQuestion(Math.max(0, aiExamActiveQuestion - 1))}
                                                disabled={aiExamActiveQuestion === 0}
                                                className="adventure-btn"
                                                style={{ padding: '1rem', background: '#94a3b8', borderBottomColor: '#64748b', opacity: aiExamActiveQuestion === 0 ? 0.3 : 1 }}
                                            >
                                                <ArrowLeft size={24} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (aiExamActiveQuestion < aiExamQuestions.length - 1) {
                                                        setAiExamActiveQuestion(aiExamActiveQuestion + 1);
                                                        setAiEvaluation(null);
                                                    } else {
                                                        setStep('exam_finish');
                                                    }
                                                }}
                                                className="adventure-btn"
                                                style={{ padding: '1rem', background: aiExamActiveQuestion === aiExamQuestions.length - 1 ? '#059669' : '#d97706' }}
                                            >
                                                {aiExamActiveQuestion === aiExamQuestions.length - 1 ? <Check size={24} /> : <ArrowRight size={24} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{
                                width: '100%', maxWidth: '600px', display: 'flex',
                                flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '3rem',
                                textAlign: 'center'
                            }}>
                                <div className="wood-sign" style={{ width: '100%', background: '#ef4444' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                        Soru Yüklenemedi! ⚠️
                                    </h2>
                                </div>
                                <div className="parchment-box" style={{ padding: '1.5rem', width: '100%' }}>
                                    <p style={{ fontSize: '1.1rem', color: '#78350f', fontWeight: '700' }}>
                                        Üzgünüm maceracı, sınav sorularını hazırlarken bir sorun çıktı. <br />
                                        Lütfen tekrar deneyelim!
                                    </p>
                                </div>
                                <button
                                    onClick={() => setStep('scenarios')}
                                    className="adventure-btn"
                                    style={{ padding: '1rem 2rem' }}
                                >
                                    GERİ DÖN
                                </button>
                            </div>
                        )
                    )}

                    {/* EXERCISES */}
                    {step === 'exercises' && selectedUnit && activeSection && exercises[selectedUnit] && exercises[selectedUnit][activeSection] && (
                        <div style={{
                            width: '100%', height: '100%', display: 'flex',
                            flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(0.5deg)', flexShrink: 0 }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', margin: '0 0 0.5rem 0' }}>
                                    İzci ile Çalış 🎓
                                </h2>
                                <p style={{ fontSize: '1rem', color: '#eab308', margin: 0, fontWeight: '700' }}>
                                    {exercises[selectedUnit][activeSection].title}
                                </p>
                            </div>

                            {/* Progress */}
                            <div style={{
                                display: 'flex', gap: '0.5rem', padding: '1rem',
                                background: 'rgba(120, 53, 15, 0.1)', borderRadius: '16px',
                                border: '2px solid #78350f', flexShrink: 0
                            }}>
                                {exercises[selectedUnit][activeSection].questions.map((_, idx) => (
                                    <div key={idx} style={{
                                        flex: 1, height: '12px', borderRadius: '6px',
                                        background: idx <= currentExercise ? '#d97706' : 'white',
                                        border: '2px solid #78350f',
                                        transition: 'all 0.3s ease'
                                    }}></div>
                                ))}
                            </div>

                            {/* Current Question */}
                            <div className="parchment-scroll custom-scrollbar" style={{
                                flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column'
                            }}>
                                {(() => {
                                    const q = exercises[selectedUnit][activeSection].questions[currentExercise];
                                    return (
                                        <div>
                                            <div style={{
                                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                                marginBottom: '1rem'
                                            }}>
                                                <div style={{
                                                    width: '32px', height: '32px', borderRadius: '8px',
                                                    background: '#8b5cf620', display: 'flex',
                                                    alignItems: 'center', justifyContent: 'center',
                                                    color: '#8b5cf6', fontWeight: '800'
                                                }}>
                                                    {currentExercise + 1}
                                                </div>
                                                <h3 style={{
                                                    fontSize: '1.125rem', fontWeight: '700',
                                                    color: '#1e293b', margin: 0
                                                }}>{q.title}</h3>
                                            </div>

                                            {q.instruction && (
                                                <p style={{
                                                    fontSize: '0.95rem', color: '#475569',
                                                    marginBottom: '1rem', fontStyle: 'italic'
                                                }}>{q.instruction}</p>
                                            )}

                                            {q.quote && (
                                                <div style={{
                                                    background: '#8b5cf610', border: '2px solid #8b5cf6',
                                                    borderRadius: '8px', padding: '1rem',
                                                    marginBottom: '1rem', fontStyle: 'italic',
                                                    color: '#1e293b'
                                                }}>
                                                    "{q.quote}"
                                                </div>
                                            )}

                                            {/* TABLE TYPE */}
                                            {q.type === 'table' && q.headers && q.rows && (
                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <table style={{
                                                        width: '100%', borderCollapse: 'collapse',
                                                        border: '2px solid #8b5cf6'
                                                    }}>
                                                        <thead>
                                                            <tr>
                                                                {q.headers.map((header, idx) => (
                                                                    <th key={idx} style={{
                                                                        padding: '0.75rem', background: '#8b5cf620',
                                                                        border: '1px solid #8b5cf6',
                                                                        fontWeight: '700', fontSize: '0.9rem',
                                                                        color: '#8b5cf6'
                                                                    }}>{header}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {q.rows.map((row, rowIdx) => (
                                                                <tr key={rowIdx}>
                                                                    <td style={{
                                                                        padding: '0.75rem',
                                                                        border: '1px solid #e5e7eb',
                                                                        fontWeight: '600', color: '#1e293b'
                                                                    }}>{row.label}</td>
                                                                    {Array.from({ length: row.inputs }).map((_, inputIdx) => (
                                                                        <td key={inputIdx} style={{
                                                                            padding: '0.5rem',
                                                                            border: '1px solid #e5e7eb'
                                                                        }}>
                                                                            {q.subType === 'checkbox' ? (
                                                                                <div
                                                                                    onClick={() => {
                                                                                        const key = `q${q.id}_r${rowIdx}_i${inputIdx}`;
                                                                                        setExerciseAnswers({
                                                                                            ...exerciseAnswers,
                                                                                            [key]: exerciseAnswers[key] === '✔' ? '' : '✔'
                                                                                        });
                                                                                    }}
                                                                                    style={{
                                                                                        width: '100%',
                                                                                        height: '32px',
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        justifyContent: 'center',
                                                                                        cursor: 'pointer',
                                                                                        borderRadius: '6px',
                                                                                        background: exerciseAnswers[`q${q.id}_r${rowIdx}_i${inputIdx}`] === '✔' ? '#8b5cf615' : 'transparent',
                                                                                        border: `2px solid ${exerciseAnswers[`q${q.id}_r${rowIdx}_i${inputIdx}`] === '✔' ? '#8b5cf6' : '#e2e8f0'}`,
                                                                                        transition: 'all 0.2s ease'
                                                                                    }}
                                                                                >
                                                                                    {exerciseAnswers[`q${q.id}_r${rowIdx}_i${inputIdx}`] === '✔' ? (
                                                                                        <Check size={18} color="#8b5cf6" strokeWidth={3} />
                                                                                    ) : (
                                                                                        <Square size={18} color="#e2e8f0" />
                                                                                    )}
                                                                                </div>
                                                                            ) : (
                                                                                <input
                                                                                    type="text"
                                                                                    placeholder="..."
                                                                                    value={exerciseAnswers[`q${q.id}_r${rowIdx}_i${inputIdx}`] || ''}
                                                                                    onChange={(e) => setExerciseAnswers({
                                                                                        ...exerciseAnswers,
                                                                                        [`q${q.id}_r${rowIdx}_i${inputIdx}`]: e.target.value
                                                                                    })}
                                                                                    style={{
                                                                                        width: '100%', padding: '0.5rem',
                                                                                        fontSize: '0.85rem',
                                                                                        border: '1px solid #e5e7eb',
                                                                                        borderRadius: '4px', outline: 'none'
                                                                                    }}
                                                                                    onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                                                                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                                                                />
                                                                            )}
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

                                            {/* CATEGORIZE TYPE */}
                                            {q.type === 'categorize' && q.categories && (
                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    {q.categories.map((category, catIdx) => (
                                                        <div key={catIdx} style={{
                                                            marginBottom: '1.5rem', padding: '1rem',
                                                            background: '#f8fafc', borderRadius: '8px',
                                                            border: '2px solid #8b5cf630'
                                                        }}>
                                                            <h4 style={{
                                                                fontSize: '1rem', fontWeight: '700',
                                                                color: '#8b5cf6', margin: '0 0 1rem 0'
                                                            }}>{category.title || category}</h4>
                                                            {category.subcategories ? (
                                                                category.subcategories.map((sub, subIdx) => (
                                                                    <div key={subIdx} style={{ marginBottom: '1rem' }}>
                                                                        <label style={{
                                                                            fontSize: '0.9rem', fontWeight: '600',
                                                                            color: '#1e293b', display: 'block',
                                                                            marginBottom: '0.5rem'
                                                                        }}>{sub.label}</label>
                                                                        <textarea
                                                                            rows={sub.lines || 2}
                                                                            placeholder="Cevabınızı buraya yazın..."
                                                                            value={exerciseAnswers[`q${q.id}_c${catIdx}_s${subIdx}`] || ''}
                                                                            onChange={(e) => setExerciseAnswers({
                                                                                ...exerciseAnswers,
                                                                                [`q${q.id}_c${catIdx}_s${subIdx}`]: e.target.value
                                                                            })}
                                                                            style={{
                                                                                width: '100%', padding: '0.75rem',
                                                                                fontSize: '0.9rem', border: '2px solid #e5e7eb',
                                                                                borderRadius: '8px', outline: 'none',
                                                                                fontFamily: 'inherit', resize: 'vertical'
                                                                            }}
                                                                            onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                                                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                                                        />
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <textarea
                                                                    rows={3}
                                                                    placeholder="Cevabınızı buraya yazın..."
                                                                    value={exerciseAnswers[`q${q.id}_c${catIdx}`] || ''}
                                                                    onChange={(e) => setExerciseAnswers({
                                                                        ...exerciseAnswers,
                                                                        [`q${q.id}_c${catIdx}`]: e.target.value
                                                                    })}
                                                                    style={{
                                                                        width: '100%', padding: '0.75rem',
                                                                        fontSize: '0.9rem', border: '2px solid #e5e7eb',
                                                                        borderRadius: '8px', outline: 'none',
                                                                        fontFamily: 'inherit', resize: 'vertical'
                                                                    }}
                                                                    onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                                                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* OPEN TYPE (parts or single) */}
                                            {(q.type === 'open' || q.type === 'interpretation') && (
                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    {q.parts ? (
                                                        q.parts.map((part, idx) => (
                                                            <div key={idx} style={{ marginBottom: '1.5rem' }}>
                                                                <label style={{
                                                                    fontSize: '0.9rem', fontWeight: '600',
                                                                    color: '#1e293b', display: 'block',
                                                                    marginBottom: '0.5rem'
                                                                }}>{part.label}</label>
                                                                <textarea
                                                                    rows={part.lines || 2}
                                                                    placeholder="Cevabınızı buraya yazın..."
                                                                    value={exerciseAnswers[`q${q.id}_p${idx}`] || ''}
                                                                    onChange={(e) => setExerciseAnswers({
                                                                        ...exerciseAnswers,
                                                                        [`q${q.id}_p${idx}`]: e.target.value
                                                                    })}
                                                                    style={{
                                                                        width: '100%', padding: '0.75rem',
                                                                        fontSize: '0.9rem', border: '2px solid #e5e7eb',
                                                                        borderRadius: '8px', outline: 'none',
                                                                        fontFamily: 'inherit', resize: 'vertical'
                                                                    }}
                                                                    onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                                                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                                                />
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <textarea
                                                            rows={4}
                                                            placeholder="Cevabınızı buraya yazın..."
                                                            value={exerciseAnswers[`q${q.id}`] || ''}
                                                            onChange={(e) => setExerciseAnswers({
                                                                ...exerciseAnswers,
                                                                [`q${q.id}`]: e.target.value
                                                            })}
                                                            style={{
                                                                width: '100%', padding: '0.75rem',
                                                                fontSize: '0.9rem', border: '2px solid #e5e7eb',
                                                                borderRadius: '8px', outline: 'none',
                                                                fontFamily: 'inherit', resize: 'vertical'
                                                            }}
                                                            onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                                                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                                        />
                                                    )}
                                                </div>
                                            )}

                                            {/* Buttons Container */}
                                            <div style={{
                                                display: 'flex', gap: '0.75rem',
                                                marginTop: '1.5rem', flexWrap: 'wrap',
                                                background: '#f8fafc', padding: '1rem',
                                                borderRadius: '12px'
                                            }}>
                                                <button
                                                    onClick={async () => {
                                                        setIsEvaluating(true);
                                                        setAiEvaluation(null);

                                                        try {
                                                            // Collect all answers for this question
                                                            const allAnswers = Object.entries(exerciseAnswers)
                                                                .filter(([key]) => key.startsWith(`q${q.id}`))
                                                                .map(([_, value]) => value)
                                                                .filter(v => v && v.trim())
                                                                .join('\n');

                                                            if (!allAnswers.trim()) {
                                                                setAiEvaluation({ error: true, message: 'Lütfen önce cevaplarını yaz!' });
                                                                setIsEvaluating(false);
                                                                return;
                                                            }

                                                            // Get rubric from answer key if available
                                                            const rubric = q.answer ? JSON.stringify(q.answer.content) : "Öğrencinin cevabını konuya uygunluk, doğruluk ve dil bilgisi açısından değerlendir.";

                                                            const result = await evaluateEssayAnswer(
                                                                q.title + '\n' + (q.instruction || ''),
                                                                allAnswers,
                                                                rubric
                                                            );

                                                            setAiEvaluation(result);
                                                        } catch (error) {
                                                            console.error('Evaluation error:', error);
                                                            setAiEvaluation({
                                                                error: true,
                                                                message: 'Değerlendirme yapılırken bir hata oluştu: ' + error.message
                                                            });
                                                        } finally {
                                                            setIsEvaluating(false);
                                                        }
                                                    }}
                                                    disabled={isEvaluating}
                                                    style={{
                                                        flex: 1, minWidth: '200px', padding: '0.875rem 1.5rem',
                                                        fontSize: '0.9rem', fontWeight: '800', color: 'white',
                                                        background: isEvaluating ? '#94a3b8' : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                                        border: 'none', borderRadius: '10px',
                                                        cursor: isEvaluating ? 'wait' : 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)'
                                                    }}
                                                >
                                                    {isEvaluating ? '🤖 İzci değerlendiriyor...' : '🤖 İzci ile Değerlendir'}
                                                </button>

                                                {q.answer && (
                                                    <button
                                                        onClick={() => setShowAnswers(!showAnswers)}
                                                        style={{
                                                            flex: 1, minWidth: '200px', padding: '0.875rem 1.5rem',
                                                            fontSize: '0.9rem', fontWeight: '800', color: 'white',
                                                            background: showAnswers ? '#10b981' : '#f59e0b',
                                                            border: 'none', borderRadius: '10px',
                                                            cursor: 'pointer', transition: 'all 0.3s ease',
                                                            boxShadow: showAnswers ? '0 4px 12px rgba(16, 185, 129, 0.2)' : '0 4px 12px rgba(245, 158, 11, 0.2)'
                                                        }}
                                                    >
                                                        {showAnswers ? '✓ Cevap Anahtarı Gizle' : '👁️ Cevap Anahtarını Gör'}
                                                    </button>
                                                )}
                                            </div>

                                            {/* AI Evaluation Result */}
                                            {aiEvaluation && !aiEvaluation.error && (
                                                <div style={{
                                                    marginTop: '1.5rem', padding: '1.5rem',
                                                    background: 'linear-gradient(135deg, #667eea10 0%, #764ba210 100%)',
                                                    border: '2px solid #667eea',
                                                    borderRadius: '12px'
                                                }}>
                                                    <div style={{
                                                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                                                        marginBottom: '1rem'
                                                    }}>
                                                        <div style={{
                                                            width: '40px', height: '40px', borderRadius: '50%',
                                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            fontSize: '1.25rem'
                                                        }}>🤖</div>
                                                        <div style={{ flex: 1 }}>
                                                            <h4 style={{
                                                                fontSize: '1.1rem', fontWeight: '800',
                                                                color: '#667eea', margin: 0
                                                            }}>İzci'nin Değerlendirmesi</h4>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                <p style={{
                                                                    fontSize: '1.25rem', fontWeight: '900',
                                                                    color: '#764ba2', margin: 0
                                                                }}>Puan: {aiEvaluation.score}</p>
                                                                {(() => {
                                                                    const scoreNum = parseInt(aiEvaluation.score);
                                                                    if (scoreNum === 10) return <span style={{ fontSize: '1.5rem' }}>🥇</span>;
                                                                    if (scoreNum === 9) return <span style={{ fontSize: '1.5rem' }}>⭐</span>;
                                                                    if (scoreNum === 8) return <span style={{ fontSize: '1.5rem' }}>🌟</span>;
                                                                    if (scoreNum === 7) return <span style={{ fontSize: '1.5rem' }}>✨</span>;
                                                                    if (scoreNum === 6) return <span style={{ fontSize: '1.5rem' }}>👍</span>;
                                                                    if (scoreNum >= 1) return <span style={{ fontSize: '1.5rem' }}>💪</span>;
                                                                    return null;
                                                                })()}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Badge Explanation */}
                                                    <div style={{
                                                        padding: '0.75rem', background: '#f8fafc',
                                                        borderRadius: '8px', fontSize: '0.75rem',
                                                        color: '#64748b', marginBottom: '1rem',
                                                        display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <span>🥇 10/10 Mükemmel</span>
                                                        <span>⭐ 9/10 Harika</span>
                                                        <span>🌟 8/10 Çok İyi</span>
                                                        <span>✨ 7/10 İyi</span>
                                                        <span>👍 6/10 Güzel</span>
                                                        <span>💪 5/10↓ Devam Et</span>
                                                    </div>

                                                    {aiEvaluation.strengths && aiEvaluation.strengths.length > 0 && (
                                                        <div style={{ marginBottom: '1rem' }}>
                                                            <h5 style={{
                                                                fontSize: '0.95rem', fontWeight: '700',
                                                                color: '#10b981', margin: '0 0 0.5rem 0'
                                                            }}>✅ Güçlü Yönler:</h5>
                                                            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#1e293b' }}>
                                                                {aiEvaluation.strengths.map((item, i) => (
                                                                    <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {aiEvaluation.improvements && aiEvaluation.improvements.length > 0 && (
                                                        <div style={{ marginBottom: '1rem' }}>
                                                            <h5 style={{
                                                                fontSize: '0.95rem', fontWeight: '700',
                                                                color: '#f59e0b', margin: '0 0 0.5rem 0'
                                                            }}>📈 Geliştirilebilecek Yönler:</h5>
                                                            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#1e293b' }}>
                                                                {aiEvaluation.improvements.map((item, i) => (
                                                                    <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {aiEvaluation.suggestions && aiEvaluation.suggestions.length > 0 && (
                                                        <div style={{ marginBottom: '1rem' }}>
                                                            <h5 style={{
                                                                fontSize: '0.95rem', fontWeight: '700',
                                                                color: '#3b82f6', margin: '0 0 0.5rem 0'
                                                            }}>💡 Öneriler:</h5>
                                                            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#1e293b' }}>
                                                                {aiEvaluation.suggestions.map((item, i) => (
                                                                    <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {aiEvaluation.message && (
                                                        <div style={{
                                                            padding: '1rem', background: '#fef3c7',
                                                            border: '2px solid #f59e0b', borderRadius: '8px',
                                                            fontSize: '0.95rem', fontWeight: '600',
                                                            color: '#92400e', fontStyle: 'italic'
                                                        }}>
                                                            💬 {aiEvaluation.message}
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {aiEvaluation && aiEvaluation.error && (
                                                <div style={{
                                                    marginTop: '1.5rem', padding: '1rem',
                                                    background: '#fee2e2', border: '2px solid #ef4444',
                                                    borderRadius: '8px', color: '#991b1b'
                                                }}>
                                                    ⚠️ {aiEvaluation.message}
                                                </div>
                                            )}

                                            {/* Answer Key */}
                                            {showAnswers && q.answer && (
                                                <div style={{
                                                    marginTop: '1.5rem', padding: '1.5rem',
                                                    background: '#ecfdf5', border: '2px solid #10b981',
                                                    borderRadius: '12px', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.1)'
                                                }}>
                                                    <h4 style={{
                                                        fontSize: '1rem', fontWeight: '700',
                                                        color: '#10b981', margin: '0 0 0.75rem 0'
                                                    }}>📝 Örnek Cevap:</h4>
                                                    <div style={{
                                                        fontSize: '0.9rem', color: '#1e293b',
                                                        lineHeight: '1.6'
                                                    }}>
                                                        {typeof q.answer.content === 'string' ? (
                                                            <p>{q.answer.content}</p>
                                                        ) : Array.isArray(q.answer.content) ? (
                                                            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                                                                {q.answer.content.map((item, i) => (
                                                                    <li key={i}>{Array.isArray(item) ? item.join(' → ') : item}</li>
                                                                ))}
                                                            </ul>
                                                        ) : typeof q.answer.content === 'object' ? (
                                                            <div>
                                                                {Object.entries(q.answer.content).map(([key, value]) => (
                                                                    <div key={key} style={{ marginBottom: '0.75rem' }}>
                                                                        <strong style={{ color: '#10b981' }}>{key}:</strong>
                                                                        {Array.isArray(value) ? (
                                                                            <ul style={{ margin: '0.25rem 0 0 0', paddingLeft: '1.5rem' }}>
                                                                                {value.map((item, i) => (
                                                                                    <li key={i}>{typeof item === 'object' ? JSON.stringify(item) : item}</li>
                                                                                ))}
                                                                            </ul>
                                                                        ) : (
                                                                            <span> {typeof value === 'object' ? JSON.stringify(value) : value}</span>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <pre style={{
                                                                whiteSpace: 'pre-wrap',
                                                                fontFamily: 'inherit'
                                                            }}>{JSON.stringify(q.answer.content, null, 2)}</pre>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })()}
                            </div>

                            {/* Navigation */}
                            <div style={{
                                display: 'flex', gap: '1rem', padding: '1rem',
                                background: '#f8fafc', borderRadius: '12px'
                            }}>
                                <button
                                    onClick={() => {
                                        if (currentExercise > 0) {
                                            setCurrentExercise(currentExercise - 1);
                                            setShowAnswers(false);
                                            setAiEvaluation(null);
                                        }
                                    }}
                                    disabled={currentExercise === 0}
                                    style={{
                                        flex: 1, padding: '0.875rem', borderRadius: '8px',
                                        background: currentExercise === 0 ? '#e5e7eb' : 'white',
                                        border: '2px solid #e5e7eb', color: '#64748b',
                                        fontWeight: '700', fontSize: '0.875rem',
                                        cursor: currentExercise === 0 ? 'not-allowed' : 'pointer',
                                        opacity: currentExercise === 0 ? 0.5 : 1
                                    }}
                                >
                                    ← Önceki Soru
                                </button>
                                <button
                                    onClick={() => {
                                        const totalQuestions = exercises[selectedUnit][activeSection].questions.length;
                                        if (currentExercise < totalQuestions - 1) {
                                            setCurrentExercise(currentExercise + 1);
                                            setShowAnswers(false);
                                            setAiEvaluation(null);
                                        }
                                    }}
                                    disabled={currentExercise === exercises[selectedUnit][activeSection].questions.length - 1}
                                    style={{
                                        flex: 1, padding: '0.875rem', borderRadius: '8px',
                                        background: currentExercise === exercises[selectedUnit][activeSection].questions.length - 1 ? '#e5e7eb' : '#8b5cf6',
                                        border: 'none', color: 'white',
                                        fontWeight: '700', fontSize: '0.875rem',
                                        cursor: currentExercise === exercises[selectedUnit][activeSection].questions.length - 1 ? 'not-allowed' : 'pointer',
                                        opacity: currentExercise === exercises[selectedUnit][activeSection].questions.length - 1 ? 0.5 : 1
                                    }}
                                >
                                    Sonraki Soru →
                                </button>
                            </div>
                        </div>
                    )
                    }

                    {/* INVENTORY (ÇANTA) */}
                    {step === 'inventory' && (
                        <div style={{
                            width: '100%', maxWidth: '900px', display: 'flex',
                            flexDirection: 'column', gap: '3rem', animation: 'fadeIn 0.6s ease-out'
                        }}>
                            <div className="wood-sign" style={{ textAlign: 'center', transform: 'rotate(-1deg)' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'white', margin: 0 }}>
                                    Maceracı Çantam 🎒
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#eab308', margin: '0.5rem 0 0 0', fontWeight: '700' }}>
                                    Yolculuğunda topladığın kadim eserler...
                                </p>
                            </div>

                            {inventory.length === 0 ? (
                                <div className="parchment-box" style={{ padding: '3rem', textAlign: 'center' }}>
                                    <IzciRobot mood="thinking" />
                                    <p style={{ fontSize: '1.2rem', color: '#78350f', fontWeight: '700', marginTop: '1.5rem' }}>
                                        Henüz hiç eser toplamamışsın maceracı! <br />
                                        Üniteleri tamamlayarak veya sınavlarda başarı göstererek sepetini doldurabilirsin.
                                    </p>
                                </div>
                            ) : (
                                <div style={{
                                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '2rem'
                                }}>
                                    {inventory.map((item, idx) => (
                                        <div key={idx} className="parchment-box" style={{
                                            padding: '1.5rem', display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', gap: '1rem', border: '3px solid #d97706'
                                        }}>
                                            <div style={{ width: '80px', height: '80px' }}>
                                                <img src={item.icon} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                            </div>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: '#78350f', margin: 0 }}>{item.title}</h3>
                                            <p style={{ fontSize: '0.8rem', color: '#92400e', textAlign: 'center', margin: 0 }}>{item.date}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <button onClick={() => { playClick(); setStep('choice'); }} className="adventure-btn" style={{ padding: '1rem', width: '200px', alignSelf: 'center' }}>
                                ← ANA MENÜYE DÖN
                            </button>
                        </div>
                    )}

                    {/* COMING SOON - Placeholder for other features */}
                    {step === 'coming_soon' && (
                        <div style={{
                            width: '100%', maxWidth: '800px', padding: '1rem',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem'
                        }}>
                            <div className="parchment-box" style={{ padding: '3rem', textAlign: 'center' }}>
                                <IzciRobot mood="excited" />
                                <h2 style={{ fontSize: '2rem', fontWeight: '950', color: '#78350f', marginTop: '1rem' }}>Çok Yakında! 🚀</h2>
                                <p style={{ fontSize: '1.2rem', fontWeight: '800', color: '#92400e' }}>Bu bölüm üzerinde çalışıyoruz...</p>
                                <button onClick={() => { playClick(); setStep('choice'); }} className="adventure-btn" style={{ marginTop: '2rem' }}>GERİ DÖN</button>
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    {step !== 'welcome' && (
                        <div style={{
                            position: 'fixed', bottom: 0, left: 0, right: 0,
                            background: '#78350f', borderTop: '4px solid #451a03',
                            padding: '1rem 2rem', display: 'flex', gap: '1.5rem',
                            boxShadow: '0 -10px 30px rgba(0,0,0,0.3)',
                            zIndex: 100,
                            animation: 'slideUp 0.5s ease-out'
                        }}>
                            <div style={{
                                maxWidth: '1000px', width: '100%', margin: '0 auto',
                                display: 'flex', gap: '1.5rem'
                            }}>
                                <button
                                    onClick={() => {
                                        playClick();
                                        if (step === 'exercises') setStep('choice');
                                        else if (step === 'unit_content') setStep('units');
                                        else if (step === 'units') setStep('choice');
                                        else if (step === 'exam_terms') setStep('choice');
                                        else if (step === 'scenarios') setStep('exam_terms');
                                        else if (step === 'coming_soon') setStep('choice');
                                        else if (step === 'inventory') setStep('choice');
                                        else if (step === 'choice') setStep('grade');
                                        else if (step === 'grade') setStep('welcome');
                                    }}
                                    className="wood-sign animate-wobble-hover"
                                    style={{
                                        flex: 1, padding: '0.75rem', cursor: 'pointer',
                                        background: '#94a3b8', border: '3px solid #64748b',
                                        color: 'white', fontSize: '1rem', fontWeight: '800',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        gap: '0.75rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    <ArrowLeft size={22} /> GERİ
                                </button>

                                <button
                                    onClick={() => { playClick(); setStep('inventory'); }}
                                    className="wood-sign animate-wobble-hover"
                                    style={{
                                        flex: 1, padding: '0.75rem', cursor: 'pointer',
                                        background: '#eab308', border: '3px solid #d97706',
                                        color: 'white', fontSize: '1rem', fontWeight: '800',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        gap: '0.75rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    🎒 ÇANTAM
                                </button>

                                <button
                                    onClick={() => { playClick(); setStep('choice'); }}
                                    className="wood-sign animate-wobble-hover"
                                    style={{
                                        flex: 1, padding: '0.75rem', cursor: 'pointer',
                                        background: '#10b981', border: '3px solid #059669',
                                        color: 'white', fontSize: '1rem', fontWeight: '800',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        gap: '0.75rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    🏠 ANA MENÜ
                                </button>

                                <button
                                    onClick={resetApp}
                                    className="wood-sign animate-wobble-hover"
                                    style={{
                                        flex: 1, padding: '0.75rem', cursor: 'pointer',
                                        background: '#ef4444', border: '3px solid #991b1b',
                                        color: 'white', fontWeight: '900', fontSize: '1.1rem',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        gap: '0.75rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    <RefreshCcw size={22} /> BAŞA DÖN
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}



