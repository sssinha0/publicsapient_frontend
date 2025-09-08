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
<img width="1356" height="659" alt="Screenshot from 2025-09-08 10-04-28" src="https://github.com/user-attachments/assets/340a23c9-e0fa-4c15-9f29-584df08f3536" />
 <img width="1356" height="659" alt="Screenshot from 2025-09-08 10-06-17" src="https://github.com/user-attachments/assets/e7e11571-8a8e-41ef-aaaa-c89e5abfbfd5" />
<img width="1356" height="659" alt="Screenshot from 2025-09-08 10-07-22" src="https://github.com/user-attachments/assets/d49ac270-8a5a-4ec7-bfed-7e20c6934d6a" />
<img width="1356" height="659" alt="Screenshot from 2025-09-08 10-07-09" src="https://github.com/user-attachments/assets/657e57ed-bebf-46e3-ae5e-8fd2c178c95c" />


### 📄 Recipe Details

  <img width="1356" height="659" alt="Screenshot from 2025-09-08 10-07-27" src="https://github.com/user-attachments/assets/bd7c437b-064e-4aff-8c05-5d8068a1b32c" />

---

## 🎥 Demo Video
[Screencast from 2025-09-08 10-11-31.webm](https://github.com/user-attachments/assets/c624cfb0-c635-48a6-8966-106576de0d31)
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
