import About from "@/components/About";
import Banner from "@/components/Banner";
import FeedbackCustomer from "@/components/FeedbackCustomer";
import Industry from "@/components/Industry";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>BBCInncorp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Industry />
      <About />
      <Services />
      <div className="hidden lg:block lg:mb-20">
        <Image
          src="assets/curve_home1-wave.svg"
          alt=""
          height={158}
          width={1920}
        />
      </div>
      <FeedbackCustomer />
      <Newsletter />
    </>
  );
}
