// components/ListHeader.tsx
import React from "react";
import { View } from "react-native";
import MarketSection from "./MarketSection";
import MainTabs from "./MainTabs";
import SubTabs from "./SubTabs";

type MarketItem = { id: string; title: string; value: string; change: string };

interface ListHeaderProps {
  marketData: MarketItem[];
  mainTabs: string[];
  mainTab: string;
  subTabs: string[];
  subTab: string;
  onMainTabChange: (tab: string) => void;
  onSubTabChange: (tab: string) => void;
}

export default function ListHeader({
  marketData,
  mainTabs,
  mainTab,
  subTabs,
  subTab,
  onMainTabChange,
  onSubTabChange,
}: ListHeaderProps) {
  return (
    <View>
      <MarketSection marketData={marketData} />

      <MainTabs
        mainTabs={mainTabs}
        mainTab={mainTab}
        onMainTabChange={onMainTabChange}
      />

      {mainTab === "Indices" && (
        <SubTabs
          subTabs={subTabs}
          subTab={subTab}
          onSubTabChange={onSubTabChange}
        />
      )}

      {mainTab !== "Indices" && <View style={{ height: 12 }} />}
    </View>
  );
}