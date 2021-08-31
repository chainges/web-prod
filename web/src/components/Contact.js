import React from "react";
import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { GlobalStyles } from "twin.macro";
import EmailIllustrationSrc from "../images/email-illustration.svg";

import { FormattedMessage, useIntl } from "gatsby-plugin-intl";


const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const SubheadingBase = tw.h5`font-bold text-primary-500`;
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

const Container = tw.div`relative bg-white`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`text-secondary-500 mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 text-black first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      <FormattedMessage id="contactPage.titlePart1" /><span tw="text-primary-500"><FormattedMessage id="contactPage.titlePart2" /></span>
      <wbr /><FormattedMessage id="contactPage.titlePart3" />
    </>
  ),
  description = <FormattedMessage id="contactPage.description" />,
  submitButtonText = <FormattedMessage id="contactPage.form.sendButtonText" />,
  formAction = "#",
  formMethod = "get",
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  console.log(<FormattedMessage id="contactPage.form.message" />);
  const intl = useIntl();
  return (
    <>
      {/* <GlobalStyles /> */}
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              {description && <Description>{description}</Description>}
              <Form action={formAction} method={formMethod}>
                <Input type="email" name="email" placeholder={intl.formatMessage({ id: "contactPage.form.email"}) } />
                <Input type="text" name="name" placeholder={intl.formatMessage({ id: "contactPage.form.fullname"}) } />
                <Input type="text" name="subject" placeholder={intl.formatMessage({ id: "contactPage.form.subject"}) } />
                <Textarea name="message" placeholder={intl.formatMessage({ id: "contactPage.form.message"}) } />
                <SubmitButton type="submit">{submitButtonText}</SubmitButton>
              </Form>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    </>
  );
};

// import React from "react";
// import EmailIllustrationSrc from "../images/email-illustration.svg";
// import "tailwindcss/dist/base.css";

// function Contact() {
//   const subheading = "Contact Us";
//   const heading = (
//     <>
//       Feel free to <span className="text-primary-500">get in touch</span>
//       <wbr /> with us.
//     </>
//   );
//   const description =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//   const submitButtonText = "Send";
//   const formAction = "#";
//   const formMethod = "get";
//   const textOnLeft = true;
//   return (
//     <div style={{ backgroundColor: "white" }} className={`relative`}>
//       <div
//         className={`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`}
//       >
//         <div
//           className={`w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 flex-shrink-0 h-80 md:h-auto`}
//         >
//           <div
//             style={{ backgroundImage: `url("${EmailIllustrationSrc}")` }}
//             className={`rounded bg-contain bg-no-repeat bg-center h-full`}
//           ></div>
//         </div>
//         <div
//           className={`w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first`}
//         >
//           <div className={`lg:py-8 text-center md:text-left`}>
//             {subheading && (
//               <h5 className={`font-bold text-primary-500 text-center md:text-left`}>
//                 {subheading}
//               </h5>
//             )}
//             <h2
//               className={`text-secondary-500 text-4xl sm:text-5xl font-black tracking-wide text-center mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`}
//             >
//               {heading}
//             </h2>
//             {description && (
//               <p
//                 className={`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`}
//               >
//                 {description}
//               </p>
//             )}
//             <form
//               action={formAction}
//               method={formMethod}
//               className={`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`}
//             >
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email Address"
//                 className={`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`}
//               />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 className={`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`}
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 className={`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`}
//               />
//               <input
//                 type="textarea"
//                 name="message"
//                 placeholder="Your Message Here"
//                 className={`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500 h-24`}
//               />
//               <button
//                 type="submit"
//                 className={`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 inline-block mt-8`}
//               >
//                 {submitButtonText}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

// // import React from 'react'

// // function Contact() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default Contact
