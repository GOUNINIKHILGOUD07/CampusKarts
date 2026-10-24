# CampusKart — Roadmap

## Done
- Lovable Cloud enabled; schema migration (profiles, roles, categories, products, product_images, wishlist, conversations, messages, notifications, reviews, reports; RLS + grants; triggers for notifications; realtime publication)
- Email/password auth enabled; Google + Lovable social sign-in configured
- Private storage buckets `product-images` + `avatars` with RLS policies
- Design system (teal/white, Plus Jakarta Sans), auth context, navbar/footer shell

## In progress
- [ ] Recreate auth-guard layout `src/routes/_authenticated.tsx` (removed to fix route conflict — it was a childless pathless layout, which the generator collapsed to "/" conflicting with index). Content to restore as the layout wrapping all protected pages:
  ```tsx
  export const Route = createFileRoute("/_authenticated")({
    ssr: false,
    beforeLoad: async ({ location }) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw redirect({ to: "/auth", search: { redirect: location.pathname } });
    },
    component: () => <Outlet />,
  });
  ```
  It must have at least one child page under `_authenticated/` before the build.
- [ ] Public pages: home, browse, product details, seller profile, help/contact/privacy/terms, reset-password
- [ ] Auth page (sign in / sign up / social)
- [ ] Authenticated pages: sell (create + edit listing), seller dashboard, wishlist, messages, settings, notifications
- [ ] Admin dashboard (overview, listings, reports, users)
- [ ] Tests + end-to-end verification (auth, listing, filters, wishlist, messaging, admin)

## Notes
- First registered account automatically becomes admin (database trigger).
- Image buckets are private; images served via signed URLs client-side.
- Public buckets are blocked by workspace policy — do not retry public buckets.
- Navbar/Footer currently link to pages not yet built (sell, dashboard, wishlist, messages, settings, admin, notifications, help, contact, privacy, terms) — typecheck logs non-blocking TS errors for these until the pages exist.
