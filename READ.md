# 🏆 Sportea – Athlete Management Platform

Sportea is a LinkedIn-style athlete management platform built specifically for the Indian sporting ecosystem. It provides a centralized, intelligent, and tech-driven solution to connect *athletes, **coaches, and **sponsors*, supporting athlete development from performance tracking to financial planning.

---

## 🚀 Key Features

### 🔑 Core Features
- *Athlete Performance Dashboard* – Track training, statistics, and progress over time
- *Injury & Health Log* – Maintain medical records, rehab plans, and monitor recovery
- *Career Timeline* – Track milestones, tournaments, coaching history
- *Coach & Scout Access* – Discover and filter athletes using custom criteria
- *Sponsorship Tracker* – Manage brand sponsorships and basic financials
- *Social Feed* – Athletes share wins, training moments, and boost visibility

### ➕ Additional Features
- *Admin Panel* – Manage roles, verify athletes, oversee the platform
- *Data Export* – Export profiles and stats to CSV, Excel, or Google Sheets
- *AI Coach Chatbot* – Personalized assistant for planning, recovery, and growth
- *Leaderboard* – Coach-verified athlete rankings for visibility

---

## 🧠 AI Integration (Gemini AI)

*Powered by Google Gemini Pro API*, Sportea brings intelligent features to elevate user experience:

- Natural language queries for coaches to find athletes based on specific needs  
  e.g., "Find 100m sprinters under age 21 with 3+ medals in national events"
- Personalized AI chatbot for athletes to receive training suggestions and recovery tips
- Smart coach feedback & scouting summaries using AI summarization

---

## 🧰 Tech Stack

### Frontend
- *Next.js* (TypeScript) – Scalable frontend framework
- *TailwindCSS* – Utility-first styling
- *ShadCN UI* – Accessible UI components
- *Framer Motion* – Smooth animations and transitions

### Backend
- *Next.js API Routes (Node.js)* – Server-side logic
- *MongoDB Atlas + Mongoose* – NoSQL database with flexible schemas
- *Clerk* – Authentication and user management
- *Zod* – Runtime data validation

### AI / Data Intelligence
- *Google Gemini API* – Smart chatbot and advanced query responses
- *LangChain* (optional) – For multi-step AI workflows
- *OpenAI Embeddings* (optional) – For intelligent search and personalization

### Tools & Integrations
- *Axios* – API requests
- *CSV/XLSX Export* – Download performance data
- *Google Sheets API* (optional) – Coach insights auto-logged to Sheets
- *Postman* – API testing
- *Vercel* – Frontend + backend deployment
- *GitHub + GitHub Actions* – Source control + CI/CD

---

## 💸 Estimated Monthly Cost

| *Resource*            | *Service*         | *Monthly Cost*       | *Details*                                   |
|-------------------------|---------------------|------------------------|-----------------------------------------------|
| *Authentication*      | Clerk               | $25                    | Free up to 5,000 MAUs                         |
| *Database*            | MongoDB Atlas       | $30                    | Dedicated Cluster (after free tier)           |
| *AI*                  | Gemini Pro          | $20–50                 | Usage-based (per character input/output)      |
| *Hosting (Optional)*  | Vercel Pro          | $20                    | For teams, analytics, and performance         |

*✅ Total Estimated Cost: $95 – $125/month* (for post-MVP scale)

---

## 🛠 Project Setup

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/sportea.git
cd sportea

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Add your MongoDB URI, Clerk keys, Gemini API keys, etc.

# 4. Run the development server
npm run dev