import { Container } from '@material-ui/core'
import React, {useState} from 'react'
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/scss/modal-video.scss"
import pradeep from "../../../assets/img/members/pradeep.jpg"
import style from "./Multimedia.module.scss"
import {GrPlayFill} from "react-icons/gr"
import {FaPlay} from "react-icons/fa"
import yt1 from "../../../assets/img/multimedia/yt_1.jpg"


export default function Multimedia() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={style.video_container}>
      {/* <div className={style.title_container}>
        <div className={style.video_title}>Video Posts</div>
      </div> */}
      <div className={style.caption}>
        Radio Jingle For Dignified Menstruation
      </div>
      <div className={style.caption2}>
        मर्यादित महिनावारीको लागि रेडियो सुचना
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="TVclbOlsQZ4"
        onClose={() => setOpen(false)}
      />
      <div
        className={style.videoplayer}
        onClick={() => setOpen(true)}
        // onMouseEnter={}
      >
        <img src={yt1} alt="" />
        <div className={style.play}>
          <FaPlay />
        </div>
      </div>
    </div>
  );
}
