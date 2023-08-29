import React, { useContext, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { PostContext } from '@/context/PostContext';
import TextField from '../Form/TextField';
import CheckBoxButton from '../Form/CheckBoxButton';
import usePostMutation from '@/hooks/PostMutationHook';

export default function PostForm() {
  const { state } = useContext(PostContext);
  const {
    title,
    setTitle,
    body,
    setBody,
    publish,
    setPublish,
    newTimestamp,
    setNewTimestamp,
    handleSubmit
  } = usePostMutation(state);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-2 gap-4 grow justify-around"
      >
        <TextField
          inputName="Title"
          type="text"
          setFunction={setTitle}
          value={title}
        />
        <div className="grid gap-2">
          <label htmlFor="body" className="opacity-50 px-2">
            Body
          </label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
            onEditorChange={newValue => {
              setBody(newValue);
            }}
            init={{
              id: 'body',
              textareaName: 'body',
              height: 400,
              ui_mode: 'split'
            }}
            value={body}
          />
        </div>
        <div className="flex flex-col gap-1 grow justify-center">
          <CheckBoxButton
            name="PUBLISH"
            initialState={publish}
            setFunction={setPublish}
            complexName={true}
          />
          {state.timestamp && (
            <CheckBoxButton
              name="UPDATE TIMESTAMP"
              initialState={newTimestamp}
              setFunction={setNewTimestamp}
              complexName={true}
            />
          )}
        </div>
        <div className="flex justify-center p-2">
          <button
            type="submit"
            className="font-bold text-sm text-beige border border-beige px-4 py-1 mx-2 rounded-full hover:bg-beige hover:text-black-brown hover:border-light-beige transition-all"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
