"use strict";

$(function () {
//  chart1();
  //chart2();
  //smallchart1();
  //smallchart2();
  //smallchart3();
  //getCardChart();
  //vectormap();

  if ($("#project-team-scroll").length) {
    $("#project-team-scroll")
      .css({
        height: 400,
      })
      .niceScroll();
  }
  if ($("#proTeamScroll").length) {
    $("#proTeamScroll")
      .css({
        height: 400,
      })
      .niceScroll();
  }
  if ($("#top-5-scroll").length) {
    $("#top-5-scroll")
      .css({
        height: 380,
      })
      .niceScroll();
  }
});

function getCardChart() {
  var randomFromArray = function (array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  var chartData = [47, 29, 54, 34, 41, 22, 48, 53, 22, 20, 50, 59, 56, 45, 48];

  // chart 1
  var card1 = {
    chart: {
      type: "area",
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    series: [{
      data: randomFromArray(chartData),
    }, ],
    colors: ["#FA9313"],
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
  };
  var card1 = new ApexCharts(document.querySelector("#cardChart1"), card1);
  card1.render();

  // chart 2
  var card2 = {
    chart: {
      type: "area",
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    series: [{
      data: randomFromArray(chartData),
    }, ],
    colors: ["#99C853"],
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
  };
  var card2 = new ApexCharts(document.querySelector("#cardChart2"), card2);
  card2.render();

  // chart 3
  var card3 = {
    chart: {
      type: "area",
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    series: [{
      data: randomFromArray(chartData),
    }, ],
    colors: ["#1B55E2"],
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
  };
  var card3 = new ApexCharts(document.querySelector("#cardChart3"), card3);
  card3.render();

  // chart 4
  var card4 = {
    chart: {
      type: "area",
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    series: [{
      data: randomFromArray(chartData),
    }, ],
    colors: ["#E7515A"],
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
  };
  var card4 = new ApexCharts(document.querySelector("#cardChart4"), card4);
  card4.render();
}

function chart1() {
  var options = {
    series: [{
        name: "income",
        data: [15, 48, 36, 20, 40, 60, 35, 20],
      },
      {
        name: "expense",
        data: [8, 22, 60, 35, 17, 24, 48, 37],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#8b31d0", "#757575"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
      lineCap: "square",
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: {
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: "12px",
          fontFamily: "Segoe UI",
          cssClass: "apexcharts-xaxis-title",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: "Segoe UI",
          cssClass: "apexcharts-yaxis-title",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 10,
        height: 10,
      },
      itemMargin: {
        horizontal: 0,
        vertical: 20,
      },
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.28,
        opacityTo: 0.05,
        stops: [45, 100],
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();


  $('#chart-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var id = $(this).attr('data-id');
    if (id && id === "1") {
      chart.updateSeries([{
          name: "income",
          data: [15, 48, 36, 20, 40, 60, 35, 20],
        },
        {
          name: "expense",
          data: [8, 22, 60, 35, 17, 24, 48, 37],
        },
      ])
    } else if (id && id === "2") {
      chart.updateSeries([{
          name: "income",
          data: [19, 38, 43, 27, 44, 55, 32, 26],
        },
        {
          name: "expense",
          data: [12, 20, 58, 39, 21, 31, 41, 37],
        }
      ])
    } else if (id && id === "3") {
      chart.updateSeries([{
          name: "income",
          data: [10, 28, 22, 32, 41, 51, 42, 30],
        },
        {
          name: "expense",
          data: [17, 22, 42, 35, 31, 28, 53, 31],
        }
      ])
    }

  });
}

function chart2() {
  var options = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105]
    }],
    chart: {
      type: 'bar',
      height: 350,
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#5C9FFB", "#AEAEAE"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();
}

function smallchart1() {
  var options = {
    series: [{
      name: "Net Profit",
      data: [36, 65, 45, 36, 61, 58],
    }, ],
    chart: {
      type: "bar",
      height: 300,
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 2,
        left: -10,
        top: 22,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: "Segoe UI",
          cssClass: "apexcharts-xaxis-title",
        },
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
      labels: {
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: "Segoe UI",
          cssClass: "apexcharts-yaxis-title",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "verticle",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: false,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#schart1"), options);
  chart.render();
}

function smallchart2() {
  var options = {
    series: [75],
    chart: {
      height: 300,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#00ff001C",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            opacity: 0.3,
            blur: 6,
            left: -10,
            top: 0,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Percent"],
  };

  var chart = new ApexCharts(document.querySelector("#schart2"), options);
  chart.render();
}

function smallchart3() {
  var options = {
    series: [{
        name: "series1",
        data: [81, 90, 78, 101, 92, 109, 100],
      },
      {
        name: "series2",
        data: [61, 82, 95, 82, 84, 102, 91],
      },
    ],
    chart: {
      height: 300,
      type: "area",
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#6777EF", "#FEB019"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
      lineCap: "square",
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: {
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: "12px",
          fontFamily: "Segoe UI",
          cssClass: "apexcharts-xaxis-title",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: "Segoe UI",
          cssClass: "apexcharts-yaxis-title",
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#schart3"), options);
  chart.render();
}

function vectormap() {
  $("#visitorMap").vectorMap({
    map: "world_en",
    zoomButtons: false,
    backgroundColor: "#ffffff",
    borderColor: "#f2f2f2",
    borderOpacity: 0.8,
    borderWidth: 1,
    hoverColor: "#000",
    hoverOpacity: 0.8,
    color: "#ddd",
    normalizeFunction: "linear",
    selectedRegions: false,
    showTooltip: true,
    pins: {
      in: '<div class="jqvmap-circle bg-orange"></div>',
      ca: '<div class="jqvmap-circle bg-green"></div>',
      au: '<div class="jqvmap-circle bg-cyan"></div>',
      ru: '<div class="jqvmap-circle bg-pink"></div>',
      ar: '<div class="jqvmap-circle bg-blue"></div>',
      sy: '<div class="jqvmap-circle bg-teal"></div>',
      ae: '<div class="jqvmap-circle bg-amber"></div>',
      nz: '<div class="jqvmap-circle bg-brown"></div>',
      tl: '<div class="jqvmap-circle bg-indigo"></div>',
      ng: '<div class="jqvmap-circle bg-light-green"></div>',
      si: '<div class="jqvmap-circle bg-grey"></div>',
      pa: '<div class="jqvmap-circle bg-deep-orange"></div>',
    },
  });
}
