import React, { useState } from "react";
import Video from "../../Videos/Video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroBg,
  VideoBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroSpan,
} from "./HeroElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1>Focus on what you do best</HeroH1>
          <HeroP>And let us Build the eCommerce website you&apos;ve<HeroSpan> always wanted</HeroSpan> </HeroP>
          <HeroBtnWrapper>
            <Button to="contact" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary={true}
            dark={true}
            >
              Find out more {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
          <a 
          className="demo"
          href="https://dev-dz-store.vercel.app/"
          target="_blank">
            See demo
          </a>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
