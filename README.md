# NU CHAT APPLICATION

This is a full-stack, real-time messaging application inspired by WhatsApp, enhanced with modern AI capabilities. It allows users to engage in one-on-one and group chats, share media, and interact with AI agents powered by OpenAI's GPT and DALL-E models, all in real-time. The application also features live video calling.

## ✨ Features

- **Real-Time Messaging**: Instant one-on-one and group messaging
- **User Authentication**: Secure sign-up and sign-in with Clerk
- **AI Chat (GPT)**: Mention `@gpt` in a message to get intelligent responses from OpenAI's GPT model
- **AI Image Generation (DALL-E)**: Mention `@dall-e` to generate unique images based on your text prompt
- **Group Chats**: Create group conversations with custom names and images
- **Video & Image Sharing**: Upload and share video and image files seamlessly
- **Live Video Calls**: Start real-time video calls with ZegoCloud
- **Online Status**: See which users are currently online
- **Light & Dark Mode**: A sleek theme-switcher for user preference
- **Emoji Picker**: Add flair to your messages with a built-in emoji picker
- **Responsive Design**: A beautiful and functional UI on all screen sizes
- **Group Admin Controls**: Admins can kick users from group chats

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Backend & Database**: Convex (Real-time DB, Functions, File Storage)
- **Authentication**: Clerk
- **UI Components**: Shadcn/ui & Tailwind CSS
- **Video Calling**: ZegoCloud
- **AI Integration**: OpenAI API (GPT-3.5 & DALL-E 3)
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/whatsapp-clone.git
cd whatsapp-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

You'll need to configure environment variables for Clerk, Convex, OpenAI, and ZegoCloud.

#### A. Create .env.local file

Create a file named `.env.local` in the root of your project and add the following keys:

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# ZegoCloud
ZEGO_APP_ID=
ZEGO_SERVER_SECRET=
```

#### B. Set up Convex & Get Keys

Run the Convex development server. It will prompt you to log in and create a new project.

```bash
npx convex dev
```

Follow the CLI instructions. It will populate `NEXT_PUBLIC_CONVEX_URL` in your `.env.local` file.

Go to your project's Convex Dashboard. Navigate to **Settings** → **Environment Variables** and add the following:

| Variable Name | Value |
|---------------|-------|
| `CLERK_ISSUER_URL` | Your Clerk Issuer URL (e.g., `https://*.clerk.accounts.dev`) |
| `OPENAI_API_KEY` | Your OpenAI API key |
| `CLERK_WEBHOOK_SECRET` | Your Clerk webhook signing secret |

#### C. Set up Clerk

1. Create a Clerk account and a new project
2. Copy your **Publishable Key** and **Secret Key** into your `.env.local` file
3. In your Clerk Dashboard, go to **JWT Templates** and create a new template based on "Convex". Copy the **Issuer URL** and add it to your Convex environment variables as `CLERK_ISSUER_URL`
4. In your Clerk Dashboard, go to **Webhooks**, create a new endpoint, and set the URL to `YOUR_CONVEX_URL/clerk` (e.g., `https://happy-animal-123.convex.site/clerk`)
5. Select the `user.created`, `user.updated`, `session.created`, and `session.ended` events
6. Copy the **Signing Secret** and add it to your Convex environment variables as `CLERK_WEBHOOK_SECRET`

#### D. Set up OpenAI & ZegoCloud

1. Get your API key from OpenAI and add it to your Convex environment variables
2. Create a project on ZegoCloud, get your **App ID** and **Server Secret**, and add them to your `.env.local` file

### 4. Run the Application

With `npx convex dev` still running in one terminal, open another terminal and start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
.
├── convex/         # Convex backend functions, schema, and auth config
├── public/         # Static assets (images, icons)
└── src/
    ├── app/        # Next.js App Router pages and layouts
    ├── components/ # Reusable React components (UI and domain-specific)
    ├── hooks/      # Custom React hooks
    ├── lib/        # Utility functions and SVGs
    ├── providers/  # React Context providers (Theme, Convex)
    └── store/      # Zustand state management store
```

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
