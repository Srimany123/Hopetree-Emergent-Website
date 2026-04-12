# Hopetree Charitable Trust Website - Product Requirements Document

## Project Overview
**Project Name:** Hopetree Charitable Trust Website
**Date Created:** December 2024
**Status:** Frontend MVP Complete - Mock Data Phase

## Trust Information
- **Name:** Hopetree Charitable Trust
- **Tagline:** Spreading hope where it's needed the most
- **Established:** 2020
- **Mission:** To ensure every individual deserves dignity, care, and opportunity through compassionate action and community support

## Core Programs
1. **Feed the Elderly** - Nutritious meals to elderly individuals who are alone
2. **Essential Medicines** - Life-saving medicines to underprivileged individuals
3. **Education Sponsorship** - Sponsoring education for deserving children
4. **Digital Bridge** - Donating laptops/desktops to bridge digital gaps
5. **Family Support** - Supporting underprivileged families with marriage and life assistance

## Completed Features (Frontend with Mock Data)

### Pages Implemented
- ✅ Home Page (Hero, Stats, About Preview, Programs Preview, Testimonials, CTA)
- ✅ About Us Page (Mission, Vision, Story, Values, Team)
- ✅ Our Programs Page (All 5 programs with detailed info)
- ✅ Donate Page (Donation tiers, form - payment integration pending)
- ✅ Contact Us Page (Contact form, info cards, map placeholder)
- ✅ Gallery Page (8 images with lightbox)

### Components
- ✅ Header with navigation and sticky behavior
- ✅ Footer with links and social media
- ✅ Responsive design for all screen sizes
- ✅ Toast notifications using Sonner
- ✅ Form handling with browser storage (localStorage)

### Design System
- **Color Theme:** Trust & stability (Emerald green #059669, earth tones)
- **Components:** Shadcn UI components
- **Typography:** System fonts with proper hierarchy
- **Animations:** Smooth transitions, hover effects, scroll animations
- **Images:** Curated from Unsplash/Pexels for all sections

## Technical Stack
- **Frontend:** React, React Router, Tailwind CSS, Shadcn UI
- **Backend:** FastAPI (ready for implementation)
- **Database:** MongoDB (ready for implementation)
- **State Management:** React hooks, localStorage for mock data

## Mock Data Structure
All mock data stored in `/app/frontend/src/mock.js`:
- Trust information
- Programs (5 programs)
- Gallery images (8 images)
- Team members (3 members)
- Testimonials (3 testimonials)
- Donation tiers (4 tiers)
- Stats (4 stats)
- Contact information

## Next Phase: Backend Development

### API Endpoints to Build
1. **Donations API**
   - POST `/api/donations` - Create donation request
   - GET `/api/donations` - Get all donations (admin)
   - GET `/api/donations/:id` - Get donation by ID

2. **Contact API**
   - POST `/api/contact` - Submit contact form
   - GET `/api/contact` - Get all contact requests (admin)

3. **Programs API**
   - GET `/api/programs` - Get all programs
   - GET `/api/programs/:id` - Get program by ID

4. **Gallery API**
   - GET `/api/gallery` - Get all gallery images
   - POST `/api/gallery` - Add new image (admin)

5. **Newsletter API** (Future)
   - POST `/api/newsletter` - Subscribe to newsletter

### Database Models Needed
1. **Donation Model**
   - name, email, phone, amount, message, status, date

2. **Contact Model**
   - name, email, phone, subject, message, status, date

3. **Program Model**
   - title, description, icon, image, impact, details

4. **Gallery Model**
   - url, alt, description, date

### Integration Tasks
1. Replace mock data with API calls
2. Add form validation
3. Implement error handling
4. Add loading states
5. Payment gateway integration (Stripe/Razorpay - TBD)

## Future Enhancements (Backlog)
- P1: Payment gateway integration for donations
- P1: Admin dashboard for managing content
- P1: Email notifications for donations/contacts
- P2: Blog/News section
- P2: Volunteer registration system
- P2: Success stories with dynamic content
- P2: Real map integration (Google Maps)
- P3: Multi-language support
- P3: Social media feed integration
- P3: Impact reports and statistics dashboard

## Notes
- Payment integration was deferred at user request
- All forms currently store data in localStorage (temporary)
- Design follows trust & stability theme with emerald green
- Images selected for emotional impact and relevance
