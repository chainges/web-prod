import CTALink from "./CTALink";
import PortableText from "../components/portableText";
import React from "react";
import SignupEmail from "./signupEmail";

const CTA = ({ label, title, body, ctas }) => (
  <section className="container px-8 mx-auto text-center py-4">
    <h1 className="w-full my-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center text-white">{title}</h1>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>

    <p className="my-4 text-1xl sm:text-2xl lg:text-3xl leading-tight max-w-5xl mx-auto">
      <PortableText blocks={body} />
    </p>

    <div className="flex">
      {(ctas || []).map((c, i) => (
        <div className="flex-1 text-gray-700 text-center py-2">
          <CTALink
            key={`cta_${i}`}
            {...c}
            buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        </div>
      ))}
    </div>

  </section>
);

export default CTA;
