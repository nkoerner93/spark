# Spark: All in One Entertainment & Productivity Dashboard

Spark is an "under-development" Productivity & Entertainment Dashboard.
The goal is to provide a centralized solution for entertainment & productivy - for example:

- Productivity Tools
- Gaming Tools
- Entertainment Information (i.E. release dates)

The final goal is to have a filterable feature selection where users can subscribe to their desired functionalities
and have a centralized website tab for productivity or entertainment purposes.

## Tech Stack

- NextJS14 + Server Actions
- Vercel PostgreSQL
- Prisma ORM
- Iron Sessions Stateless Authentication
- Cypress
- ShadCN/Radix-UI Component Library

## External APIs

The Application currently uses the following external APIs:

- [MyAnimeList](https://myanimelist.net/apiconfig/references/api/v2)

## Authentication

Spark uses a custom-built stateless [Iron-Session](https://github.com/vvo/iron-session) Credential Authentication.
For more information about the Authentication please check the server actions "actions.ts" & (auth) folder.
The authentication currently has no recover password & nodemailer functionality.

## How to install locally

You can clone & create this repo with the following command

```bash
git clone "https://github.com/nkoerner93/spark"
```

## Getting Started

1. Create a new NextJS Project on Vercel.
2. Create a new Vercel PostgreSQL Database Storage.
3. Change your .env variables based on the .env.example file
4. Create an account on MyAnimeList
5. Create a Application & get your API ClientID+Secret & add them to your .env

Run the following command using your preferred Package Manager.

```bash
pnpm prisma generate
pnpm prisma db push
pnpm run dev
```

## Recent Changelog

```
- Added the option to add fetched animes to users favorites list.
- Added the option to make your profile private and hide it from /users
- Added all Users page /dashboard/users with pagination.
- Added POE Map Calculator & connect it with users db to store recently tracked maps.
- Connect dark/light theme to user preference dashboard
```

## Questions?

If you have any questions about the project, please dm me at nk.webdevs@gmail.com
