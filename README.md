# JustDopeShop (JDS)

A Next.js e-commerce platform specializing in music-inspired jewelry and accessories.

## Project Information
- **Production URL**: [JDS Shop](https://jds-9kok16kkl-aycher-gmailcoms-projects.vercel.app)
- **Development Directory**: `/Volumes/500gb/jds_new`
- **GitHub Repository**: [jds_new](https://github.com/aycher2000/jds_new)

## Tech Stack
- **Framework**: Next.js 15.2.4
- **Authentication**: NextAuth.js with Google Provider
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Key Features
- User authentication with Google
- Responsive design with mobile-first approach
- Dynamic product catalog
- Shopping cart functionality
- Newsletter subscription
- Secure checkout process

## Project Structure
```
/src
  /app             # Next.js app router pages
  /components      # Reusable components
    /products      # Product-related components
    /ui           # UI components
  /lib            # Utility functions
/public
  /images         # Static images
    /products     # Product images
```

## Environment Variables
Required environment variables:
```
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=your_nextauth_url
```

## Development Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with required environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment
- Deployments are handled through Vercel
- Production branch: `main`
- Feature branch format: `feature/feature-name`

## Known Issues
- Mobile menu behavior may vary on different Safari versions/settings
- Currently investigating differences in mobile Safari behavior across devices

## Important Notes
- Always test mobile menu functionality across different devices
- Verify image paths when adding new products
- Check authentication flow when making changes to protected routes

## Last Working Version
- **Commit**: 8104fa7 (Fix: Update home page with proper layout and fix image configuration)
- **Date**: March 31, 2024
- **Vercel Deployment**: jds-9kok16kkl-aycher-gmailcoms-projects.vercel.app

## Contact
For any questions or issues, please contact the development team.
