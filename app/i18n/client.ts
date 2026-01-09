"use client";

import { useEffect } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions } from "./settings";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../../public/locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // Deixa detectar automaticamente
    detection: { order: ["path"] },
  });

// Adicionamos o parâmetro 'options' aqui
export function useTranslation(
  lng: string,
  ns: string = "common",
  options: any = {},
) {
  // Repassamos as opções (incluindo o keyPrefix) para o hook original
  const translator = useTranslationOrg(ns, options);
  const { i18n } = translator;

  // Sincroniza o idioma do servidor com o cliente durante a renderização
  if (typeof window === "undefined" && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  return translator;
}
