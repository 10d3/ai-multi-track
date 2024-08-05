![Logo](https://github.com/10d3/NextJS-Boilerplate/blob/ca144300e8ec311f8ffb47c7e11fd5ab7fa7abe6/public/preview-title.png)

# Next.js Boilerplate

Welcome to our powerful and feature-rich Next.js boilerplate! This boilerplate is designed to streamline your development process and help you build robust, scalable web applications with ease. It integrates essential tools and services, including Auth.js for authentication, Stripe for payment processing, PostgreSQL for a reliable database solution, and TanStack Query for efficient data fetching and state management.

## Features

- **Next.js Framework**: Leverage the full potential of Next.js, a React-based framework known for its server-side rendering, static site generation, and automatic code splitting.
- **Auth.js**: Secure authentication using Auth.js, supporting various providers like Google, Facebook, and GitHub.
- **Stripe Integration**: Seamless payment processing with Stripe, allowing you to manage subscriptions and transactions effortlessly.
- **PostgreSQL**: A powerful, open-source relational database for storing and managing your application's data.
- **TanStack Query**: Efficient data fetching, caching, synchronization, and state management with TanStack Query.

## Demo

Check out our [live video demo](https://mega.nz/file/ZzJU2IxZ#ZsofdCcqE0F7b0XAebKcVCMJduFazpi0qxJUUITI4hc) to see the boilerplate in action!

<div style="display: flex; justify-content: center; align-items: center; width:100%;">
  <img width='100%' src="https://github.com/10d3/NextJS-Boilerplate/blob/d0870f7b00f55a1d156e363a666c2b60d5194a34/public/preview-gif.gif" alt="App Demo" />
</div>

## Screenshots

Take a look at some screenshots of the application:

![App Screenshot](https://github.com/10d3/NextJS-Boilerplate/blob/5eb3a860abbd7b6ff6ec9475f72ddf60d62f97c2/public/preview.png)

![App Screenshot](https://github.com/10d3/NextJS-Boilerplate/blob/a95ce79e2898540631709a7db9e159d8f55b0143/public/preview-setting.png)

![App Screenshot](https://github.com/10d3/NextJS-Boilerplate/blob/a95ce79e2898540631709a7db9e159d8f55b0143/public/preview-billing.png)

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**:

   ```bash
     git clone https://github.com/10d3/NextJS-Boilerplate.git
     cd NextJS-Boilerplate
   ```

2. **Install Dependencies**:
   ```bash
     bun add
     npm install
   ```
3. **Set Up Environment Variables**:
   Create a .env.local file in the root of your project and add the necessary environment variables as shown below.
4. **Run Database Migrations**:
   ```bash
     bunx prisma migrate dev --name init
     npx prisma migrate dev --name init
   ```
5. **Start the Development Server**:
   ```bash
     bun dev
     npm run dev
   ```
   Your application should now be running on http://localhost:3000.

## Env variable

To run this project, you will need to add the following environment variables to your .env file

     ```
       API_KEY=your_api_key
       ANOTHER_API_KEY=another_api_key
       OPENAI_API_KEY=your_openai_api_key
       GEMINI_API_KEY=your_gemini_api_key
       AUTH_SECRET=your_auth_secret
       AUTH_GOOGLE_ID=your_auth_google_id
       AUTH_GOOGLE_SECRET=your_auth_google_secret
       AUTH_GITHUB_ID=your_auth_github_id
       AUTH_GITHUB_SECRET=your_auth_github_secret
       DATABASE_URL=your_database_url
       STRIPE_API_KEY=your_stripe_api_key
       STRIPE_SECRET_WEBHOOK=your_stripe_secret_webhook
       NEXT_PUBLIC_APP_URL=your_app_url
       RESEND_API_KEY=your_resend_api_key
     ```

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://herley.netlify.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aherleym/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

## Authors

- [@10d3](https://github.com/10d3)

## Support

For support, email fake@fake.com or join our Slack channel.
