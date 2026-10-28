# NoAlab Platform

[![CI](https://github.com/Noalab-Develop/platform/actions/workflows/ci.yml/badge.svg)](https://github.com/Noalab-Develop/platform/actions/workflows/ci.yml)

Source for the [NoAlab](https://noalab.vercel.app/) website, a CTO-as-a-Service consultancy covering
software engineering, architecture, integrations, and information security. The repo holds the web app
and the infrastructure that deploys it.

**Live:** https://noalab.vercel.app/

## Highlights

- **Bilingual (PT/EN):** a Next.js proxy reads `Accept-Language` and redirects `/` to `/pt` or `/en`;
  all copy lives in typed locale files (`apps/web/locales`).
- **Sky that follows the visitor's weather:** the hero background is pure CSS and switches between
  clear, clouds, rain, sunrise, sunset, and night. With an OpenWeather key it uses the visitor's real
  weather; without one it falls back to the time of day.
- **Contact without a raw `mailto`:** a modal with a ready-made email template the visitor can copy or open.
- **Infrastructure as code:** Vercel projects for `dev` and `prod` managed with Terraform.
- **CI on every PR:** lint and production build for the web app, plus `terraform validate` and `plan`.

## Stack

| Layer | Tech |
|---|---|
| Web | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Swiper |
| Infra | Terraform with the Vercel provider (`infra/terraform/{dev,prod}`) |
| CI | GitHub Actions (`.github/workflows/ci.yml`, `terraform.yml`) |

## Repository layout

```
apps/web/
  app/[locale]/      # localized pages
  components/        # HeroBanner, ServiceCarousel, ContactButton, LanguageSwitcher, Reveal
  hooks/             # useWeather, useInView
  locales/           # pt.ts, en.ts
  proxy.ts           # language detection and redirect
infra/terraform/
  dev/  prod/        # Vercel environments
```

## Running locally

Prerequisites: Node.js 20+.

```bash
git clone https://github.com/Noalab-Develop/platform.git
cd platform/apps/web
npm install
npm run dev
```

Open http://localhost:3000. You'll be redirected to `/pt` or `/en` based on your browser language.

Optional: to enable the live-weather background, create `apps/web/.env.local` with an
[OpenWeather](https://openweathermap.org/api) key:

```
NEXT_PUBLIC_WEATHER_API_KEY=your_key
```

## Checks

The same commands CI runs:

```bash
cd apps/web
npm run lint
npm run build
```

Infrastructure (needs `VERCEL_API_TOKEN` in the environment):

```bash
cd infra/terraform/dev
terraform init
terraform validate
terraform plan
```
