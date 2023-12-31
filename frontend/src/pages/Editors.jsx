import React, { useEffect, useState } from 'react';
import EditorCard from '../components/EditorCard';
import { FaPlus } from 'react-icons/fa';
import apiService from '../gcp/data';
import { useNavigate, useParams } from 'react-router-dom';
import AddEditor from '../components/AddEditor'



const EditorList = () => {
  const channel_id = useParams()
  const [editors, setEditors] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (bool_val, email_id) => {
    setOpen(bool_val)
    apiService.addEditors(channel_id, email_id)
  };

  useEffect(() => {
    apiService.getEditorsList("", "").then((edits) => {
      setEditors(edits)
    })
  }, [])

  const handleAddEditor = () => {
    const newEditor = `Editor ${editors.length + 1}`;
    setEditors([...editors, newEditor]);
  };

  const handleRemoveEditor = (editor_email_id) => {
    const updatedEditors = editors.filter((_, i) => i !== editor_email_id);
    setEditors(updatedEditors);
  };

  return (
    <div className="container mx-auto p-8">
      <button
        className="flex bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mb-4 rounded"
        onClick={() => setOpen(true)}
      >
        <FaPlus className="mr-2 m-1" />
        Add Editor
      </button>
      {open ? <AddEditor handleOpen={handleOpen} /> : <></>}

      {editors.map((editor, index) => (
        <EditorCard
          key={index}
          name={editor.email_id}
          icon_url={editor.icon_url}
          onRemove={() => handleRemoveEditor(editor.email_id)}
        />
      ))}
    </div>
  );
};

export default EditorList;
