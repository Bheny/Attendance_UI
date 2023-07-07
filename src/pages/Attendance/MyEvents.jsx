import { Link } from "react-router-dom";
import banner from "../../assets/bg.jpg";
const MyEvents = () => {
  const events = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="container py-8 md:px-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="md:col-span-2">
          <div className="bg-white p-4 w-full my-4 rounded-lg">
            <div className="w-full flex">
              <h2 className="text-2xl font-bold text-gray-800 w-1/2 inline">
                Your Events
              </h2>
              <div className="flex text-sm gap-3">
                <button className="border px-4 py-1 rounded">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="hidden">Filter By</span>
                </button>
                <button className="border px-4 py-1 rounded">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="hidden">Sort By</span>
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-3 grid-cols-2  md:grid-cols-4">
              {events.map((event, index) => (
                <div key={index} className="rounded shadow-xl">
                  <img
                    src={banner}
                    className="h-32 object-center object-cover w-full rounded"
                  />
                  <div className="p-2">
                    <h2 className="text-gray-700 font-bold text-lg">
                      Departmental Durbar
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="w-full p-4 ">
                    <Link to="/event/detail">
                      <button className="bg-blue-600 text-white px-4 py-1 float-right ">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEvents;
