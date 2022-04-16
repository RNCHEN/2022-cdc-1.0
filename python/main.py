
print('hello')

import requests        #导入requests包
from bs4 import BeautifulSoup

url='https://www.gov.cn/'
#上海
# https://search.sh.gov.cn/searchResult
# 北京
# http://www.beijing.gov.cn/so/s?tab=all&siteCode=1100000088&qt=%E5%8D%81%E5%9B%9B%E4%BA%94
# http://sousuo.gov.cn/s.htm?q=%E5%8D%81%E5%9B%9B%E4%BA%94&t=paper # 中央人民政府
# https://www.sc.gov.cn/so4/s?searchWord=%25E5%258D%2581%25E5%259B%259B%25E4%25BA%2594&column=%25E6%2594%25BF%25E5%25BA%259C%25E6%2596%2587%25E4%25BB%25B6&wordPlace=1&orderBy=0&startTime=&endTime=&pageSize=10&pageNum=0&timeStamp=0&siteCode=5100000062&siteCodes=&checkHandle=1&strFileType=%25E5%2585%25A8%25E9%2583%25A8%25E6%25A0%25BC%25E5%25BC%258F&secondSearchWords=&sonSiteCode=&areaSearchFlag=1&countKey=0&left_right_index=0   # 四川人民政府
# url='https://api.so-gov.cn/interest/interest'# 云南的post
# 浙江的
# http://search.zj.gov.cn/jsearchfront/interfaces/cateSearch.do
# 403 forbid
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
}
#浙江省的
dataZJ = {
'websiteid': '330000000000000',
'pg': '10',
'p': '4',# ONLY MODIFY THE P
'tpl': '1569',
'cateid': '372',
'word': '十四五',
'checkError': '1',
'isContains': '1',
'q': '十四五',
'sortType': '1',

}

#北京的 不知道为啥是个空
dataBJ = {
 'siteCode': '1100000088',
 'tab': 'all',

 'page': '1',
 'pageSize': '20',
 'qt': '十四五',

 'sort': 'relevance',
 'keyPlace': '0',
 'fileType': '',
}

#上海的
dataSH = {
'text': '十四五',
'pageNo': '1',
'newsPageNo': '1',
'pageSize': '20',

'category7':' www.shanghai.gov.cn',

'stealthy': '0',
'searchText': '十四五',
}

strhtml = requests.get(url,headers=headers)# get请求
# strhtml = requests.post(url,headers=headers,data=dataSH)# post请求

strhtml.encoding = "utf-8"
soup = BeautifulSoup(strhtml.text, 'lxml')
# print ('soup.prettify()',soup.prettify());
# print("soup",type(soup))

# data = soup.select('.summaryFont') # 四川省人民政府网站
# data = soup.select('.a') # 中央人民政府
# data = soup.select('.br') # 河南的html结构太扯
# data = soup.findAll('a') # 浙江 上海
data = soup
# print('here is the data ',data)
print('type of data',type(data))

txt = [];
for i in data :
    txt.append(i.get_text())

f = open('data.txt','w',encoding="utf-8")
for i in txt:
    print(str(i), file=f)
f.close()

