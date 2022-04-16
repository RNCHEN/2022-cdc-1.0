

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
    initCharts();

};


const data = {
    name: '专栏方向',
    children: [
        {
            name: '经济安全保障',

        },
        {
            name: '社会关爱服务',

        },
        {
            name: '"一老一小"服务',

        },
        {
            name: '全民健康',

        },
        {
            name: '教育提质扩容',
        },
        {
            name: '环境保护和资源节约',

        },
        {
            name: '重要生态系统保护和修复',

        },
        {
            name: '社会主义文化繁荣发展',

        },
        {
            name: '促进边境地区发展',

        },
        {
            name: '新型城镇化建设',

        },
        {
            name: '现代农业农村',

        },
        {
            name: '数字化应用',

        },
        {
            name: '数字经济发展重点',

        },
        {
            name: '国家水网骨干',
        },
        {
            name: '现代能源体系建设',

        },
        {
            name: '交通强国建设',

        },
        {
            name: '制造业核心竞争力',

        },
        {
            name: '国家重大科技基础设施',

        },
        {
            name: '科技前沿领域攻关',

        },

    ]
};

function initCharts() {


    var dom = document.getElementsByClassName("step-circle")
    console.log('length of dom ', dom.length)
    // 0 
    {
        var myChart = echarts.init(dom[0]);

        options = {

            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    id: 0,
                    name: 'tree1',
                    data: [data],
                    top: '12%',
                    left: '15%',
                    bottom: '12%',
                    right: '35%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 3,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontWeight: "bold",
                        fontSize: 17
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        };
        console.log("options=", options)
        myChart.setOption(options);
    }
    // 1
    {
        var myChart = echarts.init(dom[1]);
        options = {
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                label: {
                    show: true,
                    position: "insideTopLeft",
                    fontStyle: "normal",
                    fontWeight: "12"
                },
                data: [
                    {
                        name: '科技前沿领域',
                        itemStyle: {
                            color: "#f06a42"
                        },
                        label: {
                            fontSize: 19,
                            fontWeight: "normal",
                            color: '#fff',
                        }
                    },

                    {
                        name: '新一代人工智能'
                    },
                    {
                        name: '量子信息'
                    },
                    {
                        name: '集成电路'
                    },
                    {
                        name: '脑科学与类脑研究'
                    },
                    {
                        name: '基因与生物技术'
                    },
                    {
                        name: '临床医学与健康'
                    },

                    {
                        name: '深空深地深海和极地探测'
                    },


                ],
                links: [
                    {
                        source: '科技前沿领域',
                        target: '新一代人工智能',
                        value: 5
                    },
                    {
                        source: '科技前沿领域',
                        target: '量子信息',
                        value: 5
                    },
                    {
                        source: '科技前沿领域',
                        target: '集成电路',
                        value: 5
                    },
                    {
                        source: '科技前沿领域',
                        target: '脑科学与类脑研究',
                        value: 5
                    },
                    {
                        source: '科技前沿领域',
                        target: '基因与生物技术',
                        value: 5
                    },
                    {
                        source: '科技前沿领域',
                        target: '临床医学与健康',
                        value: 5
                    },
                    {
                        source: '科技前沿领域',
                        target: '深空深地深海和极地探测',
                        value: 5
                    },
                ]
            }
        };
        console.log("options=", options)
        myChart.setOption(options);
    }
    // 2
    {
        var myChart = echarts.init(dom[2]);
        options = {
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                label: {
                    show: true,
                    position: "insideTopLeft",
                    fontStyle: "normal",
                    fontWeight: "12"
                },
                data: [
                    {
                        name: '经济安全保障工程',
                        itemStyle: {
                            color: "#f1511f"
                        },
                        label: {
                            fontSize: 19
                        }
                    },
                    {
                        name: '粮食储备设施'
                    },
                    {
                        name: '油气勘探开发'
                    },
                    {
                        name: '煤制油气基地'
                    },
                    {
                        name: '电力安全保障'
                    },
                    {
                        name: '新一轮找矿突破战略'
                    },
                    {
                        name: '应急处置能力提升'
                    },


                ],
                links: [
                    {
                        source: '经济安全保障工程',
                        target: '粮食储备设施',
                        value: 5
                    },
                    {
                        source: '经济安全保障工程',
                        target: '油气勘探开发',
                        value: 5
                    },
                    {
                        source: '经济安全保障工程',
                        target: '煤制油气基地',
                        value: 5
                    },
                    {
                        source: '经济安全保障工程',
                        target: '电力安全保障',
                        value: 5
                    },
                    {
                        source: '经济安全保障工程',
                        target: '新一轮找矿突破战略',
                        value: 5
                    },
                    {
                        source: '经济安全保障工程',
                        target: '应急处置能力提升',
                        value: 5
                    },
                ]
            }
        };
        console.log("options=", options)
        myChart.setOption(options);
    }
    //3
    {
        var myChart = echarts.init(dom[3]);
        options = {
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                label: {
                    show: true,
                    position: "insideTopLeft",
                    fontStyle: "normal",
                    fontWeight: "12"
                },
                data: [
                    {
                        name: '国家重大科技基础设施',
                        itemStyle: {
                            color: "#f06a42"
                        },
                        label: {
                            fontSize: 19,
                            fontWeight: "normal",
                            color: '#fff',
                        }
                    },

                    {
                        name: '战略导向'
                    },
                    {
                        name: '应用支撑型'
                    },
                    {
                        name: '前瞻引领型'
                    },
                    {
                        name: '民生改善型'
                    },
                ],
                links: [
                    {
                        source: '国家重大科技基础设施',
                        target: '战略导向',
                        value: 5
                    },
                    {
                        source: '国家重大科技基础设施',
                        target: '应用支撑型',
                        value: 5
                    },
                    {
                        source: '国家重大科技基础设施',
                        target: '前瞻引领型',
                        value: 5
                    },
                    {
                        source: '国家重大科技基础设施',
                        target: '民生改善型',
                        value: 5
                    },
                ]
            }
        };
        console.log("options=", options)
        myChart.setOption(options);
    }
    //4
    {
        var myChart = echarts.init(dom[4]);
        options = {
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                label: {
                    show: true,
                    position: "insideTopLeft",
                    fontStyle: "normal",
                    fontWeight: "12"
                },
                data: [
                    {
                        name: '制造业核心竞争力提升',
                        itemStyle: {
                            color: "#f1511f"
                        },
                        label: {
                            fontSize: 19
                        }
                    },
                    {
                        name: '高端新材料'
                    },
                    {
                        name: '重大技术装备'
                    },
                    {
                        name: '智能制造与机器人技术'
                    },
                    {
                        name: '航空发动机及燃气轮机'
                    },
                    {
                        name: '北斗产业化'
                    },
                    {
                        name: '新能源汽车和智能汽车'
                    },
                    {
                        name: '高端医疗装备和创新药'
                    },
                    {
                        name: '农业机械装备'
                    },
                ],
                links: [
                    {
                        source: '制造业核心竞争力提升',
                        target: '高端新材料',
                        value: 5
                    },
                    {
                        source: '制造业核心竞争力提升',
                        target: '重大技术装备',
                        value: 5
                    },
                    {
                        source: '制造业核心竞争力提升',
                        target: '智能制造与机器人技术',
                        value: 5
                    },
                    {
                        source: '制造业核心竞争力提升',
                        target: '航空发动机及燃气轮机',
                        value: 5
                    },
                    {
                        source: '制造业核心竞争力提升',
                        target: '北斗产业化',
                        value: 5
                    },
                    {
                        source: '制造业核心竞争力提升',
                        target: '新能源汽车和智能汽车',
                        value: 5
                    },
                    {
                        source: '制造业核心竞争力提升',
                        target: '高端医疗装备和创新药',
                        value: 5
                    },
                    {
                        source: '制造业核心竞争力提升',
                        target: '农业机械装备',
                        value: 5
                    },
                ]
            }
        };
        console.log("options=", options)
        myChart.setOption(options);
    }
    //5
    {
        var myChart = echarts.init(dom[5]);
        options = {
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                label: {
                    show: true,
                    position: "insideTopLeft",
                    fontStyle: "normal",
                    fontWeight: "12"
                },
                data: [
                    {
                        name: '交通强国建设',
                        itemStyle: {
                            color: "#f06a42"
                        },
                        label: {
                            fontSize: 19,
                            fontWeight: "normal",
                            color: '#fff',
                        }
                    },

                    {
                        name: '战略骨干通道'
                    },
                    {
                        name: '高速铁路'
                    },
                    {
                        name: '普速铁路'
                    },
                    {
                        name: '城市群和都市图轨道交通'
                    },
                    {
                        name: '高速公路'
                    },
                    {
                        name: '港航设施'
                    },
                    {
                        name: '现代化机场'
                    },
                    {
                        name: '综合交通和物流枢纽'
                    },
                ],
                links: [
                    {
                        source: '交通强国建设',
                        target: '战略骨干通道',
                        value: 5
                    },
                    {
                        source: '交通强国建设',
                        target: '高速铁路',
                        value: 5
                    },
                    {
                        source: '交通强国建设',
                        target: '普速铁路',
                        value: 5
                    },
                    {
                        source: '交通强国建设',
                        target: '城市群和都市图轨道交通',
                        value: 5
                    },
                    {
                        source: '交通强国建设',
                        target: '高速公路',
                        value: 5
                    },
                    {
                        source: '交通强国建设',
                        target: '港航设施',
                        value: 5
                    },
                    {
                        source: '交通强国建设',
                        target: '现代化机场',
                        value: 5
                    },
                    {
                        source: '交通强国建设',
                        target: '综合交通和物流枢纽',
                        value: 5
                    },
                   
                ]
            }
        };
        console.log("options=", options)
        myChart.setOption(options);
    }
    



}