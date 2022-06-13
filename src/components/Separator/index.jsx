import { useState } from "react";
import styles from "./separator.module.scss";

export function Separator() {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(window.screen.width);
  
  setInterval(() => {
    setCurrentScreenWidth(window.screen.width);
  }, 1000);

  return (
    <span className={styles.separator}>
      { currentScreenWidth < 375 ?
      " - - - "
      : currentScreenWidth < 430 ?
      "- - - - - - - - - - - - - - - -" 
      : currentScreenWidth < 500 ? 
      "- - - - - - - - - - - - - - - - - - - - - - - "
      : currentScreenWidth < 700 ? 
      " - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
      : "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
      }
    </span>
  );
}