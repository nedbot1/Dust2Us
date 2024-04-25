import Head from "next/head";
import Hero from "@/app/components/hero";
import Instagram from "@/app/components/Instagram";
import Slider from "@/app/components/Slider";
import { SliderData } from "@/app/components/SliderData";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="LEAVE DUST 2 US"
        message="we capture all the dust and let it shine."
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}