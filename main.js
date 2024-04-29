import './index.css'
import { createChart } from 'lightweight-charts';

// Lightweight Charts™ Example: Legend
// https://tradingview.github.io/lightweight-charts/tutorials/how_to/legends

// Lightweight Charts™ Example: Tracking Tooltip
// https://tradingview.github.io/lightweight-charts/tutorials/how_to/tooltips

// Lightweight Charts™ Example: Magnifier Tooltip
// https://tradingview.github.io/lightweight-charts/tutorials/how_to/tooltips

const chartOptions = {
    layout: {
        textColor: 'white',
        background: { type: 'solid', color: 'black' },
    },
};
/** @type {import('lightweight-charts').IChartApi} */
const chart = createChart(document.getElementById('container'), chartOptions);

chart.applyOptions({
    leftPriceScale: {
        visible: true,
        borderVisible: false,
    },
    rightPriceScale: {
        visible: false,
    },
    timeScale: {
        borderVisible: false,
    },
    crosshair: {
        horzLine: {
            visible: false,
            labelVisible: false,
        },
        vertLine: {
            visible: true,
            style: 0,
            width: 2,
            color: 'rgba(38, 198, 218, 1)',
            labelVisible: false,
        },
    },
    // hide the grid lines
    grid: {
        vertLines: {
            visible: false,
        },
        horzLines: {
            visible: false,
        },
    },
});

const series = chart.addAreaSeries({
    topColor: 'rgba(4, 198, 218, 1)',
    bottomColor: 'rgba(8, 43, 47, 1)',
    lineColor: 'rgba(38, 198, 218, 1)',
    lineWidth: 2,
    crossHairMarkerVisible: false,
    priceLineVisible: false,
    lastValueVisible: false,
});
series.priceScale().applyOptions({
    scaleMargins: {
        top: 0.3, // leave some space for the legend
        bottom: 0.25,
    },
});

