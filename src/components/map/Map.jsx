import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
import './map.scss';
import Pin from '../pin/Pin';

function Map({items,refrence}) {
  const position = [51.505, -0.09];
  function closeMap(){
    refrence.current.classList.remove('active')
  }
  
  return (
    <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='map'>
      <button onClick={closeMap}>X</button>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((pin)=>(<Pin pins={pin} key={pin.id}/>))}
    </MapContainer>
  );
}

export default Map;
