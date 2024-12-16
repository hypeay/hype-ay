"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // Novo campo de assunto
    message: "",
  });

  const [status, setStatus] = useState({ sending: false, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: null });

    const templateParams = {
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
      email: formData.email,
      reply_to: formData.email, // E-mail usado no "Responder Para"
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
        templateParams, // Parâmetros específicos do template
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID // User ID
      )
      .then(
        () => {
          setStatus({ sending: false, success: true });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus({ sending: false, success: false });
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {/* Name Input */}
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      {/* Email Input */}
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {/* Subject Input */}
      <div>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      {/* Message Input */}
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      {/* Submit Button */}
      <Button
        type="submit"
        disabled={status.sending}
        className="flex items-center gap-x-1 max-w-[166px]"
      >
        {status.sending ? "Sending..." : "Let's Talk"}
        <ArrowRightIcon size={20} />
      </Button>
      {/* Feedback Message */}
      {status.success !== null && (
        <p
          className={`mt-4 text-sm ${
            status.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.success
            ? "Your message has been sent successfully! Our team will get in touch with you soon."
            : "Failed to send your message. Please check all fields and try again, or contact us through our social media channels."}
        </p>
      )}
    </form>
  );
};

export default Form;
