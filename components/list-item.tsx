import type { NextPage } from "next";
import BlogItem from "./blog-item";
import styles from "./list-item.module.css";

export type ListItemType = {
  className?: string;
};

const ListItem: NextPage<ListItemType> = ({ className = "" }) => {
  return (
    <div className={[styles.listItem, className].join(" ")}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.h3Parent}>
              <h2 className={styles.h3}>Who we are?</h2>
              <div className={styles.daysAgoWrapper}>
                <div className={styles.daysAgo}>3 days ago</div>
              </div>
            </div>
            <div className={styles.paragraphWrapper}>
              <p className={styles.paragraph}>
                <span
                  className={styles.rawDenimYou}
                >{`Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu `}</span>
                <span className={styles.stumptownAliquaRetro}>
                  stumptown aliqua, retro synth master cleanse. Mustache cliche
                  tempor, williamsburg carles vegan helvetica. Reprehenderit
                  butcher retro keffiyeh dreamcat cher synth. Cosby sweater eu
                  banh mi
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogItem h3="What is our main purpose?" />
      <BlogItem h3="How we guarantee quality in each of our products?" />
      <BlogItem h3="I want to work in Parceros Carniceria, how can i proceed?" />
    </div>
  );
};

export default ListItem;
