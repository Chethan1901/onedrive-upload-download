import React, { useState } from "react";

const OneDriveDownload = () => {
  const [fileId, setFileId] = useState(null);
  const [photo, setPhoto] = useState([]);

  const handleFilePick = async () => {
    const clientID = "c5324e89-f491-47d0-b10e-fe759b71959f";

    const url = `https://graph.microsoft.com/v1.0/me/drive/root/children`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${clientID}`,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const files = await response.json();
      setPhoto(files.value.photo);
      setFileId(files.value[0].id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = async () => {
    if (!fileId) return;

    const clientID = "c5324e89-f491-47d0-b10e-fe759b71959f";

    const url = `https://graph.microsoft.com/v1.0/me/drive/items/${fileId}/content`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${clientID}`,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `file.jpg`;
      link.click();
    } catch (error) {
      console.error(error);
    }
  };
  console.log(".........", photo);
  return (
    <>
      <div>
        <p></p>
        <button onClick={handleFilePick}>Pick file</button>
        <button onClick={handleDownload}>Download</button>
        <p></p>
      </div>
      <div>
        {" "}
        {photo.map((ele, id) => {
          return (
            <p>
              ${id}
              {ele.webUrl}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default OneDriveDownload;
