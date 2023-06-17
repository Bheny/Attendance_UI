

const NotificationWidget = ({title, value}) => {
    return (
        <>
            {/* <!-- Recommendation 1 --> */}
            <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">
                  Notification Title
                </h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sed justo aliquam, mollis lacus quis, euismod nisi.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
        </>
    )
};

export default NotificationWidget;