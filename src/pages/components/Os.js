import styles from "@/styles/Os.module.css";
import localFont from "@next/font/local";

const w_italic = localFont({ src: "../font/Water_Brush/WaterBrush-Regular.ttf" });

export const Os = () => {
  var today = new Date();

  var month = today.toLocaleString("default", { month: "long" });
  let day = today.getDate();
  let year = today.getFullYear();
  return (
    <>
      <div className={styles.Os_div}>
        <div className={styles.logo}>
          <div>
            By<span className={styles.logo_text}>MrABi</span>
          </div>
        </div>
        <div className={styles.w_screen}>
          <div className={styles.w_text}>
            <p>
              You'll looks<br></br> better <span className={w_italic.className}>with us</span>
            </p>
          </div>
          <div className={styles.w_nav}>
            <div className={styles.menu_div}>
              <div className={styles.nav_menu}>Words</div>
              <div className={styles.nav_menu}>Project</div>
              <div className={styles.nav_menu}>Skills</div>
              <div className={styles.nav_menu}>Find Us</div>
            </div>
          </div>
        </div>
        <div>
          {month} {day},{year}
        </div>
      </div>
    </>
  );
};
