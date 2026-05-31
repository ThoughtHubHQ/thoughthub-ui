"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Turnstile } from "next-turnstile";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(11, "Phone number must be at least 11 characters")
    .max(11, "Phone number must be at most 11 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [messageSent, setMessageSent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);

    const payload = {
      ...data,
      turnstileToken,
    };
    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      setLoading(false);
      setMessageSent("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      setMessageSent(
        "An error occurred while sending your message. Please try again.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto md:mx-0"
    >
      <div className="mb-5">
        <Label
          htmlFor="name"
          className="mb-3 block text-black dark:text-[#fafaf8] font-medium"
        >
          Full Name
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="eg. John Doe"
          className="py-6 border-2 border-black dark:border-[#e7eacd] text-black dark:text-[#fafaf8] bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col md:flex-row w-full gap-4 my-5">
        <div className="w-full">
          <Label
            htmlFor="phone"
            className="mb-3 block text-black dark:text-[#fafaf8] font-medium"
          >
            Phone Number
          </Label>
          <Input
            type="text"
            id="phone"
            placeholder="eg. 123-456-7890"
            className="py-6 border-2 border-black dark:border-[#e7eacd] w-full text-black dark:text-[#fafaf8] bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="w-full">
          <Label
            htmlFor="email"
            className="mb-3 block text-black dark:text-[#fafaf8] font-medium"
          >
            Email
          </Label>
          <Input
            type="text"
            id="email"
            placeholder="eg. john.doe@example.com"
            className="py-6 border-2 border-black dark:border-[#e7eacd] w-full text-black dark:text-[#fafaf8] bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="mb-5">
        <Label
          htmlFor="message"
          className="mb-3 block text-black dark:text-[#fafaf8] font-medium"
        >
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="eg. I want to discuss a project idea..."
          className="py-6 border-2 border-black dark:border-[#e7eacd] text-black dark:text-[#fafaf8] bg-transparent min-h-37.5 resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center justify-center">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || ""}
          onVerify={(token) => setTurnstileToken(token)}
          className="mt-2 mb-3"
          theme="dark"
        />
      </div>

      <div>
        <Button
          type="submit"
          className="w-full py-6 md:py-7 text-md bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black rounded-full font-semibold hover:scale-105 transition-transform"
          disabled={loading || !turnstileToken}
        >
          {loading ? (
            <>
              Sending Message... <Spinner />
            </>
          ) : (
            <>
              Send Message <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        {messageSent && (
          <p
            className={`text-sm mt-3 ${
              messageSent.includes("error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {messageSent}
          </p>
        )}
      </div>
    </form>
  );
}
