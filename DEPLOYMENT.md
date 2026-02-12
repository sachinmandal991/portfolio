# Vercel Deployment Guide

## Step 1: Fix MongoDB Atlas IP Whitelist
1. Go to MongoDB Atlas (cloud.mongodb.com)
2. Click "Network Access" in left sidebar
3. Click "Add IP Address"
4. Click "Allow Access from Anywhere" (0.0.0.0/0)
5. Click "Confirm"

## Step 2: Deploy Backend
```bash
cd backend
npm install -g vercel
vercel login
vercel
```

When prompted:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **portfolio-backend**
- Directory? **./backend**
- Override settings? **N**

After deployment, copy the backend URL (e.g., https://portfolio-backend.vercel.app)

## Step 3: Add Environment Variables to Backend
```bash
vercel env add MONGO_URI
# Paste: mongodb+srv://sachinmandal991_db_user:sachin%401234@cluster0.ghjv6j0.mongodb.net/portfolio?retryWrites=true&w=majority

vercel env add EMAIL_USER
# Paste: sachinmandal991@gmail.com

vercel env add EMAIL_PASS
# Paste: mdacbifhiyntmwgo
```

Redeploy backend:
```bash
vercel --prod
```

## Step 4: Update Frontend API URL
Edit `frontend/package.json` and replace proxy with your backend URL:
```json
"proxy": "https://your-backend-url.vercel.app"
```

Or update axios calls in frontend to use full backend URL.

## Step 5: Deploy Frontend
```bash
cd frontend
npm run build
vercel
```

When prompted:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **portfolio-frontend**
- Directory? **./frontend**
- Override settings? **N**

Deploy to production:
```bash
vercel --prod
```

## Alternative: Deploy Both at Once

### Option 1: GitHub + Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Deploy frontend and backend separately

### Option 2: Netlify for Frontend
```bash
cd frontend
npm run build
# Drag and drop 'build' folder to netlify.com
```

## Your Live URLs
- Frontend: https://your-portfolio.vercel.app
- Backend: https://portfolio-backend.vercel.app

## Important Notes
- Add environment variables in Vercel dashboard
- Update CORS in backend to allow your frontend domain
- MongoDB Atlas must allow all IPs (0.0.0.0/0)
