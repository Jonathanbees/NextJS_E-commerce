import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./desktop-footer.module.css";

export type DesktopFooterType = {
  className?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propMargin?: CSSProperties["margin"];
  desktopFooter11Height?: CSSProperties["height"];
};

const DesktopFooter: NextPage<DesktopFooterType> = ({
  className = "",
  propMarginTop,
  propMarginLeft,
  propDebugCommit,
  propMargin,
  desktopFooter11Height,
}) => {
  const desktopFooter11Style: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
      height: desktopFooter11Height,
    };
  }, [propMarginTop, desktopFooter11Height]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      debugCommit: propDebugCommit,
    };
  }, [propMarginLeft, propDebugCommit]);

  const h3Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <section
      className={[styles.desktopFooter11, className].join(" ")}
      style={desktopFooter11Style}
    >
      <footer className={styles.div} style={divStyle}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colMd3}>
              <b className={styles.h3}>Follow us</b>
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
            <div className={styles.colMd31}>
              <b className={styles.h31}>Parceros</b>
              <div className={styles.div1}>
                <b className={styles.link}>About Us</b>
                <b className={styles.link1}>Products</b>
                <b className={styles.link2}>Contact</b>
              </div>
            </div>
            <div className={styles.colMd32}>
              <b className={styles.h32} style={h3Style}>
                Features
              </b>
              <div className={styles.div2}>
                <b className={styles.link3}>Business Marketing</b>
                <b className={styles.link4}>User Analytic</b>
                <b className={styles.link5}>Live Chat</b>
                <b className={styles.link6}>Unlimited Support</b>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default DesktopFooter;
