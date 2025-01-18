import React, { useState, useEffect } from "react";
import UserProfile from "../Component/UserProfile";

interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

const UserProfileContainer: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchUser = async () => {
      const data: User = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              name: "Jane Doe",
              email: "jane.doe@example.com",
              avatarUrl: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid",
            }),
          1000
        )
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
