import type { NextPage } from "next";
import DesktopShopHeader from "../components/desktop-shop-header";
import DesktopProductCards from "../components/desktop-product-cards";
import DesktopBlog from "../components/desktop-blog";
import styles from "./index.module.css";

const Sdfadsfasdf: NextPage = () => {
  return (
    <div className={styles.home}>
      <DesktopShopHeader />
      <DesktopProductCards />
      <DesktopBlog />
      <section className={styles.desktopFooter11}>
        <footer className={styles.div}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colMd3}>
                <b className={styles.h3}>Follow us</b>
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
                  <img
                    className={styles.twitterIcon}
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
                <b className={styles.h32}>Features</b>
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
    </div>
  );
};

export default Sdfadsfasdf;
