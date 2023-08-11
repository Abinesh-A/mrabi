import styles from "@/styles/About.module.css";
import localFont from "@next/font/local";
import Image from "next/image";
import quote from "../../img/quote_1.jpg";

const w_italic = localFont({ src: "../font/Water_Brush/WaterBrush-Regular.ttf" });

const About = () => {
  return (
    <>
      <div className={styles.about_div}>
        <div className={styles.about_con_1}>
          <Image alt="img" src={quote} className={styles.about_quote}></Image>
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
            <div className={styles.about_text}>"Experienced Web Developer and Software Engineer with a strong background in crafting innovative digital solutions. Proficient in both Web and Database technologies, I'm a maestro of crafting seamless user experiences through intuitive designs and responsive layouts. My expertise spans front-end and back-end development, and I thrive in collaborative, cross-functional teams. Committed to delivering clean, efficient code while staying updated with the latest industry trends, I'm ready to transform ideas into impactful online realities."</div>
          </div>
          <div className={styles.about_box_2}>
            <div>Code</div>
            <div>
              <small>that</small>
            </div>
            <div style={{ marginTop: "7%" }} className={w_italic.className}>
              ROCKS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
