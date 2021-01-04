
import mongoose from 'mongoose';
const { Schema } = mongoose;

const LocationSchema = new Schema({
  
    location: {
        type: String,
        required: true,
    },
    health: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}, { collection: 'Location' });

LocationSchema.pre('save', function (next) {
    const now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

LocationSchema.pre('update', function (next) {
    const now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});



/**
 * get inquiry types
 * @param filter
 * @returns {Promise}
 */
LocationSchema.statics.getLocations = function(filter) {
    console.log("getLocation  -------->", filter)
    const _this = this;

    return new Promise((resolve, reject) => {
        _this.find(filter, (error, result) => {
            if (error) {
                reject({
                    status: 400,
                    error
                });
            } else {
                console.log(result)
                resolve({
                    status: 200,
                    result
                });
            }
        });
    });
};

LocationSchema.statics.saveLocation = function(dataset) {
    console.log("saveCons -------->", dataset)
    const _this = this;
    const _locations = new _this();
    const {
            location,health
        } = dataset;

    

        _locations.location = location;
        _locations.health = health;
  
 
    

    return new Promise((resolve, reject) => {
        _locations.save((err, results) => {
            if (err) {
                console.log(`Error on saving location: ${err}`);
                reject({
                    status: 400,
                    result: err
                });
            } else {
                console.log('location & health added successfully');
                resolve({
                    status: 200,
                    result: results
                });
            }
        });
    });
};



export default mongoose.model('Location', LocationSchema);
