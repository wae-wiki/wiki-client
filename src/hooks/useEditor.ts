import { useState, useCallback } from 'react';

const useEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = useCallback(title => {
    setTitle(title);
  }, [])

  const handleChangeContent = useCallback(content => {
    setContent(content)
  }, []);

  return {
    data: {
      title,
      content
    },
    events: {
      handleChangeContent,
      handleChangeTitle
    }
  }

}

export default useEditor;
