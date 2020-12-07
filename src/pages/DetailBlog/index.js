import React from 'react';
import { RegisterBg } from '../../assets';
import { Gap, Link } from '../../components/atoms';
import './detailBlog.scss';
import { useHistory } from 'react-router-dom';

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p clasName="blog-author">Author - Date Post</p>
      <p className="blog-body">Content Blog</p>
      <Gap height={20} />
      <Link title="Kembali Ke Home" onClick={() => history.push('/')} />
    </div>
  );
};

export default DetailBlog;
