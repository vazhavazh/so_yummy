// import React, { useRef } from 'react';
// import { useField } from 'formik';
// import { ReactComponent as FileInputImage } from '../images/fileInputImage.svg';

// export const FileUploadField = ({ name }) => {
//   const fileInputRef = useRef(null);
//   const [, meta, helpers] = useField(name);

//   const handleFileInputChange = event => {
//     const file = event.currentTarget.files[0];
//     helpers.setValue(file);
//   };

//   const handleClick = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div
//       style={{
//         width: '279px',
//         height: '268px',
//         backgroundColor: '#8BAA36',
//         cursor: 'pointer',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//       onClick={handleClick}
//     >
//       <input
//         type="file"
//         id={name}
//         name={name}
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         onChange={handleFileInputChange}
//       />
//       <FileInputImage width="64px" height="64px" />
//       {meta.touched && meta.error ? (
//         <div style={{ color: 'red' }}>{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// import React, { useRef, useState } from 'react';
// import { useField } from 'formik';
// import { ReactComponent as FileInputImage } from '../images/fileInputImage.svg';

// const validateFile = file => {
//   const supportedFormats = ['image/jpeg', 'image/png'];

//   if (!file) {
//     return 'Please select a file';
//   }

//   if (!supportedFormats.includes(file.type)) {
//     return 'Invalid file format';
//   }

//   return undefined;
// };

// export const FileUploadField = ({ name }) => {
//   const [imageUrl, setImageUrl] = useState(null);
//   const [field, meta, helpers] = useField(name);
//   const fileInputRef = useRef(null);

//   const handleFileInputChange = event => {
//     const file = event.currentTarget.files[0];
//     helpers.setValue(file);

//     const errorMessage = validateFile(file);
//     helpers.setError(errorMessage);
//     helpers.setTouched(true); // Set the field as touched to trigger validation

//     if (!errorMessage) {
//       helpers.setTouched(false); // Set touched as false to hide the error message immediately
//       const reader = new FileReader();
//       reader.onload = e => {
//         setImageUrl(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setImageUrl(null);
//     }
//   };

//   const handleClick = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div
//       style={{
//         position: 'relative',
//       }}
//     >
//       <div
//         style={{
//           width: '279px',
//           height: '268px',
//           backgroundColor: '#8BAA36',
//           cursor: 'pointer',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//         onClick={handleClick}
//       >
//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt="Uploaded Image"
//             style={{ maxWidth: '100%', maxHeight: '100%' }}
//           />
//         ) : (
//           <FileInputImage width="64px" height="64px" />
//         )}
//         <input
//           type="file"
//           id={name}
//           name={name}
//           ref={fileInputRef}
//           style={{ display: 'none' }}
//           onChange={handleFileInputChange}
//         />
//       </div>
//       {meta.touched && meta.error ? (
//         <div style={{ color: 'red', position: 'absolute', bottom: '0' }}>
//           {meta.error}
//         </div>
//       ) : null}
//     </div>
//   );
// };

import React, { useRef, useState } from 'react';
import { useField } from 'formik';
import { ReactComponent as FileInputImage } from '../images/fileInputImage.svg';

const validFileExtensions = {
  image: ['jpg', 'png', 'jpeg', 'webp'],
};
const MAX_FILE_SIZE = 700 * 1024; // Maximum file size in bytes (100KB)

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

export const FileUploadField = ({ name }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [field, meta, helpers] = useField(name);
  const fileInputRef = useRef(null);

  const validateFile = file => {
    if (!file) {
      return 'Please select a file';
    }

    if (!isValidFileType(file.name.toLowerCase(), 'image')) {
      return 'Invalid file format';
    }

    if (file.size > MAX_FILE_SIZE) {
      return 'File size exceeds the maximum limit';
    }

    return undefined;
  };

  const handleFileInputChange = event => {
    const file = event.currentTarget.files[0];
    helpers.setValue(file);

    const errorMessage = validateFile(file);
    helpers.setError(errorMessage);
    helpers.setTouched(true); // Set the field as touched to trigger validation

    if (!errorMessage) {
      helpers.setTouched(false); // Set touched as false to hide the error message immediately
      const reader = new FileReader();
      reader.onload = e => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl(null);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: '279px',
          height: '268px',
          backgroundColor: '#8BAA36',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={handleClick}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Uploaded Image"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : (
          <FileInputImage width="64px" height="64px" />
        )}
        <input
          type="file"
          id={name}
          name={name}
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
      </div>
      {meta.touched && meta.error ? (
        <div style={{ color: 'red', position: 'absolute', bottom: '0' }}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
