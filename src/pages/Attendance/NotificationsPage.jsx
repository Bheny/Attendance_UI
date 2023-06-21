import NotificationWidget from "../../components/widgets/NotificationWidget";

const NotificationsPage = () => {

    const notifications = [
        {
            "title": "New Message",
            "detail": "You have received a new message from John Doe."
          },
          {
            "title": "Event Reminder",
            "detail": "Reminder: The team meeting is scheduled for tomorrow at 10:00 AM."
          },
          {
            "title": "System Maintenance",
            "detail": "Our website will be undergoing scheduled maintenance on Saturday, June 20th."
          },
          {
            "title": "New Feature Released",
            "detail": "We are excited to announce the release of our new feature. Check it out now!"
          }
          
          
          
          
    ]
    return(
        <>
            <div className="p-4">
                <h2 className="p-2 text-2xl font-bold">Notifications</h2>
                <div className="grid gap-3 ">
                {
                notifications.map((item,index)=>(
                    <NotificationWidget title={item.title} detail={item.detail}/>
                ))
            }
                </div>
            </div>
        </>
    )
}

export default NotificationsPage;