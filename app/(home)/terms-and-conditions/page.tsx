import { Metadata } from "next";
import TermsAndConditions from "./TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions - ThoughtHub",
  description:
    "Read our Terms & Conditions to understand the rules and guidelines for using our services.",
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
