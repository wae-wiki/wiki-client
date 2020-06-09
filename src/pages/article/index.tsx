import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from 'components/Layout';

import './style.css';

const Article: React.FC<any> = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:8088/editor'
    }).then((res: any) => {
      // TODO 请求状态判定
      const { data } = res;
      setList(data);
    });
  }, []);

  return (
    <Layout>
      <div className="article-wrapper">
        {
          list.map((item: any) => {
            return (
              <div className="article-item" key={item._id}>
                <div className="article__author-panel">
                  <span>author</span>
                  <h4 className="article-title">{item.title}</h4>
                </div>
                <div className="article__content-panel">
                  content card
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  );
};

export default Article;
