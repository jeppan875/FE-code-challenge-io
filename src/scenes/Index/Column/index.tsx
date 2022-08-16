import type { ReactNode } from "react";

import styles from "./styles.module.css";

type Props = { children?: ReactNode; title: string };

export function Column({ children, title }: Props) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
