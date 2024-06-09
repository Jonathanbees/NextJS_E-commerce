import type { NextPage } from "next";
import styles from "./desktop-product-cards.module.css";

export type DesktopProductCardsType = {
  className?: string;
};

const DesktopProductCards: NextPage<DesktopProductCardsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.desktopProductCards4, className].join(" ")}>
      <div className={styles.colMd8}>
        <img
          className={styles.unsplashx5bwooeo4cwIcon}
          alt=""
          src="/unsplashx5bwooeo4cw@2x.png"
        />
      </div>
      <div className={styles.colMd4}>
        <div className={styles.frameParent}>
          <div className={styles.h5ProductTitleWrapper}>
            <h2 className={styles.h5ProductTitle}>MOST POPULAR</h2>
          </div>
          <div className={styles.paragraphProductDescriptionWrapper}>
            <p className={styles.paragraphProductDescription}>
              We focus on bring quality in each of our products, all for the
              best prices
            </p>
          </div>
          <div className={styles.fixedHeight}>
            <img
              className={styles.unsplash5mg8cqbwT8Icon}
              alt=""
              src="/unsplash5mg8cqbwt8@2x.png"
            />
            <img
              className={styles.printedSummerDress41}
              loading="lazy"
              alt=""
              src="/printedsummerdress-4-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.linkProductCategoryWrapper}>
          <b className={styles.linkProductCategory}>Prices</b>
        </div>
        <div className={styles.colMd4Inner}>
          <div className={styles.h5PriceParent}>
            <b className={styles.h5Price}>$16.48</b>
            <b className={styles.h5Price1}>$6.48</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopProductCards;
