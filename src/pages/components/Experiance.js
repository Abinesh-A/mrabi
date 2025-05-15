"use client";
import styles from "@/styles/Experiance.module.css";

const experiences = [
  {
    company: "KST INFOTECH",
    title: "Software Engineer",
    duration: "Nov 2022 – Present",
    description: `Worked as a Full-Stack Developer, handling both front-end and back-end development to build and maintain web applications. Collaborated with clients to understand requirements and coordinated with cross-functional teams to meet project goals. Led a team of developers, assigned tasks, mentored juniors, and ensured high-quality, on-time delivery.`,
  },
  {
    company: "XCEL CORP",
    title: "Graduate Engineering Trainee",
    duration: "Apr 2022 – Oct 2022",
    description: `Worked as a Back-End Developer focused on efficient data handling and robust system logic. Integrated third-party APIs and collaborated with Digital Marketing, Web, and Mobile App teams to ensure reliable back-end support across platforms.`,
  },
  {
    company: "AUJ CORP",
    title: "Frontend Developer (Freelance)",
    duration: "6 Months",
    description: `Worked as a Front-End Developer, gaining expertise in HTML, CSS, React.js, Material UI, and Git. Developed polished user interfaces and enhanced front-end skills significantly.`,
  },
];

const Experiance = ({ experianceRef }) => {
  return (
    <div className={styles.exp_div} ref={experianceRef}>
      <h2 className={styles.exp_head}>Experience</h2>
      <div className={styles.exp_grid}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.exp_card} data-aos="fade-up" data-aos-delay={index * 200}>
            <h3 className={styles.exp_title}>{exp.title}</h3>
            <div className={styles.exp_meta}>
              <span className={styles.exp_company}>{exp.company}</span>
              <span className={styles.exp_duration}>{exp.duration}</span>
            </div>
            <p className={styles.exp_description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
