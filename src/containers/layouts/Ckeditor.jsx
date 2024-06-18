import React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  toolbar: {
    items: [
      "underline",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "T",
      "outdent",
      "indent",
      "|",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
      "code",
      "codeBlock",
      "findAndReplace",
      "fontColor",
      "fontFamily",
      "fontSize",
      "fontBackgroundColor",
      "highlight",
      "horizontalLine",
      "htmlEmbed",
      "imageUpload",
    ],
  },
  Language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};
const Ckeditor = () => {
  return (
    <div className="mt-[148px] relative wrap_container">
      <CKEditor
        editor={Editor}
        data="<i>Hello from CKEditor 5!</i>"
        // onReady={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor is ready to use!", editor);
        // }}
        // onChange={(event) => {
        //   console.log(event);
        // }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
    </div>
  );
};

export default Ckeditor;
