import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

/**
 * Protected area. Client-only (sessions live in browser storage): the gate
 * re-validates with the Auth server before any child route renders. Server
 * functions called from these pages are independently protected by
 * requireSupabaseAuth middleware + RLS.
 */
export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async ({ location }) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      throw redirect({
        to: "/auth",
        search: { redirect: location.pathname },
      });
    }
  },
  component: () => <Outlet />,
});
