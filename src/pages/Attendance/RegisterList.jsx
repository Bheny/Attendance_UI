import React, { useState } from 'react';

const RegisterList = () => {
    const [event, setEventValue] = useState('Departmental Durbar');

    const handleChange = (e) => {
        setEventValue(e.target.value);
      };

      
    const list = [
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        },
        {
            id:1,
            number:'0321001222',
        }
    ]

    const eventList = [
        'Departmental Durbar','Database Class','System Administration','Vb programming'
    ]
    return ( <>
             <div className="bg-white rounded-lg p-4 shadow-xl sm:w-full md:w-1/2 mx-auto">
             <div className="mb-4">
          <label htmlFor="eventTitle" className=" text-xl font-bold text-gray-700 block mb-1">
            Select Event
          </label>
          <select value={event} className='p-2 rounded-lg border' onChange={handleChange}>
                                {eventList.map((item, index)=>(
                                    <option value={item}>{item}</option>
                                ))}
                                 
                                 
                             </select>
          
        </div>
             </div>
        <div className="bg-white rounded-lg p-4 shadow-xl sm:w-full md:w-1/2 mx-auto">
        <h2 className='text-3xl font-bold text-gray-700 text-center p-4'>
            {/* Departmental Durbar Attendance */}
            {event}
        </h2>
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
            <div className='w-full mt-8'>
                <table className='w-full text-center '>
                    <thead>
                    <tr className='text-gray-600' > 
                        <th className='pb-3'>SN</th>
                        <th className='pb-3'>Index Number</th>
                        <th className='pb-3'>STATUS</th>
                    </tr>
                    </thead>
                    <tbody>
                       {list.map((item, index)=>(
                         <tr>
                        <td>{index}</td>
                         <td>{item.number}</td>
                         <td>
                             <select className='p-2 rounded-lg border'>
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
    </>);
};

export default RegisterList;