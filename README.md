# 🍲 Recipe Finder App

An advanced **Angular 19** application for searching, filtering, and exploring recipes.
Built with **NgRx for state management**, **Angular Material for UI components**, and **Tailwind CSS for styling**.

---

## 🚀 Features

* 🔍 **Search Recipes** by name or keyword
* 🎲 **Random Recipe Search** – surprise me!
* 🥗 **Filters**:

  * Cooking time (`<15 min`, `15–30`, `30–60`, `60+`)
  * Meal type (`Breakfast`, `Lunch`, `Dinner`, etc.)
  * Cuisine (`Indian`, `Italian`, `Mexican`, etc.)
  * Minimum rating (⭐ 1–5)
* 📊 **Sorting** (Relevance, Rating High→Low, Prep Time Low→High)
* 📄 **Recipe Details Screen** (view ingredients, steps, nutrition, reviews)
* 🛠️ **State Management with NgRx**:

  * Store all recipes globally
  * Fetch by **ID**
  * Select filtered results using selectors
* ⚡ **Optimized Filters** – multiple filters can work together
* 📱 **Responsive UI** using Tailwind (mobile-first, grid for large screens)
* 🧭 **Back Navigation** with router integration
* 🌀 **Loading Spinner** while fetching data

---

## 🛠️ Tech Stack

* [Angular 19](https://angular.io/) – framework
* [NgRx](https://ngrx.io/) – state management
* [Angular Material](https://material.angular.io/) – UI components
* [Tailwind CSS](https://tailwindcss.com/) – responsive styling
* RxJS – reactive programming
* REST API (Spring Boot backend with Hibernate Search + H2 DB)

---

## 📂 Project Structure

```
src/
├── app/
│   ├── store/                # NgRx store (actions, reducers, selectors, effects)
│   ├── services/             # API services (RecipeService)
│   ├── components/
│   │   ├── search-page/      # Search & filter screen
│   │   ├── recipe-card/      # Recipe preview card
│   │   ├── recipe-details/   # Recipe detail screen
│   │   └── shared/           # Shared UI components (spinner, header, footer)
│   └── app.module.ts
├── assets/                   # Static files (images, demo videos)
└── styles.css                # Tailwind base styles
```

---

## ▶️ Getting Started

### 1. Clone repo

```bash
git clone https://github.com/your-username/recipe-finder-app.git
cd recipe-finder-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run Angular app

```bash
ng serve
```

App runs on: **[http://localhost:4200](http://localhost:4200)**

---

## ⚡ NgRx State Flow

* **Actions**

  * `loadRecipes`, `loadRecipeById`, `searchRandomRecipe`, `applyFilters`
* **Effects**

  * Call backend API and dispatch success/failure actions
* **Reducers**

  * Update state (`recipes`, `selectedRecipe`, `loading`)
* **Selectors**

  * `selectAllRecipes`, `selectRecipeById`, `selectFilteredRecipes`

---

## 🖼️ Screenshots

### 🔍 Search & Filters

![Search Filters Screenshot](./assets/screenshots/search-filters.png)

### 📄 Recipe Details

![Recipe Details Screenshot](./assets/screenshots/recipe-details.png)

---

## 🎥 Demo Video

📹 [Watch Demo Video](./assets/demo/recipe-app-demo.mp4)
*(Add a screen recording using [OBS](https://obsproject.com/) or [Loom](https://www.loom.com/))*

---

## 🧩 Future Enhancements

* 🛒 Add "Save to Favorites" with NgRx Entity
* 👨‍🍳 User authentication & personal recipe collection
* 📤 Share recipe via social links/email
* 🔔 Push notifications for new recipes
* 🌐 Multi-language support

---

## 🤝 Contributing

1. Fork this repo
2. Create a branch (`feature/awesome-filter`)
3. Commit changes
4. Push & create a PR

---

## 📜 License

MIT © 2025 – Recipe Finder Project

---

👉 Do you want me to also **generate the NgRx store code (actions, reducer, selector, effect)** for recipes so that the README matches the actual implementation?
