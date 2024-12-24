import Header from "../Header";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCheckCircle, FaYoutube } from "react-icons/fa";
import logo512 from "../../../src/logo512.png";
import "./index.css";
import { FirstCardDetails, FourthCardDetails, SecondCardDetails, ThirdCardDetails } from "./Data/ListItems";
import { useEffect, useRef, useState } from "react";
import PricingTable from "../Table/PricingTable";
import { plans } from "./Data/Plans";
import { useHistory } from 'react-router-dom';

const Pricing = () => {
  const cardRefs = useRef([]);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((card) => card.offsetHeight);
      setCardHeight(Math.max(...heights));
    }
  }, []);
  const navigate = useHistory()
  const navigateToExternalPage = (buttonLink) => {
    window.location.href = buttonLink;
  };
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
      className="pricing-card-one shadow-lg mx-3 mb-6 min-w-[250px] flex flex-col bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <h1 className="pricing-card-heading font-semibold capitalize text-2xl md:text-3xl transition-all text-center py-4">
        {title}
      </h1>
      <p className="text-lg text-center mx-4 my-2 text-gray-700">{description}</p>
      <h1 className="heading-two-pricing-card flex items-center justify-center mb-4 customFont">
        <span className="text-2xl font-extrabold">{price}</span>
        <span className="ml-2 text-lg text-gray-500">{"per/month"}</span>
      </h1>
      <ul className="space-y-3 text-justify flex-1 mb-4 mx-4">
        {listData.map(({ text }, index) => (
          <li key={index} className="flex items-center space-x-3 text-lg">
            <span className="text-green-600">
              <FaRegCheckCircle />
            </span>
            <span className="text-gray-600 text-[14px] leading-[22px]">{text}</span>
          </li>
        ))}
      </ul>
      <div onClick={() => navigateToExternalPage(buttonLink)}>
        <button className="bg-[#29c0ee] text-white px-6 py-3 max-w-72 mb-3 rounded-lg hover:bg-[#06b6ec] transition duration-300 text-lg font-semibold w-full">
          {buttonText}
        </button>
      </div>
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
        <div className="container mx-auto my-6 px-4 flex flex-nowrap justify-center items-center gap-4">
          <PricingCard
            index={0}
            listData={FourthCardDetails}
            title="Free"
            description="Basic Chat & Basic ML"
            price="0"
            buttonText="GET STARTED"
            buttonLink="/login"
          />
          <PricingCard
            index={1}
            listData={FirstCardDetails}
            title="Basic"
            description="Basic Chat & Basic ML"
            price="99"
            buttonText="GET STARTED"
            buttonLink="https://superprofile.bio/vp/676a743280809a00134c2119"
          />
          <PricingCard
            index={2}
            listData={SecondCardDetails}
            title="Standard"
            description="Elevate your client services with branded analytics and API integration."
            price="1999"
            buttonText="CONTACT US"
            buttonLink="/contact"
          />
          <PricingCard
            index={3}
            listData={ThirdCardDetails}
            title="Advanced"
            description="Serious agencies start here."
            price="2999"
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
