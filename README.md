# CampusKart

# CampusKart — Complete Student Marketplace

Build a complete, polished, responsive student marketplace called **CampusKart**, where college students can buy and sell second-hand textbooks, class notes, lab records, stationery, electronic accessories, and other college essentials at affordable prices.

The goal is to create a genuinely useful marketplace for college students that feels like a professionally designed real-world product, not a generic AI-generated website. Make the interface visually consistent, simple to navigate, trustworthy, and easy to use. Build the complete experience with working interactions and persistent data, not just static screens.

## 1. Visual Design and Branding

Create a clean, modern marketplace design with a distinctive CampusKart identity. Use a restrained teal and white color palette, subtle neutral backgrounds, dark readable text, consistent typography, balanced spacing, and clear visual hierarchy. Use one professional font family consistently across the entire website.

Create a clean CampusKart wordmark and use a consistent professional outline icon library. Never use emojis as icons, logos, illustrations, or interface elements. Use relevant product photographs for textbooks, electronics, stationery, and other listed items.

Avoid generic AI website patterns, excessive gradients, glassmorphism, oversized headings, unnecessary animations, excessive rounded cards, repetitive layouts, decorative charts, fake statistics, and unnecessary whitespace. Use natural, purposeful layouts and consistent components. Make every page look like part of the same carefully designed product.

## 2. Homepage

Create a professional homepage featuring a simple navigation bar with the CampusKart logo, search bar, Home, Browse, Login, and Sign Up.

Include a welcoming hero section with the headline "Buy and sell campus essentials, from students who get it." Add a short description and clear Browse Products and Sell an Item actions.

Below the hero, display product categories, recently listed products, affordable deals based on actual prices, and featured listings from the database. Add a concise explanation of how CampusKart works and a simple footer with Help, Privacy, Terms, and Contact links.

Keep the homepage practical and focused on discovering products. Do not add fabricated user statistics, fictional reviews, or promotional claims that cannot be verified.

## 3. Student Accounts

Implement student registration, login, logout, email verification, password reset, and profile management. Provide clear validation, loading indicators, success messages, and friendly error messages.

Allow students to manage their display name, profile picture, and appropriate public profile information. Support college email verification where configured, and never display a verification badge without genuine verification.

Protect private information and ensure that authenticated pages cannot be accessed improperly.

## 4. Browse Products and Search

Build a complete marketplace browsing experience with categories for textbooks, notes, lab records, stationery, electronics, and other essentials.

Provide working search by product name and description, category filters, minimum and maximum price filters, product condition filters, availability filters, and sorting by newest listings and price.

Filters must work together and have a clear Reset option. Make the filter controls responsive and aligned consistently.

Display a useful empty state when no products are available or no results match the search. Never fill empty pages with fabricated listings.

## 5. Product Listings and Details

Allow authenticated students to create listings with a product title, relevant photographs, category, price in Indian rupees, description, condition, and availability.

Support the conditions New, Like New, Good, and Used.

Create a dedicated product details page displaying the image gallery, product information, price, condition, seller profile, listing date, and relevant actions.

Allow sellers to edit their own listings, update prices, replace images, mark items as sold, and delete their own products. Sold items must no longer appear as available products.

Use genuine product images or user-uploaded photographs. Handle missing images gracefully without displaying broken-image icons or endless loading indicators.

## 6. Seller Dashboard

Create a personal dashboard where students can view and manage all their listings. Include actions to add products, edit details, update prices, manage images, mark products as sold, delete listings, and edit profiles.

Display useful listing statuses and clear feedback after each action. Provide an informative empty state with a Create Listing action when a student has no products.

## 7. Wishlist and Favorites

Allow students to save products to their wishlist, remove saved items, and revisit them later. Keep favorites persistent across sessions and prevent duplicate entries.

Display current product availability so students are not misled by unavailable listings.

## 8. Buyer–Seller Messaging

Implement private conversations between registered buyers and sellers. Students should be able to start a conversation from a product page, view their conversation list, send and receive messages, see timestamps, and access previous messages.

Provide appropriate unread-message indicators and reporting options. Restrict every conversation to its authorized participants. Do not display fake conversations or claim real-time functionality unless it is implemented.

## 9. Student Profiles, Ratings, and Reviews

Provide seller profiles showing appropriate public information and active listings. Support ratings and reviews only under a defined policy that prevents unauthorized or duplicate submissions.

Never fabricate ratings, testimonials, transaction histories, or trust badges. Clearly distinguish unavailable information from verified information.

## 10. Notifications

Provide in-app notifications for genuine events such as new messages, listing updates, and moderation decisions. Allow users to view notifications and mark them as read.

Only display notifications generated by actual events. Do not claim email or push notifications are working unless the required service is configured.

## 11. Safety and Reporting

Allow students to report suspicious products, inappropriate listings, and abusive users. Include a report reason and optional explanation.

Store reports securely and provide a proper moderation workflow. Show a confirmation only after the report has been successfully submitted.

Protect student privacy and prevent unauthorized users from modifying another student's account, products, messages, or reports.

## 12. Administrator Dashboard

Create a separate, protected administrator dashboard with user management, listing management, reported-content review, product moderation, account restrictions, and marketplace statistics.

Calculate statistics from genuine records. Restrict administrative operations to authorized administrators, and never allow students to grant themselves administrator privileges through the interface.

## 13. Real Data and Functional Behavior

Connect the application to a persistent database and appropriate authentication and image storage services. Use actual database records for users, products, categories, favorites, messages, notifications, reviews, and reports.

Do not use hardcoded demonstration data as live marketplace content. If development samples are necessary, identify them clearly and keep them separate from genuine user data.

Implement real search, filtering, authentication, image uploads, product management, favorites, messaging, and reporting. Every visible button and link must perform its intended action.

Handle loading, success, empty, and error states properly. Never show a successful result before the underlying operation succeeds. Never expose database credentials, secret keys, or private user information.

Apply proper access controls so students can manage only their own content and administrators can perform authorized moderation.

## 14. Responsive Design

Ensure that the homepage, browse page, product details, login, registration, seller dashboard, wishlist, messaging, and administrator dashboard work on desktop, tablet, and mobile.

Use responsive navigation, readable typography, consistent image dimensions, touch-friendly controls, accessible form labels, visible keyboard focus, and sufficient contrast.

Avoid overlapping buttons, broken layouts, horizontal scrolling, misaligned elements, and inconsistent spacing.

## 15. Final Quality Requirements

Build the project in a single cohesive implementation rather than creating disconnected pages. Reuse shared components and consistent design rules.

Before finishing, verify that navigation works, authentication behaves correctly, products persist, image uploads work, filters return correct results, favorites remain saved, messaging respects privacy, and administrator permissions are enforced.

Remove broken links, unfinished sections, placeholder text, fake data, emoji icons, inconsistent fonts, and unnecessary technical information from the customer-facing interface.

If a feature requires additional configuration or an external service, clearly identify what remains to be configured rather than pretending the feature is complete.

**Final goal:** Deliver CampusKart as a complete, secure, realistic, professional student marketplace with excellent UI/UX, reliable functionality, genuine data, and a distinctive visual identity. Prioritize a simple, polished experience over unnecessary visual effects. Build a real product, not just an attractive mockup.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2df49089-e326-450e-8ab1-1baa0a4c9232).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
