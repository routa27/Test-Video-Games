# Test IbanFirst

## Purpose

In this project I used the Rawg API to retrieve games list.
Minimalist UI.

## Technical choice

- React Query
- Styled-component
- For test : Vitest and @testing-library/react

## Environment variables

All environment variables are present in `.env.dist` file.

Copy the `.env.dist` file and rename it to `.env.local` and replace the content with these variables :

```
VITE_RAWG_BASE_URL="https://rawg.io"
VITE_RAWG_API_URL="https://rawg.io/api"
VITE_RAWG_API_KEY="01890e0870e54950a6b5c9479242d6ef"
```

This project was bootstrapped with [create vite](https://vitejs.dev/guide/).

## Installation

Install dependencies :

### `npm install`

In the project directory, you can run:

### `npm run dev`

Builds the app for production

### `npm run build`

Run Tests

### `npm run test`

Your app is ready to be deployed!
