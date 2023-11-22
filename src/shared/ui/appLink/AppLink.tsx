import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type Props = {
  theme?: AppLinkTheme
} & LinkProps

export const AppLink: FC<Props> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
  } = props
  return (
    <Link to={to} className={classNames(cls.link, {}, [className, cls[theme]])}>
      {children}
    </Link>
  )
}
