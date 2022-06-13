import { Separator } from '../Separator';
import styles from "./summaryContent.module.scss";

export function SummaryContent({ name, transactions }) {
  return (
    <div className={styles.row}>
      <div>{name}</div>
      <Separator />
      <span>{transactions} </span>
      <span>transações</span>
    </div>
  );
}