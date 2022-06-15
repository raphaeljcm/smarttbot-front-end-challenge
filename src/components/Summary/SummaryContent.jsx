import styles from "./summaryContent.module.scss";

export function SummaryContent({ name, transactions }) {
  return (
    <div className={styles.row}>
      <div>{name}</div>
      <hr />
      <span>{transactions}</span>
      <span>&nbsp;transações</span>
    </div>
  );
}