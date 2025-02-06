import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  AccessibilityHelp,
  Alignment,
  AutoImage,
  Autosave,
  Base64UploadAdapter,
  Bold,
  CloudServices,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  ImageBlock,
  ImageInsert,
  ImageInsertViaUrl,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  ImageCaption,
  ImageCaptionEditing,
  Italic,
  Indent,
  IndentBlock,
  Link,
  List,
  ListProperties,
  Mention,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Style,
  Underline,
  Undo,
  CKBoxImageEdit,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

export default function Ckeditor() {
  const contentRef = useRef(null);
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [editorData, setEditorData] = useState(
    `<div>Ghế armchair thư giãn Aurora</div><div>- Kích thước:&nbsp;740x800x760mm</div><div>- Chất liệu:&nbsp;Gỗ thông / MDF/ Plywood/ Mút/ Vải bọc/ Chân kim loại sơn tĩnh điện màu đen</div><div>- Nệm mút cao cấp, thoáng khí, đàn hồi</div><div>- Vải bọc được chứng nhận thân thiện với thú cưng, khó bị cào rách</div><div>- Màu: Sand + Sepia và&nbsp;Sepia + Mouse</div><div>- Xuất xứ: Việt Nam</div><div>&nbsp;</div><div><p class="figure-center"><img src="//file.hstatic.net/200000796751/file/aurora.1_c4f8db1cea294966bb3147baf51e7bfb_grande.jpg"></p><p>&nbsp;</p><p class="figure-center"><img src="//file.hstatic.net/200000796751/file/aurora.2_8e55c337f9a348fa89e5ba0903b8a75f_grande.jpg"></p><p>&nbsp;</p></div>`
  );

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current
        .querySelectorAll("h1")
        .forEach((h1) => h1.classList.add("category-title"));
      contentRef.current
        .querySelectorAll("h2")
        .forEach((h2) => h2.classList.add("category-title"));
      contentRef.current
        .querySelectorAll("h3")
        .forEach((h3) => h3.classList.add("document-title"));
      contentRef.current
        .querySelectorAll("h4")
        .forEach((h4) => h4.classList.add("document-subtitle"));
      contentRef.current
        .querySelectorAll("figure")
        .forEach((h4) => h4.classList.add("figure-center"));
    }
  }, [editorData]);
  // useEffect(() => {
  //   if (!contentRef.current) return;
  //   const elements = contentRef.current.querySelectorAll("h3, h4");
  //   const extractedHeadings = Array.from(elements).map((el) => ({
  //     id: el.id,
  //     text: el.innerText,
  //     level: el.tagName === "H3" ? 3 : 4,
  //   }));

  //   console.log(extractedHeadings);
  // }, [contentRef]);
  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "selectAll",
        "|",
        "bulletedList",
        "numberedList",
        "multiLevelList",
        "todoList",
        "outdent",
        "indent",
        "|",
        "heading",
        "style",

        "|",
        "insertImage",

        "specialCharacters",
        "link",
        "highlight",
        "|",
        "alignment",
        "|",
        "accessibilityHelp",
      ],
      shouldNotGroupWhenFull: true,
    },
    plugins: [
      AccessibilityHelp,
      Alignment,
      AutoImage,
      Autosave,
      Base64UploadAdapter,
      PictureEditing,
      Bold,
      CloudServices,
      Essentials,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      GeneralHtmlSupport,
      Heading,
      Highlight,
      ImageBlock,
      ImageInsert,
      ImageInsertViaUrl,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      ImageResize,
      ImageCaption,
      ImageCaptionEditing,
      Italic,
      Indent,
      IndentBlock,
      List,
      ListProperties,
      Link,
      Mention,
      Paragraph,
      PasteFromOffice,
      PictureEditing,
      SelectAll,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Style,
      Underline,
      Undo,
    ],
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true,
        },
        {
          name: "figure",
          attributes: true,
          styles: true,
          classes: true,
        },
        {
          name: "img",
          attributes: true,
          styles: true,
          classes: true,
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:alignBlockLeft",
        "imageStyle:block",
        "imageStyle:alignBlockRight",
        "|",
        "resizeImage",
      ],
      styles: {
        options: ["alignBlockLeft", "block", "alignBlockRight"],
      },
    },
    // initialData: '<h2 style="font-size: 14px;">Create detail products🎉</h2>',
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    mention: {
      feeds: [
        {
          marker: "@",
          feed: [
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
          ],
        },
      ],
    },
    placeholder: "Type or paste your content here!",
    style: {
      definitions: [
        {
          name: "Article category",
          element: "h2",
          classes: ["category-title"],
        },
        {
          name: "Title",
          element: "h3",
          classes: ["document-title"],
        },
        {
          name: "Subtitle",
          element: "h4",
          classes: ["document-subtitle"],
        },
        {
          name: "italic",
          element: "i",
          classes: ["italic-style"],
        },
        {
          name: "Info box",
          element: "p",
          classes: ["info-box"],
        },
        {
          name: "Figure (center)",
          element: "figure",
          classes: ["figure-center"],
        },
        {
          name: "Figure (right)",
          element: "figure",
          classes: ["figure-right"],
        },
        {
          name: "Figure (left)",
          element: "figure",
          classes: ["figure-left"],
        },
      ],
    },
  };

  return (
    <div className="blog-wrapper">
      <div className="main-container flex ">
        <div
          className="editor-container editor-container_classic-editor editor-container_include-style"
          ref={editorContainerRef}
        >
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {isLayoutReady && (
                <CKEditor
                  data={editorData}
                  editor={ClassicEditor}
                  config={editorConfig}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: editorData }} ref={contentRef} />
    </div>
  );
}
