import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

function Pin({pins}) {
  return (
    <Marker position={[pins.latitude,pins.longitude]}> 
          <Popup>
            <div className="popupContainer">
                <img src={`${pins.img}`} alt="" />
                <div className="textContainer">
                    <Link to={`/list/${pins.id}`}>{pins.title}</Link>
                    <span>${pins.bedroom} bedroom</span>
                    <b>${pins.price}</b>
                </div>
            </div>
          </Popup>
    </Marker>
  )
}

export default Pin