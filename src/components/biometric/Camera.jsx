import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Webcam from "react-webcam";

const Camera = forwardRef(function ({ ...props }, ref) {
  const [facingMode, setFacingMode] = useState("user");
  const camRef = useRef(null);

  const videoConstraints = {
    width: 350,
    height: 350,
    facingMode: facingMode,
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        video() {
          return camRef.current?.video;
        },
        getScreenshot() {
          return camRef.current?.getScreenshot();
        },
        flipCamera() {
          const mode =
            facingMode !== "user" ? "user" : { exact: "environment" };
          setFacingMode(mode);
        },
      };
    },
    []
  );

  return (
    <Webcam
      width={250}
      height={250}
      audio={false}
      ref={camRef}
      screenshotFormat="image/jpeg"
      {...props}
      videoConstraints={videoConstraints}
      // mirrored={facingMode === "user"}
    />
  );
});

Camera.displayName = "Camera";

export default Camera;
