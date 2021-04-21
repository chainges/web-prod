import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";

const Errors = ({ errors }) => (
  <Layout>
    <GraphQLErrorList errors={errors} />
  </Layout>
);

export default Errors;
