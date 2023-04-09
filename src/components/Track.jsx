import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, } from 'react-leaflet'
// import * as L from "leaflet";

function Track() {


    return <div> <MapContainer center={[14.0860764, 100.6080406]} zoom={13}>
        <TileLayer attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


    </MapContainer></div>
}

export default Track










    // Map initialization
    // var map = L.map('map').setView([14.0860764, 100.6080406], 6)

    // // osm Layer
    // var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // })
    // osm.addTo(map);

    // if (navigator.geolocation) {
    //     console.log("Your Browser does not support geolocation feature!")
    // } else {
    //     setInterval(() => {
    //         navigator.geolocation.getCurrentPosition(getPosition)
    //     }, 5000);
    // }

    // var marker, circle

    // function getPosition(position) {
    //     console.log(position)
    //     var lat = position.coords.latitude
    //     var long = position.coords.longitude
    //     var accuracy = position.coords.accuracy

    //     if (marker) {
    //         map.removeLayer(marker)
    //     }
    //     if (circle) {
    //         circle.removeLayer(circle)
    //     }

    //     marker = L.marker([lat, long])
    //     circle = L.circle([lat, long], { radius: accuracy })

    //     var featureGroup = L.featureGroup([marker, circle]).addTo(map)

    //     map.fitBounds(featureGroup.getBounds())

    //     console.log("Animals Location is at Latitude: " + lat + "Longitude: " + long + "with an Accuracy of: " + accuracy)


    // }