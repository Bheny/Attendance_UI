

const NotificationWidget = ({title, detail}) => {
    return (
        <>
            {/* <!-- Recommendation 1 --> */}
            <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">
                 {title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {detail}
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
        </>
    )
};

export default NotificationWidget;