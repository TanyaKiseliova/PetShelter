
# "В добрые руки" (In good hands) 🐾
is a web project for a shelter

There are some scrins from the App

## Screenshots

| Home Page | Our team and ways to help |
![alt text](/src/assets/images/scrins/image.png)

| About Page | Dark theme |
![alt text](/src/assets/images/scrins/image-1.png)

| Pets Page | Our pets |
![alt text](/src/assets/images/scrins/image-2.png)

| Pet pesonal Page | Personal page for Tyzik |
![alt text](/src/assets/images/scrins/image-3.png)

## Used technologies
React, Bootstrap and scss, Firebase (Auth + Firestore), Vercel


## Features 

### Authentication & Roles 
- **Dual-role system** 
  - **Users** can see pet's detailed cards
  - **Workers** can Full CRUD operations on pets 
- **Protected routes** based on user roles 
- **Secure login/register** 

### User Experience 
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

### Pet Management
- **Pet catalog** and detailed pet cards with photos and all necessary information 
- **Filter** pets by type, age, gender and status


### Data Base
- **Firebase** is used as data base, there are info about all users, workers and pets
- **imgbb** is used to save pet's photos. So in DB there are no photos, only links to imgbb


## Testing 

### User Account 
- **Email**: alex@gmail.com
- **Password**: alex90
- **Permissions**: View personal pet's pages

or you can redister on your own 

### Worker Accounts 
**Worker 1:**
- **Email**: shelterworker@gmail.com
- **Password**: worker123
- **Permissions**: Full pet management (CRUD)

**Worker 2:**
- **Email**: mary@gmail.com
- **Password**: maryCat
- **Permissions**: Full pet management (CRUD)


Thank you for reading
I hope you love animals as much as mine and this project is interesting for you