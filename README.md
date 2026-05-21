***SMART STUDY NEST

Smart Study Nest is a full-stack room booking platform where users can explore available study rooms, view room details, book rooms for specific time slots, manage their own listings, and track their bookings. The application includes secure authentication, protected booking actions, owner-based room management, and search functionality by room name.

**LIVE LINK

 Client Side:(https://smart-study-nest.vercel.app/)
 Server Side: https://smart-study-nest-server.vercel.app/

**PROJECT PURPOSE

The main purpose of Smart Study Nest is to provide a simple and organized platform for students or users to find and book suitable study rooms. Room owners can add, update, and delete their own room listings, while authenticated users can book available rooms and cancel their own bookings when needed.

**KEY FEATURES

 User authentication using Better Auth
 Google login support
 JWT based protected API access
 Browse all available study rooms
 View detailed information for each room
 Search rooms by room name
 Book a room by selecting date and time slot
 Prevents booking conflicts for the same room and time
 Users can view their own bookings
 Users can cancel their own bookings
 Room owners can add new rooms
 Room owners can update room information
 Room owners can delete only their own rooms
 Latest rooms section
 Booking count update after successful booking
 Responsive UI for mobile, tablet, and desktop
 MongoDB database integration
 REST API based backend

**TECHNOLOGIES USED***

**FRONTEND

 Next.js
 React.js
 Tailwind CSS
 Better Auth
 React Hot Toast
 Next Navigation
 Vercel Deployment

**BACKEND

 Node.js
 Express.js
 MongoDB
 MongoDB Node.js Driver
 CORS
 dotenv
 jose-cjs for JWT verification
 Vercel Deployment

**NPM PACKAGES USED

**CLIENT SIDE

 next
 react
 react-dom
 better-auth
 react-hot-toast
 tailwindcss
 postcss
 autoprefixer

**SERVER SIDE

 express
 cors
 dotenv
 mongodb
 jose-cjs

**MAIN FUNCTIONALITIES

**AUTHENTICATION

The project uses Better Auth for user authentication. Authenticated users receive a token, which is used to access protected backend routes.

Protected actions include:

 Add room
 Book room
 Cancel booking
 Access user-specific data

**ROOM MANAGEMENT

Room owners can add new study rooms with the following information:

 Room name
 Description
 Image
 Floor
 Capacity
 Hourly rate
 Amenities
 Owner information

Owners can also update and delete their own room listings.

**BOOKING SYSTEM

Authenticated users can book rooms by providing:

 Booking date
 Start time
 End time
 Special note

The backend validates:

 Required booking fields
 Valid room ID
 Future or current booking date
 End time must be after start time
 Time slot conflict prevention

