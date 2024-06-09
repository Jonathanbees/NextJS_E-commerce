import type { NextPage } from "next";
import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import styles from "./sign-up.module.css";

const SignUp: NextPage = () => {
  return (
    <div className={styles.signUp}>
      <Header />
      <section className={styles.signUpInner}>
        <div className={styles.frameParent}>
          <div className={styles.h1Headline2Wrapper}>
            <h1 className={styles.h1Headline2}>Register user</h1>
          </div>
          <FrameComponent />
          <div className={styles.buttonLgWrapper}>
            <button className={styles.buttonLg}>
              <b className={styles.h3}>Register</b>
            </button>
          </div>
        </div>
      </section>
      <footer className={styles.div}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colMd3}>
              <b className={styles.h31}>Follow us</b>
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
              <b className={styles.h32}>Parceros</b>
              <div className={styles.div1}>
                <b className={styles.link}>About Us</b>
                <b className={styles.link1}>Products</b>
                <b className={styles.link2}>Contact</b>
              </div>
            </div>
            <div className={styles.colMd32}>
              <b className={styles.h33}>Features</b>
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
    </div>
  );
};

export default SignUp;
