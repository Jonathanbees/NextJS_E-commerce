import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./desktop-shop-header.module.css";

export type DesktopShopHeaderType = {
  className?: string;
};

const DesktopShopHeader: NextPage<DesktopShopHeaderType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onLiContainerClick = useCallback(() => {
    router.push("/shop");
  }, [router]);

  const onLiContainer1Click = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onLiContainer2Click = useCallback(() => {
    // Please sync "log in" to the project
  }, []);

  const onLiContainer3Click = useCallback(() => {
    router.push("/cart");
  }, [router]);

  return (
    <section className={[styles.desktopShopHeader3, className].join(" ")}>
      <div className={styles.desktopShopHeader3Inner}>
        <div className={styles.imagen1Parent}>
          <img className={styles.imagen1Icon} alt="" src="/imagen-1@2x.png" />
          <img className={styles.imagen2Icon} alt="" src="/imagen-2@2x.png" />
          <img className={styles.imagen3Icon} alt="" src="/imagen-3@2x.png" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
      </div>
      <header className={styles.navbar}>
        <div className={styles.navbarBrand} />
        <div className={styles.navbarToggler}>
          <div className={styles.navbarTogglerIcon} />
        </div>
        <div className={styles.navbarInner}>
          <div className={styles.carniceriaParcerosParent}>
            <h1 className={styles.carniceriaParceros}>Carniceria Parceros</h1>
            <div className={styles.frameWrapper}>
              <div className={styles.aParent}>
                <div className={styles.a}>
                  <a className={styles.link}>Home</a>
                </div>
                <div className={styles.li} onClick={onLiContainerClick}>
                  <a className={styles.link1}>Shop</a>
                </div>
                <div className={styles.li1} onClick={onLiContainer1Click}>
                  <a className={styles.link2}>About</a>
                </div>
                <div className={styles.a1}>
                  <b className={styles.link3}>Contact</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.mainContent}>
              <h1 className={styles.h1Headline2}>Meat meat and more...</h1>
              <p className={styles.h4}>
                <span
                  className={styles.weKnowHow}
                >{`We know how large objects will act, but things on a `}</span>
                <span className={styles.smallScaleJust}>
                  small scale just do not act that way.
                </span>
              </p>
              <button className={styles.cta}>
                <div className={styles.btnLg1}>
                  <b className={styles.h3}>View products</b>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.liParent}>
          <div className={styles.li2} onClick={onLiContainer2Click}>
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
              <input className={styles.icnSettingsIcnXs1} type="radio" />
            </div>
          </div>
          <div className={styles.liWrapper}>
            <div className={styles.li3} onClick={onLiContainer3Click}>
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
    </section>
  );
};

export default DesktopShopHeader;
