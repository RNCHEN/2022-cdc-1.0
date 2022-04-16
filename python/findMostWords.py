# -*- coding:utf-8 -*-
import jieba

content = open('data.txt', 'r', encoding='utf-8').read()
words = jieba.lcut(content)
# print('words' , words)
counts = {}

for word in words:
    if len(word) == 1:  # 排除单个字的分词结果
        continue
    else:
        counts[word] = counts.get(word, 0) + 1  # dict用法

hist = list(counts.items())  # 形成列表
hist.sort(key=lambda x: x[1], reverse=True)

for i in range(100):  # 输出高频词
    word, count = hist[i]
    print("{:<10}{:>5}".format(word, count))