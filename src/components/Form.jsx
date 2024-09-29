import { useState } from "react"; // Import useState for managing modal state
import SuccessModal from "./SuccessModal";
import { useForm } from "react-hook-form";
import Logo from "../assets/images/logo.jpg"; // Import the SuccessModal component

const For = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [formMessage, setFormMessage] = useState(""); // State for success message
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let response = await fetch("https://city-rose.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.text(); // Get the response text

      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormMessage("Form submitted successfully!"); // Set success message
        setModalOpen(true); // Open the modal
        reset(); // Reset the form after successful submission
      } else {
        console.error(
          "Submission failed with status:",
          response.status,
          responseData
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {/* Modal for Success Message */}
      {isModalOpen && (
        <SuccessModal
          message={formMessage}
          onClose={() => setModalOpen(false)} // Close modal function
        />
      )}

      <div className="container mx-auto mt-10 p-6 bg-gradient-to-b from-sky-50 to-white shadow-lg rounded-lg max-w-lg border-t-4 border-[#1b3c42]">
        <h1 className="text-center text-4xl font-bold text-[#1b3c42] mb-6">
          Let&apos;s Connect
        </h1>
        <img
          src={Logo}
          className="w-16 h-16 rounded-full mx-auto mb-4 shadow-md"
          alt="Logo"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              className="w-full p-4 border border-[#1b3c42] bg-gray-100 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#1b3c42] transition duration-200 ease-in"
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
              className="w-full p-4 border border-[#1b3c42] bg-white rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#1b3c42] transition duration-200 ease-in"
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
              className="w-full p-4 border border-[#1b3c42] bg-white rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#1b3c42] transition duration-200 ease-in"
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
              className="w-full p-4 bg-[#6caddf] text-xl text-white font-bold rounded-lg shadow-md hover:bg-[#145052] focus:outline-none focus:ring-2 focus:ring-[#1b3c42] focus:ring-opacity-50 disabled:opacity-50 transition-all duration-200"
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