series.setData([
    { time: '2018-10-12', value: 102 },
    { time: '2018-10-15', value: 100.15 },
    { time: '2018-10-16', value: 99 },
    { time: '2018-10-17', value: 98 },
    { time: '2018-10-18', value: 96 },
    { time: '2018-10-19', value: 95.5 },
    { time: '2018-10-22', value: 92.400002 },
    { time: '2018-10-23', value: 92.300003 },
    { time: '2018-10-24', value: 92.900002 },
    { time: '2018-10-25', value: 91.849998 },
    { time: '2018-10-26', value: 91.599998 },
    { time: '2018-10-29', value: 94.050003 },
    { time: '2018-10-30', value: 98.25 },
    { time: '2018-10-31', value: 97.25 },
    { time: '2018-11-01', value: 96.879997 },
    { time: '2018-11-02', value: 101.78 },
    { time: '2018-11-06', value: 102.4 },
    { time: '2018-11-07', value: 100.6 },
    { time: '2018-11-08', value: 98.5 },
    { time: '2018-11-09', value: 95.139999 },
    { time: '2018-11-12', value: 96.900002 },
    { time: '2018-11-13', value: 97.400002 },
    { time: '2018-11-14', value: 103.3 },
    { time: '2018-11-15', value: 102.74 },
    { time: '2018-11-16', value: 101.2 },
    { time: '2018-11-19', value: 98.720001 },
    { time: '2018-11-20', value: 102.2 },
    { time: '2018-11-21', value: 108.8 },
    { time: '2018-11-22', value: 109.9 },
    { time: '2018-11-23', value: 113.74 },
    { time: '2018-11-26', value: 110.9 },
    { time: '2018-11-27', value: 113.28 },
    { time: '2018-11-28', value: 113.6 },
    { time: '2018-11-29', value: 113.14 },
    { time: '2018-11-30', value: 114.4 },
    { time: '2018-12-03', value: 111.84 },
    { time: '2018-12-04', value: 106.7 },
    { time: '2018-12-05', value: 107.8 },
    { time: '2018-12-06', value: 106.44 },
    { time: '2018-12-07', value: 103.7 },
    { time: '2018-12-10', value: 101.02 },
    { time: '2018-12-11', value: 102.72 },
    { time: '2018-12-12', value: 101.8 },
    { time: '2018-12-13', value: 102 },
    { time: '2018-12-14', value: 102.1 },
    { time: '2018-12-17', value: 101.04 },
    { time: '2018-12-18', value: 101.6 },
    { time: '2018-12-19', value: 102 },
    { time: '2018-12-20', value: 102.02 },
    { time: '2018-12-21', value: 102.2 },
    { time: '2018-12-24', value: 102.1 },
    { time: '2018-12-25', value: 100.8 },
    { time: '2018-12-26', value: 101.02 },
    { time: '2018-12-27', value: 100.5 },
    { time: '2018-12-28', value: 101 },
    { time: '2019-01-03', value: 101.5 },
    { time: '2019-01-04', value: 101.1 },
    { time: '2019-01-08', value: 101.1 },
    { time: '2019-01-09', value: 102.06 },
    { time: '2019-01-10', value: 105.14 },
    { time: '2019-01-11', value: 104.66 },
    { time: '2019-01-14', value: 106.22 },
    { time: '2019-01-15', value: 106.98 },
    { time: '2019-01-16', value: 108.4 },
    { time: '2019-01-17', value: 109.06 },
    { time: '2019-01-18', value: 107 },
    { time: '2019-01-21', value: 105.8 },
    { time: '2019-01-22', value: 105.24 },
    { time: '2019-01-23', value: 105.4 },
    { time: '2019-01-24', value: 105.38 },
    { time: '2019-01-25', value: 105.7 },
    { time: '2019-01-28', value: 105.8 },
    { time: '2019-01-29', value: 106.1 },
    { time: '2019-01-30', value: 108.6 },
    { time: '2019-01-31', value: 107.92 },
    { time: '2019-02-01', value: 105.22 },
    { time: '2019-02-04', value: 102.44 },
    { time: '2019-02-05', value: 102.26 },
    { time: '2019-02-06', value: 102 },
    { time: '2019-02-07', value: 101.62 },
    { time: '2019-02-08', value: 101.9 },
    { time: '2019-02-11', value: 101.78 },
    { time: '2019-02-12', value: 102.7 },
    { time: '2019-02-13', value: 100.14 },
    { time: '2019-02-14', value: 101.36 },
    { time: '2019-02-15', value: 101.62 },
    { time: '2019-02-18', value: 100.74 },
    { time: '2019-02-19', value: 100 },
    { time: '2019-02-20', value: 100.04 },
    { time: '2019-02-21', value: 100 },
    { time: '2019-02-22', value: 100.12 },
    { time: '2019-02-25', value: 100.04 },
    { time: '2019-02-26', value: 98.980003 },
    { time: '2019-02-27', value: 97.699997 },
    { time: '2019-02-28', value: 97.099998 },
    { time: '2019-03-01', value: 96.760002 },
    { time: '2019-03-04', value: 98.360001 },
    { time: '2019-03-05', value: 96.260002 },
    { time: '2019-03-06', value: 98.120003 },
    { time: '2019-03-07', value: 99.68 },
    { time: '2019-03-11', value: 102.1 },
    { time: '2019-03-12', value: 100.22 },
    { time: '2019-03-13', value: 100.5 },
    { time: '2019-03-14', value: 99.660004 },
    { time: '2019-03-15', value: 100.08 },
    { time: '2019-03-18', value: 99.919998 },
    { time: '2019-03-19', value: 99.459999 },
    { time: '2019-03-20', value: 98.220001 },
    { time: '2019-03-21', value: 97.300003 },
    { time: '2019-03-22', value: 97.660004 },
    { time: '2019-03-25', value: 97 },
    { time: '2019-03-26', value: 97.019997 },
    { time: '2019-03-27', value: 96.099998 },
    { time: '2019-03-28', value: 96.699997 },
    { time: '2019-03-29', value: 96.300003 },
    { time: '2019-04-01', value: 97.779999 },
    { time: '2019-04-02', value: 98.360001 },
    { time: '2019-04-03', value: 98.5 },
    { time: '2019-04-04', value: 98.360001 },
    { time: '2019-04-05', value: 99.540001 },
    { time: '2019-04-08', value: 98.580002 },
    { time: '2019-04-09', value: 97.239998 },
    { time: '2019-04-10', value: 97.32 },
    { time: '2019-04-11', value: 98.400002 },
    { time: '2019-04-12', value: 98.220001 },
    { time: '2019-04-15', value: 98.720001 },
    { time: '2019-04-16', value: 99.120003 },
    { time: '2019-04-17', value: 98.620003 },
    { time: '2019-04-18', value: 98 },
    { time: '2019-04-19', value: 97.599998 },
    { time: '2019-04-22', value: 97.599998 },
    { time: '2019-04-23', value: 96.800003 },
    { time: '2019-04-24', value: 96.32 },
    { time: '2019-04-25', value: 96.339996 },
    { time: '2019-04-26', value: 97.120003 },
    { time: '2019-04-29', value: 96.980003 },
    { time: '2019-04-30', value: 96.32 },
    { time: '2019-05-02', value: 96.860001 },
    { time: '2019-05-03', value: 96.699997 },
    { time: '2019-05-06', value: 94.940002 },
    { time: '2019-05-07', value: 94.5 },
    { time: '2019-05-08', value: 94.239998 },
    { time: '2019-05-10', value: 92.900002 },
    { time: '2019-05-13', value: 91.279999 },
    { time: '2019-05-14', value: 91.599998 },
    { time: '2019-05-15', value: 90.080002 },
    { time: '2019-05-16', value: 91.68 },
    { time: '2019-05-17', value: 91.959999 },
    { time: '2019-05-20', value: 91.080002 },
    { time: '2019-05-21', value: 90.760002 },
    { time: '2019-05-22', value: 91 },
    { time: '2019-05-23', value: 90.739998 },
    { time: '2019-05-24', value: 91 },
    { time: '2019-05-27', value: 91.199997 },
    { time: '2019-05-28', value: 90.68 },
    { time: '2019-05-29', value: 91.120003 },
    { time: '2019-05-30', value: 90.419998 },
    { time: '2019-05-31', value: 93.800003 },
    { time: '2019-06-03', value: 96.800003 },
    { time: '2019-06-04', value: 96.34 },
    { time: '2019-06-05', value: 95.94 },
]);

