// Fix existing bookings that might not have proper status
// Run this with: node fix_bookings.js

const mongoose = require('mongoose');
const { Booking } = require('./Model/bookingModel');

// Load environment variables
require('dotenv').config();

async function fixExistingBookings() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('Connected to MongoDB successfully!');
        
        // Find bookings without status or with null status
        const bookingsToFix = await Booking.find({
            $or: [
                { 'bookingDetails.status': { $exists: false } },
                { 'bookingDetails.status': null },
                { 'bookingDetails.status': '' }
            ]
        });
        
        console.log(`Found ${bookingsToFix.length} bookings that need status update`);
        
        if (bookingsToFix.length > 0) {
            // Update each booking to have a pending status
            const updatePromises = bookingsToFix.map(booking => {
                return Booking.updateOne(
                    { _id: booking._id },
                    { 
                        $set: { 
                            'bookingDetails.status': 'pending',
                            'bookingDetails.bookingDate': booking.createdAt || new Date()
                        } 
                    }
                );
            });
            
            const results = await Promise.all(updatePromises);
            const successCount = results.filter(result => result.modifiedCount > 0).length;
            
            console.log(`Successfully updated ${successCount} bookings with pending status`);
        }
        
        // Verify the fix
        console.log('\nVerifying the fix...');
        const allBookings = await Booking.find({});
        const bookingsWithStatus = allBookings.filter(booking => booking.bookingDetails?.status);
        
        console.log(`Total bookings: ${allBookings.length}`);
        console.log(`Bookings with status: ${bookingsWithStatus.length}`);
        
        if (bookingsWithStatus.length > 0) {
            console.log('\nStatus distribution:');
            const statusCounts = {};
            bookingsWithStatus.forEach(booking => {
                const status = booking.bookingDetails.status;
                statusCounts[status] = (statusCounts[status] || 0) + 1;
            });
            console.log(statusCounts);
        }
        
    } catch (error) {
        console.error('Fix script error:', error);
    } finally {
        mongoose.connection.close();
        console.log('\nDatabase connection closed.');
    }
}

// Run the fix function
fixExistingBookings();
