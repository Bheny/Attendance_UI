import axios from "axios";
import { Alert } from "../utils/sweetAlert";

const API_ROUTE = import.meta.env.VITE_API_ROUTE;

// submit enrollment data
export const submitEnrollmentData = async (image, voterID) => {
  let data = null;
  let error = null;

  let formData = new FormData();
  formData.append("photo", image);
  formData.append("voter_id", voterID);
  try {
    const res = await axios.post(`${API_ROUTE}/voters-register/`, formData);

    data = res.data;
    console.log(res);
  } catch (err) {
    const errData = err?.response?.data;
    error = errData;
    if (errData?.detail) {
      errData.detail === "Not found." &&
        Alert.fire("Enrollment Error", "An error has occured!", "error");
    }
  }

  return { data, error };
};

// validate if voter ID exist
export const validateVoterID = async (voterID) => {
  let data = null;
  let error = null;
  let voterIdExist = false;

  try {
    const res = await axios.post(`${API_ROUTE}/validate-voterid/`, {
      voter_id: voterID,
    });
    if (res.data) {
      data = res.data;
      voterIdExist = true;
    }
  } catch (err) {
    const errData = err?.response?.data;
    error = errData;
    console.log(error);
    if (errData?.detail) {
      errData.detail === "Not found." && (voterIdExist = false);
    }
    voterIdExist = false;
  }

  return { data, error, voterIdExist };
};

// submit data for user verification
export const verifyVoterIdentity = async (image, voterID) => {
  let data = { voter: {}, verified: false, otp: null };
  let error = null;

  let formData = new FormData();
  formData.append("photo", image);
  formData.append("voter_id", voterID);
  try {
    const res = await axios.post(`${API_ROUTE}/verify/`, formData);

    data = res.data;
    console.log(res);
    if (!res.data.verified) {
      Alert.fire(
        "Face Verification Failed",
        "Ensure you position your face well!",
        "error"
      );
    }
  } catch (err) {
    console.log(err);
    const errData = err?.response?.data;
    error = errData;
    if (errData?.detail) {
      errData.detail === "Not found." &&
        Alert.fire(
          "Voter ID Not Found",
          "The Voter ID you entered does not exist!",
          "error"
        );
    } else {
      Alert.fire("", `${err.message} <br/> Please try again later.`, "error");
    }
  }

  return { data, error };
};
