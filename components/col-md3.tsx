import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./col-md3.module.css";

export type ColMd3Type = {
  className?: string;
  media?: string;
  h5TeamName1?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propHeight1?: CSSProperties["height"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ColMd3: NextPage<ColMd3Type> = ({
  className = "",
  media,
  h5TeamName1,
  propHeight,
  propWidth,
  propFlex,
  propMinWidth,
  propFlex1,
  propHeight1,
  propMinWidth1,
}) => {
  const colMd4Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propHeight, propWidth, propFlex, propMinWidth]);

  const cardItemStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      height: propHeight1,
    };
  }, [propFlex1, propHeight1]);

  const h5TeamName1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.colMd4, className].join(" ")} style={colMd4Style}>
      <div className={styles.cardItem} style={cardItemStyle}>
        <img className={styles.mediaIcon} loading="lazy" alt="" src={media} />
        <div className={styles.cardContent}>
          <b className={styles.h5TeamName1} style={h5TeamName1Style}>
            {h5TeamName1}
          </b>
          <b className={styles.h6TeamJob1}>Butcher</b>
          <div className={styles.socialMedia}>
            <img
              className={styles.facebookIcon}
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img
              className={styles.instagramIcon}
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
            <img
              className={styles.twitterIcon}
              loading="lazy"
              alt=""
              src="/twitter.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColMd3;
