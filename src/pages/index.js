import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Os from "./components/Os";
// import { About } from './components/About'
import Project from "./components/Project";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    someRequest().then(() => {
      if (isLoading) {
      setLoading(!isLoading);}
    });
  });
  if (isLoading) {
    return (
      <div className={styles.loader}>
      <div className={styles.spinner}>
        <span className={styles.spinner_part_0}></span>
        <span className={styles.spinner_part_1}></span>
        <span className={styles.spinner_part_2}></span>
        <span className={styles.spinner_part_3}></span>
        <span className={styles.spinner_part_0}></span>
        <span className={styles.spinner_part_1}></span>
        <span className={styles.spinner_part_2}></span>
        <span className={styles.spinner_part_3}></span>
      </div>
    </div>
    );
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Os />
        <Project />
        <Skill />
        <Footer />
      </main>
    </>
  );
}
