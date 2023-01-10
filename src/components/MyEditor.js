import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MyComponent() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <div className="ti-desc">Description de la noticia</div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
}
