import React, { useState } from 'react';

const OneDriveUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const clientID = "c5324e89-f491-47d0-b10e-fe759b71959f";
    const url = `https://graph.microsoft.com/v1.0/me/drive/root/children/${file.name}/content`;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${clientID}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.log('File uploaded successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default OneDriveUpload;
