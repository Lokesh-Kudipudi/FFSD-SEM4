# Booking System Troubleshooting Guide

## Issues Fixed

The booking system was experiencing errors when users tried to access their "My Bookings" page. The following issues have been identified and resolved:

### 1. **Database Model Issues**
- **Problem**: The booking model's `refPath` configuration was not properly handling dynamic population
- **Fix**: Enhanced the booking model schema with proper validation and default values
- **Files Modified**: `Model/bookingModel.js`

### 2. **Population Errors**
- **Problem**: Mongoose populate was failing for missing or invalid itemId references
- **Fix**: Added error handling to filter out invalid bookings and prevent crashes
- **Files Modified**: `Controller/bookingController.js`

### 3. **Template Syntax Errors**
- **Problem**: EJS template had syntax errors in conditional statements
- **Fix**: Corrected EJS syntax for status display logic
- **Files Modified**: `views/dashboard/user/myTrips.ejs`

### 4. **Missing Default Status**
- **Problem**: New bookings weren't getting a default status, causing display issues
- **Fix**: Added default "pending" status for all new bookings
- **Files Modified**: `Controller/bookingController.js`

## How to Troubleshoot

### Step 1: Run the Debug Script
```bash
node debug_bookings.js [optional_user_id]
```

This script will:
- Check database connection
- Verify model registration
- Show existing bookings
- Test population functionality
- Display counts of hotels/tours/users

### Step 2: Fix Existing Data (if needed)
```bash
node fix_bookings.js
```

This script will:
- Find bookings without proper status
- Update them with "pending" status
- Verify the fix worked

### Step 3: Test the Application
1. Start your application: `npm start`
2. Log in as a user who has made bookings
3. Navigate to Dashboard → My Bookings
4. Verify bookings display correctly

## Common Error Messages and Solutions

### Error: "Cannot read property 'title' of null"
**Cause**: Booking references a hotel/tour that no longer exists
**Solution**: Run the debug script to identify orphaned bookings, then either:
- Delete the invalid bookings from database
- Or ensure referenced hotels/tours exist

### Error: "bookingDetails.status is undefined"
**Cause**: Old bookings don't have status field
**Solution**: Run the fix script: `node fix_bookings.js`

### Error: "Cannot read property 'forEach' of undefined"
**Cause**: Bookings array is null/undefined in template
**Solution**: Already fixed - template now handles empty/null bookings array

## Booking Status Values

The system uses these status values:
- **"pending"**: Newly created booking (default)
- **"upcoming"**: Confirmed booking (future date)
- **"completed"**: Finished booking
- **"cancel"**: Cancelled booking

## File Changes Made

### Backend Files
1. **Model/bookingModel.js**
   - Added proper validation and default values
   - Enhanced schema with createdAt timestamp

2. **Controller/bookingController.js**
   - Improved error handling in `getUserBookings()`
   - Added filtering for invalid bookings
   - Set default status for new bookings

3. **Controller/userController.js**
   - Enhanced error handling in `getUserBookingsController()`
   - Added graceful fallbacks for empty/error states

### Frontend Files
1. **views/dashboard/user/myTrips.ejs**
   - Fixed EJS syntax errors
   - Added error/message display
   - Added safety checks for empty bookings
   - Improved conditional logic

### Debug/Fix Scripts
1. **debug_bookings.js** - Diagnostic tool
2. **fix_bookings.js** - Data repair tool

## Prevention

To prevent similar issues in the future:

1. **Always set default values** for booking fields
2. **Validate data** before saving bookings
3. **Handle population errors** gracefully
4. **Test with empty states** in templates
5. **Use proper EJS syntax** in templates

## Testing Checklist

- [ ] User can access My Bookings page without errors
- [ ] Bookings display correctly with proper status
- [ ] Empty bookings state shows appropriate message
- [ ] Error states are handled gracefully
- [ ] Both hotel and tour bookings work
- [ ] Status changes (pending → upcoming → completed) work
- [ ] Cancel booking functionality works

## Database Queries for Manual Verification

```javascript
// Check booking counts
db.bookings.count()

// Check bookings with status
db.bookings.find({"bookingDetails.status": {$exists: true}}).count()

// Check for orphaned bookings (references non-existent items)
db.bookings.aggregate([
  {
    $lookup: {
      from: "hotels",
      localField: "itemId",
      foreignField: "_id",
      as: "hotel"
    }
  },
  {
    $lookup: {
      from: "tours", 
      localField: "itemId",
      foreignField: "_id",
      as: "tour"
    }
  },
  {
    $match: {
      $and: [
        {hotel: {$eq: []}},
        {tour: {$eq: []}}
      ]
    }
  }
])
```

This guide should help you diagnose and fix any booking-related issues in the future!
