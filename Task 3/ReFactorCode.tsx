interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: BlockchainType; // Define proper type for blockchain
}

interface Props extends BoxProps {}

type BlockchainType = "Osmosis" | "Ethereum" | "Arbitrum" | "Zilliqa" | "Neo";

const getPriority = (blockchain: BlockchainType | string): number => {
  const priorities: Record<string, number> = {
    Osmosis: 100,
    Ethereum: 50,
    Arbitrum: 30,
    Zilliqa: 20,
    Neo: 20,
  };
  return priorities[blockchain] ?? -99;
};

const WalletPage: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance) => {
        const balancePriority = getPriority(balance.blockchain);
        return balancePriority > -99 && balance.amount <= 0;
      })
      .sort(
        (lhs, rhs) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain)
      );
  }, [balances]); // Removed `prices` to prevent unnecessary re-renders

  return (
    <div {...rest}>
      {sortedBalances.map((balance) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
          <WalletRow
            className={classes.row}
            key={balance.currency} // Use `currency` instead of index as key
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={balance.amount.toFixed()} // No need for separate `formattedBalances` array
          />
        );
      })}
    </div>
  );
};
