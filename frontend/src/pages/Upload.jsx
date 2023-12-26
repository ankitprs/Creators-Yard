import React, { useState } from 'react';
import UploadPopup from '../components/UploadPopup';
import axios from 'axios'

const UploadPage = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [progressbar, setProgressbar] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [fileTotal, setfileTotal] = useState(0)

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setFile(file)
      setVideoSrc(objectURL);
    }
  };

  const uploadVideo = async () => {
    setProgressbar(true)
    console.log("Called Upload");
    if (file != null) {
      console.log("file found");
      const config = {
        onUploadProgress: (data) => {
          setfileTotal(data.total)
          setUploadProgress(data.loaded)
        },
      }
      let presignedUrl = ""
      const response = await axios.put(presignedUrl, {
        file: file
      }, config)
      if (response.status === 200) {
        setProgressbar(false);
      } else {
        setProgressbar(false)
        throw new Error('Upload failed');
      }

    } else {
      console.log("file is null");
    }
  }

  return (
    <div className="w-full m-auto bg-gray-900 text-white min-h-screen p-6 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Upload Video For YouTube</h1>
      {/* <UploadPopup /> */}
      {progressbar ? <UploadPopup uploadProgress={uploadProgress} fileTotal={fileTotal} /> : <></>}

      {/* Drag & Drop Video Upload */}
      <div className="w-full max-w-md p-6 border-4 border-dashed border-gray-600 rounded-lg mb-6 relative">
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          accept="video/*"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center justify-center space-y-2">
          <i className="fas fa-cloud-upload-alt text-4xl"></i>
          <p>Drag & drop your video here, or click to select a file</p>
        </div>
      </div>
      {/* Video Player */}
      {videoSrc && (
        <video
          src={videoSrc}
          controls
          className="w-full max-w-md rounded-lg mb-6"
        ></video>
      )}
      {/* Video Title Input */}
      <input
        type="text"
        placeholder="Enter video title..."
        className="w-full max-w-md p-3 bg-gray-800 rounded-lg mb-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 border-2 border-gray-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Video Description Input */}
      <textarea
        placeholder="Enter video description..."
        rows={4}
        className="w-full max-w-md p-3 bg-gray-800 rounded-lg mb-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 border-2 border-gray-700"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Send to Creator Button */}
      <button className="w-full max-w-md h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-xl" onClick={uploadVideo}>
        Send the video to creator
      </button>
    </div>
  );
};

export default UploadPage;
