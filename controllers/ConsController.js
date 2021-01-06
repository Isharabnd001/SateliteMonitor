
import validator from "./validate";

import config from 'config';

import {

     ConModel
} from '../server/models';

const ConsController = {



    addCons: async (req, res) => {
        const { name } = req.body;
        console.log('Constellation controller>>', name);
        if (validator.validateReqData(res, name)) { return; }


        try {
            const results = await ConModel.saveCon({ name });
            res.status(200).json({ message: "Constellation successfully added", results });
        } catch (error) {
            res.status(400).json({ message: "Unsuccessful", error });
        }


    },

    getCons: async (req, res) => {

        try {
            const result = await ConModel.getCons({});
            res.status(200).json({ message: "Constellations successfully retrieved",result });
        } catch (error) {
            res.status(400).json({ message: "Unsuccessful", error });
        }
    }


};



export default ConsController;
