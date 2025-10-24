# 📸 Pics - Image Search Application

A modern React application for searching and displaying images, built while following Stephen Grider's Modern React with Redux course.

## 🎓 Course Information

**Course:** [Modern React with Redux](https://www.udemy.com/course/react-redux/)
**Instructor:** Stephen Grider
**Course Link:** https://www.udemy.com/course/react-redux/

This project is part of the learning journey through Stephen Grider's comprehensive React and Redux course on Udemy.

## 📋 Project Description

Pics is a React application that allows users to search for images using an external API. The application demonstrates core React concepts including:

- **State Management** - Using React hooks (useState)
- **Component Architecture** - Modular, reusable components
- **API Integration** - Fetching data from external sources
- **Loading States** - User experience with skeleton loaders
- **Modern React Patterns** - Functional components and hooks

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **ESLint & Prettier** - Code quality and formatting

## 🚀 Features

- 🔍 **Image Search** - Search for images using text queries
- ⚡ **Fast Loading** - Optimized with Vite for quick development
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- 📱 **Responsive** - Works on desktop and mobile devices
- 🔄 **Loading States** - Skeleton loaders for better UX
- 🧹 **Code Quality** - ESLint and Prettier for consistent code

## 📁 Project Structure

```
src/
├── components/
│   ├── ImageList.js      # Displays list of images
│   ├── ImageShow.js       # Individual image component
│   ├── SearchBar.js       # Search input component
│   └── SkeletonLoader.jsx # Loading state component
├── api.js                 # API integration
├── App.js                 # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
# or
npm start
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm start            # Alternative start command

# Building
npm run build        # Create production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Build for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Learning Objectives

This project helps in understanding:

- React functional components and hooks
- State management with useState
- Component composition and props
- API integration with async/await
- Loading states and user experience
- Modern React development workflow
- Code organization and best practices

## 📚 Key Concepts Demonstrated

- **useState Hook** - Managing component state
- **Event Handling** - Form submission and user interactions
- **Async Operations** - API calls and loading states
- **Component Props** - Passing data between components
- **Conditional Rendering** - Showing different UI based on state
- **Modern JavaScript** - ES6+ features and async/await

## 🤝 Contributing

This is a learning project, but feel free to experiment and add features:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of the Modern React with Redux course.

---

**Happy Learning! 🎉**
