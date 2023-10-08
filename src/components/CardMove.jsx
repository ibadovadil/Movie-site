import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Swiper watchSlidesProgress={true} slidesPerView={1} className="mySwiper">
        <SwiperSlide className="justify-content-end">
          <Container>
            <div className="hoveredstar">
            <p>REVIEWS . TV</p>
            <h1>The Original Mountain <br /> (S1 , P1)</h1>
            </div>
            <hr />
            <div className="stars d-flex ">
              <div className="me-2">
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#757575" }} />
                <i className="fa-solid fa-star" style={{ color: "#757575" }} />
              </div>
              71/100
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className="justify-content-end">
          <Container>
           <div className="hoveredstar">
           <p>REVIEWS . TV</p>
            <h1>The Snowman’s Fear br (S1, Ep2)</h1>
           </div>
            <hr />
            <div className="stars d-flex ">
              <div className="me-2">
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#757575" }} />

                <i className="fa-solid fa-star" style={{ color: "#757575" }} />
                <i className="fa-solid fa-star" style={{ color: "#757575" }} />
              </div>
              67/100
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className="justify-content-end">
          <Container>
           <div className="hoveredstar">
           <p>REVIEWS . TV</p>
            <h1>Hidding In The Woods br (S1, Ep3)</h1>
           </div>
            <hr />
            <div className="stars d-flex ">
              <div className="me-2">
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#757575" }} />
              </div>
              84/100
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className="justify-content-end">
          <Container>
            <div className="hoveredstar">
            <p>REVIEWS . TV</p>
            <h1>Stuck In The Nowhere (S1, Ep4)</h1>
            </div>
            <hr />
            <div className="stars d-flex ">
              <div className="me-2">
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
              </div>
              95/100
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className="justify-content-end">
          <Container>
           <div className="hoveredstar">
           <p>REVIEWS . TV</p>
            <h1>
              Mountaineering Is Hard <br /> (S1, Ep5)
            </h1>
           </div>
            <hr />
            <div className="stars d-flex ">
              <div className="me-2">
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#bde203" }} />
                <i className="fa-solid fa-star" style={{ color: "#757575" }} />
                
              </div>
              90/100
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
            <div className="arrow">
            <div class="indicator">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
   <span></span>
</div>
            </div>

            
    </>
  );
}
