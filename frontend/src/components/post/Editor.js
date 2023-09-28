import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ post, setPost }) => {
  const handleChange = (html) => {
    console.log(html);
    setPost((prev) => ({ ...prev, contents: html }));
  };

  {
    return (
      <ReactQuill
        style={{ width: "800px", height: "600px", margin: "auto" }}
        onChange={handleChange}
        value={post.contents}
        modules={modules}
        formats={formats}
      />
    );
  }
};
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default Editor;
