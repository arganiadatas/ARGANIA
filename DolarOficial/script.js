// Referencias a los elementos del DOM
const chartContainer = document.getElementById('chart-container');
const infoBox = document.getElementById('info-box');
const cryptoName = document.getElementById('crypto-name');
const cryptoLogo = document.getElementById('crypto-logo');
const dateElement = document.getElementById('date');

// Configuración del nombre y logo de la criptomoneda
const cryptoDetails = {
    name: 'Euro',
    logo: 'https://static.vecteezy.com/system/resources/previews/012/807/322/non_2x/euro-icon-symbol-for-pictogram-or-graphic-design-element-format-png.png', // URL del logo
};

cryptoName.textContent = cryptoDetails.name;
cryptoLogo.src = cryptoDetails.logo;
cryptoLogo.alt = `${cryptoDetails.name} Logo`;

// Datos locales (mock)
const localData = [
    { time: "2024-11-16 03:08:00", open: 24.00, high: 24.00, low: 23.60, close: 23.76, volume: 0.0 },
    { time: "2024-11-17 18:04:00", open: 23.76, high: 24.50, low: 24.10, close: 24.40, volume: 0.0 },
    { time: "2024-11-18 18:26:00", open: 24.40, high: 25.10, low: 24.90, close: 25.02, volume: 0.0 },
    { time: "2024-11-19 18:18:00", open: 24.40, high: 32.20, low: 20.50, close: 29.43, volume: 0.0 },
    { time: "2024-11-20 17:40:00", open: 29.43, high: 25.50, low: 19.80, close: 22.40, volume: 0.0 },
    { time: "2024-11-21 18:13:00", open: 22.40, high: 22.30, low: 22.05, close: 22.13, volume: 0.0 },
    { time: "2024-11-22 18:14:00", open: 22.13, high: 23.05, low: 22.10, close: 23.00, volume: 0.0 },
    { time: "2024-11-23 18:10:00", open: 23.00, high: 23.15, low: 23.00, close: 23.10, volume: 0.0 },
    { time: "2024-11-25 18:10:00", open: 23.10, high: 23.10, low: 22.90, close: 23.05, volume: 0.0 },
    { time: "2024-11-26 18:23:00", open: 23.05, high: 23.20, low: 23.10, close: 23.15, volume: 0.0 },
    { time: "2024-11-27 15:41:00", open: 23.15, high: 24.00, low: 23.20, close: 23.40, volume: 0.0 },
    { time: "2024-11-28 15:41:00", open: 23.40, high: 23.60, low: 23.10, close: 23.30, volume: 0.0 },
    { time: "2024-11-28 18:26:00", open: 23.30, high: 23.55, low: 23.25, close: 24.00, volume: 0.0 },
    { time: "2024-11-29 18:35:00", open: 24.00, high: 24.15, low: 23.95, close: 24.15, volume: 0.0 },
    { time: "2024-12-03 18:22:00", open: 24.15, high: 26.00, low: 25.20, close: 25.80, volume: 0.0 },
    { time: "2024-12-04 17:39:00", open: 25.80, high: 25.80, low: 24.90, close: 25.00, volume: 0.0 },
    { time: "2024-12-05 17:54:00", open: 25.00, high: 25.60, low: 25.20, close: 25.55, volume: 0.0 },
    { time: "2024-12-06 17:54:00", open: 25.55, high: 26.40, low: 26.00, close: 26.30, volume: 0.0 },
    { time: "2024-12-07 17:54:00", open: 26.30, high: 27.20, low: 26.00, close: 27.00, volume: 0.0 },
    { time: "2024-12-09 18:00:00", open: 27.00, high: 27.00, low: 26.20, close: 27.00, volume: 0.0 },
    { time: "2024-12-10 18:00:00", open: 27.00, high: 27.05, low: 26.20, close: 26.50, volume: 0.0 },
    { time: "2024-12-11 18:00:00", open: 26.50, high: 26.90, low: 26.10, close: 26.20, volume: 0.0 },
    { time: "2024-12-12 18:00:00", open: 26.20, high: 26.20, low: 26.00, close: 26.20, volume: 0.0 },
    { time: "2024-12-13 18:00:00", open: 26.20, high: 26.30, low: 26.00, close: 26.10, volume: 0.0 },
    { time: "2024-12-14 18:05:00", open: 26.10, high: 26.15, low: 26.95, close: 25.95, volume: 0.0 },
    { time: "2024-12-16 18:12:00", open: 25.95, high: 25.55, low: 25.40, close: 25.50, volume: 0.0 },
    { time: "2024-12-17 18:12:00", open: 25.50, high: 26.05, low: 25.90, close: 26.00, volume: 0.0 },
    { time: "2024-12-18 17:58:00", open: 25.50, high: 26.90, low: 27.20, close: 27.10, volume: 0.0 },
    { time: "2024-12-19 18:28:00", open: 27.10, high: 30.00, low: 27.15, close: 28.60, volume: 0.0 },
    { time: "2024-12-20 18:01:00", open: 28.60, high: 30.00, low: 28.65, close: 29.90, volume: 0.0 },
    { time: "2024-12-21 18:02:00", open: 29.90, high: 31.15, low: 29.90, close: 30.90, volume: 0.0 }
];

