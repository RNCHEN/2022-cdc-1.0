
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
    initChart();
    initBubble();
};


const txtData = [
    '五年规划（The Five-Year Plan，原称五年计划），全称为中华人民共和国国民经济和社会发展五年规划纲要，是中国国民经济计划的重要部分，属长期计划。主要是对国家重大建设项目、生产力分布和国民经济重要比例关系等作出规划，为国民经济发展远景规定目标和方向。本篇将以十四个五年规划的视角向你展示我国在中国共产党领导下取得的伟大成就',
    '第一个五年计划，简称“一五”计划(1953—1957)，是在党中央的直接领导下，由周恩来、陈云同志主持制定的，1955年7月经全国人大一届二次会议审议通过。至1957年，“一五”计划超额完成了规定的任务，实现了国民经济的快速增长，并为我国的工业化奠定了初步基础。第一个五年计划的制定与实施标志着系统建设社会主义的开始',
    '第二个五年计划，1958-1962年发展国民经济发展计划，简称“二五”计划。在1956年9月召开的党的“八大”正式通过由周恩来主持编制的《关于发展国民经济的第二个五年计划的建议的报告》。由于实施过程中的巨大波动，“二五”计划实际上分成 “大跃进”和调整时期两个阶段。',
    '第三个五年计划：中华人民共和国1966～1970年的国民经济发展计划。简称“三五”计划。“三五”计划从1964年初开始研究和编制，指导思想经历了由“解决吃穿用”到“以战备为中心”的变化，从准备大打、早打出发，积极备战，把国防建设放在第一位，加快“三线”建设',
    '第四个五年计划：简称”四五计划“。1970年开始进行编制。并由1971年开始实施至1975年结束。1973年，中共中央两次修改“四五”计划的高指标，逐步调整了以战备为中心的战略，开始强调经济效益，注意沿海和“三线”地区并重，大规模的“三线”建设进入收尾阶段。1975年“四五”计划得到了基本完成。',
    '第五个五年计划：1975年，中共中央制定了《1976—1985年发展国民经济十年规划纲要（草案）》，安排了“五五”计划。党的十一届三中全会以后，国民经济处于全面调整时期，“五五”计划指标相应作了较大幅度的调整。1980年底，国民经济主要比例关系开始改善，生产和建设也取得较大发展。',
    '第六个五年计划：即中华人民共和国1981～1985年的国民经济和社会发展计划。全称是“中华人民共和国国民经济和社会发展第六个五年计划”，简称“六五”计划。1980年2月，国务院决定重新制定中长期计划，酝酿编制“六五”计划。1982年12月全国人大五届五次会议正式批准“六五”计划。“六五”计划是继“一五”计划后的一个比较完备的五年计划，是在调整中使国民经济走上稳步发展的健康轨道的五年计划。',
    '第七个五年计划：即中华人民共和国1986～1990年的国民经济和社会发展计划。全称为“中华人民共和国国民经济和社会发展第七个五年计划”。简称“七五”计划。1983年，国务院即着手组织“七五”计划的起草工作。1986年，经全国人大六届四次会议审议批准。这是我国社会主义计划经济史上第一次在一个新的五年计划刚刚起步的时候就制定出来的经济和社会发展计划。',
    '第八个五年计划：1991年—1995年中国国民经济和社会发展的计划。简称“八五”计划。1991年4月，全国人大七届四次会议审议通过国务院《关于国民经济和社会发展十年规划和第八个五年计划纲要的报告》。以1992年邓小平同志重要谈话和中共十四大为标志，“八五”期间中国改革开放和现代化建设进入新的阶段。“八五”期间成为中国改革开放推进最快的时期，确立了社会主义市场经济目标，形成了总体开放的格局。',
    '第九个五年计划：1996—2000年中国国民经济和社会发展的计划。简称“九五”计划。1996年3月，全国人大八届四次会议通过了《国民经济和社会发展“九五”计划和2010年远景目标纲要》。这是中国社会主义市场经济条件下的第一个中长期计划，是一个跨世纪的发展规划。“九五”期间国民经济和社会发展的主要奋斗目标确定为“全面完成现代化建设的第二步战略部署”。',
    '第十个五年计划：2001—2005年中国国民经济和社会发展的计划。简称“十五”计划。2001年3月，全国人大九届四次会议通过了《国民经济和社会发展第十个五年计划纲要》。按照发展社会主义市场经济的需要，确立以经济结构的战略性调整作为主线。生态建设、环保、经济与社会的可持续发展得到了加倍的重视。更多关注教育、文化、医疗卫生、体育等各项社会事业，更加注意经济与社会的协调发展，以更好地满足广大人民群众发展的需要、享受的需要。',
    '第十一个五年计划：中华人民共和国国民经济和社会发展第十一个五年规划纲要，简称“十一五”规划（2006－2010年），规划纲要根据《中共中央关于制定国民经济和社会发展第十一个五年规划的建议》编制，主要阐明国家战略意图，明确政府工作重点，引导市场主体行为，是2006－2010年中国经济社会发展的宏伟蓝图，是各族人民共同的行动纲领，是政府履行经济调节、市场监管、社会管理和公共服务职责的重要依据。',
    '第十二个五年计划：中华人民共和国国民经济和社会发展第十二个五年规划纲要（2011－2015年），简称十二五规划。根据《中共中央关于制定国民经济和社会发展第十二个五年规划的建议》编制，主要阐明国家战略意图，明确政府工作重点，引导市场主体行为，是未来五年我国经济社会发展的宏伟蓝图，是全国各族人民共同的行动纲领，是政府履行经济调节、市场监管、社会管理和公共服务职责的重要依据。 [1]  有一些具体化的子项目，如《十二五综合交通运输体系规划》等等。',
    '第十三个五年计划：中华人民共和国国民经济和社会发展第十三个五年规划纲要，简称“十三五”规划（2016－2020年），规划纲要依据《中共中央关于制定国民经济和社会发展第十三个五年规划的建议》编制，主要阐明国家战略意图，明确政府工作重点，引导市场主体行为，是2016－2020年中国经济社会发展的宏伟蓝图，是各族人民共同的行动纲领，是政府履行经济调节、市场监管、社会管理和公共服务职责的重要依据。',
    '围绕“十四五”时期经济社会发展主要目标，规划纲要草案设置了5个类别20项主要指标。其中，经济发展方面有3个指标，创新驱动方面有3个指标，民生福祉方面有7个指标，绿色生态方面有5个指标；另外，在安全保障方面，首次设置粮食安全和能源安全指标。',
];
const titleData = [
    '五年规划',
    '第一个五年计划',
    '第二个五年计划',
    '第三个五年计划',
    '第四个五年计划',
    '第五个五年计划',
    '第六个五年计划',
    '第七个五年计划',
    '第八个五年计划',
    '第九个五年计划',
    '第十个五年计划',
    '第十一个五年计划',
    '第十二个五年计划',
    '第十三个五年计划',
    '第十四个五年计划',

];

