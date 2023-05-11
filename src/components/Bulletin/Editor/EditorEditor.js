import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorEditor = ({ value, newNotice, IsEditing, setNewNotice }) => {
  const editorRef = useRef();

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  const formats = [
    //'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  const handleEditChange = async () => {
    if (editorRef.current) {
      setNewNotice(editorRef.current.getEditor().root.innerHTML);
    }
  };
  return (
    <div style={{ minHeight: 'auto' }}>
      <ReactQuill
        ref={editorRef}
        style={{ height: 'auto' }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value || ''}
        onChange={handleEditChange}
      />
    </div>
  );
};

export default EditorEditor;
