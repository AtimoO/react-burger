import React from "react";

import styles from "./not-found.module.css";

export function NotFound404() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Упс! Ошибка 404</h1>
          <p>Запрашиваемая вами страница не существует</p>
        </div>
      </div>
    </div>
  );
}
