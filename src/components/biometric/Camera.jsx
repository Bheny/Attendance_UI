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
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: facingMode,
  };
  console.log(videoConstraints);

  useImperativeHandle(
    ref,
    () => {
      return {
        video() {
          return camRef.current?.video;
        },
        flipCamera() {
          setFacingMode(
            facingMode === "user" ? { exact: "environment" } : "user"
          );
        },
      };
    },
    [facingMode]
  );

  return (
    <>
      <Webcam
        ref={camRef}
        audio={false}
        width={videoConstraints.width}
        height={videoConstraints.height}
        screenshotFormat="image/jpeg"
        {...props}
        videoConstraints={videoConstraints}
        allowFullScreen={true}
        allowTransparency={true}
        className="w-full h-[90vh]"
      />
    </>
  );
});

Camera.displayName = "Camera";

export default Camera;
