import { BaseLayout } from "components/layout/BaseLayout";
import { getServerSideTranslations } from "configs/language/server";
import { withHOCs } from "hocs/withHOCs";
import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { NextPage, GetStaticProps } from "next";

const Jobs: NextPage = () => {
  return <div>{"Vagas de Emprego"}</div>;
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
      pageName: "jobs",

    },
  };
};

export default withHOCs(withTheme, withTranslations)(Jobs);