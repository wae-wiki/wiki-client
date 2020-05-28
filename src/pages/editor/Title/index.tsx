import React, { useState, useCallback } from 'react';
import './style.css';

const Title: React.FC<any> = props => {
  const { title, handleChangeTitle } = props;
  const [articleTitle, setArticleTitle] = useState(title);
  const handleArticleTitleChange = useCallback(e => {
    const _title = e.target.value;
    setArticleTitle(_title);
    handleChangeTitle(_title);
  }, [handleChangeTitle]);
  return (
    <div className="editor-div__title-wrapper">
      <input
        className="editor-input__input"
        placeholder="请输入标题"
        value={articleTitle}
        onChange={handleArticleTitleChange}
      />
    </div>
  )
}

export default Title
