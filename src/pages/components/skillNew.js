import React from "react";
import styles from "@/styles/Skill.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { name: "React JS", pathColor: "#F44336", value: 90, dataAosDuration: 1000, className: styles.ball_2_1 },
  { name: "HTML", pathColor: "#607D8B", value: 100, dataAosDuration: 1000, className: styles.ball_2 },
  { name: "CSS", pathColor: "#9C27B0", value: 90, dataAosDuration: 1000, className: styles.ball_3 },
  { name: "Bootstrap", pathColor: "#03A9F4", value: 95, dataAosDuration: 1000 ,className: styles.ball_1},
  { name: "Tailwind CSS", pathColor: "#FF9800", value: 75, dataAosDuration: 1000 ,className: styles.ball_4},
  { name: "JavaScript", pathColor: "#8BC34A", value: 90, dataAosDuration: 1000 ,className: styles.ball_0},
  { name: "Next JS", pathColor: "#3F51B5", value: 80, dataAosDuration: 1000 ,className: styles.ball_3},
  { name: "Redux", pathColor: "#795548", value: 70, dataAosDuration: 1000 ,className: styles.ball_2},
  { name: "PHP", pathColor: "#009688", value: 85, dataAosDuration: 1000 ,className: styles.ball_0},
  { name: "Node JS", pathColor: "#673AB7", value: 89, dataAosDuration: 1000 ,className: styles.ball_1},
  { name: "Express", pathColor: "#CDDC39", value: 95, dataAosDuration: 1000 ,className: styles.ball_3_1},
  { name: "My SQL", pathColor: "#00BCD4", value: 90, dataAosDuration: 1000 ,className: styles.ball_2_1},
  { name: "MongoDB", pathColor: "#FFEB3B", value: 79, dataAosDuration: 1000, className: styles.ball_4 },
];

const SkillItem = ({ name, pathColor, value, dataAosDuration, className }) => (
  <div data-aos="fade-up" data-aos-duration={dataAosDuration} className={`${styles.skill_item} ${className}`}>
    <CircularProgressbar
      styles={buildStyles({
        // Text size
        textSize: "16px",
        // Colors
        pathColor,
        textColor: "black",
        trailColor: "gainsboro",
        backgroundColor: "#3e98c7",
      })}
      value={value}
      text={name}
    />
  </div>
);

const SkillRow = ({ skills }) => (
  <div className={styles.skill_row}>
    {skills.map((skill, index) => (
      <SkillItem key={index} {...skill} />
    ))}
  </div>
);

const Skill = ({ skillsRef }) => {
  const rows = [
    [skillsData[0], skillsData[1], skillsData[2]],
    [skillsData[3], skillsData[4], skillsData[5]],
    [skillsData[6], skillsData[7], skillsData[8]],
    [skillsData[9], skillsData[10], skillsData[11]],
    [skillsData[12]],
  ];

  return (
    <div className={styles.skill_div} ref={skillsRef}>
      <div className={styles.skill_head}>Skills</div>
      <div className={styles.skill_con}>
        {rows.map((row, index) => (
          <SkillRow key={index} skills={row} />
        ))}
      </div>
    </div>
  );
};

export default Skill;

