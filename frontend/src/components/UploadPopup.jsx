import React, { useState, useEffect } from 'react';

const UploadPopup = ({ progresspercent }) => {

  useEffect(() => {
    // const interval = setInterval(() => {
    //   // Simulating the upload progress
    //   setUploadProgress((prevProgress) => {
    //     const newProgress = prevProgress + uploadSpeed;
    //     return newProgress >= fileTotalMB ? 100 : newProgress;
    //   });
    // }, 1000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
      <div className="bg-gray-800 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Uploading... Please wait</h2>
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
        <p className="text-center text-sm mb-2">
          {progresspercent < 100
            ? `Uploaded: ${progresspercent}%`
            : 'Upload complete!'}
        </p>
      </div>
    </div>
  );
};

export default UploadPopup;
