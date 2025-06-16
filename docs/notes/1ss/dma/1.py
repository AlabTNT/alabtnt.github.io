import os

output_lines = []

for filename in os.listdir('.'):
    if filename.startswith('Chapter'):
        # 去除前缀 "Chapter"
        no_prefix = filename[len('Chapter'):]
        
        # 去除后缀（如果是 .pdf 或其他）
        name_without_ext = os.path.splitext(no_prefix)[0]
        
        # 以 "-2025" 分割，取第一部分
        parts = name_without_ext.split('-2025')
        a = parts[0]
        
        # 构造输出行
        line = f"[{a}](../dma/{filename})\n"
        output_lines.append(line)

# 保存到文件
with open('output.txt', 'w', encoding='utf-8') as f:
    f.writelines(output_lines)
