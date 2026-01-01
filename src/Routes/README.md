# NextSoft - Next-Gen Productivity Platform

NextSoft is a modern, full-stack web application designed to help users streamline tasks, collaborate efficiently, and boost productivity through intuitive tools and analytics.

---

## 🌐 Live Site

- **Client (Frontend):** [NextSoft Client](https://gregarious-faloodeh-a23b60.netlify.app)  

---

## ✨ Features

- 🔐 **Secure Authentication:** Email/password login/signup and Google sign-in  
- 📋 **Task & Project Management:** Create, assign, and track tasks and projects  
- 📝 **Collaborative Workspace:** Team collaboration with comments, attachments, and real-time updates  
- 📊 **Analytics Dashboard:** Monitor performance, progress, and productivity metrics  
- 📱 **Fully Responsive:** Optimized for mobile, tablet, and desktop  
- 🛡️ **Protected Routes:** Only authenticated users can access projects and tasks  
- 🌙 **Dark/Light Mode:** Theme toggle with localStorage persistence  

---

## 🛠️ Tech Stack

**Frontend:**  
- React  
- Vite  
- React Router  
- Tailwind CSS + DaisyUI  
- Recharts  

**Backend:**  
- Node.js + Express  
- MongoDB  
- JWT Authentication  
- CORS  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)  
- MongoDB Atlas or local MongoDB  

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nextsoft.git
cd nextsoft

# Install server dependencies
cd nextsoft-server
npm install

# Install client dependencies
cd ../nextsoft-client
npm install
Environment Variables
Server (.env)

ini
Copy code
PORT=3000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
JWT_SECRET=your_jwt_secret
Client (.env)

ini
Copy code
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
Run the Application
bash
Copy code
# Terminal 1 - Server
cd nextsoft-server
npm start

# Terminal 2 - Client
cd nextsoft-client
npm run dev
📁 Project Structure
pgsql
Copy code
nextsoft/
├── nextsoft-client/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Home/
│   │   │   ├── Projects/
│   │   │   ├── Dashboard/
│   │   │   ├── Auth/
│   │   │   └── Profile/
│   │   ├── components/
│   │   ├── contexts/
│   │   └── hooks/
│   └── package.json
└── nextsoft-server/
    ├── index.js
    └── package.json
🎯 Key Features Breakdown
Users:

Manage personal tasks and projects

Collaborate with team members

Track productivity and deadlines

Managers/Team Leads:

Assign tasks and monitor team progress

Review project reports and analytics

Admin:

Manage users, projects, and workspace settings

Monitor platform analytics and usage

🔒 Security Features
JWT-based authentication for all routes

Role-based access control (User, Manager, Admin)

Protected routes with authentication persistence

📄 License
This project is part of a coding challenge/assignment.

Apps - Application Management Platform
Apps is a modern, full-stack web application that allows users to browse, install, and manage applications efficiently, with analytics and real-time updates.

🌐 Live Site
Client (Frontend): Apps Client

Server (Backend): Apps Server

✨ Features
🔐 Secure Authentication: Email/password login/signup and Google sign-in

📱 App Management: Browse, install, uninstall, and track installed apps

📝 App Details & Reviews: View app info, submit reviews, and ratings

📊 Analytics Dashboard: Track app usage and user activity

📱 Fully Responsive: Optimized for mobile, tablet, and desktop

🛡️ Protected Routes: Only authenticated users can access app features

🌙 Dark/Light Mode: Theme toggle with localStorage persistence

🛎️ Notifications: Toast messages for actions like install/uninstall

🛠️ Tech Stack
Frontend:

React

Vite

React Router

Tailwind CSS + DaisyUI

Recharts

Backend:

Node.js + Express

MongoDB

JWT Authentication

CORS

🚀 Getting Started
Prerequisites
Node.js (v18 or higher)

MongoDB Atlas or local MongoDB

Installation
bash
Copy code
# Clone the repository
git clone https://github.com/chayanatik1994/NextSoft.git
cd apps

# Install server dependencies
cd apps-server
npm install

# Install client dependencies
cd ../apps-client
npm install
Environment Variables
Server (.env)

ini
Copy code
PORT=3000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
JWT_SECRET=your_jwt_secret
Client (.env)

ini
Copy code
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
Run the Application
bash
Copy code
# Terminal 1 - Server
cd apps-server
npm start

# Terminal 2 - Client
cd apps-client
npm run dev
📁 Project Structure
pgsql
Copy code
apps/
├── apps-client/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Home/
│   │   │   ├── AllApps/
│   │   │   ├── AppDetails/
│   │   │   ├── Dashboard/
│   │   │   ├── Auth/
│   │   │   └── Profile/
│   │   ├── components/
│   │   ├── contexts/
│   │   └── hooks/
│   └── package.json
└── apps-server/
    ├── index.js
    └── package.json
🎯 Key Features Breakdown
Users:

Browse, install, and uninstall apps

View app details and submit reviews

Track installed apps and usage

Admin:

Manage apps and user accounts

Monitor analytics and app usage

🔒 Security Features
JWT-based authentication for all routes

Role-based access control (User, Admin)

Protected routes with authentication persistence

📄 License
This project is part of a coding challenge/assignment.









