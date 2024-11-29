import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export const ImageInput = ({ image, onChange }) => {
  const [previewImage, setPreviewImage] = useState(image);
  const onInputChange = (e) => {
    const image = e.target.files[0];
    setPreviewImage(URL.createObjectURL(image));
    onChange(image);
  };

  return (
    <div className="flex gap-4">
      <Input type="file" onChange={onInputChange} />
      {previewImage ? (
        <img
          src={previewImage}
          alt="Preview"
          className="aspect-square w-12 rounded-md bg-accent"
        />
      ) : null}
    </div>
  );
};
