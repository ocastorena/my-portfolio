export interface Project {
  title: string;
  description: string;
  link: string;
  repo: string;
}

export const projects: Project[] = [
  {
    title: "ByteChat",
    description:
      "ByteChat is a minimalist social media web app built with Next.js, TypeScript, and Tailwind CSS, featuring secure NextAuth.js authentication, Prisma ORM with MongoDB, and deployed on Vercel",
    link: "https://bytechat-two.vercel.app",
    repo: "https://github.com/ocastorena/bytechat",
  },
  {
    title: "Reddit Lite",
    description:
      "A Reddit clone built with React, JavaScript, and Tailwind. Simulates voting and shows comments.",
    link: "https://redditliteclient.netlify.app/",
    repo: "https://github.com/ocastorena/reddit-lite",
  },
  {
    title: "E-Commerce Frontend",
    description:
      "A React 19 + Redux Toolkit web app delivering a seamless shopping experience with product browsing, cart management, secure Stripe payments, and multi-provider OAuth authentication (Google, Facebook, GitHub), all styled with Styled-components and optimized with Vite for fast performance.",
    link: "https://e-commerce-app-frontend-maor.onrender.com/",
    repo: "https://github.com/ocastorena/e-commerce-app-frontend",
  },

  {
    title: "E-Commerce Backend",
    description:
      "A RESTful API built with Node.js and Express, featuring secure Passport.js authentication, a PostgreSQL database, comprehensive Swagger documentation, and a robust test suite using Mocha, Chai, and Supertest to power a robust shopping platform",
    link: "https://e-commerce-app-frontend-maor.onrender.com/",
    repo: "https://github.com/ocastorena/e-commerce-app-backend",
  },
];
