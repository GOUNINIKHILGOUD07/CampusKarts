<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Routing convention
- A page route that needs its own dynamic sub-page (e.g. messages.$id, sell.edit.$id) must use a trailing underscore to un-nest (messages_.$id.tsx, sell_.edit.$id.tsx) — the parent page route renders no <Outlet />, so nested children never display and the parent page shows instead.
