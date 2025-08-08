// data/dummyData.ts
const uid = (prefix = "") => prefix + Math.random().toString(36).slice(2, 9);

export type MarketItem = { 
  id: string; 
  title: string; 
  value: string; 
  change: string; 
};

export type IndexItem = {
  id: string;
  name: string;
  value: string;
  change: string;
  time?: string;
};

export const initialMarketData: MarketItem[] = [
  {
    id: uid("m"),
    title: "Nifty 50",
    value: "24,649.55",
    change: "+73.20 (0.30%)",
  },
  {
    id: uid("m"),
    title: "Sensex",
    value: "80,623",
    change: "+120.15 (0.15%)",
  },
  {
    id: uid("m"),
    title: "Dow Jones",
    value: "39,200",
    change: "+200.40 (0.50%)",
  },
];

export const initialIndicesData: Record<string, IndexItem[]> = {
  "Indian Indices": [
    {
      id: uid("ii"),
      name: "Sensex",
      value: "80,623",
      change: "+79.27 (0.10%)",
      time: "Aug 07, 16:10",
    },
    {
      id: uid("ii"),
      name: "Nifty 50",
      value: "24,649.55",
      change: "+73.20 (0.30%)",
      time: "Aug 07, 16:10",
    },
    {
      id: uid("ii"),
      name: "Bank Nifty",
      value: "52,100",
      change: "-120.50 (-0.23%)",
      time: "Aug 07, 16:10",
    },
  ],
  "Global Indices": [
    {
      id: uid("gi"),
      name: "Dow Jones",
      value: "39,200",
      change: "+200.40 (0.50%)",
      time: "Aug 07, 09:30",
    },
    {
      id: uid("gi"),
      name: "S&P 500",
      value: "5,250",
      change: "+15.20 (0.29%)",
      time: "Aug 07, 09:30",
    },
  ],
  Commodities: [
    {
      id: uid("c"),
      name: "Gold",
      value: "2,350.50",
      change: "-10.20 (-0.43%)",
      time: "Aug 07, 14:00",
    },
  ],
};

export const initialIndianStocks: IndexItem[] = [
  {
    id: uid("s"),
    name: "Reliance",
    value: "2,950.25",
    change: "+20.15 (0.68%)",
  },
  { 
    id: uid("s"), 
    name: "TCS", 
    value: "3,550.50", 
    change: "-15.40 (-0.43%)" 
  },
  {
    id: uid("s"),
    name: "Infosys",
    value: "1,480.10",
    change: "+12.10 (0.82%)",
  },
];

export const initialUSStocks: IndexItem[] = [
  { 
    id: uid("u"), 
    name: "Apple", 
    value: "215.55", 
    change: "+2.50 (1.18%)" 
  },
  {
    id: uid("u"),
    name: "Microsoft",
    value: "380.40",
    change: "+1.15 (0.30%)",
  },
];

export const initialMutualFunds: IndexItem[] = [
  {
    id: uid("mf"),
    name: "SBI Bluechip Fund",
    value: "412.50",
    change: "+2.30 (0.56%)",
  },
];

export const mainTabs = ["Indices", "Indian Stocks", "US Stocks", "Mutual Funds"];
export const subTabs = ["Indian Indices", "Global Indices", "Commodities"];

export { uid };