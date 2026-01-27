import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About Us - ThoughtHub",
};

export default function AboutPage() {
  return <About/>;
}