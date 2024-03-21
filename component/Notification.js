import React from "react";
import { useNotification } from "../context/NotificationContext";

const Notification = () => {
  const { notification } = useNotification();

  if (!notification) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        margin: "20px",
        padding: "10px",
        background: "lightgreen",
        color: "black",
      }}
    >
      {notification}
    </div>
  );
};

export default Notification;