const dataTxt = [
    ['社会主义工业化','计划经济体制','乡村振兴','八字方针','基本消除贫困','国防力量','对外贸易','三线建设','发展农业','“一带一路”','供给侧结构性改革','制造强国','现代产业体系','乡村振兴','社会主义先进文化' ,'新型城镇化战略'],
    ['社会主义工业化','计划经济体制','社会主义改造'],
    ['八字方针','国民经济技术改造','国防力量'],
    ['国防建设','三线建设','发展农业'],
    ['农业机械化','发展新技术','三线建设'],
    ['农业机械化','国民经济比例','生产建设发展'],
    ['社会发展','家庭联产承包责任制','农业改革','对外开放'],
    ['全面经济改革','所有制结构','经济运行新体制'],
    ['经济体制改革','对外贸易','对外开放总体格局'],
    ['现代化建设','现代企业制度建设','社会主义市场经济体制','小康','基本消除贫困'],
    ['可持续发展','西部大开发','城镇化'],
    ['科学发展观','“六个必须”','人才强国'],
    ['现代农业','区域协调发展','科技创新','教育改革'],
    ['“一带一路”','供给侧结构性改革','制造强国'],
    ['现代产业体系','乡村振兴','社会主义先进文化' ,'新型城镇化战略']
]
const dataLink = [
    'https://www.baidu.com/',
    'https://github.com/RNCHEN/2022-cdc/blob/main/README.md',
    'https://github.com/RNCHEN/2022-cdc/blob/main/README.md',
    'https://www.baidu.com/',
    'https://www.baidu.com/',
    'https://www.baidu.com/',
    'https://www.baidu.com/',
    'https://www.baidu.com/',
    'https://www.baidu.com/',
    'https://www.baidu.com/',
    'https://www.baidu.com/',
    'https://www.baidu.com/',
    'https://github.com/RNCHEN/2022-cdc/blob/main/README.md',
    'https://github.com/RNCHEN/2022-cdc/blob/main/README.md',
    'https://github.com/RNCHEN/2022-cdc/blob/main/README.md',
    'https://github.com/RNCHEN/2022-cdc/blob/main/README.md',

]

