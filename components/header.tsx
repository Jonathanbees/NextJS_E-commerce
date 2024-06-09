import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const router = useRouter();

  const onLiContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLiContainer1Click = useCallback(() => {
    router.push("/shop");
  }, [router]);

  const onLiContainer2Click = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onLiContainer3Click = useCallback(() => {
    router.push("/sign-up");
  }, []);

  const onLiContainer4Click = useCallback(() => {
    router.push("/cart");
  }, [router]);

  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarBrand} />
      <div className={styles.navbarToggler}>
        <div className={styles.navbarTogglerIcon} />
      </div>
      <div className={styles.navbarInner}>
        <div className={styles.carniceriaParcerosParent}>
          <a className={styles.carniceriaParceros}>Carniceria Parceros</a>
          <nav className={styles.frameWrapper}>
            <nav className={styles.liParent}>
              <div className={styles.li} onClick={onLiContainerClick}>
                <div className={styles.a}>
                  <a className={styles.link}>Home</a>
                </div>
              </div>
              <div className={styles.li1} onClick={onLiContainer1Click}>
                <a className={styles.link1}>Shop</a>
              </div>
              <div className={styles.li2} onClick={onLiContainer2Click}>
                <a className={styles.link2}>About</a>
              </div>
              <div className={styles.a1}>
                <a className={styles.link3}>Contact</a>
              </div>
            </nav>
          </nav>
        </div>
      </div>
      <div className={styles.liGroup}>
        <div className={styles.li3} onClick={onLiContainer3Click}>
          <div className={styles.btn32}>
            <div className={styles.icnSettingsIcnXsWrapper}>
              <img
                className={styles.icnSettingsIcnXs}
                loading="lazy"
                alt=""
                src="/icn-settings-icnxs.svg"
              />
            </div>
            <a className={styles.loginRegister}>Login / Register</a>
          </div>
        </div>
        <div className={styles.btn32Wrapper}>
          <div className={styles.btn321}>
            <img
              className={styles.icnSettingsIcnXs1}
              alt=""
              src="/icn-settings-icnxs-1.svg"
            />
          </div>
        </div>
        <div className={styles.liWrapper}>
          <div className={styles.li4} onClick={onLiContainer4Click}>
            <div className={styles.btn322}>
              <img
                className={styles.icnSettingsIcnXs2}
                alt=""
                src="/icn-settings-icnxs-2.svg"
              />
              <a className={styles.a2}>1</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
