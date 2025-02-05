# 🚀 My Vite + TypeScript + React + Tailwind v5 + Gravity UI Template

A modern and lightweight template for building React applications with **Vite**, **TypeScript**, **Tailwind CSS v5**, and **Gravity UI**.

## ⚡ Features

- 🚀 **Vite** – Fast build and hot module replacement
- ⚛ **React** – Component-based UI development
- 🛠 **TypeScript** – Type-safe development
- 🎨 **Tailwind CSS v5** – Utility-first styling
- 🌌 **Gravity UI** – Beautiful prebuilt UI components
- ✅ **ESLint & Prettier** – Linting and code formatting

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lazywk/reactjs-gravityui-template.git
   cd reactjs-gravityui-template
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 🛠️ Scripts

| Command         | Description                        |
|----------------|------------------------------------|
| `npm run dev`  | Start development server          |
| `npm run build`| Build the project for production  |
| `npm run preview` | Preview the built project      |
| `npm run lint` | Lint the code using ESLint        |
| `npm run format` | Format the code using Prettier |

## 🎨 Tailwind CSS Configuration

The project is pre-configured with Tailwind CSS v5 and can be customized in the `tailwind.config.ts` file.

## 🌌 Gravity UI Usage

Gravity UI components are ready to use. Simply import the components like this:

```tsx
import { Button } from "gravity-ui";

export default function Example() {
  return <Button variant="primary">Click Me</Button>;
}
```

## 📂 Project Structure

```
📦 your-repo-name
├── 📂 src
│   ├── 📂 components  # Reusable React components
│   ├── 📂 pages       # Page components
│   ├── 📂 styles      # Tailwind global styles
│   ├── main.tsx       # App entry point
│   ├── App.tsx        # Main App component
│   └── ...
├── 📜 package.json    # Dependencies and scripts
├── 📜 tailwind.config.ts  # Tailwind CSS configuration
├── 📜 tsconfig.json   # TypeScript configuration
├── 📜 vite.config.ts  # Vite configuration
└── 📜 README.md       # Project documentation
```

## 📜 License

This project is licensed under the **MIT License**.

## ⭐ Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ by [Doniyor](https://github.com/lazywk).

