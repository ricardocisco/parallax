import React from "react";
import Navbar from "../../components/Nvabar/Navbar";
import Plx from "react-plx";
import styled from "styled-components";
import tenis from "../../images/foamrunner.webp";
import tenis2 from "../../images/foamrunner2.webp";

const MainBox = styled.div`
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainImg = styled.img`
  width: 500px;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBox>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 300,
              properties: [
                {
                  startValue: 0,
                  endValue: 90,
                  property: "rotate",
                },
                {
                  startValue: 1,
                  endValue: 1.5,
                  property: "scale",
                },
                {
                  startValue: 1,
                  endValue: 0.75,
                  property: "opacity",
                },
              ],
            },
            {
              start: 350,
              duration: 300,
              properties: [
                {
                  startValue: 0,
                  endValue: 100,
                  property: "translateY",
                },
                {
                  startValue: 0.75,
                  endValue: 1,
                  property: "opacity",
                },
              ],
            },
          ]}
        >
          <MainImg src={tenis2} alt="tenis"></MainImg>
        </Plx>
      </MainBox>
    </>
  );
}
