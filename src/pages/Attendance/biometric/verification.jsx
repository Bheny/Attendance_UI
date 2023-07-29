import { useRef, useEffect, useState } from "react";
import Camera from "../../../components/biometric/Camera";
import {
  useFaceDetection,
  useTinyFaceDetection,
} from "../../../lib/hooks/useFaceDetection";
import {
  IoIosFlashOff,
  IoMdSync,
  IoIosFlash,
  IoMdStopwatch,
} from "react-icons/io";
import { FaRegCirclePlay, FaRegCircleStop } from "react-icons/fa6";

function Verification({ onVerified, children }) {
  const canvasRef = useRef();
  const webcamRef = useRef(null);
  const {
    detectFace,
    capturedImg,
    startedEnrollment,
    setStartedEnrollment,
    studentsPresent,
  } = useTinyFaceDetection(canvasRef, webcamRef);

  const [flashOn, setFlashOn] = useState(false);

  console.log(window.innerWidth);

  useEffect(() => {
    onVerified(studentsPresent);
  }, [studentsPresent]);

  // reset all states to default data
  const resetStates = () => {
    setStartedEnrollment(false);
  };

  const flipCamera = () => {
    webcamRef.current.flipCamera();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (startedEnrollment) {
        detectFace();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [startedEnrollment]);

  return (
    <div className="p-6 bg-blue-100 rounded-lg w-full h-screen">
      <h1 className="text-lg text-center font-bold text-indigo-900 uppercase mb-4">
        HTU Biometric Attendance
      </h1>

      <div
        className={`relative w-full h-[90vh] bg-[#020330] flex items-center justify-center rounded-3xl 
          border-4 border-[#168dfd] !overflow-hidden`}
      >
        {/* {verifying && (
                  <>
                    <p className="absolute text-white">Verifying...</p>
                    <div className="w-full nk-circle-animation small nk-df-center fast"></div>
                  </>
                )} */}
        <Camera
          ref={webcamRef}
          onUserMedia={() => startedEnrollment && detectFace()}
        />
        {startedEnrollment && <canvas ref={canvasRef} className="  absolute" />}
        <div className=" h-full  text-white text-[1.3rem]  p-1 ">
          <div className="mt-5 absolute bottom-0 left-0 right-0 text-white">
            <div className="input-control pb-3 w-[350px] mx-auto space-x-5">
              {/* Camera elements */}

              {startedEnrollment ? (
                <button
                  title="Stop Detection"
                  onClick={() => setStartedEnrollment(false)}
                  className="p-1.5 bg-white/25 text-red-500 rounded-full"
                >
                  <FaRegCircleStop />
                </button>
              ) : (
                <button
                  title="Stop Detection"
                  onClick={() => {
                    setStartedEnrollment(true);
                  }}
                  className="p-1.5 bg-white/25 text-white rounded-full"
                >
                  <FaRegCirclePlay />
                </button>
              )}

              {flashOn ? (
                <button
                  onClick={() => setFlashOn(!flashOn)}
                  className="p-1.5 bg-white bg-opacity-25 rounded-full"
                >
                  <IoIosFlashOff />
                </button>
              ) : (
                <button
                  onClick={() => setFlashOn(!flashOn)}
                  className="p-1.5 bg-white bg-opacity-25 rounded-full"
                >
                  <IoIosFlash />
                </button>
              )}
              <button
                onClick={flipCamera}
                className="p-1.5 bg-white bg-opacity-25 rounded-full"
              >
                <IoMdSync />
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
export default Verification;
