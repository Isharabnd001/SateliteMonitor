
import validator from "./validate";

import config from 'config';

import {

     ConModel,LocationModel
} from '../server/models';

const fetch = require('node-fetch');
const LocationController = {



    recordLocation: async (req, res) => {

        try {

            fetch(config.sateliteHosturl)
    .then(response => response.json())
    .then(async json  => 
        {console.log(json);
        
        
       
        const results = await LocationModel.saveLocation(json);
        res.status(200).json({ message: "location and health recorded", location_status:json , monitor_status:results});
 
    
    }
        );

          //  const results = await LocationModel.saveLocation({ });
         //   res.status(200).json({ message: "location and health recorded", results });
        } catch (error) {
            res.status(400).json({ message: "Unsuccessful", error });
        }


    },

    monitorLocations: async (req, res) => {

        try {
            const result = await LocationModel.getLocations({});
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ message: "Unsuccessful", error });
        }
    }


};



export default LocationController;
