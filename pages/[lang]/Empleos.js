import React, { Component,useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withCart from "containers/cart/withCart";
import Layout from "components/Layout";
import { withApollo } from "lib/apollo/withApollo";
import { locales } from "translations/config";
import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";
import fetchTranslations from "staticUtils/translations/fetchTranslations";
import Link from "components/Link";

const styles = (theme) => ({  
  root: {
      display: "flex",
      justifyContent: "center",      
  },    
});

const Empleos = (props) => {  
  const goToPage = (url) => {    
    window.location.href = url;
  };
  useEffect(() => {
    goToPage("https://empleo.gt/pollobrujo");
  },[]);
  return (    
      <div>
      </div>    
  );
};

/**
 *  Static props for the login
 *
 * @returns {Object} the props
 */
export async function getStaticProps({ params: { lang } }) {
  return {
    props: {
      ...await fetchPrimaryShop(lang),
      ...await fetchTranslations(lang, ["common"])
    }
  };
}

/**
 *  Static paths for the login
 *
 * @returns {Object} thepaths
 */
export async function getStaticPaths() {
  return {
    paths: locales.map((locale) => ({ params: { lang: locale } })),
    fallback: false
  };
}

export default withApollo()(withCart(withStyles(styles, { withTheme: true })(Empleos)));
