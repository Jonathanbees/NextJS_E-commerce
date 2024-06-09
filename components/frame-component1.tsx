import type { NextPage } from "next";
import ColMd2 from "./col-md2";
import ColMd1 from "./col-md1";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.h3SectionTitleWrapper}>
        <h2 className={styles.h3SectionTitle}>Products that you´ve selected</h2>
      </div>
      <div className={styles.rectangleWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.row}>
        <ColMd2 fixedHeight="/fixedheight@2x.png" h5ProductTitle="Meat 5" />
        <ColMd2
          fixedHeight="/fixedheight-1@2x.png"
          h5ProductTitle="Meat 2"
          propPadding="0px var(--padding-12xs)"
          propPadding1="var(--padding-6xl) var(--padding-10xl) var(--padding-16xl)"
          propPadding2="0px var(--padding-lg)"
          propAlignSelf="unset"
          propPadding3="var(--padding-8xs) var(--padding-4xl)"
          propWidth="161px"
          propDisplay="inline-block"
          propMinWidth="51px"
          propPadding4="unset"
        />
        <ColMd1 fixedHeight="/fixedheight-2@2x.png" h5ProductTitle="Meat 3" />
        <ColMd1 fixedHeight="/fixedheight-3@2x.png" h5ProductTitle="Meat 4" />
      </div>
    </div>
  );
};

export default FrameComponent1;
