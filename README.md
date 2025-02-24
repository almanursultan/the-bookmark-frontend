# 📚 The BookBark

The BookBark is a web application that allows users to search for books, view book details, and join book clubs to discuss their favorite books with like-minded readers. Unlike traditional book clubs where users must read pre-selected books, this platform enables users to join clubs based on the books they are already reading.

📖 **Problem:**  
Book lovers often struggle to find communities discussing the books they are currently reading. Many book clubs follow predefined reading lists, which may not always align with individual interests.  
✨ **Solution:**  
The BookBark provides a solution by allowing users to join discussions based on books they choose to read.

## 📂 **API Endpoints**

### 🚀 **Frontend (React)**

| **Feature**      | **Route**            | **Description**                                    |
| ---------------- | -------------------- | -------------------------------------------------- |
| `Home Page`      | `/`                  | Displays search, best books, and recommendations   |
| `Book Details`   | `/book/:id`          | Shows detailed information about the selected book |
| `Book Club Page` | `/book-clubs/:title` | Displays book club info and discussion board       |

---

### ⚙️ **Backend (Express.js + MySQL)**

| **Method** | **Endpoint**                      | **Description**                     |
| ---------- | --------------------------------- | ----------------------------------- |
| `GET`      | `/api/books`                      | Fetches all books                   |
| `GET`      | `/api/books/best-books`           | Fetches best books of 2024          |
| `GET`      | `/api/book-clubs/:title`          | Fetches book clubs by book title    |
| `POST`     | `/api/book-clubs/:title/comments` | Adds a new comment to the book club |

```bash
git clone https://github.com/almanursultan/the-bookmark-frontend.git
cd the-bookmark-capstone
npm install
npm run dev
```
