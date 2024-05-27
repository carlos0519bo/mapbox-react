import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp.tsx'
import './index.css'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fsb3BleiIsImEiOiJjbHdsNDB1dmkxaDFqMmpyeTljc2UyOWhkIn0.rLaee6KcDpU0Irbxm9G9dg';

if (!navigator.geolocation) {
  alert('Activa tu ubicación para que puedas usar esta app') 
  throw new Error('Activa tu ubicación para que puedas usar esta app')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
