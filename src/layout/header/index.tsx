import React from "react";
import { TopHeaderSection } from "./top-header";
import { MainHeader } from "./main-header";

export const Header = () => {
  return (
    <header className="xl:sticky top-0 z-50">
      <TopHeaderSection />
      <MainHeader />
    </header>
  );
};
