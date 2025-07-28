#LINK:   
[https://verbal-ai-powered-analytics-dashboard.netlify.app](https://verbal-ai-powered-analytics-dashboard.netlify.app)

# AI-Powered Marketing Dashboard - ADmyBRAND Insights

This project is a modern, visually stunning analytics dashboard for "ADmyBRAND Insights," a fictional digital marketing agency. It is built using React, TailwindCSS, and the "cyberpunk" DaisyUI theme, and it features AI-powered data analysis through the Google Gemini API.

## AI Usage Report

This project was developed by leveraging a large language model (LLM) acting as a senior frontend engineer. The AI was instrumental in accelerating the development process from initial scaffolding to final implementation.

### Key Tools & Prompts

1.  **Initial Scaffolding:** The entire project structure, including component files, data constants, and basic application logic, was generated from a single, detailed prompt. The prompt specified the core requirements:
    *   **Technology Stack:** React, Vite, Tailwind CSS, DaisyUI.
    *   **Core Features:** Overview page with metric cards, interactive charts (line, bar, pie), a data table with sorting/filtering/pagination, and a responsive design.
    *   **UI/UX:** A modern design system, clear visual hierarchy, and smooth animations.
    *   **Architecture:** Reusable component architecture (`Card`, `Chart`, `Table`).

2.  **Theming and Styling:** A subsequent prompt was used to apply a specific visual style:
    *   **Prompt:** `"use this daisyui theme..."` (followed by the cyberpunk theme configuration).
    *   **AI Action:** The AI updated the `index.html` Tailwind configuration, modified chart colors in the Recharts components, and updated component-specific styles (like status pills in the data table) to create a cohesive, vibrant "cyberpunk" aesthetic.

3.  **Documentation:** The final prompt requested the creation of this README file.
    *   **Prompt:** `"could you add a readme.md file which has the contents like: AI Usage Report (brief summary of tools used and key prompts) and the flow of code and working."`
    *   **AI Action:** The AI generated this document, analyzing its own development process and the resulting codebase to provide a summary.

### AI's Role Summary

*   **Code Generation:** Wrote boilerplate for all React components, services, and data structures.
*   **Styling:** Implemented the full UI based on TailwindCSS and the specified theme, ensuring visual consistency.
*   **API Integration:** Set up the service to connect to the Google Gemini API.
*   **Data Mocking:** Created a full set of realistic sample data to populate the dashboard.
*   **Problem-Solving:** Handled complexities like responsive layouts, component state management, and data flow architecture.

---

## Application Flow & Code Structure

The application follows a standard component-based architecture, which makes it modular and easy to maintain.

### 1. Entry Point

*   **`index.html`**: The main HTML file. It includes the root div for the React app, loads TailwindCSS from a CDN, and configures the `importmap` to manage dependencies like React, Recharts, and the Gemini SDK without a traditional bundler.
*   **`index.tsx`**: Mounts the main `App` component into the root div.

### 2. Core Application Logic (`App.tsx`)

This is the central component that orchestrates the entire dashboard.
*   **State Management:** It manages global state, including the current theme (`dark`/`light`), the initial `loading` state, and the `isSidebarOpen` state for the responsive mobile menu.
*   **Layout:** It assembles the main layout using the `Sidebar` and `Header` components.
*   **Component Rendering:** It renders all the dashboard widgets. During the initial loading state, it displays `Skeleton` components for a better user experience.
*   **Data Aggregation:** It gathers all mock data from `constants.ts` into a single `allDataForAI` object, which is then passed down to the `AiInsightCard` to provide context for the AI analysis.

### 3. Component Breakdown

The `components` directory is organized by function:

*   **`components/layout/`**:
    *   `Header.tsx`: The top navigation bar, containing the page title, theme toggle, and user avatar.
    *   `Sidebar.tsx`: The main navigation sidebar with links to different sections of the application. It's responsive and collapsible on smaller screens.

*   **`components/ui/`**:
    *   These are the base, reusable building blocks of the design system.
    *   `Button.tsx`, `Card.tsx`, `Skeleton.tsx`: Generic UI elements providing consistent styling.
    *   `Icons.tsx`: A centralized component for all SVG icons, making them easy to manage and reuse.

*   **`components/dashboard/`**:
    *   These are the primary feature components that make up the dashboard.
    *   `MetricCard.tsx`: Displays a single Key Performance Indicator (KPI).
    *   `LineChartCard.tsx`, `BarChartCard.tsx`, `PieChartCard.tsx`: Data visualization components built using the **Recharts** library.
    *   `DataTable.tsx`: A feature-rich table that displays campaign data with controls for **filtering**, **sorting**, and **pagination**.
    *   `AiInsightCard.tsx`: The core AI feature. It provides a textarea for users to ask questions. It then calls the `geminiService` with the user's query and the aggregated data context.

### 4. Data and Services

*   **`constants.ts`**: Contains all mock data for the application. Centralizing data makes the components cleaner and the data easier to manage or replace with a live API feed.
*   **`types.ts`**: Defines shared TypeScript interfaces (`Campaign`, `Metric`, etc.), ensuring type safety and consistency across the application.
*   **`services/geminiService.ts`**: This file isolates the logic for communicating with the Google Gemini API.
    *   The `getAiInsight` function constructs a detailed prompt containing the data context and the user's question, sends it to the `gemini-2.5-flash` model, and returns the text-based response.

### 5. How It Works

1.  The user opens `index.html`. The React app initializes.
2.  `App.tsx` renders the main layout. It shows skeleton loaders for 1.5 seconds to simulate data fetching.
3.  After the timeout, the dashboard components (`MetricCard`, charts, table) are rendered with mock data from `constants.ts`.
4.  The user can interact with the UI: toggle the theme, sort the data table, or filter campaigns.
5.  In the **AI-Powered Insights** card, the user types a question (e.g., "Which campaign has the best ROAS?") and clicks "Get Insight."
6.  `AiInsightCard.tsx` calls `getAiInsight` from `geminiService.ts`.
7.  `geminiService.ts` sends the dashboard data and the user's question to the Gemini API.
8.  The API analyzes the data in the context of the question and returns an insightful summary.
9.  The response is displayed back to the user in the `AiInsightCard`.
