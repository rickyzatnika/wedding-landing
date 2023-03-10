import { motion } from "framer-motion";
import Head from "next/head";
import {
  Headers,
  AboutSection,
  Intro,
  WhyChooseUs,
  CounterAnimate,
  Faq,
  PricingCard,
  ContactForm,
  Portfolio,
} from "../components";

export default function Home() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Ryza Digital invitation</title>
      </Head>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeInUp}>
          <Headers />
        </motion.div>
      </motion.div>
      <AboutSection />
      <Intro />
      <WhyChooseUs />
      <Portfolio />
      <CounterAnimate />
      <PricingCard />
      <Faq />
      <ContactForm />
    </>
  );
}
