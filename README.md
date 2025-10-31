# Portfolio Website

A modern and interactive portfolio website built with Vite and React, featuring Three.js visualizations, smooth animations, and a responsive design. Implements modern web development practices with Tailwind CSS and Framer Motion for an engaging user experience.

## 🚀 Features

- Interactive 3D elements and animations using Three.js and React Three Fiber
- Smooth page transitions and micro-interactions with Framer Motion
- Responsive layout implementation using Tailwind CSS and modern CSS
- Dynamic project showcase with hover previews and modal system
- Interactive experience timeline with animated scroll effects
- Email integration using EmailJS for contact functionality
- Custom-built testimonials carousel with dynamic content
- Fast development and build times using Vite
- Optimized assets and responsive images for performance
- Mobile-first design with cross-browser compatibility

## 🛠 Technologies Used

- React
- Tailwind CSS
- Email.js
- Modern CSS practices
- Framer Motion
- vite
- Three.js

## Installation

1. Clone the repository

```bash
git clone https://github.com/johnessaju/Portfolio-website.git
cd Portfolio-website
```

2. Install dependencies for both client and server

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables

```bash
# In the server directory, create a .env file with:
VITE_EMAIL=abc@gmail.com
VITE_PUBLIC_KEY=xxxxxxxxx
VITE_SERVICE_ID=xxxxxxxxx
VITE_TEMPLATE_ID=xxxxxxxx
```

4. Run the application

```bash
# Run server (from server directory)
npm start

# Run client (from client directory)
npm start
```

## Project Structure

```
client/
  ├── public/
  ├── src/
  │   ├── api/
  │   ├── components/
  │   ├── pages/
  │   ├── redux/
  │   └── utils/
server/
  ├── controllers/
  ├── middleware/
  ├── models/
  └── routes/
```

## ⚙️ Configuration

Before running the project:

1. Set up environment variables in `.env`
2. Update constants in `src/constants/` (if needed)
3. Customize content in respective sections


## 📝 License

This project is open source and available under the [MIT License](LICENSE).


⭐️ If you like this project, give it a ⭐️!
