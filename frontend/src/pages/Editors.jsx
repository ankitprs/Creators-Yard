import React, { useEffect, useState } from 'react';
import EditorCard from '../components/EditorCard';
import { FaPlus } from 'react-icons/fa';
import apiService from '../gcp/data';
import { useNavigate, useParams } from 'react-router-dom';
import AddEditor from '../components/AddEditor'



const EditorList = () => {
  const { channel_id } = useParams()
  const [editors, setEditors] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (bool_val, email_id) => {
    setOpen(bool_val)
    apiService.addEditors(channel_id, email_id)
    handleAddEditor(email_id)
  };

  useEffect(() => {
    apiService.getEditorsList(channel_id).then((edits) => {
      if (!edits || !edits[0]) return
      setEditors(edits[0].editors_email_id)
    })
  }, [])

  const handleAddEditor = (email_id) => {
    setEditors([...editors, email_id]);
  };

  const handleRemoveEditor = (editor_email_id) => {
    apiService.removeEditors(channel_id, editor_email_id).then(() => {
      console.log("Successfull");
    }).catch((err) => {
      console.log(err);
    })
    const updatedEditors = editors.filter((val) => val !== editor_email_id);
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

      {editors.map((editor_email_id, index) => (
        <EditorCard
          key={index}
          name={editor_email_id}
          icon_url={editor_email_id}
          onRemove={() => handleRemoveEditor(editor_email_id)}
        />
      ))}
    </div>
  );
};

export default EditorList;
