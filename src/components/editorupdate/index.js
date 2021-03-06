import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
// import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { connect } from 'react-redux';
import { fetch_editorChange } from './store/edittorupdateSlice';

class EditorUpdate extends Component {
    onEditorStateChange = editorState => {
      const a = (String(draftToHtml(convertToRaw(editorState.getCurrentContent()))));
      document.getElementById('hahah').innerHTML = a;
      this.props.EditorChange(a);
    };

    render() {
      // const paragraph = htmlToDraft((this.props.editorState));
      // console.log(paragraph);
      return (
        <div>
          <div className="EDIT">
            <Editor
              initialContentState={this.props.editorState}
              // defaultEditorState={paragraph}

              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
          <div />

          {/* <textarea
            disabled
            value={this.props.editorState}
          /> */}
          <div id="hahah" />
        </div>
      );
    }
}
const mapStateToProps = state => ({
  editorState: state.editorupdate.editorState
});

const mapDispatchToProps = dispatch => ({
  EditorChange: editorState => {
    dispatch(fetch_editorChange(editorState));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(EditorUpdate);
