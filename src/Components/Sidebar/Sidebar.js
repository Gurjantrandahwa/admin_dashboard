import "./Sidebar.css";
import {AiOutlineHome, AiOutlineUsergroupAdd} from "react-icons/ai";
import {TiClipboard} from "react-icons/ti";
import {MdProductionQuantityLimits} from "react-icons/md";
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import {VscSignOut} from "react-icons/vsc";
import {useState} from "react";
import {GrMenu} from "react-icons/gr";
import {motion} from "framer-motion";

export default function Sidebar() {
    const [selected, setSelected] = useState(0)
    const [open, setOpen] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    return <>
        <div className={"bar-icon"} style={open ? {left: "60%"} : {left: "5%"}}
        onClick={()=>setOpen(!open)}>
            <GrMenu />
        </div>

        <motion.div
            variants={sidebarVariants}
            animate={window.innerWidth<=768?`${open}`:''}
            className={"sidebar"}>


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
                                    className={selected === index ? "active" : "non-active"}
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
        </motion.div>
    </>
}