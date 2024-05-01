import * as echarts from 'echarts';
import { obtenerDatos } from './API.js';


//Eventos
export function handleCLick(e) {
    e.preventDefault();
    window.location.href = '#grafica'

    console.log(e.target.id);
    const datos = e.target.id;

    obtenerDatosAPI(datos);
}

// Obteniendo API
async function obtenerDatosAPI(datos) {
    const resultado = await obtenerDatos(datos);
    console.log(resultado);

    let years = [];
    let amounts = [];

    resultado.forEach(dato => {
        const { id, year, amout, title } = dato;
        
        years.push(year)
        amounts.push(amout);
    });
    
    
    //Haciendo la grafica con los datos
    let chartDom = document.getElementById('contenedor');
    let myChart = echarts.init(chartDom, 'dark');
    let option;

    option = {
        xAxis: {
            type: 'category',
            data: [years[0], years[1], years[2], years[3], years[4], years[5]]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [amounts[0], amounts[1], amounts[2], amounts[3], amounts[4], amounts[5]],
                type: 'line'
            }
        ]
    };

    option && myChart.setOption(option);
}

