import React from "react";

const Contact = ({Information}) => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-white text-black dark:bg-gradient-to-b dark:from-black dark:to-gray-800 dark:text-white p-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:border-gray-400">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/zbxdwreb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-black dark:border-white rounded-md text-black dark:text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-black dark:border-white rounded-md text-black dark:text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 border-black dark:border-white rounded-md text-black dark:text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>

        <div className="flex pt-10 md:flex-row flex-col items-center justify-between text-gray-700 dark:text-gray-300 gap-4">
  <p> <span className="font-medium">Mobile:</span> {Information.info.phone}</p>
  <p> <span className="font-medium">Email:</span> {Information.info.Email}</p>
</div>
      </div>
    </div>
  );
};

export default Contact;
