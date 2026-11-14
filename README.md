# Zaib Un Nisa | Portfolio
Static site: HTML, CSS, vanilla JS. No build step, no API keys.

## Run locally
Open `index.html`, or run `npx serve .`

## Add your email
In `script.js`, set `const EMAIL = "you@example.com";` The Email button appears automatically.

## GitHub
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/rebiyamalik/portfolio.git
git push -u origin main
```

## Deploy on Vercel
1. Go to vercel.com, sign in with GitHub, click Add New > Project.
2. Import the repo. Framework preset: Other. Leave build settings empty.
3. Deploy. `404.html` is served automatically.

## Test checklist
- Nav links scroll to the right section; mobile menu opens, closes, and works with Esc
- No sideways scroll at 360px width
- Tab through the page: focus ring always visible
- Reduced motion on: typing text is static, orbs stop
- Set EMAIL: button shows and opens mail app
