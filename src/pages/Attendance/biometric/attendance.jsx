import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { IoIosFlashOff, IoMdSync, IoIosFlash } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import Camera from "../../../components/biometric/Camera";

function BiometricAttendance() {
  const webcamRef = useRef(null);
  const [flashOn, setFlashOn] = useState(false);
  const [processing, setProcessing] = useState(false);

  const flipCamera = () => {
    webcamRef.current.flipCamera();
  };

  const [recognizedFaces, setRecognizedFaces] = useState([]);

  const captureFrame = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      try {
        setProcessing(true);
        const formData = new FormData();
        formData.append("video_feed", imageSrc);
        formData.append("myuplod", "imageSrc");

        const response = await axios.post(
          "http://127.0.0.1:8000/recognize_faces/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);

        setRecognizedFaces(response.data.recognized_faces);
        if (response.data.recognized_faces.length < 1) {
          alert("No face recognized!");
        }
        setProcessing(false);
      } catch (error) {
        console.log("Error sending image data:", error);
        console.log("Error response data:", error?.response?.data);
        setProcessing(false);
      }
    }
  };

  return (
    <div className="p-6 bg-blue-100 rounded-lg w-full h-screen">
      <h1 className="text-lg text-center font-bold text-indigo-900 uppercase mb-4">
        HTU Biometric Attendance
      </h1>

      <div
        className={`relative w-full h-[90vh] bg-[#020330] flex items-center justify-center rounded-3xl 
          border-4 border-[#168dfd] !overflow-hidden`}
      >
        {processing && (
          <div className="absolute inset-0 z-50">
            <div className="relative w-full h-full nk-circle-animation small nk-df-center fast">
              <p className="absolute inset-0 flex justify-center items-center text-white">
                <span>Processing...</span>
              </p>
            </div>
          </div>
        )}
        <Camera ref={webcamRef} />
        <div className=" h-full  text-white text-[1.3rem]  p-1 ">
          <div className="mt-5 absolute bottom-0 left-0 right-0 text-white">
            <div className="input-control pb-3 w-[350px] mx-auto space-x-5">
              {/* Camera elements */}

              <button
                title="Start Detection"
                onClick={captureFrame}
                className="p-1.5 bg-white/25 text-white rounded-full"
              >
                <FaRegCirclePlay />
              </button>

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

          {/* Render attendance list */}
          <div className="bg-white/30 rounded-lg p-4 shadow-xl w-[250px] mx-auto absolute top-5 right-4">
            <h3>Student Present</h3>
            <ul className="w-full overflow-y-auto space-y-2 text-left">
              {recognizedFaces.map((face, index) => (
                <div key={index}>
                  <p>
                    {face[0]} - {face[2]}
                  </p>
                  <img src={face[1]} width={150} alt="" />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiometricAttendance;
