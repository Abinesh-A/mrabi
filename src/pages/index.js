import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import Os from "./components/Os";
// import { About } from './components/About'
// import Project from "./components/Project";
// import Skill from "./components/Skill";
// import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const Os = React.lazy(() => import(/* webpackChunkName: os*/ /* webpackPrefetch: true */ "./components/Os"));
const Project = React.lazy(() => import(/* webpackChunkName: project*/ /* webpackPrefetch: true */ "./components/Project"));
const Skill = React.lazy(() => import(/* webpackChunkName: skill*/ /* webpackPrefetch: true */ "./components/Skill"));
const Footer = React.lazy(() => import(/* webpackChunkName: footer*/ /* webpackPrefetch: true */ "./components/Footer"));
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isLoading, setLoading] = useState(true);

  function timer() {
    return new Promise((resolve) => setTimeout(() => resolve(), 5000));
  }

  useEffect(() => {
    timer().then(() => {
      if (isLoading) {
        setLoading(!isLoading);
      }
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
        <title>MrABi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <React.Suspense>
        <main className={styles.main}>
          <Os />
          <Project />
          <Skill />
          <Footer />
        </main>
      </React.Suspense>
    </>
  );
}
