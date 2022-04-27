# 2022-Computer Design Competition

## Something before the project

My last words updated on the April 27th.
	So, unfortunately, we even did not pass the first selection. And my passion for this project is shut down even though I know it is wrong. At least according to what I have known, a project, which has won a Nation's rewards, also shows no technical difficulty and any innovation while our project shows more innovation and imagination. Using Echarts and making some adjustment to the style, the project can be done by anyone who knows how to type the keyboard. 
	I urged the relevant person in charge to find out why we failed even at the first selection. They said we could not show others' projects because they needed to keep the secret. We gained nothing essential or helpful in the reply. They said we chose five and you are the six. Come on. Any details? oh indeed they said we got 81 while is line in the 6 positions. What kind of details is this? 
	I want a reason why our project failed. You can lie to me that we lack innovation, which is not correct. Or you can say you guys got a provincial reward last year so we give the opportunity to the next generation. You can make up a story.But I gained nothing. And the deadline for the application for the next selection is passed. I can do nothing more but write down this words. 
	Indeed I feel frustrated but I won't lose my confidence. I learned a lot in the process. 
	It is the first time that I urged a reward so eagerly, the first time I organized the whole project even it was a naive project, the first time we tried to use git to cooperate with my teammates though we failed, the first time I try to interpret my opinion into a realistic thing, the first time I meet questions and search for solutions though it should be done at the first year in the university and the first time I give all my efforts but gain nothing. 
	Those valuable experiences may be more important than the certification of the competition. I won't stop my way that we should learn new things from the competition even though the final effect is not as fansinating as those who use the existed templates. Time will tell.
	That's all.
	oh, in addition, I'm sry that you will miss a nation-level reward.



**Statement**:

If you find any problems no matter if it is the accurancy of data or the descriptions, or just want to give your ideas about the project, please contact us with the following Email

>  2448297223@qq.com

This is the 2022 Computer Design Competition

- we choose the **Category 6, item 4, Data visualization**
- project name: `The Expectation of the 14th 5-year plan`
- School : University of Electronic Science and Technology of China
- Teammates: 
  - Jeffrey-Chen    https://github.com/RNCHEN
  - Xuhan    https://github.com/AIMYON22
  - Eureka https://github.com/Assassin187

## Quick Start

you can find the display video with the following link

https://www.bilibili.com/video/BV1u44y1G7yL#reply109645850640

you can use the website at 

https://rnchen.github.io/firstDeployment/

you can find the reply video with the following link

https://www.bilibili.com/video/BV15541117cg/

**However, because of some reasons, the desktop can use it normally while the loptop need to shrink it to 80% or less**

 you can start the main code with `0408Beta`->`main`->`fire.html` 

 you can find the data process revelant code in `python`

## Introduction

This work is a visual platform for reviewing China's economic data over the years and looking forward to the important economic data of the 14th five year plan

The original intention of creating this work is to facilitate you to more intuitively understand and learn relevant economic data, and stimulate your interest through the visual form of data

Our overall page is divided into four sections: `historical exhibition hall`, `popular word cloud`,` long-term planning` and `provincial data`.

![image-20220418191044460](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191044460.png)

> more details description can be found in `reply`->`答辩`
>
> we just display the photo here





![image-20220421170344848](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220421170344848.png)



we strat with the beginning animation

- `beginning animation`

![image-20220418191433478](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191433478.png)

- `historical exhibition hall`

![image-20220418191223262](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191223262.png)

![image-20220418191239502](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191239502.png)

![image-20220418191313822](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191313822.png)

![image-20220418191522963](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191522963.png)

and we end with a **star animation**

![image-20220421174327021](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220421174327021.png)



- `popular word cloud`

![image-20220418191705015](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191705015.png)

- ` long-term planning` 

![image-20220418191732535](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191732535.png)

-  `provincial data`

click the specific province to get the next

![image-20220418191853492](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191853492.png)

![image-20220418192005893](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418192005893.png)

![image-20220418192021324](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418192021324.png)

![image-20220418192042098](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418192042098.png)

![image-20220418192057181](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418192057181.png)

![](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418192021324.png)

![](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418192042098.png)

and you can contact with us in the project :

![image-20220418192207453](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418192207453.png)



## core code 

1. Program dock

   we want to simulate the program dock in the Mac book
   
   ![image-20220418195510211](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418195510211.png)

