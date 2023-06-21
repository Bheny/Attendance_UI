import React, { useState } from "react";

const RegisterList = () => {
  const [event, setEventValue] = useState("Departmental Durbar");

  const handleChange = (e) => {
    setEventValue(e.target.value);
  };

  const list = [
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
    {
      id: 1,
      number: "0321001222",
    },
  ];

  const eventList = [
    "Departmental Durbar",
    "Database Class",
    "System Administration",
    "Vb programming",
  ];
  return (
    <>
      <div className="p-4 bg-gray-100 shadow-xl sm:w-full md:w-1/2 mx-auto">
        <div className="mb-4 bg-white rounded-lg  p-4 ">
        <h2 className="text-2xl font-bold text-gray-700 ">
            {/* Departmental Durbar Attendance */}
            {event}
          </h2>
          <h2 className="text-gray-600">@ G.M Afeti Auditorium</h2>
          <h2 className="flex gap-3 mt-3">
            <span>Total : {list.length}</span><span>Present : {list.length}</span>
          </h2>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-xl sm:w-full md:w-1/2 mx-auto">
           <div className="flex py-4 relative">
             <span className="text-gray-700 font-bold text-xl w-1/3">List</span>
             <div className='flex text-sm gap-3'>
                <select className="rounded-lg p-2 border">
                    <option>Filter By</option>
                    <option>Programme</option>
                    <option>Level</option>
                    <option>Deparment</option>
                </select>
                <select className="rounded-lg p-2 border">
                    <option>Sort By</option>
                    <option>Male</option>
                    <option>Female</option>
                   
                </select>
        {/* <button className='border px-4 py-1 rounded flex gap-2'><span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z" clipRule="evenodd" />
</svg>
</span><span className=''>Filter By</span></button>
        <button className='border px-4 py-1 rounded'><span className=''>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
</svg>
</span><span className='hidden'>Sort By</span></button> */}
    </div>  
           
           </div>
          <div className="w-full focus:border focus:border-[#016064] bg-gray-100 border-rounded flex gap-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="my-4 mx-2 w-6 h-6 text-slate-400 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="search"
              className="w-full p-3 outline-none bg-transparent"
              placeholder="find something"
            />
          </div>
          <div className="w-full mt-8">
            <table className="w-full text-center overflow-y-scroll ">
              <thead>
                <tr className="text-gray-600">
                  <th className="pb-3">SN</th>
                  <th className="pb-3">Index Number</th>
                  <th className="pb-3">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.number}</td>
                    <td>
                      <select className="p-2 rounded-lg border">
                        <option>Present</option>
                        <option>Absent</option>
                        <option>On Permission</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterList;
