import React from "react"

import "./Sidebar.css"

const sidebar = (props) => {

    let menu = null

    const menuItems = [
        {
            type: "a",
            icon: "lightbulb",
            height: "15",
            text: "Notes",
            active: true
        },
        {
            type: "a",
            icon: "bell",
            height: "15",
            text: "Reminders"
        },
        { type: "devider", text: "1" },
        { type: "span", text: "LABELS" },
        { type: "a", height: "15", text: "blog" },
        { type: "a", height: "15", text: "holiday" },
        { type: "a", height: "15", text: "inspiration" },
        { type: "a", height: "15", icon: "bookmark", text: "personal" },
        { type: "a", height: "15", icon: "bookmark", text: "work" },
        { type: "a", height: "15", icon: "pencil", text: "Edit labels" },
        { type: "devider", text: "2" },
        { type: "a", height: "15", icon: "box", text: "Archive" },
        { type: "a", height: "15", icon: "trash", text: "Bin" }
    ]

    menu = menuItems.map((item) => {
        if (item.type === "a") {
            let src = "/open-iconic/svg/" + ( item.icon ? item.icon : "browser" ) + ".svg"
            let css = "nav-link" + (item.active ? " active": "")
            return (
                <a className={css} href="/#" key={item.text}>
                    <img src={src} height={item.height} alt="menu" />
                    {item.text}
                </a>
            )
        } else if (item.type === "span") {
            return (
                <span className="text text-muted" key={item.text}>{item.text}</span>
            )
        } else if (item.type === "devider") {
            return <div className="dropdown-divider" key={item.text}></div>
        } else {
            return null;
        }
    })

    return (
        
        <nav className="nav flex-column leftbar-menus">
            {menu}
        </nav>
    )
}

export default sidebar