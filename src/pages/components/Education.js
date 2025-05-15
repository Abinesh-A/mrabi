import styles from "@/styles/Education.module.css";

const Education = ({ educationRef }) => {
  const educationData = [
    {
      year: "2018 – 2022",
      degree: "B.E in Electronics & Communication",
      institute: "Jeppiaar Institute of Technology",
      marks: "8.05 / 10.00",
    },
    {
      year: "2018",
      degree: "12th Grade",
      institute: "K.C. Sankaralinga Nadar Hr. Sec. School",
      marks: "68.08%",
    },
    {
      year: "2016",
      degree: "10th Grade",
      institute: "K.C. Sankaralinga Nadar Hr. Sec. School",
      marks: "85%",
    },
  ];

  return (
    <div className={styles.edu_div} ref={educationRef}>
      <div className={styles.edu_head}>Academic Details</div>
      <div className={styles.edu_section}>
        <div className={styles.edu_table}>
          {educationData.map((item, index) => (
            <div className={styles.edu_row} key={index}>
              <div className={styles.edu_cell}>{item.year}</div>
              <div className={styles.edu_cell}>{item.degree}</div>
              <div className={styles.edu_cell}>{item.institute}</div>
              <div className={styles.edu_cell}>{item.marks}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
