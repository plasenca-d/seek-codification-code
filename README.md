# Technical Test - React/Next.js Todo App Project

This is a **Next.js** application built as part of a technical test. The project demonstrates the ability to build, manage, and deploy a web application using modern technologies and best practices.

---

## **Purpose of the Technical Test**

The purpose of this test is to evaluate the following:
- Ability to set up and run a **React** or **Next.js** application.
- Implementation of clean and maintainable code.

---

## **Getting Started**

### **Requirements**
To run this project locally, ensure you have the following installed:
- **Node.js**: v20.10+ 
- **pnpm**: Installed globally. If not, run:
  ```bash
  npm install -g pnpm
  ```

### **Steps to Run**

1. **Clone the Repository:**
   ```bash
   git clone https://gitlab.com/plasenca/seek-codification-code.git
   cd seek-codification-code
   ```

2. **Install Dependencies:**
   ```bash
   pnpm i
   ```

3. **Start the Development Server:**
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## **Project Structure**

This project is organized into the following directories:

```
.
├── src/
│   ├── components/
│   ├── config/
│   ├── data/
│   ├── lib/
│   ├── utils/
│   └── app/
│       ├── auth/
│       │   ├── login/
│       │   │   ├── page.tsx
│       │   │   └── layout.tsx
│       │   ├── page.tsx
│       │   └── layout.tsx
│       ├── components/
│       │   ├── animated-side.tsx
│       │   ├── change-theme-fba.tsx
│       │   ├── login-form.tsx
│       │   └── todo-list.tsx
│       ├── page.tsx
│       └── layout.tsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── application/
│   │   │   │   ├── use-cases/
│   │   │   └── domain/
│   │   │       ├── use-cases/
│   │   │       ├── entities/
│   │   │       ├── datasources/
│   │   │       └── repositories/
│   │   │   └── infrastructure/
│   │   │       ├── datasources/
│   │   │       └── repositories/
|   │   |   └ ── presentation/
│   │   │       ├── hooks/
├── 
├── package.json
```

---

## **Technologies Used**

- **Next.js**: Framework for server-rendered and static websites.
- **pnpm**: Efficient and fast package manager.
- **TypeScript**: Adds static typing to JavaScript for better code quality.
- **Jest & Testing Library**: For writing and running unit tests.
- **ESLint & Prettier**: Ensures consistent code quality and formatting.
- **Tailwind CSS**: For styling and responsive design.
- **React Hook Form**: For handling form input and validation.
- **Zod**: For defining and validating data schemas.
- **React Query**: For fetching and caching data.
- **Lucide React**: For icons.
- **Framer Motion**: For animations and transitions.
- **Zustand**: For state management.

---

## **Testing**

To run unit tests:

```bash
pnpm test
```

To check the code quality:

```bash
pnpm lint
```

---

## **Deployment**

This project was deployed using [GitLab CI/CD](https://gitlab.com/) to ensure continuous integration and deployment of the application connecting with Vercel.

To avoid any issues, we created a Dockerfile for the deployment.

```bash
docker build -t todo-app .
```

---

## **Best Practices Implemented**

- **Clean Code Principles:** The project follows modular and maintainable code practices.
- **Environment Variables:** Secure handling of sensitive information.
- **Performance Optimization:** Efficient bundling and caching strategies.
- **CI/CD with Docker:** Continuous integration and deployment.

---