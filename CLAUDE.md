# CLAUDE.md

## Source structure

- Components use atomic design: `src/components/{atoms,molecules,organisms,templates,pages}`, with levels added only when needed.
- Components import only from lower levels; organisms may also import other organisms.
- Atoms, molecules, and templates are presentational and do not read contexts or fetch data.
- Shared modules live in a top-level directory for their type, including `src/contexts`, `src/providers`, and `src/hooks`.
- Each context has a `<Name>Context`, a `<Name>Provider`, and a `use<Name>` hook that components read it through.
- Modules default-export their main export and expose it through an `index.ts` that names each export; only barrels for a directory of modules use `export *`.
- Import across directories using the `@/` alias and barrels.
- Routes in `src/routes` handle the URL and navigation and pass them to pages as props.
- Pages hold business logic, do not import the router, and render a template.
- Layouts in `src/layouts` wrap routes and render a template. Do not use `.container` or `.enhanced` files.
