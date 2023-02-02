import React, { useState } from 'react';

const OneDriveUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const accessToken = "EwCAA8l6BAAUkj1NuJYtTVha%2bMogk%2bHEiPbQo04AAWBTj/AEtYYwE3IxB10bc6L8J9yBQK%2beLjeVrHub5MpMNXyR2TyEfxCNCcWZPM7fn/aiLnr2r7Yn1YiFQQY8zHVMgiu%2bNGYSjBRjtjd10hE2uWnIYR12sZ1wzoERL8FvJkeocNhJo%2bHW9MG3/1NNKhNJX6KtE/AZ4ydHLVLTiXXPFyigm8XGVsFRWY7G81jEISveUfsZrU1PbeRKnjfhxt2xT1vYL2/dyGLT/NzYQ2H8etrclYujWT7ggtjpL4pd2dOVZJuZUVueALjm%2bN5Kv7DwjjHGfFyS8B5F/6XHzFZe2R0eE/lDqrBYzW6V5fPjqeNKZLbcSE1b1TugY6COKYkDZgAACGmat9sx461uUAK6KlObaTeqxhzWkgP8u0EnrkjjwoJhYElgBfhCk3yFCiqdW8R%2bbZBi6mxmN/WlYOwsZcmks0OtxMzxAr1IUxMVL%2bhBUMVxVbIV1DhypCOnNTKALrexFQFweDeqVA72lCZzUX5itF4bjOSUhzMXqPQAY//5hyAyc3MGlGwXvhVSQNE9U75jYZqkGpRUaD3J2RV3sZJEYvkW3zgArEMPKNEpQixETS/d5P0vwCt4IL3tZoCtYa2BkfYg/T8gvsQ8OyRq6SUesMXZeGyUiLfZ8orAJMiyO27HE30OMF10u36ZfdbfJNoxsUNCeclfVoqW4YALsvE2LFJ3LZZzart1WtE4WxdTgWuzgdcvp8zrQTTVQGHfeiK88Vs1BNW62Z6p7qdl3fYjcJhLMtFPmsfYFDudrqh%2bd0dlm23M%2boJnhV39zdeThVA3yqnZVyYF1iFMZ%2b%2baCuZHLzpbsTQks2CKrerpUqzgxvL0jW3I%2bYy4WGIjFS/asXCUk0oS2tnPP5Aw4dwzvJ4X%2b70XU9iufIDi/E8TQX7TuML13kthcPevIPpReBMICMGlc%2b5EEq0HNAVD6LTBeJjfl8HO%2bVRApIYr3KxumTFGMFuLJu7Z9Qux0rB%2bt/BLvdFEknEhBk1D5XCLPDTh5F1AdVVO%2bPdWLfCeInTtW8njlt/UM8694E%2bV7SlhnhIual6NpAQnSTH%2bCW5tClQZl8%2bSNFuMvnmxTxnwIkTjzQXAwUyXcu1r7FrEpYvBraNlJlE9a6ps7ROwbD7uPjH1BRHezR5uUUQ5DXnW%2bNfalwI%3d";
    const url = `https://graph.microsoft.com/v1.0/me/drive/root/children/${file.name}/content`;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
