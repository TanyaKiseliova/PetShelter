import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
 });

const MapSection: React.FC = () => {
  const position: [number, number] = [53.902449, 27.451778];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 display-8 fw-bold text-primary">Где мы находимся</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow">
              <div className="card-body">
                <div style={{ height: '450px', width: '100%', marginBottom: '20px' }}>
                  <MapContainer
                    center={position}
                    zoom={14}
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                      <Popup>
                        <b>Приют "В добрые руки"</b><br />
                        ул. Якубовского, д. 22, Минск
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>

                <div className="mt-3">
                  <h5>Адрес:</h5>
                  <p>ул. Якубовского, д. 22, г. Минск, Беларусь</p>
                  <h5>Контакты:</h5>
                  <p>Телефон: +375 (29) 123-45-67</p>
                  <p>Email: petInGoodHands@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;