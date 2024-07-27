import { useState } from "react";

const Support = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { email, message });
    setShowPopup(false);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md relative">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Support</h2>
      <p className="text-gray-700">
        Need help? Our support team is here for you.
      </p>
      <button
        onClick={() => setShowPopup(true)}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Contact Support
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-4">Contact Support</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="w-full mb-4 p-2 border border-gray-300 rounded h-32"
                required
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
