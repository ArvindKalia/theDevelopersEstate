import "./map.scss"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Pin from "../pin/pin.jsx"
import { Link } from "react-router-dom"

function Map({ items }) {
    
    return (

        <MapContainer center={[53.4808, -2.2426]} zoom={7} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {items.map(item => (
                <Pin item={item} key={item.id} />                
            ))}
        </MapContainer>
    )
}

export default Map