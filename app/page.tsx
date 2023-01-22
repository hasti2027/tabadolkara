import AllServices from "./AllServies";
import Hero from "./Hero";
import WhatCustomersSays from "./WhatCustomersSays";

export default function HomePage() {
  return (
    <div className="app">
      <Hero />
      {/* @ts-expect-error Server Component */}
      <AllServices />
      <WhatCustomersSays />
    </div>
  );
}
