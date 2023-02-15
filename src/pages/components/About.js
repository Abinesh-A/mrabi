import styles from "@/styles/About.module.css";
import localFont from "@next/font/local";
import Image from "next/image";
import quote from "../../img/quote_1.jpg";

const w_italic = localFont({ src: "../font/Water_Brush/WaterBrush-Regular.ttf" });

export const About = () => {
  return (
    <>
      <div className={styles.about_div}>
        <div className={styles.about_con_1}>
          <Image src={quote} className={styles.about_quote}></Image>
        </div>
        <div className={styles.about_con_2}>
          <div className={styles.about_box_1}>
            <div className={styles.about_head}>
              <h2>A BIT ABOUT ME</h2>
            </div>
            <div>
              <span className={styles.about_tag}>#coding</span>
              <span className={styles.about_tag}> #dreams</span>
            </div>
            <div className={styles.about_text}>FCINQ [ ɛfsɛ̃k ] n. 1. This is the key that refreshes the screen. 2. Originally graphic designers, animators and developers, today it is a team of around thirty people, whose jobs range from strategy to development, including brand content and ux design . Whatever the medium, they strive to put maximum quality at the service of creating experiences and brand universes in order to convey a feeling, an emotion and make your communication a successful exchange with the user. final. 3. Our projects say more about us than long speeches.</div>
          </div>
          <div className={styles.about_box_2}>
            <div>Code</div>
            <div><small>that</small></div>
            <div style={{marginTop:"7%"}} className={w_italic.className}>ROCKS</div>
          </div>
        </div>
      </div>
    </>
  );
};
