import type { NextPage } from "next";
import styles from "./col-md1.module.css";

export type ColMd1Type = {
  className?: string;
  fixedHeight?: string;
  h5ProductTitle?: string;
};

const ColMd1: NextPage<ColMd1Type> = ({
  className = "",
  fixedHeight,
  h5ProductTitle,
}) => {
  return (
    <div className={[styles.colMd3, className].join(" ")}>
      <div className={styles.productCard}>
        <img className={styles.fixedHeightIcon} alt="" src={fixedHeight} />
        <div className={styles.h5ProductTitleParent}>
          <b className={styles.h5ProductTitle}>{h5ProductTitle}</b>
          <div className={styles.basketParent}>
            <div className={styles.basket}>
              <img className={styles.basketChild} alt="" src="/vector-3.svg" />
            </div>
            <b className={styles.linkProductCategory}>Quantity: 4</b>
            <div className={styles.basket1}>
              <img className={styles.basketItem} alt="" src="/group-1.svg" />
            </div>
          </div>
          <div className={styles.prices}>
            <b className={styles.h5Price}>$16.48</b>
            <b className={styles.h5Price1}>$6.48</b>
          </div>
          <div className={styles.basketGroup}>
            <button className={styles.basket2}>
              <img
                className={styles.icnFavoriteIcon}
                alt=""
                src="/icn-favorite.svg"
              />
            </button>
            <div className={styles.basket3}>
              <img
                className={styles.icnFavoriteIcon1}
                alt=""
                src="/icn-favorite-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColMd1;
