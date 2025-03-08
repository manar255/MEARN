
import './Home.css'
const Home = () => {
  return (
    <div class="d-flex flex-column gap-5">
  <div
    class="hero d-flex flex-column gap-3 justify-content-center ps-3 text-white"
  >
    <h1>
      END OF SEASON SALE:<br />
      TO 50% OFF
    </h1>
    <p>Shop now and save big! Get up to 50% off on selected items.</p>
    <div class="d-flex flex-column gap-3">
      <div class="containar-white-btn">
        <button class="white-btn d-flex gap-4 align-items-center">
          shop women <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div class="containar-white-btn">
        <button class="white-btn d-flex gap-4 align-items-center">
          shop men <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div class="containar-white-btn">
        <button class="white-btn d-flex gap-4 align-items-center">
          shop kids <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="section2">
    <div
      class="d-flex flex-column justify-content-center h-100 p-5 gap-2 text-white"
    >
      <h2 class="fw-bolder fs-1">Campus</h2>
      <p>A street classic to keep you moving in style</p>
      <div class="containar-white-btn">
        <button class="white-btn d-flex gap-4 align-items-center">
          shop now <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="section3 d-flex justify-content-between gap-5">
    <div class="div1  d-flex justify-content-center align-items-end p-5 w-100">
      <button class="white-btn white-btn-border d-flex gap-5 align-items-center">men <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class="div2 d-flex justify-content-center align-items-end p-5 w-100">
      <button class="white-btn white-btn-border d-flex gap-5 align-items-center">wemon <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class="div3 d-flex justify-content-center align-items-end p-5 w-100">
      <button class="white-btn white-btn-border d-flex gap-5 align-items-center">kids <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
  
</div>

  )
}

export default Home