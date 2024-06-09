import type { NextPage } from "next";
import ColMd3 from "./col-md3";
import styles from "./container.module.css";

export type ContainerType = {
  className?: string;
};

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <div className={styles.row}>
        <div className={styles.mainContent}>
          <h1 className={styles.h2FeatureSection1}>We believe in each other</h1>
          <p className={styles.paragraph}>
            <span className={styles.noMatterThe}>
              No matter the profession, if you want to improve with us bringing
              excelent services
            </span>
            <span className={styles.thatsAllMatters}>that´s all matters</span>
          </p>
        </div>
      </div>
      <div className={styles.row1}>
        <ColMd3 media="/media@2x.png" h5TeamName1="Raúl" />
        <div className={styles.colMd4}>
          <div className={styles.cardItem}>
            <img className={styles.mediaIcon} alt="" src="/media-1@2x.png" />
            <div className={styles.cardContent}>
              <b className={styles.h5TeamName2}>Group of new employees</b>
              <b className={styles.h6TeamJob2}>Learning Butchery</b>
              <div className={styles.socialMedia}>
                <img
                  className={styles.facebookIcon}
                  alt=""
                  src="/facebook.svg"
                />
                <img
                  className={styles.instagramIcon}
                  alt=""
                  src="/instagram.svg"
                />
                <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
              </div>
            </div>
          </div>
        </div>
        <ColMd3
          media="/media-2@2x.png"
          h5TeamName1="Daniel"
          propHeight="unset"
          propWidth="unset"
          propFlex="1"
          propMinWidth="214px"
          propFlex1="unset"
          propHeight1="383px"
          propMinWidth1="55px"
        />
      </div>
    </section>
  );
};

export default Container;
