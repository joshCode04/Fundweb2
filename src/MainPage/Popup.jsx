/* eslint-disable react/prop-types */
function Popup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="text-center">
          {/* <h2 className="text-2xl font-semibold mb-4">Thank You!</h2> */}
          <p className="mb-4">
            Please contact support via the live chat or
            <a href="" className="hover:underline text-blue-500">
              {" "}
              support@congressforprogress.com
            </a>{" "}
            for payment details
          </p>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
