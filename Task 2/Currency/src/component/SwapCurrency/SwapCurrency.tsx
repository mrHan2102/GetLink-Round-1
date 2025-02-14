import { motion as m } from "framer-motion";
import { SwapOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Wrapper } from "./SwapCurrencyStyled";

const SwapCurrency = ({ onSwap }: { onSwap: () => void }) => {
  const MotionWrapper = m(Wrapper);
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    onSwap();
    setTimeout(() => setIsRotating(false), 500);
  };
  return (
    <MotionWrapper
      onClick={handleClick}
      animate={isRotating ? { rotate: 180 } : { rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SwapOutlined />
    </MotionWrapper>
  );
};

export default SwapCurrency;
