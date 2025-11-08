
# 🐾 "В добрые руки" (In good hands) 🐾 ![Logo](/public/dogLogo.ico)

is a website for a shelter which helps homeless dogs and cats find new loving home.

**Live Demo** (link to Vercel with this project): [deployed project on Vercel](https://pet-shelter-chi.vercel.app/)

--- 

## 📸 Screenshots

| Home Page | Our team and ways to help |
![Home Page](/src/assets/images/scrins/image.png)

| About Page | Dark theme |
![About Page](/src/assets/images/scrins/image-1.png)

| Pets Page | Our pets |
![Pets Page](/src/assets/images/scrins/image-2.png)

| Pet pesonal Page | Personal page for Tyzik |
![Pet Page](/src/assets/images/scrins/image-3.png)

| Pet pesonal Page | Update pet's page in worker account |
![Pet Update](/src/assets/images/scrins/image-4.png)

| logIn Page | LogIn page in dark theme |
![Log in](/src/assets/images/scrins/image-5.png)

--- 
## 🛠️ Used technologies
React, TypeScript, Bootstrap and scss, Firebase (Auth + Firestore), Vercel

---

## ✅ Features 🌟

### 🔐 Authentication & Roles 
- **Dual-role system** 
  - **Users** can see pet's detailed cards
  - **Workers** can Full CRUD operations on pets 
- **Protected routes** based on user roles 
- **Secure login/register** 

### 📱 User Experience 💻
- **Theme switching** Light/Dark mode which save in local storage
- **Animated loader** god barking GIF with transparent background 
- **Adaptive design** which is working on diffrent devices
- **Header and Footer** on each page
- **Burger** in header
- **Accordion** for types of help
- **Map** with location of the shelter
- **Video** from YouTube to learn more about shelter
- **Counter animation** for the amountSection
- **Changing emoji** in the component AboutSection 
 depending on the theme 

### 🐶 Pet Management
- **Pet catalog** and detailed pet cards with photos and all necessary information 
- **Filter** pets by type, age, gender and status


### ⛃ Database
- **Firebase** is used as database, there are info about all users, workers and pets
- **imgbb** is used to save pet's photos. So in DB there are no photos, only links to imgbb


## 🧪 Testing 👩🏻‍🔬

### User Account 
**User 1:**
- **Email**: alex@gmail.com
- **Password**: alex90
- **Permissions**: View personal pet's pages

**User 2:**
- **Email**: tanik@gmail.com
- **Password**: itanik
- **Permissions**: View personal pet's pages

*You can also register a new personal account*

### Worker Accounts 
**Worker 1:**
- **Email**: shelterworker@gmail.com
- **Password**: worker123
- **Permissions**: Full pet management (CRUD)

**Worker 2:**
- **Email**: mary@gmail.com
- **Password**: maryCat
- **Permissions**: Full pet management (CRUD)

--- 

The websites of the animal shelters [Super Kot](https://superkot.by/) and [Egida](https://egida.by/) in Minsk were used as a basis.
They inspired the creation of something similar, but  with less functionality.

--- 
Thank you for reading
**Built with compassion for flaffy friends** 🐾🐶❤️🐱🐾
I hope you love animals as much as I do and this project is interesting for you


