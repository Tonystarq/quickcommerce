"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaFigma } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const DisclaimerDialog = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative overflow-y-auto h-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 h-8 w-8"
        >
        <IoCloseSharp className='text-[36px] cursor-pointer' />

        </button>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Disclaimer</h2>
          <div className="border-t pt-4">
          <p className="text-gray-600 mb-2">Project Details:</p>
          <div className="flex items-center space-x-4">
          

            <a
              href="https://www.figma.com/design/6Y9bfEXlR5SDo2NfOmmUJP/Dcluttr---Design-task-file?node-id=21-9998&t=Eb4CTGjLPmEuiy9t-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaFigma className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Tonystarq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-yadav-b325667a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
            href="https://portfolio-beta-nine-80.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <CgWebsite  className="w-6 h-6" />
          </a>
          </div>
        </div>
          <div className="flex flex-col items-center space-x-4">
           
            <p className="text-gray-600">
              For the best experience, please use a viewport width of 1440px or zoom out your browser. 
              You can also use browser dev tools to adjust the viewport.
            </p>
           
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-sm text-gray-600">
              This is a public repository. To view the alignment(padding-margin) of all elements, you can enable the following CSS in globals.css:
            </p>
            <pre className="mt-2 p-2 bg-gray-200 rounded text-xs overflow-x-auto">
              {`/* * { 
  outline: 1px solid red;
  outline-offset: -1px;
} */`}
            </pre>
          </div>

          <p className="text-gray-600">
            This is a non-responsive website as it was a task requirement to focus on the core functionality rather than responsiveness. 
            Due to time constraints, responsive design was not implemented.
          </p>

         
        </div>
      </div>
    </div>
  );
};

export default DisclaimerDialog; 