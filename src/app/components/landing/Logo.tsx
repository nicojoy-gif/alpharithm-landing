"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { logo: "/Company logo.png", name: "Sisy" },
  { logo: "/Company logo (1).svg", name: "Company Two" },
  { logo: "/Company logo (5).svg", name: "Company Three" },
  { logo: "/Company logo (6).svg", name: "Company Four" },
  { logo: "/Company logo (8).svg", name: "Company Five" },
];

export const Logo = () => {
  return (
    <div className=" bg-white border-b">
      <h3 className="text-lightgray font-medium text-center py-4">
        Join 4,000+ companies already growing
      </h3>
      <div className="w-full overflow-hidden bg-white ">
        <div className="relative w-full py-4 overflow-hidden whitespace-nowrap">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 1000, ease: "linear" }}
            className="flex items-center space-x-20 w-max"
          >
            {/* Generate unlimited logos dynamically */}
            {Array.from({ length: 10 })
              .flatMap(() => logos)
              .map((item, index) => (
                <div key={index} className="flex items-center xl:space-x-[30%]">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={186}
                    height={48}
                    priority
                    className="object-contain"
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 