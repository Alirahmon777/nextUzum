"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCatalog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-location">
        <div className="container">
          <div className="header-location__content">
            <div className="header-location__box">
              <div>
                <Image
                  width={24}
                  height={24}
                  src="./svg/location.svg"
                  alt="location"
                />
                <p className="header-location__gps">
                  Shahar: <span>Toshkent</span>
                </p>
              </div>
              <p className="header-location__transfer">Topshirish punktlari</p>
              <a id="admin-link" href="./pages/admin.html">
                Admin
              </a>
            </div>
            <div className="header-location__order">
              Buyurtmangizni 1 kunda bepul yetkazib beramiz!
              <span>
                Copied from
                <a href="https://uzum.uz/" target="_blank">
                  uzum.uz
                </a>
                site
              </span>
            </div>
            <div className="header-location__lang">
              <p className="header-location__ques">Savol-javoblar</p>
              <p className="header-location__ques">Buyurtmalarim</p>
              <div className="header-location__language-box visible-uzb">
                <div
                  className="header-location__language-uzb"
                  id="lang-uzb"
                  data-name="uzb"
                >
                  <Image
                    width={20}
                    height={20}
                    src="./svg/uzb.svg"
                    alt="uzb-img language"
                  />
                  <p className="header-location__language">O&lsquo;zbekcha</p>
                </div>
                <div
                  id="lang-ru"
                  className="header-location__language-russian"
                  data-name="ru"
                >
                  <Image
                    width={20}
                    height={20}
                    src="./svg/rus.svg"
                    alt="rus-img language"
                  />
                  <p className="header-location__language">Русский</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__content">
            <Link href={"/"} className="flex items-center justify-center">
              <Image
                width={215}
                height={40}
                src="./svg/logo.svg"
                className="cursor-pointer"
                alt="uzum logo"
              />
            </Link>
            <div className="header__box">
              <button
                onClick={handleToggleCatalog}
                id="catalog-btn"
                data-v-58853e36=""
                data-test-id="header__button"
                className="ui-component ui-button mark-accent show-catalog"
              >
                <div data-v-58853e36="" className="slot before">
                  <div
                    id="catalog-icon"
                    className={`catalog-icon ${isOpen ? "open" : "close"}`}
                    data-v-58853e36=""
                  >
                    <div className="rect">
                      <div className="inner"></div>
                    </div>
                    <div className="top"></div>
                    <div className="bottom"></div>
                  </div>
                </div>
                <div data-v-58853e36="" className="slot default">
                  Katalog
                </div>
              </button>
              <div className="header__search">
                <input
                  type="search"
                  placeholder="Mahsulotlar va turkumlar izlash"
                  className="header__searchinput"
                />
                <button className="header__searchbtn flex items-center justify-center">
                  <svg
                    data-v-5ba3c40e=""
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ui-icon magnifying-glass"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5 10.5C15.5 13.2614 13.2614 15.5 10.5 15.5C7.73858 15.5 5.5 13.2614 5.5 10.5C5.5 7.73858 7.73858 5.5 10.5 5.5C13.2614 5.5 15.5 7.73858 15.5 10.5ZM14.3398 15.7451C13.264 16.5341 11.9364 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 11.9364 16.5341 13.264 15.7451 14.3398L19.709 18.3036C20.097 18.6917 20.097 19.3209 19.709 19.709C19.3209 20.097 18.6917 20.097 18.3036 19.709L14.3398 15.7451Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <ul className="header-login__list">
              <li id="login-sign" className="header-login__item">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 3C9.79086 3 8 4.79086 8 7V8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8V7C16 4.79086 14.2091 3 12 3ZM9.5 7C9.5 5.61929 10.6193 4.5 12 4.5C13.3807 4.5 14.5 5.61929 14.5 7V8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8V7ZM5.50232 19.3686C5.97321 16.2577 9.01803 14.5 12.0022 14.5C14.9858 14.5 18.031 16.2577 18.5019 19.3686C18.5046 19.3866 18.5025 19.3972 18.5 19.4048C18.497 19.4137 18.4903 19.4269 18.4759 19.442C18.4453 19.4741 18.3894 19.5039 18.3171 19.5039H5.68718C5.61487 19.5039 5.55898 19.4741 5.52838 19.442C5.51394 19.4269 5.50726 19.4137 5.50427 19.4048C5.50174 19.3972 5.49961 19.3865 5.50232 19.3686ZM12.0022 13C8.57321 13 4.64037 15.0404 4.01922 19.1441C3.85624 20.2208 4.75727 21.0039 5.68718 21.0039H18.3171C19.247 21.0039 20.148 20.2208 19.985 19.1441C19.3638 15.0404 15.4306 13 12.0022 13Z"
                      fill="black"
                    ></path>
                  </svg>
                  <p>Kirish</p>
                </a>
              </li>
              <li className="header-login__item">
                <Link href="/wishes">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z"
                      fill="#141415"
                    />
                  </svg>
                  <p>Saralangan</p>
                </Link>
              </li>
              <li className="header-login__item">
                <a href="./pages/basket.html">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="slightly transparent"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z"
                      fill="#141415"
                    ></path>
                  </svg>
                  <p>Savat</p>
                </a>
              </li>
            </ul>
          </div>

          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a href="#" className="header__link">
                  Elektronika
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Maishiy texnika
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Kiyim
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Poyabzallar
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Aksesuarlar
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Go&lsquo;zallik
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Salomatlik
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Uy-ro&lsquo;zg&lsquo;or buyumlari
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Qurilish va ta&lsquo;mirlash
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Avtotovarlar
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Bolalar tovarlari
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link flex items-center">
                  Yana
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#909090"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ui-icon"
                  >
                    <path d="M12 16C12.3107 15.9911 12.5948 15.8748 12.8257 15.6243L18.4481 9.8071C18.6435 9.61029 18.75 9.3598 18.75 9.06458C18.75 8.47414 18.2883 8 17.7024 8C17.4183 8 17.143 8.1163 16.9388 8.32206L12.0089 13.4504L7.06116 8.32206C6.85696 8.12524 6.59061 8 6.29763 8C5.71167 8 5.25 8.47414 5.25 9.06458C5.25 9.3598 5.35654 9.61029 5.55186 9.8071L11.1832 15.6243C11.4229 15.8748 11.6893 16 12 16Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;
