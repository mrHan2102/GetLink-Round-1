import { Select } from "antd";
import {
  WrapperIntro,
  WrapperBody,
  SelectStyled,
  InputStyled,
} from "./HomeStyled";
import Data from "@/Data/Data.json";
import { useState } from "react";
import { SwapCurrency } from "@/component";

const { Option } = Select;
const Home = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const getRate = (currency: string) => {
    return Data.data.find((item) => item.currency === currency)?.price || 1;
  };

  const handleChange = (value?: number, from?: string, to?: string) => {
    const fromRate = getRate(from || fromCurrency);
    const toRate = getRate(to || toCurrency);

    if (value !== undefined) setAmount(value);
    if (from) setFromCurrency(from);
    if (to) setToCurrency(to);

    const convertedValue = ((value ?? amount) * fromRate) / toRate;
    setConvertedAmount(convertedValue);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    handleChange(amount, toCurrency, fromCurrency);
  };

  return (
    <>
      <WrapperIntro>
        <h1>Welcome To Transfer Money App</h1>
        <h3>Convert all currencies for you</h3>
      </WrapperIntro>
      <WrapperBody>
        <InputStyled
          type="number"
          value={amount}
          className="no-spinner"
          onChange={(e) => handleChange(Number(e.target.value))}
        />
        <SelectStyled
          value={fromCurrency}
          onChange={(val) => handleChange(undefined, val as string)}
        >
          {Data.data.map((item) => {
            return <Option value={item.currency}>{item.currency}</Option>;
          })}
        </SelectStyled>
        <SwapCurrency onSwap={handleSwap} />
        <InputStyled value={convertedAmount} readOnly />
        <SelectStyled
          value={toCurrency}
          onChange={(val) => handleChange(undefined, undefined, val as string)}
        >
          {Data.data.map((item) => {
            return <Option value={item.currency}>{item.currency}</Option>;
          })}
        </SelectStyled>
      </WrapperBody>
    </>
  );
};
export default Home;
