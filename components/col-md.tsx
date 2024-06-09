import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./col-md.module.css";

export type ColMdType = {
  className?: string;
  h5ProductTitle?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBoxShadow?: CSSProperties["boxShadow"];
};

const ColMd: NextPage<ColMdType> = ({
  className = "",
  h5ProductTitle,
  propBorder,
  propBoxShadow,
}) => {
  const buttonSmStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      boxShadow: propBoxShadow,
    };
  }, [propBorder, propBoxShadow]);

  return (
    <div className={[styles.colMd4, className].join(" ")}>
      <div className={styles.productCard}>
        <div className={styles.fixedHeight}>
          <img
            className={styles.productCover5Icon}
            alt=""
            src="/productcover5@2x.png"
          />
          <div className={styles.tag}>
            <b className={styles.sale}>New</b>
          </div>
          <div className={styles.productActionsWrapper}>
            <div className={styles.productActions}>
              <img className={styles.likeIcon} alt="" src="/like.svg" />
              <img
                className={styles.basketIcon}
                loading="lazy"
                alt=""
                src="/basket.svg"
              />
              <img
                className={styles.likeIcon1}
                loading="lazy"
                alt=""
                src="/like.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.linkProductCategoryWrapper}>
              <b className={styles.linkProductCategory}>English Department</b>
            </div>
            <div className={styles.iconEmojioneStarParent}>
              <img
                className={styles.iconEmojioneStar}
                alt=""
                src="/icon-emojionestar.svg"
              />
              <div className={styles.small}>4.9</div>
            </div>
          </div>
          <b className={styles.h5ProductTitle}>{h5ProductTitle}</b>
          <p className={styles.paragraphProductDescription}>
            <span
              className={styles.weFocusOn}
            >{`We focus on ergonomics and meeting `}</span>
            <span
              className={styles.youWhereYou}
            >{`you where you work. It's only a `}</span>
            <span className={styles.keystrokeAway}>keystroke away.</span>
          </p>
          <div className={styles.sales}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <b className={styles.h6}>15 Sales</b>
          </div>
          <div className={styles.prices}>
            <b className={styles.h5Price}>$16.48</b>
            <b className={styles.h5Price1}>$6.48</b>
          </div>
          <div className={styles.productColors}>
            <div className={styles.productColorsChild} />
            <div className={styles.productColorsItem} />
            <div className={styles.productColorsInner} />
            <div className={styles.ellipseDiv} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.iconAkarIconsCalendarParent}>
              <img
                className={styles.iconAkarIconsCalendar}
                alt=""
                src="/icon-akariconscalendar.svg"
              />
              <div className={styles.small1}>22hr 30min</div>
            </div>
            <div className={styles.iconCarbonChartAreaSmoothParent}>
              <img
                className={styles.iconCarbonChartAreaSmooth}
                alt=""
                src="/icon-carbonchartareasmooth.svg"
              />
              <div className={styles.small2}>64 Lessons</div>
            </div>
            <div className={styles.iconAntDesignAreaChartOutParent}>
              <img
                className={styles.iconAntDesignAreaChartOut}
                alt=""
                src="/icon-antdesignareachartoutlined.svg"
              />
              <div className={styles.small3}>Progress</div>
            </div>
          </div>
          <button className={styles.buttonSm} style={buttonSmStyle}>
            <a className={styles.h61}>Learn More</a>
            <div className={styles.icnArrowRightIcnXsWrapper}>
              <img
                className={styles.icnArrowRightIcnXs}
                alt=""
                src="/icn-arrowright-icnxs.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColMd;
