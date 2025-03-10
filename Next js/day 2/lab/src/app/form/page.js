"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";

const bigShoulders = localFont({
  src: [
    {
      path: "../../../public/fonts/Big_Shoulders_Inline,Big_Shoulders_Stencil/Big_Shoulders_Inline/static/BigShouldersInline-Regular.ttf",

      weight: "400",

      style: "regular",
    },

    {
      path: "../../../public/fonts/Big_Shoulders_Inline,Big_Shoulders_Stencil/Big_Shoulders_Inline/static/BigShouldersInline-Medium.ttf",

      weight: "500",

      style: "medium",
    },

    {
      path: "../../../public/fonts/Big_Shoulders_Inline,Big_Shoulders_Stencil/Big_Shoulders_Inline/static/BigShouldersInline-SemiBold.ttf",

      weight: "700",

      style: "semi-bold",
    },

    {
      path: "../../../public/fonts/Big_Shoulders_Inline,Big_Shoulders_Stencil/Big_Shoulders_Inline/static/BigShouldersInline-Bold.ttf",

      weight: "700",

      style: "bold",
    },
  ],
});

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className={`container mt-5 ${bigShoulders.className}`} style={{ height: "70vh" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
