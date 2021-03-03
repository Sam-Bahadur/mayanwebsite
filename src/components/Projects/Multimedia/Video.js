import React, { useState } from "react";
import style from "./Multimedia.module.scss";
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/scss/modal-video.scss";
import { GrPlayFill } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";

export default function Video(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={style.video_container}>
      {/* <div className={style.title_container}>
          <div className={style.video_title}>Video Posts</div>
        </div> */}
      <div className={style.caption}>{props.caption}</div>
      <div className={style.caption2}>{props.caption2}</div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={props.id}
        onClose={() => setOpen(false)}
      />
      <div
        className={style.videoplayer}
        onClick={() => setOpen(true)}
        // onMouseEnter={}
      >
        <img src={props.img} alt="" />
        <div className={style.play}>
          <FaPlay />
        </div>
      </div>
    </div>
  );
}
