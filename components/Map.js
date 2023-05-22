'use client';
import { useState } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import {getCenter} from 'geolib';

function MapComponent({searchResults}) {
  
  //transform the searchresults object into only a lat long object
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  
  const center = getCenter(coordinates);
  
  const [initialViewState, setInitialViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map initialViewState={initialViewState} mapLib={import('mapbox-gl')} mapStyle="mapbox://styles/lifecycles1/clhz9a5zj00e801pnbfbn48lb" mapboxAccessToken={process.env.mapbox_key}>
      {searchResults?.map(result => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p className="cursor-pointer">📌</p>
          </Marker>
        </div>
      ))}
    </Map>
  )
}

export default MapComponent