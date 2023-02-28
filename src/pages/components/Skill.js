import styles from "@/styles/Skill.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
  return (
    <>
      <div className={styles.skill_div}>
        <div className={styles.skill_head}>Skills</div>
      </div>
      <div className={styles.skill_con}>
        <div className={styles.r_1}>
          <div className={styles.skill_quote}>
            "Imagination is more important<br></br>&nbsp;&nbsp;than knowledge."
          </div>
          <div data-aos="fade-up" style={{ width: 125, height: 125 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#F44336`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={90}
              text={`React JS`}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#607D8B`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={100}
              text={`HTML`}
            />
          </div>
        </div>
        <div className={styles.r_2}>
          <div data-aos="fade-up" style={{ width: 130, height: 130 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#9C27B0`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={90}
              text={`CSS`}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" style={{ width: 110, height: 110 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#03A9F4`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={95}
              text={`Bootstrap`}
            />
          </div>
          <div data-aos="fade-up" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "13px",
                // Colors
                pathColor: `#FF9800`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={75}
              text={`Tailwind CSS`}
            />
          </div>
        </div>
        <div className={styles.r_3}>
          <div data-aos="fade-up" data-aos-duration="1000" style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#8BC34A`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={90}
              text={`JavaScript`}
            />
          </div>
          <div data-aos="fade-up" style={{ width: 130, height: 130 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#3F51B5`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={80}
              text={`Next JS`}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" style={{ width: 120, height: 120 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#795548`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={70}
              text={`Redux`}
            />
          </div>
          <div data-aos="fade-up" style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#009688`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={85}
              text={`PHP`}
            />
          </div>
        </div>
        <div className={styles.r_4}>
          <div data-aos="fade-up" data-aos-duration="1000" style={{ width: 110, height: 110 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#673AB7`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={89}
              text={`Node JS`}
            />
          </div>
          <div data-aos="fade-up" style={{ width: 135, height: 135 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#CDDC39`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={95}
              text={`Express`}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" style={{ width: 124, height: 124 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#00BCD4`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={90}
              text={`My SQL`}
            />
          </div>
        </div>
        <div className={styles.r_5}>
          <div data-aos="fade-up" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              styles={buildStyles({
                // Text size
                textSize: "16px",
                // Colors
                pathColor: `#FFEB3B`,
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "#3e98c7",
              })}
              value={79}
              text={`MongoDB`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Skill;
