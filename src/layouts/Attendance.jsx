import React from 'react';
import { Outlet } from 'react-router';


const Attendance = () => {
  return (
    <>
        <div className="flex ">
            <div className='w-full mt-5'>
            <Outlet />
            </div>

    
        </div>
       
        {/*<!-- Footer Area Start Here --> */}
        <footer className="w-full p-8 text-center">
              <div className="copyright">
                © Copyrights <a href="#">Attendance V1.0</a> 2023. All rights reserved.
                Designed by <a href="#">Trebnet</a>
              </div>
            </footer>
            {/* <!-- Footer Area End Here --> */}
    </>
  );
};

export default Attendance;
