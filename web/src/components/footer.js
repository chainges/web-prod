// import { Link } from "gatsby";
import { Link } from "gatsby-plugin-intl";
import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";

const Footer = ({ siteTitle }) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col sm:flex-row py-6">
          <div className="flex-1 mb-6 mr-8">
            <a
              className="text-orange-600 no-underline hover:no-underline font-bold text-2xl md:text-4xl"
              href="#"
            >
              <FormattedMessage id="siteTitle" />
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6"><FormattedMessage id="legal.title" /></p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                <FormattedMessage id="legal.termsOfService" />
                </span>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                <FormattedMessage id="legal.privacyAndCookies" />
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6"><FormattedMessage id="social.title" /></p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href=" https://www.linkedin.com/company/scope321"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="social.linkedin" />
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com/scope321as"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="social.twitter" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6"><FormattedMessage id="company.title" /></p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/about"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="company.OmScope321" />
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/contact"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="company.contact" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
