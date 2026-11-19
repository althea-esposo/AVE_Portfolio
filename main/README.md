# AVE Portfolio

A responsive React + Vite portfolio based on the supplied visual reference and the portfolio evaluation rubric.

## Run in GitHub Codespaces

Open a terminal in the folder containing `package.json`, then run:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Open the forwarded port `5173` from the **Ports** tab.

## Build check

```bash
npm run build
```

## Important: personalize before publishing

Open `src/config.js` and replace:

- `YOUR_EMAIL@example.com` with your public contact email.
- `YOUR_GITHUB_USERNAME` with your GitHub username.
- `YOUR_PORTFOLIO_REPOSITORY` with this portfolio repository name.
- `SJC_CARE_REPOSITORY` with the correct SJC Care repository name, if sharing is authorized.

The website intentionally shows a reminder instead of inventing your URLs.

## SJC Care case study

The case study is written to distinguish confirmed contributions from ongoing work. It records that Althea designed the initial database and was named the initial Implementation Lead, while the Team Lead is currently handling revisions. It does not claim final results or completed confidentiality features.

Before making the SJC Care repository public or linking it, confirm that your teammates and the project beneficiary permit sharing. Remove credentials, student data, private records, and other confidential information from any repository.

## Update project information

Edit the `projects` array in `src/App.jsx`. Replace the EcoSort sample text with accurate details. Add only confirmed technologies to a project's stack.

## Rubric-focused implementation

- Responsive layout for desktop and mobile.
- Working in-page navigation and mobile menu.
- Project cards open detailed, scrollable case studies.
- Keyboard Escape closes the case study modal; focus indicators and skip link are included.
- Contact email and GitHub profile links are configured in one place.
- Portfolio and SJC Care repository links are provided.
- Semantic headings, readable line lengths, reduced-motion support, and accessible labels are included.

The contact section uses direct email and GitHub links; it does not pretend to submit a form without a connected backend.
