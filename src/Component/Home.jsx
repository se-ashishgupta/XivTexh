import React from "react";
import { Link } from "react-router-dom";
import data from "../assets/data.json";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="letscollaborate">
      <h1>Let's Collaborate</h1>
      <div className="letscollaborate_item">
        {data.collaborateData.map((item, index) => (
          <CollaborateCard
            key={index}
            heading={item.heading}
            description={item.description}
            linkTitle={item.linkTitle}
            imgSrc={item.imgSrc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

const CollaborateCard = ({ heading, description, imgSrc, linkTitle, link }) => (
  <>
    <motion.dev
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ opacity: 0, y: "100%" }}
      transition={{ ease: "easeOut", duration: 1.3 }}
      viewport={{ once: true }}
      className="collaborateCard"
    >
      <section>
        <div>
          <p>{heading}</p>
          <p>{description}</p>
        </div>
        <Link to={link}>
          {linkTitle}
          <AiOutlineArrowRight />
        </Link>
      </section>
      <section>
        <img src={imgSrc} alt="error" />
      </section>
    </motion.dev>
  </>
);

export default Home;
