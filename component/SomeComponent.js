import React from "react";
import { useNotification } from "../context/NotificationContext";

const SomeComponent = () => {
  const { showNotification } = useNotification();

  return (
    <button onClick={() => showNotification("This is a test notification!")}>
      Show Notification
    </button>
  );
};

export default SomeComponent;
