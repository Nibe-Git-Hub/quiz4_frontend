Backend: https://github.com/Rolian-Sarmiento/quiz4_backend
Screenshots: https://drive.google.com/drive/folders/14727lmuy_QcFeJCZlGxjWoddlYH9NhI5?usp=sharing

This README is designed for a React-based frontend that interacts with a Quiz application backend. Since this is the `quiz4_frontend`, the primary focus is on how it consumes API endpoints and how you can test those underlying services.

---

# 🧠 Quiz Application - Frontend

This repository contains the frontend implementation for the Quiz application. It provides a user interface for browsing quiz categories, answering questions, and viewing results.

## 🚀 Getting Started

### Prerequisites

* **Node.js** (v16 or higher recommended)
* **npm** or **yarn**

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Nibe-Git-Hub/quiz4_frontend.git
cd quiz4_frontend

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm start

```


The app will typically run on `http://localhost:3000`.

---

## 🛠 API Endpoints & Testing (Postman)

The frontend communicates with a backend API (usually running on `http://localhost:5000` or `8080`). Below are the core endpoints and how to test them using **Postman**.

### 1. Fetch All Quizzes

* **Method:** `GET`
* **Endpoint:** `/api/quizzes`
* **Description:** Retrieves a list of all available quiz categories and metadata.
* **Postman Step-by-Step:**
1. Open Postman and click **New > HTTP Request**.
2. Change the method dropdown to **GET**.
3. Paste the URL: `http://localhost:5000/api/quizzes`
4. Click **Send**. You should see a JSON array of quizzes.



### 2. Get Specific Quiz Questions

* **Method:** `GET`
* **Endpoint:** `/api/quizzes/{quiz_id}/questions`
* **Description:** Fetches the questions and multiple-choice options for a specific quiz.
* **Postman Step-by-Step:**
1. Set method to **GET**.
2. Use URL: `http://localhost:5000/api/quizzes/1/questions` (Replace `1` with a valid ID).
3. Click **Send**.



### 3. Submit Quiz Results

* **Method:** `POST`
* **Endpoint:** `/api/quizzes/submit`
* **Description:** Sends the user's answers to the server to be graded.
* **Postman Step-by-Step:**
1. Set method to **POST**.
2. Enter URL: `http://localhost:5000/api/quizzes/submit`
3. Click the **Body** tab below the URL bar.
4. Select **raw** and change the format (on the right) to **JSON**.
5. Paste a sample payload:
```json
{
  "quiz_id": 1,
  "answers": [
    {"question_id": 101, "selected_option": "A"},
    {"question_id": 102, "selected_option": "C"}
  ]
}

```


6. Click **Send**.



---

## 🧪 Detailed Postman Instructions (Spoon-fed Edition)

If you have never used Postman before, follow these steps exactly:

1. **Install Postman:** Download it from [postman.com](https://www.postman.com/).
2. **Create a Workspace:** Click "Workspaces" -> "My Workspace".
3. **The Request Bar:**
* **Left Side:** Choose your "Verb" (GET for fetching data, POST for sending/saving data).
* **Middle:** Type the address (e.g., `http://localhost:5000/...`).


4. **The "Body" Tab (Only for POST):**
* You cannot send data in a GET request. For POST, click "Body", then the "raw" radio button, and ensure the blue text says "JSON".
* **Crucial:** If your JSON is red or has a red "X", you have a typo (like a missing comma).


5. **Check the Response:**
* Once you hit **Send**, look at the bottom pane.
* **Status 200 OK:** Success!
* **Status 404:** The URL is wrong.
* **Status 500:** The backend crashed or isn't running.



---

## 📁 Project Structure

* `/src/components`: UI components (Buttons, Cards, Modals).
* `/src/pages`: Main views (Home, Quiz View, Results).
* `/src/services`: API call logic using `fetch` or `axios`.

## 🚀 Features

* **[NEW] User List View**: Easily browse through all registered users in a clean, responsive list format.
* **Search & Filter**: (Optional: add if you implemented search) Quickly find specific users by name or role.
* **User Details**: Click on any user to view their full profile and activity.

## 📸 Screenshots

### User List View
![User List View Screenshot](path/to/your/screenshot.png)
*A clean interface to manage and view all users.*

## 🛠 Usage

To access the user list, navigate to the `/users` (or your specific route) endpoint. 

```javascript
// Example: How to fetch the user list in your app
import { UserList } from './components/UserList';

function App() {
  return (
    <UserList />
  );
}

