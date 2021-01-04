import _ from 'lodash';

const error = 'Data not found';

const validator = {
    validateReqData: (res, data, field = null) => {
        if (!data || _.isEmpty(data)) {
            res.status(400).json({ error: field ? `Unable to find data for field: ${field}` : error });
            return true;
        }
        return false;
    }

};

export default validator;
