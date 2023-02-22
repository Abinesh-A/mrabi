import styles from "@/styles/Project.module.css";
import Image from "next/image";
import pro1 from "../../img/pro_1.jpg";
import pro2 from "../../img/pro_2.jpg";
import pro3 from "../../img/pro_3.jpg";
import pro4 from "../../img/pro_4.jpg";
import pro5 from "../../img/pro_5.jpg";
import pro6 from "../../img/pro_6.jpg";

const Project = () => {
  return (
    <>
      <div className={styles.pro_div}>
        <div className={styles.pro_head}>Projects</div>
        <div className={styles.grid_div}>
          <div className={styles.pro_con}>
            <Image src={pro1} className={styles.pro_img_w} />
            <div className={styles.pro_text_div}>
              <div className={styles.pro_con_head}>Portfolio website</div>
              <p className={styles.pro_con_text}>it was build by using react js</p>
            </div>
          </div>
          <div className={styles.pro_con}>
            <Image src={pro2} className={styles.pro_img} />
            <div className={styles.pro_text_div}>
              <div className={styles.pro_con_head}>Portfolio website</div>
              <p className={styles.pro_con_text}>it was build by using react js</p>
            </div>
          </div>
          <div className={styles.pro_con}>
            <Image src={pro3} className={styles.pro_img} />
            <div className={styles.pro_text_div}>
              <div className={styles.pro_con_head}>Portfolio website</div>
              <p className={styles.pro_con_text}>it was build by using react js</p>
            </div>
          </div>
          <div className={styles.pro_con}>
            <Image src={pro4} className={styles.pro_img} />
            <div className={styles.pro_text_div}>
              <div className={styles.pro_con_head}>Portfolio website</div>
              <p className={styles.pro_con_text}>it was build by using react js</p>
            </div>
          </div>
          <div className={styles.pro_con}>
            <Image src={pro5} className={styles.pro_img} />
            <div className={styles.pro_text_div}>
              <div className={styles.pro_con_head}>Portfolio website</div>
              <p className={styles.pro_con_text}>it was build by using react js</p>
            </div>
          </div>
          <div className={styles.pro_con}>
            <Image src={pro6} className={styles.pro_img_w} />
            <div className={styles.pro_text_div}>
              <div className={styles.pro_con_head}>Portfolio website</div>
              <p className={styles.pro_con_text}>it was build by using react js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
