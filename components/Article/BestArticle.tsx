import React from 'react';
import { getBestArticle } from '@/lib/axios';

const BestArticle = ({ ...article }) => {
  console.log(article);
  return <div>BestArticle</div>;
};

export default BestArticle;
