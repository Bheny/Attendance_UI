import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Webcam from "react-webcam";

const Camera = forwardRef(function ({ ...props }, ref) {
  const [facingMode, setFacingMode] = useState("user");

  const videoConstraints = {
    width: 350,
    height: 350,
    facingMode: facingMode ? facingMode : "user",
  };

  const flipCamera = () => {
    const mode = facingMode !== "user" ? "user" : { exact: "environment" };
    setFacingMode(mode);
  };

  return (
    <Webcam
      width={250}
      height={250}
      audio={false}
      ref={ref}
      screenshotFormat="image/jpeg"
      {...props}
      videoConstraints={videoConstraints}
      // mirrored={facingMode === "user"}
    />
  );
});

export default Camera;
