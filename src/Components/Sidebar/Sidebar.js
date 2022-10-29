import "./Sidebar.css";
import {AiOutlineHome, AiOutlineUsergroupAdd} from "react-icons/ai";
import {TiClipboard} from "react-icons/ti";
import {MdProductionQuantityLimits} from "react-icons/md";
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import {VscSignOut} from "react-icons/vsc";
import {useState} from "react";

export default function Sidebar() {
    const [selected, setSelected] = useState(0)
    return <div className={"sidebar"}>
        <div className={"logo"}>
            <img src={"https://brandlogos.net/wp-content/uploads/2021/10/premier-league-logo.png"}
                 alt={""}/>
            <span>Admin</span>
        </div>
        <div className={"menu"}>
            {
                [
                    {
                        icon: <AiOutlineHome/>,
                        header: "Dashboard",
                    },
                    {
                        icon: <TiClipboard/>,
                        header: "Orders",
                    },
                    {
                        icon: <AiOutlineUsergroupAdd/>,
                        header: "Users",
                    },
                    {
                        icon: <MdProductionQuantityLimits/>,
                        header: "Products",
                    },
                    {
                        icon: <TbBrandGoogleAnalytics/>,
                        header: "Analytics",
                    },


                ].map((value, index) => {
                    return <div key={index}
                                className={selected === index ? "menu-item active" : "menu-item"}
                                onClick={() => setSelected(index)}>
                        <div>{value.icon} </div>
                        <span>{value.header}</span>
                    </div>
                })

            }
            <div className={"menu-item"}>
                <div><VscSignOut/></div>
                <span>Sign Out</span>
            </div>
        </div>
    </div>

}