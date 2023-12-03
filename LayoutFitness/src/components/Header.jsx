import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div>
          <Link to="/">
            <img
              src="https://lifefitness.com.vn/wp-content/uploads/2023/02/new-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <ul>
            <li>Gioi Thieu</li>
            <li>Cau Lac Bo</li>
            <li>Dich Vu</li>
            <li>LEFITACADEMY</li>
            <li>Tin Tuc</li>
            <li>Lam moi cuoc song</li>
            <li>
              <Link to="/register">
                <button>Đăng Ký</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>Đăng Nhập</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;