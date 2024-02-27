import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'widgets/loader';
import cls from './PageLoader.module.scss';

export const PageLoader = () => (
  <div className={classNames(cls.pageLoader)}>
    <Loader />
  </div>
);