const symbolName = 'Facultad LIGEE';


const container = document.getElementById('container');
const legend = document.createElement('div');
legend.classList.add('flex');
legend.style = `left: 12px; top: 12px; z-index: 1; font-size: 14px; line-height: 18px;`;
container.appendChild(legend);

const firstRow = document.createElement('div');
firstRow.innerHTML = symbolName;
firstRow.classList.add('text-4xl', 'font-bree', 'text-green-cane', 'text-shadow-greenCane');
legend.appendChild(firstRow);

const toolTipWidth = 96;

// Create and style the tooltip html element
const toolTip = document.createElement('div');
toolTip.style = `width: ${toolTipWidth}px; height: 300px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border-radius: 4px 4px 0px 0px; border-bottom: none; box-shadow: 0 2px 5px 0 rgba(117, 134, 150, 0.45);font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
toolTip.style.background = `rgba(${'0, 0, 0'}, 0.25)`;
toolTip.style.color = 'white';
toolTip.style.borderColor = 'rgba( 239, 83, 80, 1)';
container.appendChild(toolTip);

// update tooltip
chart.subscribeCrosshairMove(param => {
    if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > container.clientWidth ||
        param.point.y < 0 ||
        param.point.y > container.clientHeight
    ) {
        toolTip.style.display = 'none';
    } else {
        // time will be in the same format that we supplied to setData.
        // thus it will be YYYY-MM-DD
        const dateStr = param.time;
        toolTip.style.display = 'block';
        const data = param.seriesData.get(series);
        const price = data.value !== undefined ? data.value : data.close;
        toolTip.innerHTML = `<div style="color: ${'rgba( 239, 83, 80, 1)'}">⬤ ABC Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: ${'white'}">
            ${Math.round(100 * price) / 100}
            </div><div style="color: ${'white'}">
            ${dateStr}
            </div>`;

        let left = param.point.x; // relative to timeScale
        const timeScaleWidth = chart.timeScale().width();
        const priceScaleWidth = chart.priceScale('left').width();
        const halfTooltipWidth = toolTipWidth / 2;
        left += priceScaleWidth - halfTooltipWidth;
        left = Math.min(left, priceScaleWidth + timeScaleWidth - toolTipWidth);
        left = Math.max(left, priceScaleWidth);

        toolTip.style.left = left + 'px';
        toolTip.style.top = 0 + 'px';
    }
});

chart.timeScale().fitContent();