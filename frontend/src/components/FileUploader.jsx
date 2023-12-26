import React, { useState } from 'react';


const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({
    s3Status: 'Not uploaded',
    ytStatus: 'Not uploaded',
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);
  };

  const handleUploadToS3 = () => {
    // Logic to upload the file to S3
    // For demonstration purposes, we'll just update the status
    setUploadStatus((prevStatus) => ({
      ...prevStatus,
      s3Status: 'Uploaded to S3',
    }));
  };

  const handlePushToYT = () => {
    // Logic to push the file to YouTube
    // For demonstration purposes, we'll just update the status
    setUploadStatus((prevStatus) => ({
      ...prevStatus,
      ytStatus: 'Uploaded to YouTube',
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Top Title</h1>
      <div style={{ marginBottom: '20px' }}>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button onClick={handleUploadToS3}>Upload File</button>
      <div>Status: {uploadStatus.s3Status}</div>
      <button onClick={handlePushToYT} style={{ marginTop: '20px' }}>
        Push to YT
      </button>
      <div>Status: {uploadStatus.ytStatus}</div>
    </div>
  );
};

export default FileUploader;
