/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Echarts from 'native-echarts';


type
Props = {};
export default class App extends Component<Props> {


    constructor(props) {
        super(props);

        this.state = {
            option: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            text: 'test'
        };
    }


    changeOption() {
        this.setState({
            option: {
                tooltip: {    //定义环形图item点击弹框
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {     //定义右边的菜单目录效果
                    orient: 'vertical',
                    x: 1000*0.5,
                    y:'center',
                    right:50,
                    //width:90
                    itemGap:4.50,
                    color:'#666666',
                    itemWidth:12,
                    itemHeight:12,
                    //data:legend     //这里的data要和下面外层的data的name相对应，否则会显示为空
                    data:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                series: [{
                    name:'月份销量',
                    type:'pie',
                    hoverAnimation:false,
                    radius: ['58%', '90%'],     //设置环形图展示半径空心圆环
                    avoidLabelOverlap: false,
                    center: ['25%', '50%'],     //这里可以设置环形图展示的位置
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {               //设置点击展示环形图内部文本样式
                            show: true,
                            textStyle: {
                                color:'#666666',
                                fontSize: '11',
                                fontWeight: 'bold'
                            }
                        }
                    },

                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    //data:monthdata    //这里的data是定义环形图的展示内容
                    data:[{value:2.00, name:'1月'}, {value:3.00, name:'2月'}, {value:3.00, name:'3月'}, {value:2.00, name:'4月'}, {value:5.00, name:'5月'}, {value:7.00, name:'6月'},
                    {value:3.00, name:'7月'},{value:7.00, name:'8月'},{value:25.00, name:'9月'}, {value:3, name:'10月'}, {value:3, name:'11月'}, {value:3, name:'12月'}]
                }],
                //可以根据下标来定义item内容的颜色
                color:['#01a2ea', '#8ac99c','#23ac38','#b4d467','#ffff00','#fdcc89','#f19049','#ea6941','#f95353','#cc5ac0','#ac5fd7','#5570b5']

            }
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native Echarts!
                </Text>
                <TouchableOpacity style={styles.button} onPress={this.changeOption.bind(this)}>
                    <Text style={{color: '#fff'}}>change state</Text>
                </TouchableOpacity>
                <Echarts option={this.state.option} height={300}/>
            </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 30,
    },
    button: {
        backgroundColor: '#d9534f',
        padding: 8,
        borderRadius: 4,
        marginBottom: 20
    }
});
