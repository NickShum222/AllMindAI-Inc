import dynamic from "next/dynamic";
import { Navbar, SEO } from "@/Components";
import { Landing, About, Objective, Action, Footer } from "@/sections";

// const Landing = dynamic(() => import("@/sections/Landing"));
// const About = dynamic(() => import("@/sections/About"));
// const Objective = dynamic(() => import("@/sections/Objective"));
// const Action = dynamic(() => import("@/sections/Action"));
// const Footer = dynamic(() => import("@/sections/Footer"));

export default function Home() {
  return (
    <div className="flex flex-col max-w-[100svw] overflow-x-clip relative">
      <SEO/>
      <Navbar />
      <Landing />
      <About />
      <Objective />
      
      <Action />
      <Footer />
    </div>
  );
}
