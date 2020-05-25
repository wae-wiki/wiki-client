import React, { useEffect, useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

import useEditor from 'hooks/useEditor';
import './style.css';

const Editor: React.FC<any> = props => {
  useEditor();
  const { primaryContent = '' } = props;
  const [content, setContent] = useState(primaryContent);
  const [isSuccess, setIsSuccess] = useState(false);
  const [editorHeight, setEditorHeight] = useState('100%');

  const handleEditorChange = useCallback(editorContent => {
    setContent(editorContent);
  }, []);

  const handleEditorSave = useCallback(() => {
    setIsSuccess(prevState => !prevState);
  }, []);

  const handleEditorResize = useCallback(() => {
    setEditorHeight(`${window.innerHeight}px`);
  }, []);

  useEffect(() => {
    handleEditorResize();
    window.addEventListener('resize', handleEditorResize);
    return () => {
      window.removeEventListener('resize', handleEditorResize);
    }
  }, [handleEditorResize])

  return (
    <div className="editor-wrapper" style={{
      height: editorHeight
    }}>
      <BraftEditor
        value={content}
        onChange={handleEditorChange}
        onSave={handleEditorSave}
      />
      <div className="editor-btns">
        <Button color="default">返回</Button>
        <Button color="primary" onClick={handleEditorSave}>保存</Button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={isSuccess}
        autoHideDuration={1000}
        message="保存成功"
        onClose={() => setIsSuccess(prevState => !prevState)}
      />
    </div>
  );
};

export default Editor;
