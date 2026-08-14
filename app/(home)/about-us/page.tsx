import { Metadata } from "next";
import AboutUs from "./AboutUs";
import TeamMembers from "../_sections/TeamMembers";

export const metadata: Metadata = {
  title: "About Us | ThoughtHub",
  description:
    "Learn more about ThoughtHub, our mission, and the team behind our innovative solutions.",
};

export default function AboutUsPage() {
  return (
    <div>
      <AboutUs />
      <TeamMembers/>
    </div>
  );
}
