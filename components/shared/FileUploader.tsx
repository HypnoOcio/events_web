import { convertFileToUrl } from '@/lib/utils';
import React, { Dispatch, SetStateAction, useCallback } from 'react'
import { FileWithPath } from 'file-selector';
import { UploadButton, UploadDropzone } from '@/lib/uploadthing';

type FileUploadProps = {
  imageUrl: string;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export function FileUploader({ imageUrl, onFieldChange, setFiles}: FileUploadProps) {
// export function FileUploader({ imageUrl, setFiles }: FileUploadProps) {
  console.log('in file uploader component');

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    // onFieldChange();
    convertFileToUrl(acceptedFiles[0])
  }, []);

  return (
      <UploadDropzone className='rounded-2xl'
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
          onUploadBegin={(name) => {
            // Do something once upload begins
            console.log("Uploading: ", name);
          }}
        />
  );
}


/* <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
          onUploadBegin={(name) => {
            // Do something once upload begins
            console.log("Uploading: ", name);
          }}
        />
      </div> */