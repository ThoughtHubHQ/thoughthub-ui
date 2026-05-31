import { Metadata } from "next";
import PrivacyPolicy from "./PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy - ThoughtHub",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you use ThoughtHub.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
