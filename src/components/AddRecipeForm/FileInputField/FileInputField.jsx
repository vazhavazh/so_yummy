import React, { useRef, useState, useEffect } from 'react';
import { useField } from 'formik';
import { ReactComponent as FileInputImage } from '../images/fileInputImage.svg';
import styles from './FileInputField.module.scss';

const validFileExtensions = {
  image: ['jpg', 'png', 'jpeg', 'webp'],
};
const MAX_FILE_SIZE = 700 * 1024;

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

export const FileInputField = ({ name, reset }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [, , helpers] = useField(name);
  const fileInputRef = useRef(null);
  const validateFile = file => {
    if (!file) {
      return 'Please select a file';
    }

    if (file.size > MAX_FILE_SIZE) {
      return 'File size exceeds the maximum limit';
    }

    if (!isValidFileType(file.name.toLowerCase(), 'image')) {
      return 'Invalid file format';
    }

    return undefined;
  };

  const handleFileInputChange = event => {
    const file = event.currentTarget.files[0];
    helpers.setValue(file);

    const errorMessage = validateFile(file);
    helpers.setError(errorMessage);
    helpers.setTouched(true);

    if (!errorMessage) {
      helpers.setTouched(false);
      const reader = new FileReader();
      reader.onload = e => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl(null);
    }

    if (errorMessage) {
      setTimeout(() => {
        helpers.setTouched(true);
      }, 0);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (reset) {
      setImageUrl(null);
    }
  }, [reset]);

  return (
    <div style={{ position: 'relative' }}>
      <div
        // style={{
        //   width: '279px',
        //   height: '268px',
        //   backgroundColor: '#8BAA36',
        //   cursor: 'pointer',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   borderRadius: '8px',
        // }}
        className={styles.fileInput}
        onClick={handleClick}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="recipe"
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
      {/* {meta.touched && meta.error ? (
        <div
          style={{
            color: 'red',
            fontSize: '0.75rem',
            fontWeight: '400',
            lineHeight: '1.66',

            position: 'absolute',
            bottom: '-18px',
          }}
        >
          {meta.error}
        </div>
      ) : null} */}
    </div>
  );
};
