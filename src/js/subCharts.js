import * as echarts from 'echarts';
import { obtenerDatos } from './API.js';

const subGraficas = document.getElementById('subGraficas');

export const handleBtn = (e) => {
    
    subGraficas.classList.add('flex', 'justify-center', 'items-center', 'gap-8', 'mt-8', 'w-[800px]', 'h-[400px]', 'border-2', 'border-fuchsia-950');
    window.location.href = '#subGraficas';

    const datos = e.target.name;
    const idCarrera = e.target.id;

    obtenerDatosAPI(datos, idCarrera);
};

// Obteniendo API
const obtenerDatosAPI = async (datos, idCarrera) => {
    const resultado = await obtenerDatos(datos);

    let title = "";
    let years = [];
    let amounts = [];

    resultado.forEach(dato => {
        const { carreras } = dato;
        
        Object.entries(carreras).forEach(carrera => {
            if(carrera[0] === idCarrera){
                const { name, year } = carrera[1];

                title = name;
                Object.entries(year).forEach(([key, value]) => {
                    years.push(key);
                    amounts.push(value);
                });
            }
        });
    });

    //Haciendo la grafica con los datos
    let chartDom = document.getElementById('subGraficas');
    let myChart = echarts.init(chartDom, 'dark');
    let option;

    option = {
        title: {
            text: `          Licenciados en ${title}`
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
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [years[0], years[1], years[2], years[3], years[4], years[5]]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [amounts[0], amounts[1], amounts[2], amounts[3], amounts[4], amounts[5]],
                type: 'line',
                // Estilo de la linea
                itemStyle: {
                    color: '#32CD32'
                },
                // Estilo del area
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#ccffc7'
                        },
                        {
                            offset: 1,
                            color: '#068509'
                        }
                    ])
                },
            }
        ]
    };

    option && myChart.setOption(option);
};  