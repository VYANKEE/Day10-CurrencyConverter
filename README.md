# Smart Currency Converter

Day 10: 45 Days of Code Challenge

A premium, real-time currency conversion application featuring live exchange rates, country flags, and a modern dark-themed UI. This project utilizes custom React hooks for API state management and delivers a seamless user experience.

---

## Project Overview

- Project Name: Smart Currency Converter
- Application Type: Utility Web Application
- Data Source: Frankfurter API (Real-time rates)
- Goal: To demonstrate advanced API handling, custom hooks, and polished UI design in React.

## Key Features

- Real-Time Exchange Rates: Fetches the latest market rates dynamically via API.
- Custom Hook Implementation: Uses a reusable `useCurrencyInfo` hook for optimized data fetching.
- Smart UI Components: Includes country flags and full currency names (e.g., USD - United States Dollar).
- Two-Way Conversion: Allows users to swap currencies instantly with a single click.
- Responsive Design: A cinematic, scroll-based layout with glassmorphism effects.
- Dynamic Dropdowns: Automatically populates available currencies based on API data.

## Technical Stack

- Frontend Library: React.js (Vite)
- Styling: Pure CSS (Animations, Glassmorphism, Flexbox)
- API: Frankfurter API & FlagsAPI
- State Management: React useState & useEffect

## Project Structure

- src/hooks/useCurrencyInfo.js: Custom hook to handle API calls and cache results.
- src/components/InputBox.jsx: Reusable component for amount input and currency selection.
- src/App.jsx: Main application logic handling state synchronization and conversion math.

## Installation and Setup

1. Clone the Repository
   git clone https://github.com/VYANKEE/Day10-CurrencyConverter.git

2. Navigate to the Directory
   cd Day10-CurrencyConverter

3. Install Dependencies
   npm install

4. Start the Application
   npm run dev

## Learning Outcomes

- Creating and utilizing Custom Hooks to separate logic from UI.
- Handling multiple API endpoints to fetch rates and currency metadata simultaneously.
- Implementing controlled components for form handling in React.
- Designing a polished, interactive UI with CSS animations.

---

Developed by VYANKEE
