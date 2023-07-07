import { useRef, useEffect, useState } from "react";
import Camera from "../../../components/biometric/Camera";
import {
  useFaceDetection,
  useTinyFaceDetection,
} from "../../../lib/hooks/useFaceDetection";
import { IoIosFlashOff, IoMdSync, IoIosFlash } from "react-icons/io";
import { ToastContainer } from "react-toastify";

function Verification({ onVerified }) {
  const canvasRef = useRef();
  const webcamRef = useRef(null);
  const [voterID, setVoterID] = useState("");
  const [verifiedID, setVerifiedID] = useState(true);
  const [verificationData, setVerificationData] = useState({
    verified: false,
    voter: {},
  });
  const [verifying, setVerifying] = useState(false);
  const {
    detectFace,
    capturedImg,
    startedEnrollment,
    setCapturedImg,
    setStartedEnrollment,
    studentsPresent,
  } = useTinyFaceDetection(canvasRef, webcamRef);

  const [flashOn, setFlashOn] = useState(false);

  useEffect(() => {
    onVerified(studentsPresent);
  }, [studentsPresent]);

  // reset all states to default data
  const resetStates = () => {
    setCapturedImg(null);
    setStartedEnrollment(false);
    setVoterID("");
    setVerifiedID(false);
  };

  const startVerification = () => {
    setStartedEnrollment(true);
  };

  const flipCamera = () => {
    webcamRef.current.flipCamera();
  };

  useEffect(() => {
    if (capturedImg) {
      (async () => {
        setVerifying(true);
        // const { data, error } = await verifyVoterIdentity(capturedImg, voterID);
        // if (data.voter && data.verified) {
        //   console.log(data);
        //   setVerificationData(data);
        //   verificationSuccessAlert(data);
        //   resetStates();
        // }
        // setVerifying(false);
      })();
    }
  }, [capturedImg]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startedEnrollment) {
        detectFace();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [startedEnrollment]);

  return (
    <div className=" flex flex-col justify-center items-center">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="">
        <div className="p-6 bg-blue-100 rounded-lg">
          <div className="w-[250px] mx-auto text-center  ">
            <h1 className="text-lg font-bold text-indigo-900 uppercase mb-4">
              Biometric Attendance
            </h1>

            <div
              className={`relative w-[250px] h-[250px] bg-[#020330] flex items-center justify-center rounded-3xl 
          border-4 border-[#168dfd] !overflow-hidden`}
            >
              {capturedImg ? (
                <div className="relative w-[300px] h-[200px] flex justify-center items-center">
                  <img
                    src={capturedImg}
                    alt="Detected Face"
                    width="250"
                    height="250"
                  />
                  {verifying && (
                    <>
                      <p className="absolute text-white">Verifying...</p>
                      <div className="w-full nk-circle-animation small nk-df-center fast"></div>
                    </>
                  )}
                </div>
              ) : startedEnrollment ? (
                <>
                  <Camera
                    ref={webcamRef}
                    onUserMedia={() => startedEnrollment && detectFace()}
                  />
                  {startedEnrollment && (
                    <canvas
                      ref={canvasRef}
                      width="250"
                      height="250"
                      className="w-full absolute"
                    />
                  )}
                  {/* Face Positionning Box */}
                  <div className="absolute w-[150px] h-[200px] border-2 border-white opacity-30 "></div>
                  <div className="absolute space-y-2 bottom-5 right-[2px] h-full flex flex-col justify-end items-center text-white text-[1.3rem]  p-1 ">
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
                </>
              ) : (
                <img
                  src="/imgs/face-verification-1.jpg"
                  alt="Detected Face"
                  width="250"
                  height="250"
                />
              )}
            </div>

            {/*  */}
            <div className="mt-5">
              <div className="input-control pb-3">
                {startedEnrollment ? (
                  <p
                    type="text"
                    className={`px-4 py-2 w-full text-slate-500 rounded-md border border-blue-300`}
                  >
                    Attendance in progress...
                  </p>
                ) : (
                  <p
                    type="text"
                    className={`px-4 py-2 w-full text-slate-500 rounded-md border border-blue-300`}
                  >
                    Start taking attendace
                  </p>
                )}
              </div>

              {capturedImg ? (
                <SuccessControls
                  verifying={verifying}
                  verificationData={verificationData}
                  onRetry={() => {
                    setCapturedImg(null);
                    setStartedEnrollment(true);
                    setVerifying(false);
                  }}
                />
              ) : // stop button for verification
              startedEnrollment ? (
                <>
                  <button
                    onClick={() => setStartedEnrollment(false)}
                    className="w-full px-6 py-2 rounded-md ring ring-red-200 bg-red-100 text-red-500
                  hover:bg-red-500 hover:text-red-100"
                  >
                    Stop
                  </button>
                </>
              ) : // if voter ID not found
              voterID !== "" && !verifiedID ? (
                <p className="w-full px-6 py-2 rounded-md ring-1 ring-red-300 bg-red-100 text-red-500">
                  Voter ID Not Found
                </p>
              ) : // verfication button when ID is valid
              verifiedID ? (
                <button
                  disabled={startedEnrollment}
                  onClick={startVerification}
                  className={`w-full px-6 py-2 rounded-md ring
              bg-gradient-to-r from-[#440986] via-[#2319eb] 
              to-[#0077ff] text-blue-100 ${
                startedEnrollment ? "cursor-not-allowed" : ""
              }`}
                >
                  Take Attendance
                </button>
              ) : (
                // Initial display text
                <p className="w-full px-6 py-2 rounded-md ring ring-indigo-200 bg-indigo-600 text-indigo-100 cursor-not-allowed">
                  Verify Voter ID
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Verification;

function SuccessControls({ verifying, verificationData, onRetry }) {
  return (
    <>
      {verifying ? (
        <button
          className={`w-full px-6 py-2 rounded-md ring bg-blue-200 text-blue-600`}
        >
          Verifying, please wait...
        </button>
      ) : verificationData?.verified ? (
        <button
          className={`w-full px-6 py-2 rounded-md ring ring-green-300 bg-green-200 text-green-600`}
        >
          Verification Successfull
        </button>
      ) : (
        <button
          onClick={onRetry}
          className={`w-full px-6 py-2 rounded-md ring
               bg-gradient-to-r from-[#440986] via-[#2319eb] 
               to-[#0077ff] text-blue-100 `}
        >
          Retry Now
        </button>
      )}
    </>
  );
}
