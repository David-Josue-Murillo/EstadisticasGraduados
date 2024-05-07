import * as echarts from 'echarts';
import { obtenerDatos } from './API.js';

//Eventos
export function handleCLick(e) {
    e.preventDefault();
    window.location.href = '#grafica'
    
    const datos = e.target.id;
    obtenerDatosAPI(datos);
}

// Obteniendo API
async function obtenerDatosAPI(datos) {
    const resultado = await obtenerDatos(datos);

    let titles = "";
    let years = [];
    let amounts = [];


    resultado.forEach(dato => {
        const { year, title } = dato;

        titles = title;
        Object.entries(year).forEach(([key, value]) => {
            years.push(key);
            amounts.push(value);
        });
    });

    console.log(years);
    console.log(amounts);

    // Agregando Botones
    /*const divBotones = document.getElementById('btn_graficas') 
    divBotones.classList.add('flex', 'justify-center', 'items-center', 'gap-8', 'mt-4');
    divBotones.innerHTML = `
        <button id="lae" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">${carrera[6][0]}</button>
        <button id="lc" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">${carrera[6][1]}</button>
        <button id="laf" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">${carrera[6][2]}</button>
    `;*/    


    //Haciendo la grafica con los datos
    let chartDom = document.getElementById('contenedor');
    let myChart = echarts.init(chartDom, 'dark');
    let option;

    option = {
        //Titulo de la grafica
        title: {
            text: `          Facultad de ${titles}`
        },
        // Funciones extras de la grafica
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        //Icono de descarga
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        // Espaciado del area del grafico
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        // Información de la grafica en el eje x
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [years[0], years[1], years[2], years[3], years[4], years[5]]
        },
        // Información de la grafica en el eje x
        yAxis: {
            type: 'value'
        },
        // Datos de la grafica
        series: [
            {
                data: [amounts[0], amounts[1], amounts[2], amounts[3], amounts[4], amounts[5]],
                type: 'line',
                // Estilo de la linea
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                // Estilo del area
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(200, 158, 68)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(200, 70, 131)'
                        }
                    ])
                },
            }
        ]
    };

    option && myChart.setOption(option);

}

