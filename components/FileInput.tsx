import React, { useRef, useState } from "react";
import Image from "next/image";
import Plus from "@/assets/images/icons/ic_plus.svg";
import XIcon from "@/assets/images/icons/ic_x.svg";

interface FileInputProps<T> {
  name: keyof T;
  value: string;
  onChange: (name: keyof T, value: string | null) => void;
}

const FileInput = <T,>({ name, value, onChange }: FileInputProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
      onChange(name, null);
    } else {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onChange(name, imageUrl);
    }
  };

  const handleClearClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      onChange(name, null);
      setPreview(null);
    }
  };

  return (
    <div className='flex items-start space-x-4 mb-4'>
      <label
        htmlFor={name as string}
        className='w-[162px] h-[162px] lg:w-72 lg:h-72 flex flex-col items-center justify-center bg-gray-100 rounded-xl cursor-pointer'
        style={{ rowGap: "12px" }}
      >
        <Image src={Plus} alt='PlusIcon' width={48} height={48} />
        <span className='text-gray-400 text-base font-normal'>이미지 등록</span>
      </label>
      <input
        type='file'
        id={name as string}
        onChange={handleChange}
        ref={inputRef}
        className='hidden'
      />
      {preview && (
        <div className='relative'>
          <Image
            className='w-[162px] h-[162px] lg:w-72 lg:h-72 border rounded-xl object-cover'
            src={preview}
            alt='이미지 미리보기'
            width={288}
            height={288}
          />
          <button
            className='absolute top-3 right-3 w-5 h-5 rounded-full bg-gray-400 text-white flex items-center justify-center cursor-pointer'
            onClick={handleClearClick}
          >
            <Image src={XIcon} alt='ClearIcon' width={8} height={8} />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileInput;
