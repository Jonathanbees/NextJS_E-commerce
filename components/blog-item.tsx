import type { NextPage } from "next";
import styles from "./blog-item.module.css";

export type BlogItemType = {
  className?: string;
  h3?: string;
};

const BlogItem: NextPage<BlogItemType> = ({ className = "", h3 }) => {
  return (
    <div className={[styles.blogItem, className].join(" ")}>
      <div className={styles.daysAgoWrapper}>
        <div className={styles.daysAgo}>3 days ago</div>
      </div>
      <div className={styles.blogItemInner}>
        <div className={styles.h3Parent}>
          <h2 className={styles.h3}>{h3}</h2>
          <p className={styles.paragraph}>
            <span
              className={styles.rawDenimYou}
            >{`Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu `}</span>
            <span
              className={styles.stumptownAliquaRetro}
            >{`stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, `}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
