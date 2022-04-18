cwg

工作日志

# 328

使用如下模板

![image-20220328192429204](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220328192429204.png)

这里放置进度条

![image-20220328195024006](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220328195024006.png)

进度条应该是直接点击节点

## Tuesday 329

queryselector和getelementbyid区别

https://www.cnblogs.com/leaf930814/p/6660305.html

![image-20220329103106930](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220329103106930.png)

![image-20220329104022838](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220329104022838.png)

![image-20220329130217593](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220329130217593.png)

![image-20220329131518507](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220329131518507.png)

![image-20220329135413144](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220329135413144.png)

![image-20220329140114963](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220329140114963.png)



## Wednesday 330 

 aim: finish the animation 

![image-20220330094102337](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220330094102337.png)

now the process line has not finished the animation 





​	

    <p id="demo">单击按钮来改变这一段中的文本。</p>
    <!-- <div class ="pa" id="step-container"style="overflow" >
         onmouseover should be depart from onclick  -->
        <div class="step-circle step-circle-active" id="1"onmouseover="getID(1)">111111111111111111111111111111111111111111111111111111111111111111111111</div>
        <!-- <span class="step-line"></span> -->
        <div class="step-circle" id="2"onmouseover="getID(2)">2</div>
        <!-- <span class="step-line"></span> -->
        <div class="step-circle"id="3" onmouseover="getID(3)">3</div>
       <div class="step-circle-2" id = "6"> 6 </div>
        <div class="step-circle"id="4"onmouseover="getID(4)">4</div>
        <!-- <span class="step-line"></span> -->
        <div class="step-circle"id="5"onmouseover="getID(5)">
        5
        </div>
        <div class="step-circle" id="7"onmouseover="getID(7)">27</div>
        <div class="step-circle" id="8"onmouseover="getID(8)">28</div>
        <div class="step-circle" id="9"onmouseover="getID(9)">29</div>
        <div class="step-circle" id="10"onmouseover="getID(10)">10</div>
    
    </div> 
    <!-- <div id="btn-container">
        <button id="previous-btn" disabled>previous</button>
        <button id="next-btn">next</button>
    </div> -->
![image-20220330135121027](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220330135121027.png)



![image-20220330095017874](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220330095017874.png)

## Thursday 331 

https://www.jq22.com/webqd3808

鼠标滚轮ok

![scrollOk](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/scrollOk.gif)

程序wu的效果

https://blog.csdn.net/fy_java1995/article/details/109630891





```js
 var r = 500;
 var imgNodes = document.querySelectorAll(".step-circle");

            document.onmousemove = function (ev) {
                ev = ev || event;
                for (var i = 0; i < imgNodes.length; i++) {
                    var a = imgNodes[i].getBoundingClientRect().left + imgNodes[i].offsetWidth / 2 - ev.clientX;
                    var b = imgNodes[i].getBoundingClientRect().top + imgNodes[i].offsetHeight / 2 - ev.clientY;
                    var c = Math.sqrt(a * a + b * b);


                    if (c >= r) {
                        c = r;
                    }
                    imgNodes[i].style.width = 128 - c * 0.5 + "px";
                    imgNodes[i].style.height = 128 - c * 0.5 + "px";
                }
            }
```

![image-20220331161033066](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220331161033066.png)

![image-20220331161041031](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220331161041031.png)

![image-20220331161221296](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220331161221296.png)

更改主题颜色

![image-20220331191552453](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220331191552453.png)



flex布局很重要

## Friday 41 

关于首页界面 

如何做一个 光晕效果   `星星之火`还是`星辰大海`

可以一个欢迎界面的一个结束界面的

![image-20220401093011667](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220401093011667.png)



关于子元素被挤压 

在**子元素**中添加

>   flex-shrink: 0 ;

关于overflow的相互影响

![image-20220401093902144](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220401093902144.png)

![image-20220401103932818](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220401103932818.png)

![image-20220401140230232](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220401140230232.png)

![image-20220401143531512](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220401143531512.png)

![image-20220402095814549](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220402095814549.png)

