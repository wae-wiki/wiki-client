import React, { useState, useEffect } from 'react';
import moment from 'moment';
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
          list?.map((item: any) => {
            const { _id, title, modifiedTime, author } = item;
            return (
              <div className="article-item" key={_id}>
                <div className="article__author-panel">
                    <h4 className="article-title">
                      <span className="title">{title}</span>
                      <span className="article-author">--by {author}</span>
                    </h4>
                    <span>{moment(modifiedTime).utc().format('YYYY-MM-DD HH:mm:ss')}</span>
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