const previous_btn = document.querySelector("#previous-btn");
const next_btn = document.querySelector("#next-btn");
const step_circle = document.querySelectorAll(".step-circle");
const step_line = document.querySelectorAll(".step-line");

function getID(e) {


    console.log('step_circle=', step_circle[e])
    //  we add class to the current and remove other class
    // pay attention to the first and the last 
    console.log('id=', e)
    // add exemplify calss to this item 
    let circle = step_circle[e];

    circle.classList.add("step-circle-active-more", "step-circle-active");
    console.log('main ememplify finished');

    // add a smaller exemplify class to the near by class   
    //judge if node is the first two or the last two 
    if (e == 0 || e == 10) {
        let circle2 = step_circle[e + 1];
        circle2.classList.add("step-circle-active-more-1");
        circle2 = step_circle[e + 2];
        circle2.classList.add("step-circle-active-more-2");
    } else {// 
        let circle2 = step_circle[e - 1];
        circle2.classList.add("step-circle-active-more-1");
        circle2 = step_circle[e + 1];
        circle2.classList.add("step-circle-active-more-1");
        circle2 = step_circle[e + 2];
        circle2.classList.add("step-circle-active-more-2");
        circle2 = step_circle[e - 2];
        circle2.classList.add("step-circle-active-more-2");
    }


}
// remove all effective 
function removeEffect(e) {

    for (let index = 0; index < step_circle.length; index++) {

        let circleCancel = step_circle[index];
        circleCancel.classList.remove("step-circle-active", "step-circle-active-more",
            "step-circle-active-more-1", "step-circle-active-more-2");
    }


}

function showTxt(e) {
    console.log("onclick", e)
    document.getElementById("demo").innerHTML = titleData[e];// modify the title
    document.getElementById("txt").innerHTML = txtData[e];// modify the content 
    // if(e==0){
    //     window.location.href="t2.html"
    // }
}


var dom = document.getElementById("echarts_adata")
var myChart = echarts.init(dom);

function initChart() {

    var app = {};
    var option;
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'

    $.get(
        ROOT_PATH + '/data/asset/data/life-expectancy-table.json',
        function (_rawData) {
            run(_rawData);
            myChart.setOption(option)
        }
    );
    function run(_rawData) {
        // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
        const countries = [
            'China',
            'North Korea',
            'India',

            // 'South Korea'
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
                lineStyle: {
                    width: 4
                },
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
                text: 'GDP',
                textStyle: {
                    color: '#ffffff'
                },
            },
            tooltip: {
                order: 'valueDesc',
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                nameLocation: 'middle',
                axisLabel: {
                    fontWeight: "bold",
                    fontStyle: "normal",
                    color: "#ffffff",
                    fontSize: 12
                }
            },
            yAxis: {
                name: '',
                axisLabel: {
                    fontWeight: "bold",
                    fontStyle: "normal",
                    color: "#ffffff",
                    fontSize: 12
                }
            },
            grid: {
                right: 140
            },
            series: seriesList
        };

    }


}


