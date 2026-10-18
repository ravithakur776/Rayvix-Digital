"use client";

import React, { useState } from "react";
import styles from "./DispatchForm.module.css";

export function DispatchForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.successMessage} role="status">
        <span>✓ Subscribed to The Rayvix Dispatch. Welcome to the architectural circle.</span>
      </div>
    );
  }

  return (
    <form className={styles.dispatchForm} onSubmit={handleSubmit}>
      <div className={styles.dispatchInputWrap}>
        <input
          type="email"
          placeholder="Enter corporate email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.dispatchInput}
          aria-label="Corporate Email for The Rayvix Dispatch"
        />
        <button type="submit" className={styles.dispatchSubmitBtn}>
          Subscribe
        </button>
      </div>
      <span className={styles.dispatchNote}>
        Strict zero-spam policy. Unsubscribe anytime with 1 click.
      </span>
    </form>
  );
}
