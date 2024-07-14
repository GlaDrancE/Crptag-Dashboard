// LineChart.js

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ReactApexChart from "react-apexcharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stateWiseScanChart: any = {
  series: [
    {
      name: "Original",
      data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000],
    },
    {
      name: "Fake",
      data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000],
    },
  ],
  options: {
    chart: {
      height: 325,
      type: "area",
      fontFamily: "Nunito, sans-serif",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 2,
      lineCap: "square",
    },
    dropShadow: {
      enabled: true,
      opacity: 0.2,
      blur: 10,
      left: -7,
      top: 22,
    },
    colors: ["#48B74A", "#E7515A"],
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 6,
          fillColor: "#48B74A",
          strokeColor: "transparent",
          size: 7,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 5,
          fillColor: "#E7515A",
          strokeColor: "transparent",
          size: 7,
        },
      ],
    },
    labels: [
      "Tamil Nadu",
      "UP",
      "Assam",
      "Jharkhand",
      "Delhi",
      "Gujrat",
      "Maharashtra",
      "Karnataka",
      "Bihar",
    ],
    xaxis: {
      // axisBorder: {
      //   show: false,
      // },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
      },
      labels: {
        offsetX: 0,
        offsetY: 5,

        style: {
          fontSize: "12px",
          cssClass: "apexcharts-xaxis-title",
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: (value: number) => {
          return value / 1000;
        },
        offsetX: -10,
        offsetY: 0,
        style: {
          fontSize: "12px",
          cssClass: "apexcharts-yaxis-title",
        },
      },
      opposite: false,
    },
    grid: {
      borderColor: "#E0E6ED",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "16px",
      markers: {
        width: 10,
        height: 10,
        offsetX: -2,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    tooltip: {
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityTo: 0.05,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="h-full w-full mt-8">
      <ReactApexChart
        series={stateWiseScanChart.series}
        options={stateWiseScanChart.options}
        type="area"
        height={405}
      />
    </div>
  );
};

export default LineChart;
