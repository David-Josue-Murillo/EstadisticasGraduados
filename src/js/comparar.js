import * as echarts from 'echarts';
import { obtenerDatos } from './API.js';

export const handleComparar = (e) => {
    console.log('clickkkk');

    const datos = e.target.id;
    obtenerDatosAPI(datos);
}

const obtenerDatosAPI = async (datos) => {
    const resultado = await obtenerDatos(datos);
    let years = ['2017', '2018', '2019', '2020', '2021', '2022'];
    let arrayCarrera = [];
    let amounts = [];

    resultado.forEach(dato => {
        const { carreras } = dato;

        Object.entries(carreras).forEach(carrera => {
            Object.values(carrera).map(item => {
                arrayCarrera.push(item)
            })
        })
    });

    arrayCarrera.forEach( item => {
        if(item instanceof Object){
            const { year } = item;

            let years = Object.values(year).map( item => item )
            amounts.push(years);
        }
    })

    //Haciendo la grafica
    let chartDom = document.getElementById('compGrafica');
    chartDom.classList.add('w-[95%]', 'h-64', 'm-auto', 'mt-5',  'md:flex', 'md:justify-center', 'md:items-center', 'md:gap-8', 'md:mt-8', 'md:w-[800px]', 'md:h-[400px]', 'border-2', 'border-fuchsia-950');

    let myChart = echarts.init(chartDom, 'dark');
    let option;

    option = {
        title: {
            text: 'Comparación'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: [arrayCarrera[0], arrayCarrera[2], arrayCarrera[4],]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [years[0], years[1], years[2], years[3], years[4], years[5],]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: arrayCarrera[0],
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [amounts[0][0], amounts[0][1], amounts[0][2], amounts[0][3], amounts[0][4], amounts[0][5]]
            },
            {
                name: arrayCarrera[2],
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [amounts[1][0], amounts[1][1], amounts[1][2], amounts[1][3], amounts[1][4], amounts[1][5]]
            },
            {
                name: arrayCarrera[4],
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [amounts[2][0], amounts[2][1], amounts[2][2], amounts[2][3], amounts[2][4], amounts[2][5]]
            }
        ]
    };

    option && myChart.setOption(option);

}
