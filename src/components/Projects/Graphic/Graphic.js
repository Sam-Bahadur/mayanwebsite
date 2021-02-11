import { Container } from '@material-ui/core'
import React, {useState, useCallback} from 'react'
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import style from "./Graphic.module.scss"
import jagaran1 from "../../../assets/img/graphicdesign/jagaran/banner1.jpg"
import jagaran2 from "../../../assets/img/graphicdesign/jagaran/banner2.png"
import jagaran3 from "../../../assets/img/graphicdesign/jagaran/banner3.png"
import jagaran4 from "../../../assets/img/graphicdesign/jagaran/banner4.jpg"

export default function Graphic() {
    const jagaran = [
        {
          src: jagaran1,
          width: 8,
          height: 3
        },
        {
          src: jagaran2,
          width: 8,
          height: 3
        },
        {
          src: jagaran3,
          width: 8,
          height: 3
        },
        {
          src: jagaran4,
          width: 8,
          height: 3
        },
      ];
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
    return (
        <Container>
            <div className={style.header}>
                Jagaran Nepal
            </div>
        <div className={style.graphic}>

        <Gallery photos={jagaran} 
        onClick={openLightbox}
        // targetRowHeight={250}
        margin = {8}/>
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={jagaran.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                    />
              </Modal>
            ) : null}
          </ModalGateway>
            </div>
        </Container>
    )
}