when mouse is on the div, we exemplify it and its neighbors. And when the mouse leave, we remove the effect

```html
    <div class="step-circle" id="1"
         onmouseover="getID(1)" 
         onmouseout="removeEffect(1)"
	     onclick="showTxt(1),exCharts(1),exBubble(1)">一五
    </div>
```

```js
function removeEffect(e) {
    for (let index = 0; index < step_circle.length; index++) {
        let circleCancel = step_circle[index];
        circleCancel.classList.remove("step-circle-active", "step-circle-active-more",
            "step-circle-active-more-1", "step-circle-active-more-2");
    }
}
```

2. Transverse roller

![image-20220418193049113](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418193049113.png)

we need to prevent the default settings.

```js

window.onload = function () {
    // mouse scroll
    var a = document.getElementById("step-container");
    var scroll_width = 100; //滚动一下的距离
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', mousewheel_event, false); // FF
    }
    a.onmousewheel = mousewheel_event; // IE/Opera/Chrome
    function mousewheel_event(e) {
        var e = e || window.event, v;
        e.wheelDelta ? v = e.wheelDelta : v = e.detail;
        if (v > 3 || -v > 3) v = -v;
        v > 0 ? a.scrollLeft += scroll_width : a.scrollLeft -= scroll_width;

        e.preventDefault(); //阻止浏览器的默认滚动
    }
};

```

3. Fire animation 

First, we use the PS to select the specific font.

![image-20220418195441205](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418195441205.png)

and we set the `keyframes` to finish the job 

![image-20220418194021011](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418194021011.png)

4. Echarts

If we want to use the different type of Echarts, 

we must use the function `echarts.dispose()` to dispose the exited charts in the original position.

```js
if (myChartafter_0) {
            echarts.dispose(myChartafter_0);
        }
```

![image-20220418195819130](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418195819130.png)

5. Internet worm

   We obey the rules, details will be uploaded later 

6. data process 

   we use the `Z-score` data process, details will be uploaded later 

   ```python
   print(z)
   data={  'increase':z,
           'origin':x,
           'after':y
        }#用字典来存放数据
   price_frame=pandas.DataFrame(data)#把字典类型转化为dataframe对象
   normalizer=preprocessing.scale(price_frame)
   #沿着某个轴标准化数据集，以均值为中心，以分量为单位方差
   price_frame_normalized=pandas.DataFrame(normalizer,columns=['increase','origin','after'])
   ```

7. Chinese Division 

   we use the `Jieba`, details will be uploaded later 

```python
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
```

8. depolyment 

   First: you need to have `Nodejs`

   ![image-20220419101054470](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220419101054470.png)

   then run the following script in the Terminal

   > npm install http-server -g

   ![image-20220419101135489](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220419101135489.png)

   and then =>

   > http-server -c-1

   To simplify the working, we choose `Github Pages` to finish the deployment 

   You can create a empty repo **without README( at least for me)**, then =>

   ![image-20220419100541470](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220419100541470.png)

   choose the *master* and click the *save*

   ![image-20220419100602171](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220419100602171.png)

   wait for a moment and your web is deployed

   : )

==ATTENTION:==

- you must have the `index.html` instead of any other names.

- if the web display the `README` file, you can delete it.



## My words

**Re statement**: 

if you find any wrong with data, plz contact us. Any suggestions can be sent to my email 

> 2448297223@qq.com



You can see the following photos that we have many similar templates, which are already cool and fascinating. And maybe the existed template is more beautiful than our project.

However, there is an old saying in China, that freshmen see the effect but the experts think the logic. 

To be honest, if you ask me to finish the same effect without any Lib, of course I can not, but with the help of Echarts, achieving the following photo is just like building blocks, which means it does not have any tech level. What we need to do is to adjust some data and title and then you can boost to someone who is not familiar with the fond-end.

Though what we want is a reward, after all this is a competition, but what we have learned from the process matters more. The ability outweigh anything. Thinking independently and finishing all codes by yourself, you can improve your comprehensive ability by doing so.

**Using the template without your own thinking can not help you in any area**

Though the fond-end is easy. But the some logical in `JS` and some animations or layouts in `CSS` also takes you some time. Some operation in `git` also enhance your feeling on database(just my opinion).  `Python` can be used in web worm and data process, which may stimulate your interest in computer engineering.  

**All in all, this is a freshman friendly project**, because it do not have any data transmition. 

![image-20220419100602171](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220421164520157.png)