function exCharts(e) {
    // myChart.setOption(option);
    echarts.dispose(myChart);
    var dom = document.getElementById("echarts_adata")
    var myChartafter = echarts.init(dom);
    var data = [
        [337, 351, 372, 420, 436],
        [534, 588, 597, 500, 472],
        [507, 597, 704],
        [767, 728, 708, 797, 926],

        [998, 1136, 1385, 1441, 1634],
        [1539, 1749, 1495, 1782, 1911],
        [1958, 2050, 2306, 2599, 3094],

        [3007, 2729, 3123, 3477, 3608],
        [3833, 4269, 4447, 5643, 7345],
        [8637, 9616, 10290, 10939, 12113],

        [13393, 14705, 16602, 19553, 22859],
        [27521, 35503, 45943, 51017, 60871],
        [75515, 85322, 95704, 104756, 110615],

        [112332, 123104, 138948, 142799, 147227],
    ]
    var date = [
        ['1953', '1954', '1955', '1956', '1957'],
        ['1958', '1959', '1960', '1961', '1962'],
        ['1963', '1964', '1965'],
        ['1966', '1967', '1968', '1969', '1970'],

        ['1971', '1972', '1973', '1974', '1975'],
        ['1976', '1977', '1978', '1979', '1980'],
        ['1981', '1982', '1983', '1984', '1985'],

        ['1986', '1987', '1988', '1989', '1990'],
        ['1991', '1992', '1993', '1994', '1995'],
        ['1996', '1997', '1998', '1999', '2000'],

        ['2001', '2002', '2003', '2004', '2005'],
        ['2006', '2007', '2008', '2009', '2010'],
        ['2011', '2012', '2013', '2014', '2015'],

        ['2016', '2017', '2018', '2019', '2020'],
    ]

    if (e == 0) {    //introduction of 5 year plan

        if (myChartafter_0) {
            echarts.dispose(myChartafter_0);
        }
        if (myChartafter) {
            echarts.dispose(myChartafter);
        }
        var dom = document.getElementById("echarts_adata")
        var myChartafter = echarts.init(dom);
        options = {
            color: ['#b2c584', '#ff5f2e'],
            // #114d8f 
            title: {
                // text: '发展成果'
            },
            legend: {},
            radar: [
                {
                    indicator: [
                        { text: '新冠疫苗接种计数' },
                        { text: '高铁总里程数' },
                        { text: '移动互联网用户' },
                        { text: 'GDP' },
                        { text: '专利申请数' },
                        { text: '汽车制造' }
                    ],
                    center: ['50%', '50%'],
                    radius: 130,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    axisName: {
                        formatter: '{value}',
                        color: '#ffffff',
                        fontSize: 18
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['#fac474', '#f99e43', '#fac474', '#f99e43'],
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
            ],
            series: [
                {
                    type: 'radar',
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    },

                    data: [
                        {
                            value: [2, 2, 2, 2, 2, 2],
                            name: '开始计划之前'
                        },
                        {
                            value: [7, 7, 7, 5, 7, 7],
                            name: '之后',
                            areaStyle: {
                                color: '#fac474'
                            }
                        }
                    ]
                }
            ]
        };
        console.log("options=", options)
        myChartafter.setOption(options);

    } else if (e == 14) {   // 145
        echarts.dispose(myChartafter);
        if (myChartafter_0) {
            echarts.dispose(myChartafter_0);
        }
        var dom = document.getElementById("echarts_adata")
        var myChartafter_0 = echarts.init(dom);

        options = {
            legend: {
                top: 'bottom'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            toolbox: {
                show: false,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: '十四五的主要指标',
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    label: {
                        show: true,
                        fontFamily: "Arial",
                        fontSize: 14,
                    },
                    data: [
                        { value: 7, name: '民生福祉' },
                        { value: 5, name: '绿色生态' },
                        { value: 3, name: '经济发展' },
                        { value: 3, name: '创新驱动' },
                        { value: 2, name: '安全保障' },
                    ]
                }
            ]
        };
        console.log("options=", options)
        myChartafter_0.setOption(options);

    } else {
        echarts.dispose(myChartafter);
        if (myChartafter_0) {
            echarts.dispose(myChartafter_0);
        }
        var dom = document.getElementById("echarts_adata")
        var myChartafter_0 = echarts.init(dom);
        options = {
            legend: {
                lineStyle: {
                    width: 5.5,
                    color: 'black',
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: date[e - 1],
                axisLabel: {
                    fontWeight: "bold",
                    fontStyle: "normal",
                    color: "#ffffff",
                    fontSize: 18
                }
            },
            yAxis: {
                type: 'value',
                name: 'GDP(美元)',
                nameTextStyle: {
                    fontWeight: "bold",
                    color: "#ffffff",
                },
                axisLabel: {
                    fontWeight: "bold",
                    fontStyle: "normal",
                    color: "#ffffff",
                }
            },
            series: [
                {
                    data: data[e - 1],
                    type: 'line',
                    showSymbol: true,
                    smooth: true,
                    symbolSize: 9,

                    itemStyle: {
                        color: "#ff5f2e"
                    },
                    lineStyle: {
                        width: 4
                    },
                    encode: {
                        x: 'Year',
                        y: 'Income',
                        itemName: 'Year',
                        tooltip: ['Income']
                    },

                }
            ]
        };
        console.log("options=", options)
        myChartafter_0.setOption(options);
    }


    // 使用刚指定的配置项和数据显示图表。

}


function Star() {
    window.location.href = "star.html";
}

function initBubble() {
    //创建一个元素，放所有的小圆
    var circleBox = document.createElement('div');
    circleBox.style.cssText = `display:flex;width:500px;
        flex-wrap:  wrap;`;
    //获取随机数   from 参数表示从哪个数开始  to参数表示到哪个数结束 from<= num <= to
    function randomNum(from, to) {
        from = Number(from);
        to = Number(to);
        var Range = to - from;
        var num = from + Math.round(Math.random() * Range); //四舍五入
        return num;
    };

    for (var i = 0; i < 13; i++) {
        //创建小圆
        var circle = document.createElement('div');
        console.log('dataTxt', dataTxt[0][i])
        circle.innerHTML = dataTxt[0][i]
        // 下面的4个变量 代表小圆随机位置  和 随机持续时间和延迟
        var bottom = randomNum(10, 1000);
        var left = randomNum(-200, 200);
        var duration = randomNum(10, 30) / 1;
        var delay = randomNum(0, 50) / 10;
        console.log('i', i);
        circle.style.cssText += `
            animation:move2 ${duration}s linear ${delay}s infinite;
            animation-fill-mode: forwards;
            flex-wrap:  wrap;
            bottom:${bottom}px;
            cursor:default;
            left:${left}px;
            display:flex;
            `;
        circle.className += " dot";
        console.log('CIRCLE', i, circle)
        //把每个小圆 都加入这个div
        circleBox.appendChild(circle);

    };
    divList = circleBox.querySelectorAll(".dot")
    for (let index = 0; index < divList.length; index++) {
        divList[index].onclick = () => {
            // window.location.href = dataLink[index]
        }
    }
    var fire = document.querySelector(".fire");
    //把有40个随机小圆的 div 加入DOM树
    fire.appendChild(circleBox);

}

function exBubble(e) {

    var fire = document.querySelector(".fire");
    console.log('fire=', fire.children[0])
    fire.children[0].remove()

    console.log('in fire =', fire)
    var circleBox = document.createElement('div');
    circleBox.style.cssText = `display:flex;   width:500px;   flex-wrap: wrap;`;
    //获取随机数   from 参数表示从哪个数开始  to参数表示到哪个数结束 from<= num <= to
    function randomNum(from, to) {
        from = Number(from);
        to = Number(to);
        var Range = to - from;
        var num = from + Math.round(Math.random() * Range); //四舍五入
        return num;
    };

    for (var i = 0; i < 3 ; i++) {
        //创建泡泡
        var circle = document.createElement('div');
        circle.innerHTML = dataTxt[e][i]
        // 下面的4个变量 代表小圆随机位置  和 随机持续时间和延迟
        var bottom = randomNum(10, 1000);
        var left = randomNum(-200, 200);
        var duration = randomNum(10, 30) / 1;
        var delay = randomNum(0, 50) / 10;
         
        console.log('i', i);
        circle.id = i;
 
        circle.style.cssText += `
            animation:move2 ${duration}s linear ${delay}s infinite;
            animation-fill-mode: forwards;
            flex-wrap:  wrap;
            bottom:${bottom}px;
            cursor:default;
            left:${left}px;
            display:flex;
            `;
        circle.className += " dot";
        console.log('CIRCLE', i, circle)
        //把每个小圆 都加入这个div
        circleBox.appendChild(circle);

    };
    // 添加事件
    divList = circleBox.querySelectorAll(".dot")
    console.log('divlist', divList)
    for (let index = 0; index < divList.length; index++) {
        divList[index].onclick = () => {
            // window.location.href = dataLink[index]
        }
    }
    var fire = document.querySelector(".fire");
    //把有40个随机小圆的 div 加入DOM树
    fire.appendChild(circleBox);

}