import styles from "@/styles/Project.module.css";
import Image from "next/image";
import pro1 from "../../img/pro_1.jpg";
import pro2 from "../../img/pro_2.jpg";
import pro3 from "../../img/pro_3.jpg";
import pro4 from "../../img/pro_4.jpg";
import pro5 from "../../img/pro_5.jpg";
import pro6 from "../../img/pro_6.jpg";

const projects = [
  { image: pro1, name: "Portfolio website", description: "It was built by using Neact.js", className: styles.pro_img_w, animationDuration: "0" },
  { image: pro2, name: "Gaming Cloud", description: "It was built using by React.js", className: styles.pro_img, animationDuration: "1000" },
  { image: pro3, name: "E-Commerce Website", description: "# React.js, PHP, MySQL", className: styles.pro_img, animationDuration: "0" },
  { image: pro4, name: "Education Website", description: "It was built using React.js", className: styles.pro_img, animationDuration: "1000" },
  { image: pro5, name: "Portfolio website", description: "It was built using React.js", className: styles.pro_img, animationDuration: "0" },
  { image: pro6, name: "Business website", description: "It was built using React.js", className: styles.pro_img_w, animationDuration: "1000" },
];

const ProjectItem = ({ image, name,description, className, animationDuration }) => (
  <div data-aos="fade-up" data-aos-duration={animationDuration} className={styles.pro_con}>
    <Image alt="img" loading="lazy" src={image} className={className} />
    <div className={styles.pro_text_div}>
      <div className={styles.pro_con_head}>{name}</div>
      <p className={styles.pro_con_text}>{description}</p>
    </div>
  </div>
);

const Project = ({ projectRef }) => {
  return (
    <div className={styles.pro_div} ref={projectRef}>
      <div className={styles.pro_head}>Projects</div>
      <div className={styles.grid_div}>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;

// const Project = ({projectRef}) => {
//   return (
//     <>
//       <div className={styles.pro_div} ref={projectRef}>
//         <div className={styles.pro_head}>Projects</div>
//         <div className={styles.grid_div}>
//           <div data-aos="fade-up" className={styles.pro_con}>
//             <Image alt="img" src={pro1} className={styles.pro_img_w} />
//             <div className={styles.pro_text_div}>
//               <div className={styles.pro_con_head}>Portfolio website</div>
//               <p className={styles.pro_con_text}>it was build by using react js</p>
//             </div>
//           </div>
//           <div data-aos="fade-up" data-aos-duration="1000" className={styles.pro_con}>
//             <Image alt="img" src={pro2} className={styles.pro_img} />
//             <div className={styles.pro_text_div}>
//               <div className={styles.pro_con_head}>Portfolio website</div>
//               <p className={styles.pro_con_text}>it was build by using react js</p>
//             </div>
//           </div>
//           <div data-aos="fade-up" className={styles.pro_con}>
//             <Image alt="img" src={pro3} className={styles.pro_img} />
//             <div className={styles.pro_text_div}>
//               <div className={styles.pro_con_head}>Portfolio website</div>
//               <p className={styles.pro_con_text}>it was build by using react js</p>
//             </div>
//           </div>
//           <div data-aos="fade-up" data-aos-duration="1000" className={styles.pro_con}>
//             <Image alt="img" src={pro4} className={styles.pro_img} />
//             <div className={styles.pro_text_div}>
//               <div className={styles.pro_con_head}>Portfolio website</div>
//               <p className={styles.pro_con_text}>it was build by using react js</p>
//             </div>
//           </div>
//           <div data-aos="fade-up" className={styles.pro_con}>
//             <Image alt="img" src={pro5} className={styles.pro_img} />
//             <div className={styles.pro_text_div}>
//               <div className={styles.pro_con_head}>Portfolio website</div>
//               <p className={styles.pro_con_text}>it was build by using react js</p>
//             </div>
//           </div>
//           <div data-aos="fade-up" data-aos-duration="1000" className={styles.pro_con}>
//             <Image alt="img" src={pro6} className={styles.pro_img_w} />
//             <div className={styles.pro_text_div}>
//               <div className={styles.pro_con_head}>Portfolio website</div>
//               <p className={styles.pro_con_text}>it was build by using react js</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Project;
