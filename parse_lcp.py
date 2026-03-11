import json

try:
    with open('lh-report.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    lcp_element = data.get('audits', {}).get('largest-contentful-paint-element', {})
    print("--- LCP METRIC ---")
    lcp_val = data.get('audits', {}).get('largest-contentful-paint', {}).get('displayValue', 'Unknown')
    print(f"Time: {lcp_val}")
    print("--- LCP ELEMENT SNIPPET ---")
    
    found = False
    if 'details' in lcp_element and 'items' in lcp_element['details']:
        items = lcp_element['details']['items']
        if items and len(items) > 0 and 'node' in items[0] and 'snippet' in items[0]['node']:
            print(items[0]['node']['snippet'])
            found = True
            
    if not found:
        print("Explicit snippet not found. Dumping raw lcp_element:")
        print(json.dumps(lcp_element, indent=2)[:500] + "... (truncated)")
        
except Exception as e:
    print(f"Error parsing JSON: {e}")
