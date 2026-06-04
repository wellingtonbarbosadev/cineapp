import styles from "./styles.module.css";

interface TextProps {
  text: string;
}

export function TextDivisors({ text }: TextProps) {
  return (
    <div className={styles.textDivisors}>
      <p>{text}</p>
    </div>
  );
}
