import "./Update.css";

export default function Update() {
    return <div className={"updates"}>
        {
            [
                {
                    img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    name: "Ron Backly",
                    notification: "has ordered watch a with good battery backup.",
                    time: "25 minutes ago",
                },
                {
                    img: "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9ja3N0YXJ8ZW58MHx8MHx8&w=1000&q=80",
                    name: "Harry Davison",
                    notification: "has received the cupcakes for lunch.",
                    time: "2 hours ago",
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyt9Scxk04F-sh09zFlmrqvp-5AMsn7TGIDRFdqccTSKV7DbHuBP-kNXGphqJY3k_iQ0&usqp=CAU",
                    name: "Marie Ranger",
                    notification: "has just ordered ice-cream.",
                    time: "5 seconds ago",
                },
            ].map((value, index) => {
                return <div key={index} className={"single-update"}>
                    <img src={value.img} alt={""}/>
                    <div className={"notification"}>
                        <div>
                            <span className={"notification-name"}>{value.name}</span>
                            <span> {value.notification}</span>

                        </div>

                        <span className={"time"}>{value.time}</span>
                    </div>

                </div>
            })
        }
    </div>
}