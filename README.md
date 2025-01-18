
# React Design Patterns

## Container and Presentation Components
This project demonstrates the **Container and Presentation Components Pattern** in React. It uses TypeScript for type safety and provides a simple example of separating concerns between logic (Container) and UI (Presentation).

---

## 🚀 Features

- **React with TypeScript** for a type-safe development experience.
- Clean separation of concerns:
  - **Presentation Component** (`UserProfile`): Focuses on rendering UI.
  - **Container Component** (`UserProfileContainer`): Handles logic, data fetching, and state management.
- Simple and modular architecture.
- Styled with **CSS** for a professional look.

---


---

## 🛠️ Installation and Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/ameer78/react-design-patterns
cd react-container-presentation
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Run the Application**
```bash
npm run dev
```

The app will start on [http://localhost:5173](http://localhost:5173).

---

## 💻 Usage

The app displays a simple user profile card. 

- The **UserProfileContainer** fetches user data from a mock API and passes it to the **UserProfile** component.
- The **UserProfile** renders the user’s name, email, and avatar.

---

## 📝 Code Examples

### **1. `UserProfile` (Presentation Component)**

```tsx
interface UserProfileProps {
  name: string;
  email: string;
  avatar?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatar }) => (
  <div className="user-profile">
    <img src={avatar || "https://via.placeholder.com/100"} alt={`${name}'s avatar`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default UserProfile;
```

### **2. `UserProfileContainer` (Container Component)**

```tsx
import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";

interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

const UserProfileContainer: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data: User = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Jane Doe", email: "jane.doe@example.com", avatarUrl: "https://via.placeholder.com/100" }), 1000)
      );
      setUser(data);
    };
    fetchUser();
  }, []);

  return user ? (
    <UserProfile name={user.name} email={user.email} avatar={user.avatarUrl} />
  ) : (
    <p>Loading...</p>
  );
};

export default UserProfileContainer;
```

---

## 🌟 Why Use This Pattern?

- **Reusability**: Presentation components can be reused across multiple parts of the app.
- **Testability**: Separation makes it easier to test logic and UI independently.
- **Readability**: Clearer distinction between logic and UI simplifies the codebase.

---



---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

