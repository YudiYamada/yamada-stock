import { getTranslation } from "@/app/i18n";

const SalesPage = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common", {
    keyPrefix: "pages.sales",
  });

  return (
    <>
      <h2>{t("title")}</h2>
      <p>{t("paragraph")}</p>
    </>
  );
};

export default SalesPage;
