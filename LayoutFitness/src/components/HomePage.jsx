import React from "react";

function HomePage() {
  return (
    <div className="home-page">
      <div className="banner">
        <img
          src="https://lifefitness.com.vn/wp-content/uploads/2023/09/IMG_20230922_154558-1024x405.jpg"
          alt=""
        />
      </div>
      <div className="info">
        <img
          src="https://lifefitness.com.vn/wp-content/uploads/2022/11/footer-01-1024x512.jpg"
          alt=""
        />
        <div className="container">
          <div className="info-content">
            <span className="title-content">
              TẠI SAO BẠN NÊN CHỌN CHÚNG TÔI?
            </span>
            <span>
              Bởi vì chúng tôi cần bạn. Chỉ những người thật sự cần bạn mới đem
              lại cho bạn những điều tốt nhất. Vì vậy hãy chọn tin tưởng chúng
              tôi !
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;