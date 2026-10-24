# CampusKart — Roadmap

## Done
- Lovable Cloud enabled; schema migration (profiles, roles, categories, products, product_images, wishlist, conversations, messages, notifications, reviews, reports; RLS + grants; triggers for notifications; realtime publication)
- Email/password auth enabled; Google + Lovable social sign-in configured
- Private storage buckets `product-images` + `avatars` with RLS policies
- Design system (teal/white, Plus Jakarta Sans), auth context, navbar/footer shell

## In progress
- [ ] Public pages: home, browse, product details, seller profile, help/contact/privacy/terms, reset-password
- [ ] Auth page (sign in / sign up / social)
- [ ] Authenticated pages: sell (create + edit listing), seller dashboard, wishlist, messages, settings, notifications
- [ ] Admin dashboard (overview, listings, reports, users)
- [ ] Tests + end-to-end verification (auth, listing, filters, wishlist, messaging, admin)

## Notes
- First registered account automatically becomes admin (database trigger).
- Image buckets are private; images served via signed URLs client-side.
- Public buckets are blocked by workspace policy — do not retry public buckets.
