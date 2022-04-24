import React from "react";

/* Assets */
import MessageBubble from "./assets/MessageBubble";

/* Styles */
import styles from "./styles.module.css";

function Bubble() {
  return (
    <div className={styles.Bubble}>
      <MessageBubble />
    </div>
  );
}

export default Bubble;
