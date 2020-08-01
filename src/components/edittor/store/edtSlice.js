import { createSlice } from '@reduxjs/toolkit';
//import { EditorState } from 'draft-js'

const EdtSlice = createSlice({
    name: 'edtState',
    initialState: {
        editorState:"",
    },
    reducers: {
        fetch_editorChange:(state,action)=>{
            
            const editorState=action.payload
            //console.log(editorState + "sjhdfg")
            state.editorState=editorState
        }
    }
})

export const {fetch_editorChange } = EdtSlice.actions;

export default EdtSlice.reducer;