import { convertFileToUrl } from '@/lib/utils';
import React, { Dispatch, SetStateAction, useCallback } from 'react'

type FileUploadProps = {
  imageUrl: string;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export function FileUploader({ imageUrl, onFieldChange, setFiles}: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
    onFieldChange(convertFileToUrl(acceptedFiles[0]))
  }, [])
}
