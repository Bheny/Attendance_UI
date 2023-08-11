import React, { useState } from "react";
// import Verification from "./../biometric/verification";
import { attendanceList } from "../../../lib/students";

const BiometricAttendance = () => {
  const [studentsPresents, setStudentsPresents] = useState([]);

  return (
    <>
      {/* <Verification onVerified={setStudentsPresents}> */}
        <div className="bg-white/30 rounded-lg p-4 shadow-xl w-[250px] mx-auto absolute top-5 right-4">
          <ul className="w-full overflow-y-auto space-y-2 text-left">
            {attendanceList.map((item, index) => {
              const present = studentsPresents.some(
                (s) => s.index === item.number
              );
              return (
                <li
                  key={index}
                  className={`${present ? "text-blue-400 bg-blue-100" : ""}`}
                >
                  {item.number}
                </li>
              );
            })}
          </ul>
        </div>
      {/* </Verification> */}
    </>
  );
};

export default BiometricAttendance;
