import re
import sys

def check_jsx_balance(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # Very simplified JSX tag balancer
    # This won't handle every case but should find basic imbalances
    # Match tags like <div> or <div ...> or </div>
    tags = re.findall(r'<(/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>', content)
    
    stack = []
    unbalanced = []
    
    for is_closing, tagname in tags:
        # Ignore self-closing tags if they end with />
        # Wait, re.findall above doesn't perfectly catch self-closing.
        pass

    # Better: find all <tag ...> and check if they are self-closing
    all_tags = re.findall(r'<(/?[a-zA-Z][a-zA-Z0-9]*)\b([^>]*?)(/?)>', content)
    
    for tag, attrs, self_closing in all_tags:
        if self_closing == '/':
            continue
        if tag.startswith('/'):
            tagname = tag[1:]
            if not stack:
                unbalanced.append(f"Unexpected closing tag: </{tagname}>")
            else:
                top = stack.pop()
                if top != tagname:
                    unbalanced.append(f"Mismatched closing tag: expected </{top}>, found </{tagname}>")
        else:
            stack.append(tag)
            
    if stack:
        unbalanced.append(f"Unclosed tags: {', '.join(stack)}")
        
    # Check braces {}
    open_braces = content.count('{')
    close_braces = content.count('}')
    if open_braces != close_braces:
        unbalanced.append(f"Imbalanced braces: {{ occurs {open_braces} times, }} occurs {close_braces} times")

    # Check parentheses ()
    open_parens = content.count('(')
    close_parens = content.count(')')
    if open_parens != close_parens:
        unbalanced.append(f"Imbalanced parentheses: ( occurs {open_parens} times, ) occurs {close_parens} times")

    if not unbalanced:
        print("JSX structure looks balanced (at a basic level).")
    else:
        for error in unbalanced:
            print(error)

if __name__ == "__main__":
    check_jsx_balance(sys.argv[1])
