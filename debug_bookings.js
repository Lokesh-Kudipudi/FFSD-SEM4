// Debug script to troubleshoot booking issues
// Run this with: node debug_bookings.js

const mongoose = require('mongoose');
const { Booking } = require('./Model/bookingModel');
const { Hotel } = require('./Model/hotelModel');
const { Tour } = require('./Model/tourModel');
const { User } = require('./Model/userModel');

// Load environment variables
require('dotenv').config();

async function debugBookings() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('Connected to MongoDB successfully!');
        
        // Check if models exist
        console.log('\n=== Model Registration Check ===');
        console.log('Hotel model:', mongoose.models.Hotel ? 'Registered' : 'Not registered');
        console.log('Tour model:', mongoose.models.Tour ? 'Registered' : 'Not registered');
        console.log('User model:', mongoose.models.User ? 'Registered' : 'Not registered');
        console.log('Booking model:', mongoose.models.Booking ? 'Registered' : 'Not registered');
        
        // Check existing bookings
        console.log('\n=== Existing Bookings Check ===');
        const bookings = await Booking.find({}).limit(5);
        console.log(`Total bookings found: ${bookings.length}`);
        
        if (bookings.length > 0) {
            console.log('\nFirst few bookings:');
            bookings.forEach((booking, index) => {
                console.log(`Booking ${index + 1}:`, {
                    id: booking._id,
                    type: booking.type,
                    userId: booking.userId,
                    itemId: booking.itemId,
                    hasBookingDetails: !!booking.bookingDetails,
                    status: booking.bookingDetails?.status
                });
            });
            
            // Try to populate one booking
            console.log('\n=== Population Test ===');
            const populatedBooking = await Booking.findById(bookings[0]._id)
                .populate('userId')
                .populate('itemId');
                
            console.log('Population result:', {
                bookingId: populatedBooking._id,
                userPopulated: !!populatedBooking.userId && typeof populatedBooking.userId === 'object',
                itemPopulated: !!populatedBooking.itemId && typeof populatedBooking.itemId === 'object',
                itemType: populatedBooking.type,
                itemTitle: populatedBooking.itemId?.title || 'No title found'
            });
        }
        
        // Check hotels and tours exist
        console.log('\n=== Hotels/Tours Check ===');
        const hotelCount = await Hotel.countDocuments();
        const tourCount = await Tour.countDocuments();
        const userCount = await User.countDocuments();
        
        console.log(`Hotels in DB: ${hotelCount}`);
        console.log(`Tours in DB: ${tourCount}`);
        console.log(`Users in DB: ${userCount}`);
        
        // Test a specific user's bookings if provided
        const testUserId = process.argv[2]; // Pass user ID as command line argument
        if (testUserId) {
            console.log(`\n=== Testing User ${testUserId} Bookings ===`);
            try {
                const userBookings = await Booking.find({ userId: testUserId })
                    .populate('userId')
                    .populate('itemId');
                
                console.log(`User has ${userBookings.length} bookings`);
                userBookings.forEach((booking, index) => {
                    console.log(`User Booking ${index + 1}:`, {
                        id: booking._id,
                        type: booking.type,
                        userEmail: booking.userId?.email,
                        itemTitle: booking.itemId?.title,
                        status: booking.bookingDetails?.status,
                        populated: !!booking.itemId
                    });
                });
            } catch (error) {
                console.error('Error fetching user bookings:', error.message);
            }
        }
        
    } catch (error) {
        console.error('Debug script error:', error);
    } finally {
        mongoose.connection.close();
        console.log('\nDatabase connection closed.');
    }
}

// Run the debug function
debugBookings();
