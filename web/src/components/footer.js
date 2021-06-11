// import { Link } from "gatsby";
import { Link } from "gatsby-plugin-intl";
import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";

const Footer = ({ siteTitle }) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto  px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 mr-8">
            <a
              className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <FormattedMessage id="siteTitle" />
            </a>
          </div>

          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6"><FormattedMessage id="links.title" /></p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="https://www.tailwindtoolbox.com/templates/landing-page">
                  <span className="hover:underline text-gray-800 hover:text-orange-500">
                  <FormattedMessage id="links.pageTheme" />
                  </span>
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://sanity.io/docs"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="links.sanityHelp" />
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://slack.sanity.io"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="links.slackCommunity" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6"><FormattedMessage id="legal.title" /></p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                <FormattedMessage id="legal.terms" />
                </span>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                <FormattedMessage id="legal.privacy" />
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6"><FormattedMessage id="social.title" /></p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com/sanity_io"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="social.twitter" />
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.linkedin.com/company/sanity-io/"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="social.linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6"><FormattedMessage id="company.title" /></p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/blog"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="company.blog" />
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.sanity.io/contact"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  <FormattedMessage id="company.contact" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
