# 🛒 E-commerce Frontend Application

> ⚠️ This project focuses on frontend development. The backend is consumed via external APIs.

A production-oriented e-commerce frontend built with Next.js and TypeScript, focused on scalable architecture, state management, and real-world user flows such as authentication and cart handling.

---

## 🚀 Features

- User authentication with persistent sessions and protected routes  
- Global state management using React Context API and custom hooks  
- Shopping cart system with business logic (item validation, totals, persistence)  
- Dynamic product pages using Next.js App Router  
- Form handling with schema-based validation (Formik + Yup)  
- Reusable and modular UI components  
- Responsive design with Tailwind CSS  

---

## 🧠 Architecture

The application is structured with a strong focus on scalability and maintainability:

- **Context-based state management** for authentication and cart logic  
- **Service layer abstraction** for API communication  
- **Reusable components** for consistent UI behavior  
- **Validation layer** using centralized schemas  
- **Separation of concerns** between UI, state, and data logic  

---

## 🛠️ Tech Stack

- Next.js (App Router)  
- React  
- TypeScript  
- Tailwind CSS  
- Formik  
- Yup  
- Context API  

---

## 🔌 API Integration

The frontend communicates with a backend through a dedicated service layer, handling:

- Authentication (login / register)  
- Product data fetching  
- Order management  

Token-based requests are used for protected operations.

---

## 📂 Project Structure

src/
├── app/ # Routing (Next.js App Router)
├── components/ # Reusable UI components
├── contexts/ # Global state (Auth, Cart)
├── services/ # API communication
├── validators/ # Form validation schemas