import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import style from "./Social.module.scss"

export default function Social() {
    return (
        <>
          <div className={style.extra}>
          <div className={style.social}>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mayanmedianepal/">
              <FaFacebookF />
            </a>
          </div>
          <div className={style.social}>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mayanmedianepal/">
              <FaInstagram />
            </a>
          </div>
          <div className={style.social}>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCmPTP4ZPUiHcbIQy3k5e-Pw">
              <FaYoutube />
            </a>
          </div>
        </div>  
        </>
    )
}
