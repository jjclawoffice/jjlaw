"use client";

import { Wrapper } from "@/components/layout";
import {
  CompanyScope,
  Hero,
  Reasons,
  ScopeOfServices,
  WhyTrustUs,
} from "@/feature/home/components";
import Image from "next/image";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <WhyTrustUs />
      <div className="relative flex flex-col">
        <Image
          width={1020}
          height={1405}
          src="/bitmap/overlay.png"
          alt="overlay"
          className="absolute top-0 right-0"
        />
        <CompanyScope />
        <ScopeOfServices />
      </div>
      <Reasons />
    </Wrapper>
  );
};

export default Home;
