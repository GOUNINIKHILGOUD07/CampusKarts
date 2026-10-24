# CampusKart — Roadmap

## Done
- Lovable Cloud enabled; schema migration (profiles, roles, categories, products, product_images, wishlist, conversations, messages, notifications, reviews, reports; RLS + grants; triggers for notifications; realtime publication)
- Email/password auth enabled; Google + Lovable social sign-in configured
- Private storage buckets `product-images` + `avatars` with RLS policies
- Design system (teal/white, Plus Jakarta Sans), auth context, navbar/footer shell
- Auth-guard layout `src/routes/_authenticated.tsx` restored (client-only beforeLoad gate; children under `_authenticated/`)
- Public pages: home, browse, product details, seller profile, help, contact, privacy, terms
- Auth page (sign in / sign up / social)
- Authenticated pages: sell (create + edit listing), dashboard, wishlist, messages + thread, settings, notifications
- Admin console (stats, open reports, account ban toggles)

## In progress
- [ ] Reset-password page (linked from sign-in)
- [ ] Wishlist E2E (needs a buyer account; verified: signup, listing, category filters, buy chat, message persistence across sign-out/sign-in, seller notifications)

## Notes
- First registered account automatically becomes admin (database trigger).
- Image buckets are private; images served via signed URLs client-side (upload path: `product-images/<uid>/<file>`, avatar path stored as `avatars/<uid>/<file>`).
