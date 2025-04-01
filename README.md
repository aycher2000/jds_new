# JustDopeShop (JDS)

A Next.js e-commerce platform specializing in music-inspired jewelry and accessories.

## Project Information
- **Production URL**: [JDS Shop](https://jds-9kok16kkl-aycher-gmailcoms-projects.vercel.app)
- **Development Directory**: `/Volumes/500gb/jds_new`
- **GitHub Repository**: [jds_new](https://github.com/aycher2000/jds_new)
- **Last Working Version**: Commit `8104fa7` (March 31, 2024)

## Tech Stack
- **Framework**: Next.js 15.2.4
- **Authentication**: NextAuth.js with Google Provider
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Package Manager**: npm

## Key Features
- User authentication with Google
- Responsive design with mobile-first approach
- Dynamic product catalog
- Shopping cart functionality
- Newsletter subscription
- Secure checkout process
- Protected routes for authenticated users

## Project Structure
```
/src
  /app             # Next.js app router pages
    /api          # API routes
    /auth         # Authentication pages
    /shop         # Shop pages
    /cart         # Cart pages
    /checkout     # Checkout pages
  /components      # Reusable components
    /products      # Product-related components
    /ui           # UI components
  /lib            # Utility functions
  /styles         # Global styles
/public
  /images         # Static images
    /products     # Product images
    /ui          # UI assets
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
- Preview deployments are created for each PR

## Known Issues
### Mobile Menu Issues
- **iPhone SE (2020)**: Menu stays open and close button doesn't work
  - Status: Under investigation
  - Affected devices: iPhone SE (2020) with Safari
  - Not affecting other iOS devices
  - Potential causes:
    - Safari version differences
    - iOS privacy settings
    - Cache/cookie issues
  - Current workaround: None (reverting to previous version if needed)

### Other Known Issues
- Mobile menu behavior may vary on different Safari versions/settings
- Image optimization needs review for large product images
- Newsletter subscription form needs backend implementation

## Important Notes
- Always test mobile menu functionality across different devices
- Verify image paths when adding new products
- Check authentication flow when making changes to protected routes
- Keep track of environment variables across different environments
- Document any new issues in this README

## Backup and Recovery
- Last known working version: Commit `8104fa7`
- Critical files to backup:
  - `.env` files
  - `next.config.js`
  - `package.json`
  - `/public/images`
  - `/src/components/Header.tsx` (mobile menu component)

## Development Workflow
1. Create feature branch from `main`
2. Make changes and test locally
3. Push changes and create PR
4. Get code review
5. Deploy to preview environment
6. Test on multiple devices
7. Merge to `main` if approved

## Contact
For any questions or issues, please contact the development team.

## Troubleshooting
If the mobile menu breaks:
1. Check the current commit hash
2. Revert to commit `8104fa7` if needed
3. Clear browser cache and cookies
4. Test on multiple devices
5. Document any new issues

## Future Improvements
- [ ] Fix iPhone SE menu issue
- [ ] Implement proper newsletter backend
- [ ] Add image optimization
- [ ] Set up proper domain name
- [ ] Add automated testing
