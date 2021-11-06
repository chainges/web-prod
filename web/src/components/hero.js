import React, { useEffect, useState } from "react";

import CTALink from "./CTALink";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "./portableText";
import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";
import "./hero.css";

function Hero(props) {
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    if (
      props.illustration &&
      props.illustration.image &&
      props.illustration.image.asset &&
      !props.illustration.disabled
    ) {
      setImageData(
        getGatsbyImageData(props.illustration.image, { maxWidth: 960 }, clientConfig.sanity)
      );
    }
  }, [props.illustration]);

  return (
    <div className="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/* Left col */}
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p className="uppercase tracking-loose w-full pt-1">{props.label}</p>
        <h1 className="my-4 text-3xl lg:text-4xl xl:text-5xl w-full font-bold leading-tight">{props.heading}</h1>
        <div className="leading-normal text-2xl  mb-8">
          <PortableText blocks={props.tagline} />
        </div>
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass="mx-auto sm:ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        )}
      </div>
      {/* Right col */}
      <div className="w-full md:w-3/5 py-6 ml-auto text-right">
        {imageData ? (
          <GatsbyImage
            className="w-full md:w-4/5 "
            image={imageData}
            alt={props.illustration.image.alt}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Hero;
