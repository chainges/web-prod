import React, { useState, useEffect } from "react";
import PortableText from "./portableText";

import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import { GatsbyImage } from "gatsby-plugin-image";

const InfoRow = props => {
  const img = props.illustration.image;
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    if (props.illustration && props.illustration.image && props.illustration.image.asset && !props.illustration.disabled) {
      setImageData(getGatsbyImageData(
        props.illustration.image,
        { maxWidth: 960 },
        clientConfig.sanity
      ));
    }
  }, [props.illustration])

  const sizeClassText = img ? "sm:w-3/5" : "sm:w-1/1";
  const sizeClassImg = img ? "sm:w-2/5" : "sm:w-1/1";
  return (
    <div className={"flex flex-wrap pb-6"}>
      <div className={"w-3/5 p-6 " + sizeClassText}>
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">{props.title}</h3>
        <p className="text-gray-600 mb-8">
          <PortableText blocks={props.text} />
        </p>
      </div>
      {img && <div className={"w-full " + sizeClassImg}>{imageData ? (
        <GatsbyImage
          className="w-full sm:h-64 mx-auto"
          image={imageData}
          alt={props.illustration.image.alt}
        />
      ) : (
        <></>
      )}</div>}
    </div>
  );
};

const InfoRowFlipped = props => {
  const img = props.illustration.image;
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    if (props.illustration && props.illustration.image && props.illustration.image.asset && !props.illustration.disabled) {
      setImageData(getGatsbyImageData(
        props.illustration.image,
        { maxWidth: 960 },
        clientConfig.sanity
      ));
    }
  }, [props.illustration])

  const sizeClassText = img ? "sm:w-3/5" : "sm:w-1/1";
  const sizeClassImg = img ? "sm:w-2/5" : "sm:w-1/1";
  return (
    <div className={"flex flex-wrap pb-6 flex-col-reverse sm:flex-row"}>
      {img && <div className={"w-full " + sizeClassImg}>{imageData ? (
        <GatsbyImage
          className="w-full sm:h-64 mx-auto"
          image={imageData}
          alt={props.illustration.image.alt}
        />
      ) : (
        <></>
      )}</div>}
      <div className={"w-5/6 p-6 " + sizeClassText}>
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">{props.title}</h3>
        <p className="text-gray-600 mb-8">
          <PortableText blocks={props.text} />
        </p>
      </div>
    </div>
  );
};

const InfoRows = props => {
  const contentRows = (props.rows || [])
    .filter(r => !r.disabled)
    .map((r, i) => {
      return i % 2 === 0 ? <InfoRow key={r._key} {...r} /> : <InfoRowFlipped key={r._key} {...r} />;
    });

  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {props.title}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {contentRows}
      </div>
    </section>
  );
};

export default InfoRows;
