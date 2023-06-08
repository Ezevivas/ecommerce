import DrapLoader from "../Components/DrapLoader";
import React from "react";

const Splash = () => {
    const splashContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh', // O ajusta la altura según tus necesidades
    };

    return (
      <div style={splashContainerStyle}>
        <DrapLoader />
      </div>
    );
  }

export default Splash;
