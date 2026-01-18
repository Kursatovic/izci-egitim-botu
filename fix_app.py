import os

file_path = r'c:\Users\kursa\Desktop\Yapay Zeka\İzci\src\App.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Baslangici duzelt
start_target = '    return (\n        <div\n            className="nature-bg"'
# Since I don't know the exact broken part, I will find the return ( and the first div
start_index = content.find('    return (')
end_main_container_index = content.find('            {/* Header (Only shown after welcome as a floating sign) */ }')

if start_index != -1 and end_main_container_index != -1:
    new_start_block = """    return (
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
                <div style={{ position: 'absolute', top: '10%', left: '10%', opacity: 0.6 }} className="animate-float">
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
            </div>

            {/* Main Content Container (Floating over nature) */}
            <div style={{
                position: 'relative', zIndex: 10, width: '100%', maxWidth: '1000px',
                margin: '0 auto',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '2rem'
            }}>
"""
    content = content[:start_index] + new_start_block + content[end_main_container_index:]

# Sonunu duzelt
footer_target_index = content.find('                {/* Footer */}')
if footer_target_index == -1:
    footer_target_index = content.find('{/* Footer */ }')

if footer_target_index != -1:
    new_footer_block = """                {/* Footer */}
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
                                    if (step === 'exercises') setStep('choice');
                                    else if (step === 'unit_content') setStep('units');
                                    else if (step === 'units') setStep('choice');
                                    else if (step === 'exam_terms') setStep('choice');
                                    else if (step === 'scenarios') setStep('exam_terms');
                                    else if (step === 'coming_soon') setStep('choice');
                                    else if (step === 'choice') setStep('grade');
                                    else if (step === 'grade') setStep('welcome');
                                }}
                                className="wood-sign animate-wobble-hover"
                                style={{
                                    flex: 1, padding: '0.75rem', cursor: 'pointer',
                                    background: '#94a3b8', border: '3px solid #64748b',
                                    color: 'white', fontWeight: '900', fontSize: '1.1rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    gap: '0.75rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                }}
                            >
                                <ArrowLeft size={22} /> GERİ
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
    );
}
"""
    content = content[:footer_target_index] + new_footer_block

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Repair completed successfully.")
