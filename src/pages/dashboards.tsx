import { DashboardsPage } from "components/contents/Dashboards/Dashboard";
import { getServerSideTranslations } from "configs/language/server";
import { withHOCs } from "hocs/withHOCs";
import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { NextPage, GetStaticProps } from "next";

const Dashboards: NextPage = () => {
  return <DashboardsPage />;
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
      defaultLayout: true,
    },
  };
};

export default withHOCs(withTheme, withTranslations)(Dashboards);
