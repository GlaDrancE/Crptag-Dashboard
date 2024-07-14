import { useState, useEffect, useRef } from "react";
import * as turf from "@turf/turf";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  Tooltip,
  TooltipItem,
} from "chart.js";
import * as ChartGeo from "chartjs-chart-geo";
import React from "react";
import {
  BubbleMapController,
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale,
  SizeScale,
} from "chartjs-chart-geo";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  Tooltip,
  ChartDataLabels,
  GeoFeature,
  ChoroplethController,
  ColorScale,
  ProjectionScale,
  CategoryScale,
  BubbleMapController,
  SizeScale,
  PointElement
);
import MapJson from "./indiaMap.json";

export interface MapData {
  id: number;
  ip: string;
  latitude: number;
  longitude: number;
  value: number;
  state: string;
}
interface MyCharProps {
  displayData: { name: string; value: number }[];
  // calculateCases: any;
}
interface MapProps {
  data: { name: string; value: number }[];
  countryStates: any;
  // calculateCases: any;
}
function MyChart({ displayData }: MyCharProps) {
  let [countryStates, setCountryStates] = useState<any>(MapJson);
  let [data, setData] = useState<any>(null);

  if (!countryStates) {
    Promise.all([
      fetch(
        "https://newwton-images.s3.ap-south-1.amazonaws.com/states_india.geojson",
        { mode: "no-cors" }
      ).then((r) => r.json()),
    ]).then(([countryFeatures]) => {
      setCountryStates(MapJson);
    });
  }

  function updateData() {
    // if (!data) return;
    // data = data.map((obj: any) => {
    //   if (obj.name === "Arizona") {
    //     obj.latitude = 34.0;
    //     obj.longitude = -117.0;
    //   }
    // });
    // setData(data);
    console.log("calling map");

    return;
  }

  if (!countryStates) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 border-t-4 border-black rounded-full animate-spin"></div>
      </div>
    );
  } else {
    return (
      <>
        <Map data={displayData} countryStates={countryStates} />
        {/* <button
          type="submit"
          className="z-50 relative"
          onClick={() => updateData()}
        >
          Refresh
        </button> */}
      </>
    );
  }
}

const Map = ({ data, countryStates }: MapProps) => {
  const calculateCases = (c: any) => {
    const temp = data.find(
      ({ name }) =>
        name === c.properties.st_nm.replace(/\s/g, "-").toLowerCase()
    );
    if (!temp) return { ...c, value: 0 };
    return { ...c, value: temp.value };
  };
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const parentContainer = canvasRef.current.parentElement;
    if (!parentContainer) return;
    canvasRef.current.width = parentContainer.clientWidth;
    canvasRef.current.height = parentContainer.clientHeight;

    const countryFeatures: Object[] = countryStates.features;
    let chartStatus = ChartJS.getChart("canvas"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    //! Code to extract features from topological data
    // const countryFeatures = ChartGeo.topojson.feature(
    //   countryStates,
    //   countryStates.objects.states
    // ).features;
    const canvas = canvasRef.current;

    const valuedData = countryFeatures.map((c: any) => {
      return calculateCases(c);
    });
    console.log(valuedData);
    const chart = new ChartJS(canvas, {
      type: "choropleth",
      data: {
        // labels: countryFeatures.map((d: any) => {
        //   d.properties.st_nm;
        // }),
        datasets: [
          {
            label: "working",
            outline: countryFeatures,
            showOutline: true,
            backgroundColor: valuedData.map((v) => {
              if (v.value >= 10 && v.value < 30) {
                return "#CAF4FF";
              } else if (v.value >= 30 && v.value < 50) {
                return "#A0DEFF";
              } else if (v.value >= 50 && v.value < 60) {
                return "#A0DEFE";
              } else if (v.value >= 60 && v.value < 70) {
                return "#A0DEEE";
              } else if (v.value >= 70 && v.value < 80) {
                return "#5AB2FF";
              } else if (v.value >= 80 && v.value < 100) {
                return "#5AB2EF";
              } else {
                return "#FFF9D0";
              }
            }),
            // data: data.map((d) =>
            //   Object.assign(d, { value: Math.round(Math.random() * 10) })
            // ),
            data: valuedData.map((d: any) => ({
              feature: d,
              value: d.value,
            })),
          },
        ],
      },

      options: {
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            align: "top",
            formatter: (v) => {
              return v.feature.properties.st_nm;
            },
            display: false,
          },
          tooltip: {
            callbacks: {
              // title: (context: TooltipItem<"choropleth">[]) => {
              //   const { feature } = context[0].raw as any;
              //   return "feature.properties.name"; // Replace 'name' with the appropriate property if needed
              // },
              label: (context: TooltipItem<"choropleth"> | any) => {
                const { value } = context.raw as any;
                const NAME = context.raw.feature.properties.st_nm;
                return `State: ${NAME} \nCases: ${value}`; // Customize this as needed
              },
            },
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Tooltip background color
            titleColor: "white", // Tooltip title color
            bodyColor: "white", // Tooltip body color
          },
        },
        elements: {
          point: {
            radius: 5,
          },
        },
        scales: {
          projection: {
            axis: "x",
            projection: "mercator",
            display: false,
          },
          size: {
            display: false,
            axis: "x",
            backgroundColor: "red",
          },
        },
      },
    });
  });

  return (
    <div className="w-full h-[90%]">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default MyChart;
