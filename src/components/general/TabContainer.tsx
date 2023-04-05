"use client";

import React from "react";
import { useState } from "react";
import TopicCard from "./TopicCard";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type TabContainerProps = {
  tabs: {
    title: string;
    topics: {
      icon: StaticImageData;
      title: string;
      summary: string;
    }[];
  }[];
};

const TabContainer = ({ tabs }: TabContainerProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center gap-14">
      <div className="flex justify-around items-center">
        {tabs.map((tab, index) => (
          <label
            key={index}
            className={`
              ${
                index === activeTabIndex
                  ? "underline decoration-2 underline-offset-4 "
                  : "hover:opacity-80"
              }
                uppercase cursor-pointer flex-1 text-center font-avenirHeavy text-wealthTxtBlack tracking-widest text-[14px]`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.title}
          </label>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200/80">
        {tabs.map((tab, tabIndex) => (
          <div
            key={tabIndex}
            className={`${tabIndex === activeTabIndex ? "block" : "hidden"}
            grid gap-px grid-cols-2 lg:grid-cols-4 w-full text-center`}
          >
            {tab.topics.map((topic, index) => (
              <div
                key={index}
                className="h-full w-full bg-white overflow-hidden"
              >
                <motion.div
                  key={activeTabIndex}
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.1 }}
                  transition={{ ease: "easeOut" }}
                  className="h-full"
                >
                  <TopicCard
                    icon={topic.icon}
                    title={topic.title}
                    summary={topic.summary}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContainer;
