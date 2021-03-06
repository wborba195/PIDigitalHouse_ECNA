// MONTA A URL DA API

var burl = 'https://api.binance.com';
var query = '/api/v1/ticker/24hr';

query += '?symbol=BTCUSDT';

var url = burl + query;

// CRIA AS VARIAVEIS QUE ARMAZENAM OS DADOS COMO UM DATABASE

var historicoPrecos = [];

var segundos = []

// CRIA AS VARIAVEIS QUE ARMAZENAM OS DADOS PARA COMPOR OS GRAFICOS

var historicoPrecosGrafico = [];

var segundosGrafico = []

// CONFIGURA O INTERVALO

var intervalo = 1

// FAZ A REQUISICAO PARA A API
// E ADICIONA OS NOVOS VALORES PARA AS VARIAVEIS

setInterval( () => {
  fetch(url)
  .then( (response) => {
    var resposta = response.json();
    return resposta;
  })
  .then((data) => {
    let preco = data.lastPrice;
    historicoPrecos.push(preco);
    segundos.push('');
    // console.log(historicoPrecos)
    // console.log(segundos)
  })
}, intervalo*1000);

// TRATA OS DADOS DO DATABASE

setInterval( () => {
  console.log(historicoPrecos)
  // if ((segundos.length % 5) == 0) {
  //   for (var i = 0; i < segundos.length; i++) {
  //   }
  // } 
}, intervalo*1000)


// GERA O GRAFICO DO DESKTOP

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: segundos,
        datasets: [{
            label: 'Bitcoin - Dollar',
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: '#f1f1f1',
            fontColor: "#f1f1f1",
            pointStyle: 'rectRounded',
            borderWidth: 4,
            tension: 0.3,
            radius: 1.7,
            data: historicoPrecos,
            border: 1.5,
            angle:0,
            borderAlign: 'center',
            color: ["#fff","#fff"]
        }]
    },
    // Configuration options go here
    options: {
        scales: {
          yAxes: [{
              ticks: {
                  fontColor: '#fff',
                  zeroLineWidth: 1
              }
          }]
      },
      
      legend: {

        labels: {
          fontColor: "#fff",
          fontSize: 16,
          fontStyle: "bold",
          borderColor: '#f1f1f1'

        } 
      }
    }
});

// ATUALIZA O GRAFICO DA HOME

setInterval( () => {
  chart.update()
  if (segundos.length > 60) {
    segundosGrafico.shift();
    historicoPrecosGrafico.shift();
  }
}, 1000);


// GERA O GRAFICO DO MOBILE

var ctxR = document.getElementById('myChartR').getContext('2d');
var chartR = new Chart(ctxR, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: segundos,
      datasets: [{
          label: 'Bitcoin - Dollar',
          backgroundColor: 'rgba(255,255,255,0)',
          borderColor: '#f1f1f1',
          fontColor: "#f1f1f1",
          pointStyle: 'rectRounded',
          borderWidth: 4,
          tension: 0.3,
          radius: 1.7,
          data: historicoPrecos,
          border: 1.5,
          angle:0,
          borderAlign: 'center',
          color: ["#fff","#fff"]
      }]
  },
  // Configuration options go here
  options: {
      scales: {
        yAxes: [{
            ticks: {
                fontColor: '#fff',
                zeroLineWidth: 1
            }
        }]
    },
    
    legend: {

      labels: {
        fontColor: "#fff",
        fontSize: 16,
        fontStyle: "bold",
        borderColor: '#f1f1f1'

      } 
    }
  } 
});

// ATUALIZA O GRAFICO DO MOBILE

setInterval( () => {
  chartR.update()
  if (segundos.length > 60) {
    segundos.shift();
    historicoPrecos.shift();
  }
}, 1000);

