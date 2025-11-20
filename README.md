# 📦 Deploying a NestJS API with PostgreSQL for QR Code Container Management

## 🚀 Overview 
This project is a **QR Code-based container management system**, allowing users to **create, scan, and organize containers and items** efficiently. It features a **NestJS API**, a **PostgreSQL database**, and a frontend built with **Next.js** and **Tailwind CSS**.

---

## 🔧 Prerequisites
Ensure you have the following installed:

- **VPS Server** (e.g., VPSdime) running Ubuntu - 
- **Node.js** and **PostgreSQL**
- **PM2** for process management
- **GitHub** repository for version control

---

## 📌 Step 1: Server Setup

1️⃣ **Connect to your VPS:**
```sh
ssh user@your-server-ip
```

2️⃣ **Install Node.js and PostgreSQL:**
```sh
sudo apt update
sudo apt install nodejs npm postgresql
```

3️⃣ **Create PostgreSQL database & user:**
```sh
sudo -u postgres psql
```
Inside PostgreSQL:
```sql
CREATE DATABASE qrcode_db;
CREATE USER qrcode_user WITH ENCRYPTED PASSWORD 'securepassword';
GRANT ALL PRIVILEGES ON DATABASE qrcode_db TO qrcode_user;
\q
```

---

## 📌 Step 2: Deploy the API

1️⃣ **Clone the repository:**
```sh
git clone git@github.com:CarlosGatti/qrcode-backend.git
cd qrcode-backend
```

2️⃣ **Install dependencies:**
```sh
npm install
```

3️⃣ **Set up the environment variables (.env):**
```sh
cp .env.example .env
nano .env
```
Ensure to update database credentials.

4️⃣ **Run database migrations:**
```sh
npm run prisma:migrate
```

5️⃣ **Start the API using PM2:**
```sh
pm2 start npm --name qrcode-api -- run start:prod
```

6️⃣ **Ensure the API restarts on server reboot:**
```sh
pm2 save
pm2 startup
```

---

## 📌 Step 3: Deploy the Frontend (Next.js)

1️⃣ **Clone the frontend repository:**
```sh
git clone git@github.com:CarlosGatti/qrcode-frontend.git
cd qrcode-frontend
```

2️⃣ **Install dependencies:**
```sh
npm install
```

3️⃣ **Set up environment variables:**
```sh
cp .env.example .env
nano .env
```

4️⃣ **Start the frontend server:**
```sh
npm run build
npm start
```

---

## 🎯 Features

✅ **QR Code-based Container & Item Management**  
✅ **Secure User Authentication**  
✅ **Cloud-hosted PostgreSQL Database**  
✅ **Fast API with NestJS**  
✅ **Responsive UI with Tailwind CSS**  
✅ **Item Image Upload & Storage**  
✅ **Automatic Deployment via PM2**  

---

## 🚀 Future Enhancements

🔹 **AI-based Image Recognition for Item Categorization**  
🔹 **Container Inventory Alerts & Notifications**  
🔹 **Multi-user Access with Role-based Permissions**  
🔹 **Mobile App Integration for Faster Scanning**  

---

## 🎯 API Playground
GraphQL Playground:  
🔗 [https://yourapi.com/graphql](https://yourapi.com/graphql)

---

## 💰 Cost Breakdown
| Service  | Cost |
|----------|------|
| Domain   | $1.99 |
| VPS (VPSDime) | $5.00 |

---

## 🛠 Maintenance
To restart the API after an update:
```sh
git pull origin main
npm install
pm2 restart qrcode-api
```

---
