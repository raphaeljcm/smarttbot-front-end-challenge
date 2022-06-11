import { Separator } from '../Separator';
import styles from "./summaryContent.module.scss";

export function SummaryContent() {
  return (
    <div className={styles.row}>
      <div>WING20</div>
      <Separator />
      <span>157 </span>
      <span>transações</span>
    </div>
  );
}