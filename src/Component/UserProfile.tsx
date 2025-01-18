import React from "react";

interface UserProfileProps {
  name: string;
  email: string;
  avatar?: string; // Optional property
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatar }) => (
  <div style={{ textAlign: "center", border: "1px solid #ccc", padding: "1rem" }}>
    <img
      src={avatar || "https://via.placeholder.com/100"}
      alt={`${name}'s avatar`}
      style={{ borderRadius: "50%", width: "100px" }}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default UserProfile;


