import React, { useContext } from 'react';
import { Controller } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import { PostContext } from '@/context/PostContext';
import { TextField } from '../Form/TextField';
import { CheckBoxButton } from '../Form/CheckBoxButton';
import usePostMutation from '@/hooks/PostMutationHook';

export default function PostForm() {
  const { state } = useContext(PostContext);
  const { onSubmit, handleSubmit, register, errors, control } =
    usePostMutation(state);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-2 gap-4 grow justify-around"
      >
        <TextField
          label="title"
          inputName="title"
          type="text"
          register={register}
          required
          value={state.title}
        />
        {errors.title && <p>This field is required</p>}
        <div className="grid gap-2">
          <label htmlFor="body" className="opacity-50 px-2">
            Body
          </label>
          <Controller
            control={control}
            name="body"
            defaultValue={state.body}
            render={({ field: { onChange, value } }) => (
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                onEditorChange={newValue => {
                  onChange(newValue);
                }}
                //{...register('body', { required: true })}
                init={{
                  id: 'body',
                  textareaName: 'body',
                  height: 400,
                  ui_mode: 'split'
                }}
                //onChange={onChange}
                value={value}
              />
            )}
          />
          {errors.body && <p>This field is required</p>}
        </div>
        <div className="flex flex-col gap-1 grow justify-center">
          <CheckBoxButton
            label="publish"
            initialState={state.published}
            //setFunction={setPublish}
            register={register}
          />
          {state.timestamp && (
            <CheckBoxButton
              label="updateTimestamp"
              initialState={state.timestamp}
              // setFunction={setNewTimestamp}
              register={register}
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
