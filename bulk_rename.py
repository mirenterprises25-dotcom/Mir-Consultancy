import os
import glob

directory = r"c:\Users\mirab\Desktop\Consultancy Business Plan\Projects\Mir_Consulting"
extensions = ["*.md", "*.py", "*.json", "*.tsx", "*.ts"]

replace_pairs = [
    ("MIR Consulting", "MIR Consulting"),
    ("MIR Consulting", "MIR Consulting"),
    ("Mir_Consulting", "Mir_Consulting"), # This one is just for text references
    ("mir_consulting.db", "mir_consulting.db"),
    ("mir_consulting", "mir_consulting")
]

for ext in extensions:
    for path in glob.glob(os.path.join(directory, "**", ext), recursive=True):
        if "node_modules" in path or "venv" in path or ".git" in path:
            continue
        try:
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content
            for old, new in replace_pairs:
                new_content = new_content.replace(old, new)
            
            if new_content != content:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {path}")
        except Exception as e:
            pass
