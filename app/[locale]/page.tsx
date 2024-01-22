import React from 'react';
import initTranslations from '@/app/i18n';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }: HomeProps) {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <main>
      <h1>{t('hero')}</h1>
    </main>
  );
}
