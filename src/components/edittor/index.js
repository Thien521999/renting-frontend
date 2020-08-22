import React, { Component } from 'react';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    const { isUpdate, data } = this.props;
    if (isUpdate) {
      this.state = {
        editorState: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(data).contentBlocks))
      };
    } else {
      this.state = {
        editorState: EditorState.createEmpty()
      };
    }
  }

  onChange = editorState => {
    const { setEditorData } = this.props;
    setEditorData(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <div className="EDIT">
          <Editor
            defaultEditorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default EditorConvertToHTML;
