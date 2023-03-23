import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      center={[59.3293, 18.0686]} // Coordinates of Stockholm
      zoom={13}
      style={{ height: '400px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[59.3293, 18.0686]} />
    </MapContainer>
  );
};

export default Map;
