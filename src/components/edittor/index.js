import React, { Component } from 'react';
//import { EditorState, convertToRaw } from 'draft-js';
// import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
//import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class EditorConvertToHTML extends Component {
    // state = {
    //     editorState: EditorState.createEmpty(),
    // }

    // onEditorStateChange = (editorState) => {
    //     console.log(editorState)
    //     this.setState({
    //         editorState,
    //     });
    // };
    render() {
        // const { editorState } = this.state;
        return (
            <div>
                <div className="EDIT">
                    <Editor
                        
                        // editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        //onEditorStateChange={this.onEditorStateChange}
                    />
                </div>
                <div>
                
                </div>
                    
                {/* <textarea
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                /> */}
            </div>
        );
    }
}
export default EditorConvertToHTML;