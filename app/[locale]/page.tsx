import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from './component/TranslationsProvider';
import Header from './component/Header/Header';

interface HomeProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <h1>{t('hero')}</h1>
        <Header />
      </main>
    </TranslationsProvider>
  );
}
