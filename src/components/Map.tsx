import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import indiaMap from './indiaMap.json'; // Ensure you have the India GeoJSON file in the same directory

const markers = [
  { name: "Mumbai", coordinates: [72.8777, 19.0760], value: 10 },
  { name: "Delhi", coordinates: [77.1025, 28.7041], value: 8 },
  { name: "Bangalore", coordinates: [77.5946, 12.9716], value: 6 },
  { name: "Hyderabad", coordinates: [78.4867, 17.3850], value: 5 },
  { name: "Ahmedabad", coordinates: [72.5714, 23.0225], value: 4 },
  { name: "Chennai", coordinates: [80.2707, 13.0827], value: 3 },
  { name: "Kolkata", coordinates: [88.3639, 22.5726], value: 2 },
  { name: "Pune", coordinates: [73.8567, 18.5204], value: 7 },
  { name: "Jaipur", coordinates: [75.7873, 26.9124], value: 6 },
  { name: "Lucknow", coordinates: [80.9462, 26.8467], value: 5 },
  // Add more markers as needed
];

const colorScale = scaleLinear()
  .domain([0, 10])
  .range(["#ADD8E6", "#00008B"]);

const MapChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000 }} width={800} height={600}>
        <Geographies geography={indiaMap}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} fill="#DDD" stroke="#FFF" />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, value }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle fill={colorScale(value)} stroke="#FFF" r={Math.sqrt(value) * 5} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
