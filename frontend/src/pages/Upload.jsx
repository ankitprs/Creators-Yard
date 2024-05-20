import React, { useEffect, useState } from 'react';
import UploadPopup from '../components/UploadPopup';
import { storage } from '../conf/conf'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import apiService from '../gcp/data';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [file, setFile] = useState(null);
  const [videoId, setVideoId] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [progressbar, setProgressbar] = useState(false)
  const [progresspercent, setProgresspercent] = useState(0);
  const { channel_id } = useParams()
  const navigator = useNavigate()


  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setFile(file)
      setVideoSrc(objectURL);
    }
  };

  useEffect(() => {
    setVideoId(uuidv4())
  }, [file])


  const handleSubmit = async (e) => {
    setProgressbar(true)
    console.log("Called Upload");

    if (!file) return;

    const storageRef = ref(storage, `videos/${channel_id}/${videoId}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {

        apiService.createUploadVideo(channel_id, videoId, title, description, "ankitprasad.119@gmail.com").then(() => {
          setProgressbar(false);
          navigator('/dashboard')
        }).catch(() => {
          setProgressbar(false);
        })

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(`downloadURL ${downloadURL}`);
        });
      }
    );
  }

  return (
    <div className="w-full m-auto   min-h-screen p-6 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Upload Video For YouTube</h1>
      {/* <UploadPopup /> */}
      {progressbar ? <UploadPopup progresspercent={progresspercent} /> : <></>}

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
        className="w-full max-w-md p-3 bg-[#0E1117] rounded-lg mb-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 border-2 border-gray-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Video Description Input */}
      <textarea
        placeholder="Enter video description..."
        rows={4}
        className="w-full max-w-md p-3 bg-[#0E1117] rounded-lg mb-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 border-2 border-gray-700"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Send to Creator Button */}
      <button className="w-full max-w-md h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-xl" onClick={handleSubmit}>
        Send the video to creator
      </button>
    </div>
  );
};

export default UploadPage;
