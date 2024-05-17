"use client"

import 'dotenv/config';
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const center: google.maps.LatLngLiteral = {
    "lat": -25.430724647902036,
    "lng": -49.26883555364751
};

const GMap = () => (

    <APIProvider apiKey={ process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }>
        <Map
            defaultCenter={ center }
            defaultZoom={ 18 }
            gestureHandling={ 'greedy' }
            disableDefaultUI={ true }
            className='w-full max-w-[1080px] h-full'
            mapId="gmaps-clinica"
            reuseMaps={ true }

        >
            <Marker
                position={ center }
            />
        </Map>
    </APIProvider>

)

export default GMap