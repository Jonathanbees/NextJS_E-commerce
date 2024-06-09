import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import DesktopFooter from "../components/desktop-footer";
import styles from "./shop.module.css";

const Shop: NextPage = () => {
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
    // Please sync "log in" to the project
  }, []);

  const onLiContainer4Click = useCallback(() => {
    router.push("/cart");
  }, [router]);

  return (
    <div className={styles.shop}>
      <div className={styles.navbarBrand} />
      <div className={styles.navbarToggler}>
        <div className={styles.navbarTogglerIcon} />
      </div>
      <header className={styles.shopInner}>
        <div className={styles.frameParent}>
          <div className={styles.carniceriaParcerosWrapper}>
            <h1 className={styles.carniceriaParceros}>Carniceria Parceros</h1>
          </div>
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
        </div>
      </header>
      <main className={styles.frameGroup}>
        <section className={styles.imagen5Parent}>
          <img
            className={styles.imagen5Icon}
            loading="lazy"
            alt=""
            src="/imagen-5@2x.png"
          />
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.mainContent}>
                <h1 className={styles.h1Headline2}>SHOP ALL YOU WANT</h1>
                <p className={styles.h4}>
                  <span className={styles.weKnowThe}>
                    We know the quality of each product, feel free to pick
                    whatever feels
                  </span>
                  <span className={styles.youComfortable}>you comfortable</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.desktopProductCards15}>
          <div className={styles.h3SectionTitleWrapper}>
            <h3 className={styles.h3SectionTitle}>Discover the best for you</h3>
          </div>
          <div className={styles.desktopProductCards15Inner}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.colMd3Parent}>
            <div className={styles.colMd3}>
              <div className={styles.productCard}>
                <img
                  className={styles.fixedHeightIcon}
                  loading="lazy"
                  alt=""
                  src="/fixedheight@2x.png"
                />
                <div className={styles.h5ProductTitleParent}>
                  <b className={styles.h5ProductTitle}>Meat 5</b>
                  <b className={styles.linkProductCategory}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices}>
                    <b className={styles.h5Price}>$16.48</b>
                    <b className={styles.h5Price1}>$6.48</b>
                  </div>
                  <div className={styles.basket}>
                    <img
                      className={styles.icnFavoriteIcon}
                      loading="lazy"
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd31}>
              <div className={styles.productCard1}>
                <img
                  className={styles.fixedHeightIcon1}
                  alt=""
                  src="/fixedheight-1@2x.png"
                />
                <div className={styles.h5ProductTitleGroup}>
                  <b className={styles.h5ProductTitle1}>Meat 2</b>
                  <b className={styles.linkProductCategory1}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices1}>
                    <b className={styles.h5Price2}>$16.48</b>
                    <b className={styles.h5Price3}>$6.48</b>
                  </div>
                  <div className={styles.basket1}>
                    <img
                      className={styles.icnFavoriteIcon1}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd32}>
              <div className={styles.productCard2}>
                <img
                  className={styles.fixedHeightIcon2}
                  alt=""
                  src="/fixedheight-2@2x.png"
                />
                <div className={styles.h5ProductTitleContainer}>
                  <b className={styles.h5ProductTitle2}>Meat 3</b>
                  <b className={styles.linkProductCategory2}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices2}>
                    <b className={styles.h5Price4}>$16.48</b>
                    <b className={styles.h5Price5}>$6.48</b>
                  </div>
                  <div className={styles.basket2}>
                    <img
                      className={styles.icnFavoriteIcon2}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd33}>
              <div className={styles.productCard3}>
                <img
                  className={styles.fixedHeightIcon3}
                  alt=""
                  src="/fixedheight-3@2x.png"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.h5ProductTitle3}>Meat 4</b>
                  <b className={styles.linkProductCategory3}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices3}>
                    <b className={styles.h5Price6}>$16.48</b>
                    <b className={styles.h5Price7}>$6.48</b>
                  </div>
                  <div className={styles.basket3}>
                    <img
                      className={styles.icnFavoriteIcon3}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd34}>
              <div className={styles.productCard4}>
                <img
                  className={styles.fixedHeightIcon4}
                  alt=""
                  src="/fixedheight@2x.png"
                />
                <div className={styles.h5ProductTitleParent1}>
                  <b className={styles.h5ProductTitle4}>Meat 5</b>
                  <b className={styles.linkProductCategory4}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices4}>
                    <b className={styles.h5Price8}>$16.48</b>
                    <b className={styles.h5Price9}>$6.48</b>
                  </div>
                  <div className={styles.basket4}>
                    <img
                      className={styles.icnFavoriteIcon4}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd35}>
              <div className={styles.productCard5}>
                <img
                  className={styles.fixedHeightIcon5}
                  alt=""
                  src="/fixedheight-1@2x.png"
                />
                <div className={styles.h5ProductTitleParent2}>
                  <b className={styles.h5ProductTitle5}>Meat 2</b>
                  <b className={styles.linkProductCategory5}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices5}>
                    <b className={styles.h5Price10}>$16.48</b>
                    <b className={styles.h5Price11}>$6.48</b>
                  </div>
                  <div className={styles.basket5}>
                    <img
                      className={styles.icnFavoriteIcon5}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd36}>
              <div className={styles.productCard6}>
                <img
                  className={styles.fixedHeightIcon6}
                  alt=""
                  src="/fixedheight-2@2x.png"
                />
                <div className={styles.h5ProductTitleParent3}>
                  <b className={styles.h5ProductTitle6}>Meat 3</b>
                  <b className={styles.linkProductCategory6}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices6}>
                    <b className={styles.h5Price12}>$16.48</b>
                    <b className={styles.h5Price13}>$6.48</b>
                  </div>
                  <div className={styles.basket6}>
                    <img
                      className={styles.icnFavoriteIcon6}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd37}>
              <div className={styles.productCard7}>
                <img
                  className={styles.fixedHeightIcon7}
                  alt=""
                  src="/fixedheight-3@2x.png"
                />
                <div className={styles.h5ProductTitleParent4}>
                  <b className={styles.h5ProductTitle7}>Meat 4</b>
                  <b className={styles.linkProductCategory7}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices7}>
                    <b className={styles.h5Price14}>$16.48</b>
                    <b className={styles.h5Price15}>$6.48</b>
                  </div>
                  <div className={styles.basket7}>
                    <img
                      className={styles.icnFavoriteIcon7}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.colMd38}>
              <div className={styles.productCard8}>
                <img
                  className={styles.fixedHeightIcon8}
                  alt=""
                  src="/fixedheight-8@2x.png"
                />
                <div className={styles.h5ProductTitleParent5}>
                  <b className={styles.h5ProductTitle8}>Meat 5</b>
                  <b className={styles.linkProductCategory8}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices8}>
                    <b className={styles.h5Price16}>$16.48</b>
                    <b className={styles.h5Price17}>$6.48</b>
                  </div>
                  <div className={styles.basket8}>
                    <img
                      className={styles.icnFavoriteIcon8}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd39}>
              <div className={styles.productCard9}>
                <img
                  className={styles.fixedHeightIcon9}
                  alt=""
                  src="/fixedheight-9@2x.png"
                />
                <div className={styles.h5ProductTitleParent6}>
                  <b className={styles.h5ProductTitle9}>Meat 2</b>
                  <b className={styles.linkProductCategory9}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices9}>
                    <b className={styles.h5Price18}>$16.48</b>
                    <b className={styles.h5Price19}>$6.48</b>
                  </div>
                  <div className={styles.basket9}>
                    <img
                      className={styles.icnFavoriteIcon9}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd310}>
              <div className={styles.productCard10}>
                <img
                  className={styles.fixedHeightIcon10}
                  alt=""
                  src="/fixedheight-10@2x.png"
                />
                <div className={styles.h5ProductTitleParent7}>
                  <b className={styles.h5ProductTitle10}>Meat 3</b>
                  <b className={styles.linkProductCategory10}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices10}>
                    <b className={styles.h5Price20}>$16.48</b>
                    <b className={styles.h5Price21}>$6.48</b>
                  </div>
                  <div className={styles.basket10}>
                    <img
                      className={styles.icnFavoriteIcon10}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd311}>
              <div className={styles.productCard11}>
                <img
                  className={styles.fixedHeightIcon11}
                  alt=""
                  src="/fixedheight-11@2x.png"
                />
                <div className={styles.h5ProductTitleParent8}>
                  <b className={styles.h5ProductTitle11}>Meat 4</b>
                  <b className={styles.linkProductCategory11}>
                    Delicious meeat sell in pounds
                  </b>
                  <div className={styles.prices11}>
                    <b className={styles.h5Price22}>$16.48</b>
                    <b className={styles.h5Price23}>$6.48</b>
                  </div>
                  <div className={styles.basket11}>
                    <img
                      className={styles.icnFavoriteIcon11}
                      alt=""
                      src="/icn-favorite1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <DesktopFooter
        propMarginTop="unset"
        propMarginLeft="unset"
        propDebugCommit="unset"
        propMargin="unset"
        desktopFooter11Height="345px"
      />
    </div>
  );
};

export default Shop;
