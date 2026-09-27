# Soul Spark - One-Page Landing Site

This build brief is split into smaller files by responsibility. The React source code lives under `src/`; these documents retain the original implementation examples and setup notes for reference.

## Documents

- [Shared data and contact links](docs/01-shared-data.md)
- [Navigation and footer layout](docs/02-site-layout.md)
- [Individual landing-page sections](docs/03-page-sections.md)
- [App assembly and remaining setup notes](docs/04-app-assembly.md)

## Project folders

```text
src/
|-- App.tsx                 # Page assembly and section order
|-- main.tsx                # React entry point
|-- index.css               # Global styles and Tailwind directives
|-- data/site.ts            # Shared content and contact links
`-- components/
    |-- layout/             # Navbar and footer
    `-- sections/           # One React component per page section
```

Content note: do not add testimonials, statistics, credentials, or awards unless verified details are supplied. The closing quote is intended to appear once.
