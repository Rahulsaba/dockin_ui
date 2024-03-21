import Image from "next/image";
import NavBar from "@/components/navbar";
import Intro from "@/intro/page";
import Section_2 from "@/section_2/page";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={"layout"}>
        <Intro />
        <Section_2 />
        <Section_2 />
        <Section_2 />
        <Section_2 />
      </div>
    </div>
  );
}
