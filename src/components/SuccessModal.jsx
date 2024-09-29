import PropTypes from "prop-types";
import Logo from "../assets/images/logo.jpg";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-sky-600 mx-auto">
            Form Submitted SuccessFully!
          </h2>

          <button
            onClick={onClose}
            className="text-gray-800 text-3xl hover:text-gray-600 focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center mt-4">
          {/* <p className="text-gray-700 text-center mb-4">{message}</p> */}
          <img
            src={Logo}
            className="w-12 h-12 mb-2 rounded-full shadow-md"
            alt="Success Logo"
          />
        </div>
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 focus:outline-none transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Define prop types
SuccessModal.propTypes = {
  message: PropTypes.string.isRequired, // Expect message to be a required string
  onClose: PropTypes.func.isRequired, // Expect onClose to be a required function
};

export default SuccessModal;
