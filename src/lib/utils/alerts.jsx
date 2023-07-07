import React from "react";
import { Alert } from "./sweetAlert";
import { IoCheckmarkDone } from "react-icons/io5";

export function verificationSuccessAlert(data) {
  new Alert({
    html: (
      <div>
        <h2 className="text-3xl pb-2 font-extrabold">
          Verification Successful
        </h2>
        <hr />
        <div className="flex flex-col mt-2">
          <p>
            Voter ID: <span>{data.voter.id_number}</span>
          </p>
          <p>
            Verified: <span>{data.verified ? "True" : "False"}</span>
          </p>
          <p>
            OTP:
            <span className="text-2xl font-black font-sans ml-4">
              {data.otp}
            </span>
          </p>
        </div>
        <hr />
      </div>
    ),
    icon: "success",
    showCloseButton: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    // footer: "Keep the OPT as secret for voting",
    width: 320,
    iconHtml: <IoCheckmarkDone />,
    customClass: {
      icon: "text-green-400 border-0",
      actions: "w-full",
      confirmButton: "w-[250px]",
    },
  });
}