这个字体需要更改

## Saturday 42 

1. 党员数据
2. GDP展示数据

![image-20220402140133313](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220402140133313.png)

![image-20220402140149288](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220402140149288.png)



![](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220402140149288.png)







Data

597.16亿 (59,716,467,625)     1960     1958-1962第二个五年计划

14.72万亿                                  2020     十三五





所以这里只能是id

![image-20220406105120552](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220406105120552.png)

![image-20220406105157707](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220406105157707.png)

```

  <script type="text/javascript">
        // var dom = document.getElementsByClassName("echarts_adata");
        var dom = document.getElementById("echarts_adata")
        var myChart = echarts.init(dom);
        var app = {};
        var option;
        var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'
    
        $.get(
          ROOT_PATH + '/data/asset/data/life-expectancy-table.json',
          function (_rawData) {
            run(_rawData);
          }
        );
        function run(_rawData) {
          // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
          const countries = [
            'Finland',
            'France',
            'Germany',
            'Iceland',
            'Norway',
            'Poland',
            'Russia',
            'United Kingdom'
          ];
          const datasetWithFilters = [];
          const seriesList = [];
          echarts.util.each(countries, function (country) {
            var datasetId = 'dataset_' + country;
            datasetWithFilters.push({
              id: datasetId,
              fromDatasetId: 'dataset_raw',
              transform: {
                type: 'filter',
                config: {
                  and: [
                    { dimension: 'Year', gte: 1950 },
                    { dimension: 'Country', '=': country }
                  ]
                }
              }
            });
            seriesList.push({
              type: 'line',
              datasetId: datasetId,
              showSymbol: false,
              name: country,
              endLabel: {
                show: true,
                formatter: function (params) {
                  return params.value[3] + ': ' + params.value[0];
                }
              },
              labelLayout: {
                moveOverlap: 'shiftY'
              },
              emphasis: {
                focus: 'series'
              },
              encode: {
                x: 'Year',
                y: 'Income',
                label: ['Country', 'Income'],
                itemName: 'Year',
                tooltip: ['Income']
              }
            });
          });
          option = {
            animationDuration: 10000,
            dataset: [
              {
                id: 'dataset_raw',
                source: _rawData
              },
              ...datasetWithFilters
            ],
            title: {
              text: '中国GDP变化'
            },
            tooltip: {
              order: 'valueDesc',
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              nameLocation: 'middle'
            },
            yAxis: {
              name: 'Income'
            },
            grid: {
              right: 140
            },
            series: seriesList
          };
          myChart.setOption(option);
        }
    
        if (option && typeof option === 'object') {
          myChart.setOption(option);
        }
    
      </script>

```

下午330收工

必须要先销毁一个才能再创新一个

![image-20220406135016661](C:/Users/sx-9756/AppData/Roaming/Typora/typora-user-images/image-20220406135016661.png)







![image-20220406143426042](C:/Users/sx-9756/AppData/Roaming/Typora/typora-user-images/image-20220406143426042.png)

![image-20220406143441155](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220406143441155.png)



## Wednesday  0406 

http://c.biancheng.net/view/2011.html

爬虫

美丽汤的学习

![image-20220406153152871](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220406153152871.png)









## Thursday 0407 

看爬虫



![image-20220407094552604](C:/Users/sx-9756/AppData/Roaming/Typora/typora-user-images/image-20220407094552604.png)

可以发现 Requests 推测的文本编码（也就是网页返回即爬取下来后的编码转换）与源网页编码不一致，由此可知其正是导致乱码原因

也可以这样来理解：字符串是由字符构成，字符在计算机硬件中通过二进制形式存储，这种二进制形式就是编码。如果直接使用 “字符串↔️字符↔️二进制表示（编码）” ，会增加不同类型编码之间转换的复杂性。所以引入了一个抽象层，“字符串↔️字符↔️与存储无关的表示↔️二进制表示（编码）” ，这样，可以用一种与存储无关的形式表示字符，不同的编码之间转换时可以先转换到这个抽象层，然后再转换为其他编码形式。在这里，Unicode 就是 “与存储无关的表示”，UTF-8 就是 “二进制表示”


