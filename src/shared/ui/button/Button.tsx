import {ButtonHTMLAttributes, FC} from 'react'
import {classNames} from 'shared/lib/classNames'
import cls from './Button.module.scss'
import {Theme} from 'app/providers/themeProvider/lib/ThemeContext'

type ButtonProps = {
  theme?: Theme
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {


  const {children, className, theme, ...otherProps} = props

  return (
    <button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>{children}</button>
  )
}

