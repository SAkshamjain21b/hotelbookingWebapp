import express from 'express';
import { getAllxHotels, postHotel,postReview } from '../controllers/hotel.js';

const router = express.Router();

router.get('/', getAllxHotels);
router.post('/owner/addHotel',postHotel);
router.post('/:id',postReview)

export default router;



// import express from 'express';
// import { getAllHotels, postHotel } from '../controllers/hotel';

// const router = express.Router();

// router.get('/', getAllHotels);             // Route for fetching hotels
// router.post('/addHotel', postHotel);       // Route for adding a new hotel

// export default router;
