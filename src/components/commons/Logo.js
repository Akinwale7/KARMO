import React from "react";
import KMLogo from "../../../public/images/karmo.svg";
import LG from "./icons/karmo.svg";

const iconStyle = {
  width: "40px",
  fill: "red",
  height: "40px",
  fill: "black",
  marginBottom: "10px"
};

const LogoSvg = () => {
  return <LG style={iconStyle} />;
};

export const KarmoLogo = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center"
          //   justifyContent: "center"
        }}
      >
        <LogoSvg />
        <span style={{ fontSize: 40, marginLeft: 10 }}>Karmo</span>
      </div>
    </>
  );
};
