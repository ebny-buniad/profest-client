// src/components/MapComponent.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import districts from '../../assets/warehouses.json';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [32, 48],
  iconAnchor: [16, 48],
  popupAnchor: [0, -48]
});

// Component to control map flyTo
const FlyToDistrict = ({ coordinates }) => {
  const map = useMap();
  if (coordinates) {
    map.flyTo(coordinates, 8, { duration: 2 });
  }
  return null;
};

const MapComponent = () => {
  const center = [23.6850, 90.3563];
  const [searchTerm, setSearchTerm] = useState('');
  const [flyToCoord, setFlyToCoord] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const match = districts.find(d => d.district.toLowerCase() === searchTerm.toLowerCase());
    if (match) {
      setFlyToCoord([match.latitude, match.longitude]);
    } else {
      alert('District not found!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by district name"
          className="border px-4 py-2 rounded-l-md w-64"
        />
        <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-r-md">
          Search
        </button>
      </form>

      <MapContainer center={center} zoom={3} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {flyToCoord && <FlyToDistrict coordinates={flyToCoord} />}

        {districts.map((district, index) => (
          <Marker
            key={index}
            position={[district.latitude, district.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className="text-sm">
                <strong>{district.district}</strong><br />
                Region: {district.region}<br />
                City: {district.city}<br />
                Status: {district.status}<br />
                Covered: {district.covered_area.join(', ')}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
