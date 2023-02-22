import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.foo_head}>Contact us</div>
      <div className={styles.foo_con}>
        <div className={styles.foo_form}>
          <div className={styles.mail}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVR4nO2VTWsUQRCG5yAoGPCkoAejBw8S8GJQgnjPf/CuF9GLIP4AQYgxZ//CwLD9vN0OLgTm4jGHgOYQ8QNRJ4sQD4YgfmWllh4ZdxPcTHYxhxQU00wV9VR3VXUnyYHseymK4oikBWBNUnfEWgKPjJEYZAyAbl2BeQOV4wZJKpNIfA08H8NOVoElYKsHivpM0i1Jr0YA+ADcAxarf0mfwydgFrguqdMAsiHpgff+qqQ3ddtfoAj7AdxN03TCvpK+DAH4JulxlmUnvPfXgM1+nwFQDdhK0/SYc+6UBbEEtvH7JSkFzhZFcch2s1O8HUFRV7z352zeQgjnDV6zAUyZLcuyk7HG3cagPM+Pt9vto5axBQWumFbDnuf54VardQZ41wgEvLRjCyFctDWw7Jybrm4U7/0lS0TSC+BCCGFS0ttdgWyuJJ2WdCcWurJ9l3Q/1uJnzd+Kf8OO2Vp7KBDw3jl3GXjSoL2dpBlJH/8F6gA393gtdZxzt/tj/AEBn61VY8s2hXRjrC3gKbBeB/XIwNe9AjQIrGKW1q7zowZoEDjXm4UIG8dzUUp6aLP2/572A0mGlN9xGV8AyY3I8AAAAABJRU5ErkJggg==" />
            &nbsp;&nbsp;2001mrabi@gmail.com
          </div>
          <div></div>
          <div>
            <div className={styles.linkedin}>
              <a href="https://www.linkedin.com/in/mr-abi-3aa684183/" target={"_blank"}>
                <svg x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                </svg>
              </a>
            </div>
            <div>
              <a href="https://github.com/Abinesh-A" target={"_blank"}>
                <svg x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
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
