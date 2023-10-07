import express from 'express';

const router = express();

import hotelRoutes from './Routes/hotel';
router.use('/hotels', hotelRoutes);
router.post('/owner/addHotel', hotelRoutes);





// import express from 'express';
// import hotelRoutes from './Routes/hotel';

// const router = express.Router();

// // Define routes
// router.use('/hotels', hotelRoutes); // Route for fetching hotels
// router.use('/owner', hotelRoutes);  // Route for adding a new hotel

// export default router;
