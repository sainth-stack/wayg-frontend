import Header from "../Header";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCheckCircle, FaYoutube } from "react-icons/fa";
import logo512 from "../../../src/logo512.png";
import "./index.css";
import { Link } from 'react-router-dom';
import { FirstCardDetails, SecondCardDetails, ThirdCardDetails } from "./Data/ListItems";
import { useEffect, useRef, useState } from "react";
import PricingTable from "../Table/PricingTable";
import { plans } from "./Data/Plans";

const Pricing = () => {
      const cardRefs = useRef([]);
      const [cardHeight, setCardHeight] = useState(0);

      useEffect(() => {
        if (cardRefs.current.length > 0) {
          const heights = cardRefs.current.map((card) => card.offsetHeight);
          setCardHeight(Math.max(...heights));
        }
      }, []);
 const PricingCard = ({
   title,
   listData,
   description,
   price,
   buttonText,
   buttonLink,
   index,
 }) => (
   <div
     ref={(el) => (cardRefs.current[index] = el)}
     style={{ height: cardHeight || "auto" }}
     className="pricing-card-one shadow-md  mx-3 mb-4 min-w-60 hover:shadow-lg flex flex-col"
   >
     <h1 className="pricing-card-heading font-bold capitalize text-2xl transition-all">
       {title}
     </h1>
     <p className="text-lg mx-3">{description}</p>
     <h1 className="heading-two-pricing-card flex items-center justify-center">
       <span className="text-3xl font-extrabold my-2">{price}</span>
       <span className="ml-3">{"per/ month"}</span>
     </h1>
     <ul className="space-y-2 text-justify flex-1 mb-3">
       {listData.map(({ text }, index) => (
         <li key={index} className="flex items-center space-x-2 mx-3 text-lg">
           <span className="text-green-600 mx-2">
             <FaRegCheckCircle />
           </span>
           <span className="text-gray-600 space-x-2 mx-3">{text}</span>
         </li>
       ))}
     </ul>
     <Link to={buttonLink}>
       <button className="bg-[#29c0ee] text-white my-2 p-2 rounded-lg hover:bg-[#06b6ec] transition duration-300">
         {buttonText}
       </button>
     </Link>
   </div>
 );


  const getFooterSectionPricing = () => (
    <div className="footer-home">
      <div className="footer-first-container">
        <div className="footer-container-second">
          <img src={logo512} className="logo-footer" alt="logo" />
          <p className="paragraph-footer">
            Where humans and AI collaborate seamlessly
          </p>
        </div>
        <div className="footer-container-second">
          <h1 className="footer-header-one">Company</h1>
          <a href="/about" target="_blank" className="footer-paragraph-one">
            About us
          </a>
          <a href="pricing" target="_blank" className="footer-paragraph-one">
            Pricing
          </a>
          <a href="contact" target="_blank" className="footer-paragraph-one">
            Contact
          </a>
        </div>
        <div className="footer-container-second">
          <h1 className="footer-header-one">Resources</h1>
          <a href="/blogs" target="_blank" className="footer-paragraph-one">
            Blog
          </a>
          <a href="/faqs" target="_blank" className="footer-paragraph-one">
            FAQs
          </a>
        </div>
      </div>
      <div className="main-footer-container-last">
        <div className="icons-container-footer">
          <FaLinkedin className="icon-footer" />
          <FaXTwitter className="icon-footer" />
          <FaYoutube className="icon-footer" />
        </div>
      </div>
    </div>
  );

  const getFooterAboveSectionPricing = () => (
    <div className="main-container-empower-home-ai">
      <div className="inner-container-lines inner-container-empower-home">
        <h1 style={{ fontSize: 35 }}>
          Empower your team with WYGE.
          <br /> take the first step now!
        </h1>
        <p style={{ fontSize: 20, marginTop: 0 }}>
          Stay informed and be the first to know about upcoming releases.
        </p>
        <a href="/login" target="_blank" className="link-element-signIn-button">
          <button type="button" className="signupButton-home">
            Signup for Free
          </button>
        </a>
      </div>
    </div>
  );

  return (
    <div style={{ boxSizing: "border-box" }}>
      <Header />
      <hr style={{ marginTop: "0px" }} />
      <div className="pricing-main-container">
        <h1>Plans & Pricing</h1>
        <p>Find the right plan for your goals</p>
        <div className="flex justify-items-center items-center container my-3 px-4 ">
          <PricingCard
            index={0}
            listData={FirstCardDetails}
            title="Basic"
            description="Basic Chat & Basic ML"
            price="$29"
            buttonText="GET STARTED"
            buttonLink="/login"
          />
          <PricingCard
            index={1}
            listData={SecondCardDetails}
            title="Standard"
            description="Elevate your client services with branded analytics and API integration."
            price="$39"
            buttonText="CONTACT US"
            buttonLink="/contact"
          />
          <PricingCard
            index={2}
            listData={ThirdCardDetails}
            title="Advanced"
            description="Serious agencies start here."
            price="$49"
            buttonText="CONTACT US"
            buttonLink="/contact"
          />
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Pricing Comparison
        </h1>
        <PricingTable plans={plans} />
      </div>
      {getFooterAboveSectionPricing()}
      {getFooterSectionPricing()}
    </div>
  );
};
export default Pricing;
