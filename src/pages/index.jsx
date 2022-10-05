import { useState } from "react";
import { About } from "../components/About";
import { Contact } from "../components/contact";
import { HeroSection } from "../components/HeroSection";

import { Navbar } from "../components/Navbar";
import { Project } from "../components/Project";
import { Sidebar } from "../components/Sidebar";
import { Skill } from "../components/Skill";

export function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Project />
      <Skill />
      <Contact />
    </>
  )
}