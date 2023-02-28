import styles from "@/styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className={styles.foo_head}>Contact us</div>
      <div className={styles.foo_con}>
        <div className={styles.foo_form}>
          <div className={styles.mail}>
            <Image alt="icon" width={25} height={25} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVR4nO2VTWsUQRCG5yAoGPCkoAejBw8S8GJQgnjPf/CuF9GLIP4AQYgxZ//CwLD9vN0OLgTm4jGHgOYQ8QNRJ4sQD4YgfmWllh4ZdxPcTHYxhxQU00wV9VR3VXUnyYHseymK4oikBWBNUnfEWgKPjJEYZAyAbl2BeQOV4wZJKpNIfA08H8NOVoElYKsHivpM0i1Jr0YA+ADcAxarf0mfwydgFrguqdMAsiHpgff+qqQ3ddtfoAj7AdxN03TCvpK+DAH4JulxlmUnvPfXgM1+nwFQDdhK0/SYc+6UBbEEtvH7JSkFzhZFcch2s1O8HUFRV7z352zeQgjnDV6zAUyZLcuyk7HG3cagPM+Pt9vto5axBQWumFbDnuf54VardQZ41wgEvLRjCyFctDWw7Jybrm4U7/0lS0TSC+BCCGFS0ttdgWyuJJ2WdCcWurJ9l3Q/1uJnzd+Kf8OO2Vp7KBDw3jl3GXjSoL2dpBlJH/8F6gA393gtdZxzt/tj/AEBn61VY8s2hXRjrC3gKbBeB/XIwNe9AjQIrGKW1q7zowZoEDjXm4UIG8dzUUp6aLP2/572A0mGlN9xGV8AyY3I8AAAAABJRU5ErkJggg==" />
            &nbsp;&nbsp;2001mrabi@gmail.com
          </div>
         
          <div className={styles.foo_sm}>
            <div className={styles.linkedin}>
              <a href="https://www.linkedin.com/in/mr-abi-3aa684183/" target={"_blank"}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256" style={{ fill: "#000000" }}>
                  <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M9,25h-5v-15h5zM6.501,8c-1.383,0 -2.501,-1.121 -2.501,-2.501c0,-1.38 1.12,-2.499 2.501,-2.499c1.378,0 2.499,1.121 2.499,2.499c0,1.38 -1.121,2.501 -2.499,2.501zM27,25h-4.807v-7.3c0,-1.741 -0.033,-3.98 -2.499,-3.98c-2.503,0 -2.888,1.896 -2.888,3.854v7.426h-4.806v-15.011h4.614v2.051h0.065c0.642,-1.18 2.211,-2.424 4.551,-2.424c4.87,0 5.77,3.109 5.77,7.151c0,0 0,8.233 0,8.233z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className={styles.github}>
              <a href="https://github.com/Abinesh-A" target={"_blank"}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256" style={{ fill: "#000000" }}>
                  <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.foo_copyright}>Copyrights @ 2023</div>
      </div>
    </>
  );
};
export default Footer;
