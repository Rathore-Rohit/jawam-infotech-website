import React from "react";
import bannerImage from "../assets/bannerContact.jpeg";
import Banner from "../components/common/Banner";

const ContactUs = () => {
  return (
    <Banner
      title="Contact Us"
      subTitle={`We Jawam Infotech are here to help!\nWe're friendly and available to chat. Reach out to us\nanytime and we'll happily answer your questions.`}
      image={bannerImage}
      currentPage="contact"
    />
  );
};

export default ContactUs;
