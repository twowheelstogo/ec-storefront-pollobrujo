import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withCart from "containers/cart/withCart";
import Layout from "components/Layout";
import { withApollo } from "lib/apollo/withApollo";
import Grid from "@material-ui/core/Grid";
import { locales } from "translations/config";
import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";
import fetchTranslations from "staticUtils/translations/fetchTranslations";
import SlideHero from "components/SlideHero";

const styles = (theme) => ({  
  root: {
      display: "flex",
      justifyContent: "center",      
  },  
  ContenedorPrincipal:{
    height: "450px",
    maxWidth: "100%",
   backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/twg-vehicle-dashboard.appspot.com/o/Iconos%2Ffoto-nosotros-en-pa%CC%81gina-web-1.jpg?alt=media&token=01f1c86e-fa50-4ce3-8cd6-9d46f1081529)",       
   backgroundRepeat: "no-repeat, no-repeat",
   backgroundSize:"cover",
   backgroundPosition: "center center"
  },  
});

class Nosotros extends Component {
  static propTypes = {    
    classes: PropTypes.object,    
    theme: PropTypes.object.isRequired
  };

  state = {};  

  render() {
    const { classes } = this.props;
    return (
      <Layout>          

          <Grid container columns={{sm:12,sm:12,md:12,lg:12}}
          className={classes.ContenedorPrincipal}
          >              
          </Grid>                

          <hr
          style={{border:"2px solid #000"}}
          />

        <hr
          style={{border:"2px solid #000"}}
          />

          <Grid container columns={{sm:12,sm:12,md:12,lg:12}}
            className={classes.root}
          >      
          
              <Grid item 
              xs={11} sm={6} md={6} lg={5}
              className={classes.root}
              >               
              <img
              src={"https://pollobrujo.com.gt/wp-content/uploads/2020/05/nosotros1b.png"}
              style={{width:"100%",height:"150px"}}
              />
              </Grid>

              <Grid item 
              xs={12} sm={12} md={12} lg={12}              
              >     
            <hr
            style={{border:"2px solid #000"}}
            />

            <hr
          style={{border:"2px solid #000"}}
            />
              </Grid>       
            

              <Grid item 
              xs={11} sm={6} md={6} lg={5}
              className={classes.root}
              >               
              <img
              src={"https://pollobrujo.com.gt/wp-content/uploads/2020/05/nosotros2b.png"}
              style={{width:"100%",height:"200px"}}
              />
              </Grid>
              

          </Grid>
      </Layout>
    );
  }
}

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

export default withApollo()(withCart(withStyles(styles, { withTheme: true })(Nosotros)));
