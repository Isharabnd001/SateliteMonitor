
import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConSchema = new Schema({
  
    name: {
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
}, { collection: 'Con' });

ConSchema.pre('save', function (next) {
    const now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

ConSchema.pre('update', function (next) {
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
ConSchema.statics.getCons = function(filter) {
    console.log("getCons  -------->", filter)
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

ConSchema.statics.saveCon = function(dataset) {
    console.log("saveCons -------->", dataset)
    const _this = this;
    const _cons = new _this();
    const {
            name
        } = dataset;

    

        _cons.name = name;
  
 
    

    return new Promise((resolve, reject) => {
        _cons.save((err, results) => {
            if (err) {
                console.log(`Error on saving con: ${err}`);
                reject({
                    status: 400,
                    result: err
                });
            } else {
                console.log('con added successfully');
                resolve({
                    status: 200,
                    result: results
                });
            }
        });
    });
};


ConSchema.statics.updateCon = function(filter, modification) {
    const _this = this;

    const options = { new: true };


    return new Promise((resolve, reject) => {
        _this.findOneAndUpdate(filter, modification, options, (error, result) => {
            if (error) {
                console.log('Error on updating ', error);
                reject({
                    status: 400,
                    error
                });
            } else {
                resolve({
                    status: 200,
                    result
                });
            }
        });
    });
};


export default mongoose.model('Con', ConSchema);
