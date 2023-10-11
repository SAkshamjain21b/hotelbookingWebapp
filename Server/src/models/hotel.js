import mongoose from 'mongoose';

let Schema = mongoose.Schema;

export const hotelSchema = new Schema({
    userID:String,
    name:String,
    ratings: String,
    reviews: String,
    discription: String,
    price: String,
    tax: String,
    location:String,
    images: [String],
    userReviews: [{
        reviewTitle: String,
        userRating: Number,
        userName: String,
        reviewDate: Date,
        content:String
    }],
    hotelImages: [String],
    roomType: [{
        roomImages: [String],
        roomName: String,
        roomArea: Number,
        numberOfRoom:Number,
        roomView: String,
        bedType: String,
        facility: [{
            refundable: Boolean,
            Meals: Boolean,
            welcomeDrink: Boolean,
            breakfast: Boolean,
            vodkaShots: Boolean,
            roomPrice: Number,
            roomTax: Number
        }
        ]
    }],
    bathroom: {
        hairDryer: Boolean,
        bodySoap: Boolean,
        bidget: Boolean,
        hotWater: Boolean,
    },
    bedroom: {
        essentials: Boolean,
        extraPillow: Boolean,
        safe: Boolean,
        fan: Boolean,
        washer: Boolean,
        hanger: Boolean,
        iron: Boolean,
        closet: Boolean,
        ac:Boolean,
    },
    entertainment: {
        tv: Boolean,
        book: Boolean
    },
    family: {   
        childrenToys: Boolean,
        cot: Boolean,
        games:Boolean
    },
    safety: {
        camera: Boolean,
        fireExt: Boolean,
        lock: Boolean,
        firstAid: Boolean
    },
    internet: {   
        wifi: Boolean,
    },
    kitchen: {
        kettle: Boolean,
        coffee: Boolean,
        wineGlass: Boolean,
        wine:Boolean
    },
    outdoor: {
        balcony: Boolean,
        garden: Boolean,
        furniture: Boolean,
        dining: Boolean,
        bbq:Boolean
    },
    vehicle: {   
        parking: Boolean,
    },
    services: {
        luggage: Boolean,
        longterm: Boolean,
        selfCheckin: Boolean,
        staff: Boolean,
        cleaning:Boolean
    }
    
});

