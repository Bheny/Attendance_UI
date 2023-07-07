import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { submitEnrollmentData } from "../../lib/services";
import { Alert } from "../../lib/utils/sweetAlert";
import Camera from "../../components/biometric/Camera";
import { validateVoterID } from "../../lib/services";
import {
  useFaceDetection,
  useTinyFaceDetection,
} from "../../lib/hooks/useFaceDetection";
import { DebounceInput } from "react-debounce-input";
import { IoIosFlashOff, IoMdSync, IoIosFlash } from "react-icons/io";

function Enrollment() {
  const canvasRef = useRef();
  const webcamRef = useRef(null);
  const [voterID, setVoterID] = useState("");
  const [voterIdExist, setVoterIdExist] = useState(false);
  const [enrolling, setEnrolling] = useState(false);
  const {
    detectFace,
    capturedImg,
    startedEnrollment,
    setCapturedImg,
    setStartedEnrollment,
  } = useTinyFaceDetection(canvasRef, webcamRef);

  const [flashOn, setFlashOn] = useState(false);

  // receive voterID on input change
  const onVoterIDChange = async (e) => {
    const value = e.target.value;
    setVoterID(value);
    const { voterIdExist } = await validateVoterID(value);
    setVoterIdExist(voterIdExist);
  };

  const startEnrollment = () => {
    if (voterID === "") {
      alert({
        title: "Voter ID is required for verification",
        innerWidth: 300,
        outerWidth: 300,
        width: 200,
      });
    } else {
      console.log("Voter ID: ", voterID);
      setStartedEnrollment(true);
    }
  };

  const flipCamera = () => {
    webcamRef.current.flipCamera();
  };

  // reset all states to default data
  const resetStates = () => {
    setCapturedImg(null);
    setStartedEnrollment(false);
    setVoterID("");
  };

  // submit voter details
  async function submitData() {
    setEnrolling(true);
    const { data, error } = await submitEnrollmentData(capturedImg, voterID);
    if (data) {
      new Alert(
        "Enrollment Successful",
        "Enrollment data has been submitted successfully!",
        "success"
      );
      resetStates();
    }

    error && setEnrolling(false);
  }

  // useEffect(() => {
  //   if (capturedImg) {
  //     (async () => {
  //       setVerifying(true);
  //       setVerifying(false);
  //     })();
  //   }
  // }, [capturedImg]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startedEnrollment) {
        detectFace();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [startedEnrollment]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="">
        <div className="p-6 bg-blue-100 rounded-lg">
          <div className="w-[250px] mx-auto text-center  ">
            <h1 className="text-lg font-bold text-indigo-900 uppercase mb-4">
              Biometric Face Enrollment
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
                  {enrolling && (
                    <>
                      <p className="absolute text-white">Enrolling Voter...</p>
                      <div className="w-full nk-circle-animation small nk-df-center fast"></div>
                    </>
                  )}
                </div>
              ) : voterID.length >= 4 && !voterIdExist ? (
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
                {!capturedImg ? (
                  <DebounceInput
                    minLength={4}
                    debounceTimeout={500}
                    disabled={startedEnrollment || capturedImg}
                    onChange={onVoterIDChange}
                    type="number"
                    value={voterID}
                    className={`px-4 py-2 w-full text-slate-500 rounded-md focus:outline-none border border-blue-300 focusborder-blue-400 ${
                      startedEnrollment || capturedImg
                        ? "bg-slate-200 cursor-not-allowed"
                        : voterID !== "" && !voterIdExist
                        ? "border-green-500 border-2"
                        : voterIdExist
                        ? "border-red-500 border-2"
                        : ""
                    }`}
                    placeholder="Enter ID Number"
                  />
                ) : (
                  <p
                    type="text"
                    className={`px-4 py-2 w-full text-slate-500 rounded-md border border-blue-300`}
                  >
                    Voter ID: {voterID}
                  </p>
                )}
              </div>

              {capturedImg ? (
                <SuccessControls
                  onConfirm={submitData}
                  onReset={() => {
                    setCapturedImg(null);
                    setStartedEnrollment(true);
                    // setVerifying(false);
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
                    Cancel
                  </button>
                </>
              ) : // if voter ID not found
              voterID.length >= 4 && voterIdExist ? (
                <p className="w-full px-6 py-2 rounded-md ring-1 ring-red-300 bg-red-100 text-red-500">
                  Voter ID Already Enrolled
                </p>
              ) : (
                // verfication button when ID does not exist
                <button
                  disabled={voterIdExist}
                  onClick={startEnrollment}
                  className={`w-full px-6 py-2 rounded-md ring
            bg-gradient-to-r from-[#440986] via-[#2319eb] 
            to-[#0077ff] text-blue-100 ${
              voterIdExist ? "cursor-not-allowed" : ""
            }`}
                >
                  Enroll Voter
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* verification button */}
      <Link to="/verification" className="p-3 text-slate-400 ">
        Already Enrolled? Verify
      </Link>
    </div>
  );
}
export default Enrollment;

function SuccessControls({ onConfirm, onReset }) {
  return (
    <>
      <div className="flex justify-between space-x-4 ">
        <button
          onClick={onReset}
          className={`w-1/2 px-2 py-2 rounded-md ring
        ring-orange-200
    bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-orange-100`}
        >
          Retake
        </button>
        <button
          onClick={onConfirm}
          className="w-1/2 px-6 py-2 rounded-md ring
        ring-green-300 bg-gradient-to-r from-green-700 via-green-500
to-green-600 text-green-100 "
        >
          Confirm
        </button>
      </div>
    </>
  );
}
