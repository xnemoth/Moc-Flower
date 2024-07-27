import banner from "../../assets/home/banner.png";
import listImg1 from "../../assets/showcase/1.png";
import listImg2 from "../../assets/showcase/2.png";
import listImg3 from "../../assets/showcase/3.png";
import listImg4 from "../../assets/showcase/4.png";
import listImg5 from "../../assets/showcase/5.png";
import listImg6 from "../../assets/showcase/6.png";
import listImg7 from "../../assets/showcase/7.png";
import listImg8 from "../../assets/showcase/8.png";
import choose1 from "../../assets/content/choose1.png";
import choose2 from "../../assets/content/choose2.png";
import choose3 from "../../assets/content/choose3.png";
import carousel1 from "../../assets/home/carousel/1.png";
import carousel2 from "../../assets/home/carousel/2.png";
import carousel3 from "../../assets/home/carousel/3.png";
import coop1 from "../../assets/home/coop/epal.png";
import coop2 from "../../assets/home/coop/halozend.png";
import coop3 from "../../assets/home/coop/vinholiday.png";
import coop4 from "../../assets/home/coop/sacombank.png";
function Home() {
  return (
    <div className="content d-flex flex-column">
      <div className="banner position-relative w-100">
        <img src={banner} alt="flower" className="img-fluid" />
        <div className="banner-text position-absolute top-0 start-0 mt-5 pt-5">
          <div className="banner__header mx-5 px-4 w-75 mt-5 text-start">
            Trao gửi yêu thương
          </div>
          <div className="banner__slogan mx-5 px-4 w-75 mt-2 text-start">
            Điện hoa quốc tế & toàn quốc. Mộc Flowers giao hoa miễn phí trong
            vòng 2h.
          </div>
        </div>
      </div>
      <div className="showcase-grid d-flex flex-column justify-content-center">
        <div className="showcase-grid__title my-3 py-2">
          Sản phẩm của chúng tôi
        </div>
        <div className="showcase-grid__content my-3">
          Với nhiều năm kinh nghiệm phục vụ trong ngành điện hoa, Mộc Flowers
          chúng tôi luôn cố gắng để tạo ra những sản phẩm tốt nhất, đa dạng nhất
          phục vụ cho mọi nhu cầu của khách hàng.
        </div>
        <div className="showcase-grid__listImg d-flex flex-row flex-wrap justify-content-center py-3">
          <div className="showcase-grid__listImg_single card bg-image">
            <img
              src={listImg1}
              alt="Flowers"
              className="img-fluid card-img px-4 py-4"
            />
            <div className="listImg__popup card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <div className="listImg__content my-3">Bó hoa</div>
              <div className="listImg__popup-btn btn btn-outline-light w-50">
                Xem ngay
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="showcase-grid__listImg_single card bg-image">
            <img
              src={listImg2}
              alt="Flowers"
              className="img-fluid card-img px-4 py-4"
            />
            <div className="listImg__popup card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <div className="listImg__content my-3">Kệ hoa</div>
              <div className="listImg__popup-btn btn btn-outline-light w-50">
                Xem ngay <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="showcase-grid__listImg_single card bg-image">
            <img
              src={listImg3}
              alt="Flowers"
              className="img-fluid card-img px-4 py-4"
            />
            <div className="listImg__popup card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <div className="listImg__content my-3">Giỏ hoa</div>
              <div className="listImg__popup-btn btn btn-outline-light w-50">
                Xem ngay <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="showcase-grid__listImg_single card bg-image">
            <img
              src={listImg4}
              alt="Flowers"
              className="img-fluid card-img px-4 py-4"
            />
            <div className="listImg__popup card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <div className="listImg__content my-3">Hoa cưới</div>
              <div className="listImg__popup-btn btn btn-outline-light w-50">
                Xem ngay <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="showcase-grid__listImg_single card bg-image">
            <img
              src={listImg5}
              alt="Flowers"
              className="img-fluid card-img px-4 py-4"
            />
            <div className="listImg__popup card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <div className="listImg__content my-3">Hộp hoa</div>
              <div className="listImg__popup-btn btn btn-outline-light w-50">
                Xem ngay <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="showcase-grid__listImg_single card bg-image">
            <img
              src={listImg6}
              alt="Flowers"
              className="img-fluid card-img px-4 py-4"
            />
            <div className="listImg__popup card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <div className="listImg__content my-3">Bình hoa</div>
              <div className="listImg__popup-btn btn btn-outline-light w-50">
                Xem ngay <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="showcase-grid__listImg_single card bg-image">
            <img
              src={listImg7}
              alt="Flowers"
              className="img-fluid card-img px-4 py-4"
            />
            <div className="listImg__popup card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <div className="listImg__content my-3">Lan hồ điệp</div>
              <div className="listImg__popup-btn btn btn-outline-light w-50">
                Xem ngay <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="showcase-grid__listImg_single card bg-image">
            <img
              src={listImg8}
              alt="Flowers"
              className="img-fluid card-img px-4 py-4"
            />
            <div className="listImg__popup card-img-overlay d-flex flex-column justify-content-center align-items-center">
              <div className="listImg__content my-3">Lãng hoa</div>
              <div className="listImg__popup-btn btn btn-outline-light w-50">
                Xem ngay <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-us card-img d-flex flex-column py-5 px-5">
        <div className="choose-us__content d-flex flex-column">
          <div className="choose-us__header my-2 py-3">
            Lý do bạn nên chọn Mộc Flowers
          </div>
          <div
            id="slider__Indicator"
            className="choose-us__slider card-group my-2 py-3"
          >
            <div className="card d-flex flex-column justify-content-center">
              <div>
                <img src={choose1} alt="Why us" />
              </div>
              <div>Chứng nhận sản phẩm</div>
              <div>
                Sảm phẩm của chúng tôi tự hào được chứng nhận chất. Với các loại
                hoa hoa dạng được nhập khẩu đảm bảo chất lượng sản phẩm.
              </div>
            </div>
            <div className="card d-flex flex-column justify-content-center">
              <div>
                <img src={choose2} alt="Why us" />
              </div>
              <div>Uy tín hàng đầu</div>
              <div>
                Với nhiều năm kinh nghiệm phục vụ trong ngành điện hoa, Mộc
                Flowers hiểu mức độ quan trọng trong công việc của mình là
                truyền tải đúng và đủ thông điệp của người tặng đến người nhận.
                Vì thế chúng tôi cam kết 100% sự hài lòng của khách hàng với
                dịch vụ điện hoa của chúng tôi.{" "}
              </div>
            </div>
            <div className="card d-flex flex-column justify-content-center">
              <div>
                <img src={choose3} alt="Why us" />
              </div>
              <div>Chất lượng tuyệt vời</div>
              <div>
                Luôn cam kết đặt chất lượng hoa luôn tươi mới lên hàng đầu giao
                cho khách. Các mẫu hoa luôn được cắm đủ số lượng và giống kiểu
                dáng đã đặt.
              </div>
            </div>
          </div>
          <div className="carousel-indicators my-5">
            <button
              type="button"
              data-bs-target="#slider__Indicator"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#slider__Indicator"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#slider__Indicator"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>
      <div className="carousel__feedback py-3">
        <div className="carousel__feedback-header py-3">
          Khách hàng nói gì về chúng tôi
        </div>
        <div className="carousel__feedback-content">
          {/* <div
            id="carouselInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={carousel1} className="d-block w-50" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={carousel2} className="d-block w-50" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carousel3} className="d-block w-50" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
          <div className="container-fluid">
            <div id="carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner row w-100 mx-auto" role="listbox">
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                  <img
                    src={carousel1}
                    className="img-fluid mx-auto d-block"
                    alt="img1"
                  />
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                  <img
                    src={carousel2}
                    className="img-fluid mx-auto d-block"
                    alt="img2"
                  />
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                  <img
                    src={carousel3}
                    className="img-fluid mx-auto d-block"
                    alt="img3"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="slider__coop py-3">
        <div className="slider__coop-header py-3">Đối tác của chúng tôi</div>
        <div className="slider__coop-content row">
            <div className="col"><img src={coop1} alt="Epal" /></div>
            <div className="col"><img src={coop2} alt="Halozend" /></div>
            <div className="col"><img src={coop3} alt="VinHoliday" /></div>
            <div className="col"><img src={coop4} alt="Sacombank" /></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
