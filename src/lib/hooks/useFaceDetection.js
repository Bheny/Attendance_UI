import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { toast } from "react-toastify";
import { students } from "../students";

const CAPTURE_SCORE = 0.45;

export function useFaceDetection(canvasRef = canvasRef, webcamRef = webcamRef) {
  const [startedEnrollment, setStartedEnrollment] = useState(false);
  const [capturedImg, setCapturedImg] = useState(null);

  const detectFace = async () => {
    setStartedEnrollment(true);
    const canvas = canvasRef.current;
    const video = webcamRef.current.video();
    const result =
      typeof video !== "undefined" ? await faceapi.detectAllFaces(video) : null;

    if (result) {
      canvas.innerHtml = faceapi.createCanvasFromMedia(video);
      const dims = faceapi.matchDimensions(canvas, video);
      const resizedResult = faceapi.resizeResults(result, dims);
      faceapi.draw.drawDetections(canvas, resizedResult);

      const detectedScore = result.score;

      if (detectedScore >= CAPTURE_SCORE && webcamRef.current) {
        setCapturedImg(webcamRef.current.getScreenshot());
        console.log(detectedScore, detectedScore >= CAPTURE_SCORE);
        setStartedEnrollment(false);
      }
    }
  };

  useEffect(() => {
    (async () => {
      await faceapi.loadSsdMobilenetv1Model("/models");
      await faceapi.loadFaceLandmarkModel("/models");
    })();
  }, []);

  return {
    detectFace,
    capturedImg,
    setCapturedImg,
    startedEnrollment,
    setStartedEnrollment,
  };
}

export function useTinyFaceDetection(
  canvasRef = canvasRef,
  webcamRef = webcamRef
) {
  const [startedEnrollment, setStartedEnrollment] = useState(false);
  const [capturedImg, setCapturedImg] = useState(null);
  const [studentsPresent, setStudentsPresent] = useState([]);

  const detectFace = async () => {
    setStartedEnrollment(true);
    const canvas = canvasRef.current;
    const video = webcamRef.current?.video();
    // detect faces in the camera
    const camResults =
      typeof video !== "undefined"
        ? await faceapi
            .detectAllFaces(
              video,
              new faceapi.TinyFaceDetectorOptions({
                scoreThreshold: 0.7,
                inputSize: 160,
              })
            )
            .withFaceLandmarks(true)
            .withFaceDescriptors()
        : null;

    // get all students images and labels
    const labeledFaceDescriptors = await Promise.all(
      students.map(async (label) => {
        const imgUrl = `/students/${label}.jpg`;
        const img = await faceapi.fetchImage(imgUrl);

        const faceDescription = await faceapi
          .detectSingleFace(
            img,
            new faceapi.TinyFaceDetectorOptions({
              scoreThreshold: 0.7,
              inputSize: 160,
            })
          )
          .withFaceLandmarks(true)
          .withFaceDescriptor();

        if (!faceDescription) {
          throw new Error(`no faces detected for ${label}`);
        }

        const faceDescriptors = [faceDescription.descriptor];
        return new faceapi.LabeledFaceDescriptors(label, faceDescriptors);
      })
    );

    if (camResults) {
      canvas.innerHtml = faceapi.createCanvasFromMedia(video);
      const dims = faceapi.matchDimensions(canvas, video);
      const resizedResults = faceapi.resizeResults(camResults, dims);
      faceapi.draw.drawDetections(canvas, resizedResults);
      // faceapi.draw.drawFaceLandmarks(canvas, resizedResult);

      // create FaceMatcher with automatically assigned labels
      // from the detection results for the reference image
      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);

      camResults.forEach((fd, i) => {
        const bestMatch = faceMatcher.findBestMatch(fd.descriptor);
        // console.log(bestMatch);
        const text = bestMatch.toString();
        const drawBox = new faceapi.draw.DrawBox(
          resizedResults[i].detection.box,
          { label: text }
        );
        drawBox.draw(canvas);

        if (
          bestMatch.distance >= CAPTURE_SCORE &&
          bestMatch.label !== "unknown" &&
          !studentsPresent.some((s) => s.index === bestMatch.label)
        ) {
          console.log({ studentsPresent });
          setStudentsPresent((prevStudents) => [
            ...prevStudents,
            { index: bestMatch.label, distance: bestMatch.distance },
          ]);
          // webcamRef.current &&
          //   setCapturedImg(webcamRef.current.getScreenshot());
          // setStartedEnrollment(false);
        }
        return;
      });
    }
  };

  useEffect(() => {
    (async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
    })();
  }, []);

  return {
    detectFace,
    capturedImg,
    setCapturedImg,
    startedEnrollment,
    setStartedEnrollment,
    studentsPresent,
  };
}
