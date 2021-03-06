import React, { useEffect, useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

import axios from 'axios';

import Title from './Title'
import useEditor from 'hooks/useEditor';
import './style.css';

const Editor: React.FC<any> = props => {
  const {
    data: { title },
    events: { handleChangeTitle }
  } = useEditor();
  const { primaryContent = '', history } = props;
  const [content, setContent] = useState(primaryContent);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isExcuteRequest, setIsExcuteRequest] = useState(false);
  const [editorHeight, setEditorHeight] = useState('100%');
  const [saveContent, setSaveContent] = useState('');

  const handleEditorChange = useCallback(editorContent => {
    setContent(editorContent);
  }, []);

  const handleEditorSave = useCallback(() => {
    const htmlContent = content.toHTML();
    console.log('content', htmlContent);
    setSaveContent(htmlContent);
    setIsExcuteRequest(true);
  }, [content]);

  const handleEditorResize = useCallback(() => {
    setEditorHeight(`${window.innerHeight}px`);
  }, []);

  const handleGoBack = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  useEffect(() => {
    handleEditorResize();
    window.addEventListener('resize', handleEditorResize);
    return () => {
      window.removeEventListener('resize', handleEditorResize);
    }
  }, [handleEditorResize])

  useEffect(() => {
    if (!isExcuteRequest) {
      return () => {}
    }
    axios({
      method: 'POST',
      url: 'http://localhost:8088/editor',
      data: {
        title,
        content: saveContent
      },
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(res => {
      console.log('res', res);
      setIsExcuteRequest(false);
      setIsSuccess(prevState => !prevState);
    })
  }, [isExcuteRequest, saveContent, title]);

  return (
    <div className="editor-wrapper" style={{
      height: editorHeight
    }}>
      <Title
        title={title}
        handleChangeTitle={handleChangeTitle}
      />
      <BraftEditor
        value={content}
        onChange={handleEditorChange}
        onSave={handleEditorSave}
      />
      <div className="editor-btns">
        <Button color="default" onClick={handleGoBack}>返回</Button>
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