// Crear el gráfico
const chart = LightweightCharts.createChart(chartContainer, {
    width: chartContainer.offsetWidth,
    height: chartContainer.offsetHeight,
    layout: { backgroundColor: '#1e1e1e', textColor: '#d1d4dc' },
    grid: { vertLines: { color: '#2b2b2b' }, horzLines: { color: '#2b2b2b' } },
    timeScale: { borderColor: '#485c7b', timeVisible: true, secondsVisible: true },
    rightPriceScale: { borderColor: '#485c7b' },
});

// Serie de velas
const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
  });

// Serie de volumen
const volumeSeries = chart.addHistogramSeries({
    color: '#4A90E2',
    priceFormat: { type: 'volume' },
    scaleMargins: { top: 0.8, bottom: 0 },
});

// Serie de análisis técnico (SMA)
const smaSeries = chart.addLineSeries({
    color: '#ff9800',
    lineWidth: 2,
});

// Convertir los datos al formato adecuado
const candlestickData = localData.map(d => ({
    time: new Date(d.time).getTime() / 1000, // Convertir a UNIX timestamp
    open: d.open,
    high: d.high,
    low: d.low,
    close: d.close,
    volume: d.volume,
}));

const volumeData = localData.map(d => ({
    time: new Date(d.time).getTime() / 1000, // Convertir a UNIX timestamp
    value: d.volume,
}));

// Configurar el gráfico con los datos locales
candlestickSeries.setData(candlestickData);
volumeSeries.setData(volumeData);

// Calcular SMA
function calculateSMA(data, period) {
    const sma = [];
    for (let i = period - 1; i < data.length; i++) {
        const sum = data.slice(i - period + 1, i + 1).reduce((acc, d) => acc + d.close, 0);
        sma.push({ time: data[i].time, value: sum / period });
    }
    return sma;
}

// Calcular y agregar la SMA al gráfico
smaSeries.setData(calculateSMA(candlestickData, 3));

// Mostrar la fecha actual con hora, minuto y segundo
function displayCurrentDate() {
    const today = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    dateElement.textContent = today.toLocaleDateString('es-ES', options);
}

displayCurrentDate(); // Mostrar la fecha al cargar
infoBox.textContent = 'Datos cargados correctamente.';


// Ejecutar funciones
fetchMarketData();
setInterval(fetchMarketData, 30000); // Actualizar datos cada 30 segundos
setInterval(displayCurrentDate, 1000); // Actualizar la fecha cada segundo
