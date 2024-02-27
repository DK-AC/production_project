import { Button, ButtonTheme } from 'shared/ui/button/Button';
import cls from './loginForm.module.scss';
/* eslint-disable i18next/no-literal-string */

type Props = {}

export const LoginForm = (props: Props) => (
  <form className={cls.loginForm}>
    <label htmlFor="email" className={cls.label}>
      Email
      <input className={cls.input} type="text" id="email" />
    </label>
    <label className={cls.label} htmlFor="password">
      Password
      <input className={cls.input} type="password" id="password" />
    </label>
    <Button className={cls.button} type="submit" theme={ButtonTheme.OUTLINE}>
      Login
    </Button>
  </form>
);