1. 出现乱码问题

https://blog.csdn.net/qq_39363022/article/details/87023019

2. ![image-20220407102704238](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220407102704238.png)

解决了乱码问题发现是不能爬虫



![image-20220407103212341](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220407103212341.png)





*因为没有权限*

　403 Forbidden是HTTP协议中的一个状态码(Status Code)。可以简单的理解为没有权限访问此站。该状态表示服务器理解了本次请求但是拒绝执行该任务，该请求不该重发给服务器。在HTTP请求的方法不是“HEAD”，并且服务器想让客户端知道为什么没有权限的情况下，服务器应该在返回的信息中描述拒绝的理由。在服务器不想提供任何反馈信息的情况下，服务器可以用404 Not Found代替403 Forbidden。



主要原因是我们是直接Get请求数据，而浏览器的请求是有==Header==的















这个继续探索怎么这么丑呢

明明textalign center了

![image-20220407162005413](C:/Users/sx-9756/AppData/Roaming/Typora/typora-user-images/image-20220407162005413.png)







## Friday 0408 

http://tyj.nmg.gov.cn/xwzx/jrtt/202103/t20210305_1063023.html

对于145 增加指标图

理论上我们需要统计字符串中出现频率最高的 单词

这些图都是到时候ppt答辩的时候用的



![image-20220408132338398](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408132338398.png)

![image-20220408132637204](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408132637204.png)



未完成的任务： 

词语数据填充  link填充

GDP数据填充

关于数据不允许被爬

添加headers

![image-20220408140324448](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408140324448.png)

![image-20220408140653207](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408140653207.png)

![image-20220408140709658](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408140709658.png)

![image-20220408141714049](C:/Users/sx-9756/AppData/Roaming/Typora/typora-user-images/image-20220408141714049.png)

![image-20220408144220735](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408144220735.png)





为什么我在这里看到的是post请求但是自己的post不可以呢

![image-20220408145228992](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408145228992.png)

加了请求头

![image-20220408145647575](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408145647575.png)

还是不太对 再想想

![image-20220408154714714](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220408154714714.png)

文件在这里

http://www.gov.cn/xinwen/2021-03/13/content_5592681.htm





研究部署上线   ---    放弃  

## 411 Monday

填充数据图



各类不相关的数据该如何展示呢

总体指标数据又该如何展示呢

```
        itemStyle: {
                        color: "rgba(201, 35, 35, 1)"
                    },
                    lineStyle: {
                        width: 8.5
                    },
```





如何完成快捷方便的团队协作 

在线  不需要登陆  不需要多余的操作

剩余任务: 

- 桑葚图的数据填充   

- 词云的样式和链接 

- 雷达图的样式    

- **具体省份数据填充和样式调整**



























下午任务为完成英语阅读

对于阅读的感觉还行



重点是速度和准确度

碎片化时间比较可以用于锦上添花但是不适合于系统性的学习





数据预处理——无量纲化处理

https://blog.csdn.net/qq_43202474/article/details/109101323

![image-20220411180149810](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220411180149810.png)

针对如下条件的数据处理







![image-20220411181543876](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220411181543876.png)



![image-20220411181647619](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220411181647619.png)

数据单位不统一

![image-20220411182912058](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220411182912058.png)

```
[328,0.94,0.71,0.56,49.8,17.99]
```

![image-20220412090049496](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220412090049496.png)





## 412 Tuesday

如下主题配色

![image-20220412110824824](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220412110824824.png)

可以看到嗷这个数据的变化很小，展示就不太方便展示

![image-20220412093746499](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220412093746499.png)

为什么这个是个空呢

![image-20220412172630575](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220412172630575.png

只能说 

颜色大师在此

![image-20220413134025366](C:/Users/sx-9756/AppData/Roaming/Typora/typora-user-images/image-20220413134025366.png)

使用这个完成数据传输

![image-20220413141102393](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220413141102393.png)

很有意思的爬虫问题

![image-20220418133635514](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418133635514.png)