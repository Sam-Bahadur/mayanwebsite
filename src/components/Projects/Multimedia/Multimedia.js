import { Container } from '@material-ui/core'
import { render } from '@testing-library/react';
import React, {useState} from 'react'
import Video from "./Video.js"
import yt1 from "../../../assets/img/multimedia/yt_1.jpg"


 

export default function Multimedia() {
    return (
      <>
      <Video caption={'Radio Jingle For Dignified Menstruation'}
      caption2={"मर्यादित महिनावारीको लागि रेडियो सुचना"}
    id={"TVclbOlsQZ4"}
    img={yt1}
      />
      <Video caption={'Documentary on Dignified Menstruations | Achham, Nepal'}
      caption2={"मर्यादित महिनावारीको लागि भिडियो डकुमेन्टरी | अछाम, नेपाल"}
    id={"TVclbOlsQZ4"}
    img={yt1}
      />

      </>
    );
}
