import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./col-md2.module.css";

export type ColMd2Type = {
  className?: string;
  fixedHeight?: string;
  h5ProductTitle?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding3?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding4?: CSSProperties["padding"];
};

const ColMd2: NextPage<ColMd2Type> = ({
  className = "",
  fixedHeight,
  h5ProductTitle,
  propPadding,
  propPadding1,
  propPadding2,
  propAlignSelf,
  propPadding3,
  propWidth,
  propDisplay,
  propMinWidth,
  propPadding4,
}) => {
  const colMd3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const pricesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding3,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding3, propWidth]);

  const h5PriceStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  return (
    <div className={[styles.colMd3, className].join(" ")} style={colMd3Style}>
      <div className={styles.productCard}>
        <img
          className={styles.fixedHeightIcon}
          loading="lazy"
          alt=""
          src={fixedHeight}
        />
        <div className={styles.h5ProductTitleParent} style={frameDiv2Style}>
          <b className={styles.h5ProductTitle}>{h5ProductTitle}</b>
          <div className={styles.basketParent} style={frameDiv3Style}>
            <div className={styles.basket}>
              <img
                className={styles.basketChild}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <b className={styles.linkProductCategory}>Quantity: 4</b>
            <div className={styles.basket1}>
              <img
                className={styles.basketItem}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
          <div className={styles.prices} style={pricesStyle}>
            <b className={styles.h5Price}>$16.48</b>
            <b className={styles.h5Price1} style={h5PriceStyle}>
              $6.48
            </b>
          </div>
          <div className={styles.basketGroup} style={frameDiv4Style}>
            <div className={styles.basket2}>
              <img
                className={styles.icnFavoriteIcon}
                loading="lazy"
                alt=""
                src="/icn-favorite.svg"
              />
            </div>
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

export default ColMd2;
