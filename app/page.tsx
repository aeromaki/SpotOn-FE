"use client"

import { useCallback, useState } from "react";
import Image from "next/image";
//import styles from "./page.module.css";


export default function Home() {
  const [bodyStyle, setBodyStyle] = useState("dark");
  const [sideBarState, setSideBarState] = useState("close");
  const [modeText, setModeText] = useState("Dark Mode");

  const toggleClickEvent = useCallback(() => {
    if (sideBarState === "") {
      setSideBarState("close");
    } else {
      setSideBarState("");
    }
  }, [sideBarState]);

  const searchBtnClickEvent = useCallback(() => {
    setSideBarState("");
  }, []);

  const modeSwitchClickEvent = useCallback(() => {
    if (bodyStyle !== "dark") {
      setBodyStyle("dark");
      setModeText("Light mode");
    } else {
      setBodyStyle("");
      setModeText("Dark mode");
    }
  }, [bodyStyle]);

  return (
    <main className={bodyStyle}>
        <nav className={"sidebar " + sideBarState}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <Image src="/logo.png" width={40} height={40} alt="" />
                    </span>

                    <div className="text logo-text">
                        <span className="name">Spot On</span>
                        <span className="profession">Search Engine</span>
                    </div>
                </div>

                <i className='bx bx-chevron-right toggle' onClick={toggleClickEvent}></i>
            </header>

            <div className="menu-bar">

                <div className="menu">

                    <li className="search-box" onClick={searchBtnClickEvent}>
                        <i className='bx bx-search icon'></i>
                        <input type="text" placeholder="Search..." />
                    </li>

                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="../page1_home/index.html">
                                <i className='bx bx-home-alt icon' ></i>
                                <span className="text nav-text">Home</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="../page2_text/index.html">
                                <i className="bx bx-pencil icon" ></i>
                                <span className="text nav-text">Text</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="../page3_image/index.html">
                                <i className='bx bx-image icon'></i>
                                <span className="text nav-text">Image</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="../page4_video/index.html">
                                <i className='bx bx-video icon' ></i>
                                <span className="text nav-text">Video</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="">
                        <a href="#">
                            <i className='bx bx-log-out icon' ></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>

                    <li className="mode">
                        <div className="sun-moon">
                            <i className='bx bx-moon icon moon'></i>
                            <i className='bx bx-sun icon sun'></i>
                        </div>
                        <span className="mode-text text">{modeText}</span>

                        <div className="toggle-switch" onClick={modeSwitchClickEvent}>
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>

        <section className="home">
            <div className="text">Spot On</div>
        </section>

        <section className="header-bar">
            <nav className="navbar">
                <ul className="menu-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Basket</a></li>
                    <li><a href="#">My Page</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li className="join-btn"><a href="#">Join Us</a></li>
                </ul>
            </nav>
        </section>
    </main>
  );
}
