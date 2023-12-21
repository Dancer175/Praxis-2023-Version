import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [7.245951, 47.1416576],
      zoom: 13
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([7.245951, 47.1416576])
      .addTo(map);
  }
};


export { initMapbox };
