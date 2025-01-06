# Next.js Starter Template

This is a modern Next.js starter template with authentication, database integration, and UI components pre-configured.

## Features

- ⚡ **Next.js 14** with App Router
- 🔐 **Clerk Authentication**
- 🗃️ **Prisma ORM** with PostgreSQL
- 🎨 **Tailwind CSS** for styling
- 🧱 **Shadcn/ui** components
- 📝 **TypeScript** for type safety

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- PostgreSQL database
- Clerk account for authentication

## Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd next-gen-starter
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory with the following variables:
```
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. **Initialize Prisma**
```bash
# Generate Prisma Client
npx prisma generate

# Push the database schema
npx prisma db push
```

5. **Start the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js App Router
├── components/          # UI Components
├── lib/                 # Utility functions
│   └── prisma.ts       # Prisma client configuration
├── prisma/             
│   └── schema.prisma   # Database schema
└── public/             # Static assets
```

## Database Schema

Currently, the schema includes:

```prisma
model User {
  id        String   @id
  clerkId   String   @unique
  email     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).
