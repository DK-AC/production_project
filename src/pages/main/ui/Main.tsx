import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';
import { LoginModal } from 'features/authByUsername/ui/loginModal/loginModal';

function Main() {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Main page')}
      <LoginModal />
    </div>
  );
}

export default Main;
