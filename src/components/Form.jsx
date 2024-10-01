import SuccessModal from "./SuccessModal";
import { useForm } from "react-hook-form";
import Logo from "../assets/images/logo.jpg";
import { useState } from "react";

const For = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState(false);

  const onSubmit = async (data) => {
    console.log("Submitting data:", data); // Debug log
    try {
      let response = await fetch("/api/submit.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response Status:", response.status); // Debug log

      if (response.ok) {
        console.log("Form submitted successfully!"); // Debug log
        setSuccessMessage(true);
        reset();
        setTimeout(() => setSuccessMessage(false), 3000);
      } else {
        console.error("Submission failed:", response.statusText); // Debug log
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Debug log
    }
  };

  return (
    <>
      {isSubmitting && (
        <div className="text-center text-sky-600">Loading...</div>
      )}

      {successMessage && (
        <SuccessModal
          message="Form submitted successfully!"
          onClose={() => setSuccessMessage(false)}
        />
      )}

      <div className="container mx-auto mt-10 p-6 bg-gradient-to-b from-sky-50 to-white shadow-md rounded-lg max-w-lg border-t-4 border-sky-400">
        <img
          src={Logo}
          alt="CityPulse Logo"
          className="mx-auto mb-4 w-12 h-12 rounded-full"
        />
        <h1 className="text-center text-3xl font-bold text-sky-600 mb-4">
          Thanks for Messaging Us!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              className="w-full p-3 border border-sky-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200 ease-in"
              placeholder="Name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
                minLength: { value: 3, message: "Min length is 3 characters" },
              })}
              type="text"
            />
            {errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </div>
            )}
          </div>

          <div>
            <input
              className="w-full p-3 border border-sky-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200 ease-in"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </div>
            )}
          </div>

          <div>
            <textarea
              className="w-full p-3 border border-sky-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200 ease-in"
              placeholder="Your Message"
              {...register("message", {
                required: { value: true, message: "Message is required" },
                minLength: { value: 5, message: "Min length is 5 characters" },
              })}
              rows="4"
            />
            {errors.message && (
              <div className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </div>
            )}
          </div>

          <div>
            <input
              className="w-full p-3 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 disabled:opacity-50 transition-all duration-200"
              type="submit"
              value="Submit"
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default For;
