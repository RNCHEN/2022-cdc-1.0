# 2022-Computer Design Competition

**Statement**:

If you find any problems no matter if it is the accurancy of data or the descriptions, or just want to give your ideas about the project, please contact us with the following Email

>  2448297223@qq.com

This is the 2022 Computer Design Competition

- we choose the **Category 6, item 4, Data visualization**
- project name: `The Expectation of the 14th 5-year plan`

- School : University of Electronic Science and Technology of China
- Teammates: Jeffrey-Chen ,

## Quick Start

you can find the display video with the following link

https://www.bilibili.com/video/BV1u44y1G7yL#reply109645850640

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

we strat with the beginning animation

- `beginning animation`

![image-20220418191433478](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191433478.png)

- `historical exhibition hall`

![image-20220418191223262](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191223262.png)

![image-20220418191239502](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191239502.png)

![image-20220418191313822](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191313822.png)

![image-20220418191522963](https://raw.githubusercontent.com/RNCHEN/photo-326/master/blogImg/image-20220418191522963.png)

and we end with a **star animation**

![image-20220418191600181](C:/Users/sx-9756/AppData/Roaming/Typora/typora-user-images/image-20220418191600181.png)



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



## My words

**Re statement**: 

if you find any wrong with data, plz contact us. Any suggestions can be sent to my email 

> 2448297223@qq.com

Thanks for your watching

: )

