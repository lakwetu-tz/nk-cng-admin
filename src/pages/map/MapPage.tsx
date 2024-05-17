import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Card from './Card'

const apiKey = process.env.GOOGLE_MAP_APIKEY;

const cardData = [
  { title: 'T 432 BCD', status: 'Online', location: 'Makumbusho', refills: 17, user: "kelvin marangu" },
  { title: 'T 123 ABC', status: 'Offline', location: 'Mlimani', refills: 17, user: "steven swordfire" },
  { title: 'T 789 XYZ', status: 'Online', location: 'Posta', refills: 17, user: "micheal jordan" },
  // Add more card data here
];

const MapPage = () => {
  const darEsSalaam = { lat: -6.7924, lng: 39.2083 }; // Coordinates for Dar es Salaam
  const [center, setCenter] = useState(darEsSalaam);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey ? apiKey : "AIzaSyCzLm7n7s96NLk-olcnVkAUzDGW2aYT6YQ",
    libraries: ["places"],
  });

  // if (loadError) {
  //   return <div>Error loading maps</div>;
  // }

  // if (!isLoaded) {
  //   <div className="flex items-center justify-center space-x-2">
  //     <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
  //     <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
  //     <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
  //   </div>
  // }

  return (
    <section className="flex h-screen ml-20 w-full">
      {/* Second Sidebar */}
      <aside className="w-96 border-r-2 bg-gray-50 h-full overflow-auto xs:w-full">
        <div className="mt-4 border-b-2 py-2 items-end relative border-gray-200 px-4">
          <FiPlusCircle className="w-8 h-8 mb-2 text-gray-400 justify-end" />
        </div>
        <div className="flex flex-col m-2 bg-white">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              status={card.status}
              refills={card.refills}
              user={card.user}
              location={card.location}
            />
          ))}
        </div>
      </aside>

      {/* Main Body */}
      <section className="flex-1 m-4 rounded-md">
        <div className="flex justify-center items-center w-full h-full">
          {isLoaded ? (
          <GoogleMap
            center={center}
            zoom={14}
            mapContainerStyle={{ height: '100%', width: '100%' }}
            mapTypeId="hybrid"
            options={{
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
            }}
          >
            <Marker position={darEsSalaam} />
          </GoogleMap>
          ): (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-green-600"></div>
              </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default MapPage;
