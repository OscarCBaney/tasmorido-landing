# Tas Morido Landing Page

A clean, minimal landing page for the ¿Tas Morido? app, ready to deploy on Vercel.

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   ├── page.module.css     # Page styles
│   └── globals.css         # Global styles
├── package.json            # Dependencies
├── next.config.js          # Next.js config
└── README.md               # This file
```

## Setup Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000
   ```

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: landing page"
   git remote add origin https://github.com/YOUR_USERNAME/tasmorido-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in (or create account)
   - Click **"New Project"**
   - Select your GitHub repository (`tasmorido-landing`)
   - Vercel auto-detects it's a Next.js project
   - Click **Deploy** (takes ~1 minute)

3. **Connect your domain:**
   - In Vercel project settings, go to **Domains**
   - Add `tasmorido.com`
   - Follow instructions to update DNS records at your registrar (Porkbun)
   - Takes 5–30 minutes to propagate

### Option 2: Direct Deploy (No GitHub)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts**, then connect your domain (same as Option 1, step 3)

## What's Included

- **Dark theme** matching the Tas Morido app (`#1a1a2e` background, `#e94560` pink accent)
- **Responsive design** — works on mobile, tablet, desktop
- **Email signup** — captures early interest (currently logs to console; integrate with a service like Mailchimp/SendGrid if needed)
- **Features section** — highlights key app benefits
- **Call-to-action** — "Notify Me" for launch waitlist
- **Footer** — contact, privacy/terms links (update these with real URLs)

## Customization

### Update Contact Email

In `app/page.tsx`, search for `contact@tasmorido.com` and replace with your actual email.

### Update Footer Links

- `/privacy` → Link to your privacy policy
- `/terms` → Link to your terms of service

(You can create these as separate pages in the `app/` directory later, or link to external URLs.)

### Change Email Signup Behavior

Currently, the form just shows a success message. To actually collect emails, integrate with:
- **Mailchimp** (free tier available)
- **SendGrid**
- **Supabase** (free PostgreSQL database)

I can help add this later if needed.

## Domain Setup at Porkbun

Once deployed to Vercel and you have a domain at Porkbun:

1. Log into Porkbun
2. Go to your domain settings for `tasmorido.com`
3. Find **Nameservers** or **DNS Settings**
4. Point to Vercel's nameservers (Vercel will tell you which ones during domain setup)
5. Wait 5–30 minutes for DNS to propagate

## For Meta Business Verification

Once live at `https://tasmorido.com`, you can use this URL in Meta's Business Manager form under "Business website". The site needs to exist and be accessible; it doesn't need to be feature-complete, so this minimal version is perfect for that purpose.

## Next Steps

1. Deploy this landing page
2. Add your domain to Meta Business Manager
3. Create WhatsApp Business Account + request phone number through Twilio
4. Once approved, update the `.env` in your app with the real Twilio number
5. Submit message template for Meta approval
6. Ship the app to Google Play!

---

Built with **Next.js 14** • Hosted on **Vercel** • For **¿Tas Morido?**
