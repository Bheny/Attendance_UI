import axios from "axios";
import { toast } from "react-toastify";

const requestCOMOTP = async (number) => {
  const url = import.meta.env.VITE_APP_REQUEST_COMPASS;
  const data = { phone: number };
  let otp;
  await axios
    .put(url, { data: data })
    .then((res) => {
      otp = res.data;
    })
    .catch((err) => console.log(err));
  return otp;
};

const verifyCOMOTP = async (number, otp) => {
  const url = import.meta.env.VITE_APP_VERIFY_COMPASS;
  const data = { phone: number, otp: otp };
  console.log(data);
  let verified;
  await axios
    .put(url, { data: data })
    .then((res) => {
      verified = res.data;
    })
    .catch((err) => console.log(err));
  return verified;
};

const fetchAllPolls = async () => {
  const purl = import.meta.env.VITE_APP_FETCH_ALL_POLLS;
  let polls;
  await axios
    .get(purl)
    .then((res) => {
      polls = res.data.polls;
    })
    .catch((err) => console.log(err));
  return polls;
};

const fetchAllVotes = async () => {
  const vurl = import.meta.env.VITE_APP_FETCH_ALL_VOTES;
  let votes;
  await axios
    .get(vurl)
    .then((res) => {
      votes = res.data.polls;
    })
    .catch((err) => console.log(err));
  return votes;
};

const fetchOneVotes = async (id) => {
  const ourl = `${import.meta.env.VITE_APP_FETCH_ALL_VOTES}${id}`;
  let votes;
  await axios
    .get(ourl)
    .then((res) => {
      votes = res.data.votes;
    })
    .catch((err) => console.log(err));
  return votes;
};

const fetchVoter = async (vid, com) => {
  const vurl = `${import.meta.env.VITE_APP_FETCH_VOTER}`;
  let voter;
  const data = {
    voter_id: vid,
    com_id: com,
  };
  await axios
    .post(vurl, { data: data })
    .then((res) => {
      voter = res.data;
      res.data.error && toast.error(res.data.error);
      res.data.message && toast.success(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
  return voter;
};

const getVoterOTP = async (vid, com) => {
  const vurl = `${import.meta.env.VITE_APP_GEN_VOTER_OTP}`;
  let otp;
  const data = {
    voter_id: vid,
    com_id: com,
  };
  await axios
    .put(vurl, { data: data })
    .then((res) => {
      res.data.error && toast.error(res.data.error);
      if (res.data.otp) {
        otp = res.data;
        toast.info("otp generated");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return otp;
};

const approveVoter = async (vid, com, otp) => {
  const vurl = `${import.meta.env.VITE_APP_APPROVE}`;

  const data = {
    voter_id: vid,
    otp: otp,
    com_id: com,
  };
  let response;
  await axios
    .put(vurl, { data: data })
    .then((res) => {
      res.data.error && toast.error(res.data.error);
      if (res.data.message) {
        toast.info(res.data.message);
      }
      response = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

const verifySelf = async (vid, otp) => {
  const surl = `${import.meta.env.VITE_APP_SELF_APPROVE}`;

  const data = {
    voter_id: vid,
    otp: otp,
  };
  let response;
  await axios
    .put(surl, { data: data })
    .then((res) => {
      res.data.error && toast.error(res.data.error);
      if (res.data.message) {
        toast.info(res.data.message);
      }
      response = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

const fetchBallot = async () => {
  const burl = `${import.meta.env.VITE_APP_BALLOT}`;
  let response;
  await axios
    .get(burl)
    .then((res) => {
      response = res.data.polls;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

const castVote = async (data) => {
  const castUrl = `${import.meta.env.VITE_APP_CAST}`;

  let response;
  await axios
    .post(castUrl, { data: data })
    .then((res) => {
      res.data.error && toast.error(res.data.error);
      // if (res.data.message) {
      //   toast.info(res.data.message);
      // }
      response = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export {
  requestCOMOTP,
  verifyCOMOTP,
  fetchAllPolls,
  fetchAllVotes,
  fetchOneVotes,
  fetchVoter,
  getVoterOTP,
  approveVoter,
  verifySelf,
  fetchBallot,
  castVote,
};
