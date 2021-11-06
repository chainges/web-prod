import CTALink from "./CTALink";
// import { Link } from "gatsby";
import { Link } from "gatsby-plugin-intl";
import React, { useEffect } from "react";
import * as styles from "./header.module.css";
import { useIntl, changeLocale } from "gatsby-plugin-intl";
import { languages } from "../intl/languages";
import { Icon, InlineIcon } from "@iconify/react";
import globe2Icon from "@iconify/icons-bi/globe2";
import menuIcon from "@iconify/icons-cil/hamburger-menu";

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {
  let headerClass = "fixed w-full z-30 top-0 text-white";
  headerClass += scrolled ? " bg-white shadow" : "";

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
  navActionClass += !textWhite || !scrolled ? " bg-white text-gray-800" : "";
  navActionClass += textWhite || scrolled ? " gradient text-white" : "";

  let navActionMobileClass = "hover:underline font-bold shadow opacity-75"
  navActionMobileClass += !textWhite || !scrolled ? " bg-white text-gray-800" : "";
  navActionMobileClass += textWhite || scrolled ? " gradient text-white" : "";

  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
  navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
  navContentClass += textWhite || scrolled ? " bg-white" : "";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
  titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  titleClass += textWhite || !scrolled ? " text-white" : "";

  let toggleBtnClass = "lg:hidden mx-2";
  toggleBtnClass += !textWhite || scrolled ? " text-gray-800" : "";
  toggleBtnClass += textWhite || !scrolled ? " text-white" : "";

  let imgClass = "fill-current inline " + styles.logoSvg;
  let svgColor = "white";
  svgColor = !textWhite || scrolled ? "#2d3748" : "white";

  const intl = useIntl();
  const currentLocale = intl.locale;

  useEffect(() => {
    const btn = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

  }, [])

  return (
    <nav id="header" className={headerClass}>
      <div className="w-full container mx-auto flex lg:flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" className={titleClass} to="/">
            <svg
              className={imgClass}
              width="38"
              height="38"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M28 23.3846C28 22.8718 27.8205 22.4359 27.4615 22.0769L23.4615 18.0769C23.1026 17.7179 22.6667 17.5384 22.1538 17.5384C21.6154 17.5384 21.1538 17.7436 20.7692 18.1538C20.8077 18.1923 20.9295 18.3109 21.1346 18.5096C21.3397 18.7083 21.4776 18.8461 21.5481 18.9231C21.6186 19 21.7147 19.1218 21.8365 19.2884C21.9583 19.4551 22.0417 19.6186 22.0865 19.7788C22.1314 19.9391 22.1538 20.1154 22.1538 20.3077C22.1538 20.8205 21.9743 21.2564 21.6154 21.6154C21.2564 21.9743 20.8205 22.1538 20.3077 22.1538C20.1154 22.1538 19.9391 22.1314 19.7788 22.0865C19.6186 22.0417 19.4551 21.9583 19.2884 21.8365C19.1218 21.7147 19 21.6186 18.9231 21.5481C18.8461 21.4776 18.7083 21.3397 18.5096 21.1346C18.3109 20.9295 18.1923 20.8077 18.1538 20.7692C17.7308 21.1667 17.5192 21.6346 17.5192 22.1731C17.5192 22.6859 17.6987 23.1218 18.0577 23.4808L22.0192 27.4615C22.3654 27.8077 22.8013 27.9808 23.3269 27.9808C23.8397 27.9808 24.2756 27.8141 24.6346 27.4808L27.4615 24.6731C27.8205 24.3141 28 23.8846 28 23.3846ZM14.4808 9.82691C14.4808 9.31409 14.3013 8.87819 13.9423 8.51922L9.98076 4.53845C9.62178 4.17947 9.18588 3.99999 8.67306 3.99999C8.17306 3.99999 7.73717 4.17306 7.36537 4.51922L4.53845 7.32691C4.17947 7.68588 3.99999 8.11537 3.99999 8.61537C3.99999 9.12819 4.17947 9.56409 4.53845 9.92306L8.53845 13.9231C8.8846 14.2692 9.3205 14.4423 9.84614 14.4423C10.3846 14.4423 10.8461 14.2436 11.2308 13.8461C11.1923 13.8077 11.0705 13.6891 10.8654 13.4904C10.6602 13.2917 10.5224 13.1538 10.4519 13.0769C10.3814 13 10.2852 12.8782 10.1634 12.7115C10.0417 12.5449 9.95832 12.3814 9.91345 12.2211C9.86858 12.0609 9.84614 11.8846 9.84614 11.6923C9.84614 11.1795 10.0256 10.7436 10.3846 10.3846C10.7436 10.0256 11.1795 9.84614 11.6923 9.84614C11.8846 9.84614 12.0609 9.86858 12.2211 9.91345C12.3814 9.95832 12.5449 10.0417 12.7115 10.1634C12.8782 10.2852 13 10.3814 13.0769 10.4519C13.1538 10.5224 13.2917 10.6602 13.4904 10.8654C13.6891 11.0705 13.8077 11.1923 13.8461 11.2308C14.2692 10.8333 14.4808 10.3654 14.4808 9.82691ZM31.6923 23.3846C31.6923 24.9231 31.1474 26.2243 30.0577 27.2884L27.2308 30.0961C26.1667 31.1602 24.8654 31.6923 23.3269 31.6923C21.7756 31.6923 20.4679 31.1474 19.4038 30.0577L15.4423 26.0769C14.3782 25.0128 13.8461 23.7115 13.8461 22.1731C13.8461 20.5961 14.4102 19.2564 15.5384 18.1538L13.8461 16.4615C12.7436 17.5897 11.4102 18.1538 9.84614 18.1538C8.30768 18.1538 6.99999 17.6154 5.92306 16.5384L1.92306 12.5384C0.84614 11.4615 0.307678 10.1538 0.307678 8.61537C0.307678 7.07691 0.85255 5.77563 1.94229 4.71152L4.76922 1.90383C5.83332 0.83973 7.1346 0.307678 8.67306 0.307678C10.2243 0.307678 11.532 0.85255 12.5961 1.94229L16.5577 5.92306C17.6218 6.98717 18.1538 8.28845 18.1538 9.82691C18.1538 11.4038 17.5897 12.7436 16.4615 13.8461L18.1538 15.5384C19.2564 14.4102 20.5897 13.8461 22.1538 13.8461C23.6923 13.8461 25 14.3846 26.0769 15.4615L30.0769 19.4615C31.1538 20.5384 31.6923 21.8461 31.6923 23.3846Z"
                  fill={svgColor}
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="32" height="32" fill="red" />
                </clipPath>
              </defs>
            </svg>{" "}
            {siteTitle}
          </Link>
        </div>
        {showNav && navMenuItems && (
          <div className={navContentClass} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navMenuItems.map(i => (
                <li className="mr-3">
                  <CTALink {...i} buttonActionClass={navActionClass} />
                </li>
              ))}
              <li className="mr-3">
                <div className="flex">
                  <InlineIcon icon={globe2Icon} style={{ color: "#607D8B", marginTop: "5px" }} />
                  <a
                    onClick={() => changeLocale(languages[0].name)}
                    style={{
                      marginLeft: 5,
                      marginRight: 5,
                      textDecoration: currentLocale == languages[0].name ? `underline` : ``,
                      cursor: `pointer`
                    }}
                  >
                    {languages[0].name}
                  </a>
                  |
                  <a
                    onClick={() => changeLocale(languages[1].name)}
                    style={{
                      marginLeft: 5,
                      marginRight: 5,
                      textDecoration: currentLocale == languages[1].name ? `underline` : ``,
                      cursor: `pointer`
                    }}
                  >
                    {languages[1].name}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
        <div id="mobile-menu-button" className={toggleBtnClass} style={{ cursor: "pointer" }}>
          <InlineIcon icon={menuIcon} style={{ width: "35px", height: "35px" }} />
        </div>
      </div>
      <div id="nav-mobile-content" className={styles.navMobileContent}>
        <div id="mobile-menu" className="hidden transition-all">
          {navMenuItems.map(i => (
            <>
              <Link className={styles.mobileNavLink} to={i.route || i.link || "#"}>
                {i.title}
              </Link>
              <hr></hr>
            </>
          ))}

        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav >
  );
};

export default Header;
