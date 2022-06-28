import Head from "next/head";
import Image from "next/image";
import AchivementSection from "../components/landingpage/AchivementSection";
import Boostsection from "../components/landingpage/Boostsection";
import CourseSection from "../components/landingpage/CourseSection";
import Footer from "../components/landingpage/Footer";
import MainSection from "../components/landingpage/MainSection";
import MonitorSection from "../components/landingpage/MonitorSection";
import SeheduleSection from "../components/landingpage/SeheduleSection";
import SponcerSection from "../components/landingpage/SponcerSection";
import SuscribeSection from "../components/landingpage/SuscribeSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection />
      <SponcerSection />
      <AchivementSection />
      <Boostsection />
      <SeheduleSection />
      <MonitorSection />
      <CourseSection />

      <SuscribeSection />
      <Footer />
    </div>
  );
}
