import React from 'react';
import GoogleMapReact from 'google-map-react';

const EventMap = ({ coordinates }) => {
  const longitude = coordinates[0];
  const latitude = coordinates[1];

  const mapSettings = {
    coordinates: {
      lat: latitude,
      lng: longitude
    },
    zoom: 15
  };

  const handleClickMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <div style={{ height: '300px', width: '100%', margin: "2rem 0" }} onClick={handleClickMap} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
          defaultCenter={mapSettings.coordinates}
          defaultZoom={mapSettings.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default EventMap;
