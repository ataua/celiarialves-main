"use client"

import 'dotenv/config';
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GMap = ( { center }: { center: google.maps.LatLngLiteral } ) => (

    <APIProvider apiKey={ process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }>
        <Map
            defaultCenter={ center }
            defaultZoom={ 17 }
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