import './index.css'
import { obtenerDatos } from './src/js/API.js';
import { handleCLick } from './src/js/charts.js';
import * as echarts from 'echarts';

// Obteniendo elementos del DOM
const fce = document.getElementById('fce');
const fad = document.getElementById('fad');
const face = document.getElementById('face');
const faeco = document.getElementById('faeco');
const fah = document.getElementById('fah');
const fbea = document.getElementById('fbea');
const fca = document.getElementById('fca');
const fcso = document.getElementById('fcso');
const fdcp = document.getElementById('fdcp');
const feap = document.getElementById('feap');
const fcnet = document.getElementById('fcnet');
const fenf = document.getElementById('fenf');
const ffarm = document.getElementById('ffarm');
const fmed = document.getElementById('fmed');
const fmv = document.getElementById('fmv');
const fodon = document.getElementById('fodon');
const fpsi = document.getElementById('fpsi');

// Creando un objeto con los elementos del DOM
const facultades = {
    fce,
    fad,
    face,
    faeco,
    fah,
    fbea,
    fca,
    fcso,
    fdcp,
    feap,
    fcnet,
    fenf,
    ffarm,
    fmed,
    fmv,
    fodon,
    fpsi
}

// Agregando un evento a cada elemento del objeto
Object.values(facultades).forEach(facultad => {
    facultad.addEventListener('click', handleCLick);
});


// Creando el gráfico con echart
let myChart = echarts.init(document.getElementById('graficaGeneral'), 'dark');
myChart.setOption({
    title: {
        text: '         Cantidad de estudiantes graduados por año'
    },
    tooltip: {},
    xAxis: {
        type: 'category',
        data: ['2017', '2018', '2019', '2020', '2021', '2022']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'bar',
            data: [{
                value: 872,
                itemStyle: {
                    color: '#F11A7B',
                    shadowColor: '#F11A7B',
                    borderType: 'dashed',
                    opacity: 0.5
                }
                }, 
                {
                    value: 843,
                    itemStyle: {
                        color: '#982176',
                        shadowColor: '#982176',
                        borderType: 'dashed',
                        opacity: 0.5
                    }
                }, {
                    value: 825,
                    itemStyle: {
                        color: '#6B1B7F',
                        shadowColor: '#6B1B7F',
                        borderType: 'dashed',
                        opacity: 0.5
                    }
                }, {
                    value: 167,
                    itemStyle: {
                        color: '#FFE5AD',
                        shadowColor: '#FFE5AD',
                        borderType: 'dashed',
                        opacity: 0.5
                    }
                }, {
                    value: 695,
                    itemStyle: {
                        color: '#FFC30F',
                        shadowColor: '#FFC30F',
                        borderType: 'dashed',
                        opacity: 0.5
                    }
                }, {
                    value: 883,
                    itemStyle: {
                        color: '#FF5733',
                        shadowColor: '#FF5733',
                        borderType: 'dashed',
                        opacity: 0.5
                    }
                }],
                itemStyle: {
                    barBorderRadius: 5,
                    borderWidth: 0,
                    borderColor: '#73c0de',
                    shadowColor: '#5470c6',
                    shadowBlur: 3
                  }
        }
    ]
});