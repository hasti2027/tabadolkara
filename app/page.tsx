import AllServices from "./AllServies";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <div className="app">
      <Hero />
      {/* @ts-expect-error Server Component */}
      <AllServices />
    </div>
  );
}
