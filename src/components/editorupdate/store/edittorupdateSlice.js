import { createSlice } from '@reduxjs/toolkit';
// import { EditorState } from 'draft-js'

const EdtSlice = createSlice({
  name: 'editorupdate',
  initialState: {
    editorState: '',
  },
  reducers: {
    fetch_editorChange: (state, action) => {
      const editorState = action.payload;
      console.log('gọi vào store');
      console.log(editorState);
      // state.editorState = editorState;
      return {
        ...state,
        editorState
      };
    }
  }
});

export const { fetch_editorChange } = EdtSlice.actions;

export default EdtSlice.reducer;
