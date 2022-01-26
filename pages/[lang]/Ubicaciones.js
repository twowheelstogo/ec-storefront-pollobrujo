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
import { MapMarker } from "mdi-material-ui";

const styles = (theme) => ({  
  root: {
      display: "flex",
      justifyContent: "center",      
  },  
  root2: {
    display: "flex",
    justifyContent: "center",  
    "&:hover": {  
    textDecoration: "underline",
    cursor: "pointer"
    }
  },
  Titulo: {
    display: "flex",
    justifyContent: "center",        
  }
});

class Ubicaciones extends Component {
  static propTypes = {    
    classes: PropTypes.object,    
    theme: PropTypes.object.isRequired
  };

  state = {};  

  render() {
    const { classes } = this.props;

    const Direcciones = [
        {"Direcciones" :  "6ta. Avenida y 10a. Calle esquina, zona 1"},
        {"Direcciones" : "6ta. Avenida 8-91, zona 9"},
        {"Direcciones" : "Calzada Aguilar Batres y Anillo Periférico, zona 12"},
        {"Direcciones" : "C.C. Gran Vía Roosevelt, zona 7"},
        {"Direcciones" : "Km.14.5 Car. El Salv. Gran Plaza, loc. 1, Puerta Parada"},
        {"Direcciones" : "C.C. Las Puertas, San Lucas"},
        {"Direcciones" : "C.C. Metrosur"},
        {"Direcciones" : "Plaza Kalú"},
        {"Direcciones" : "Zona 15, 2da. Calle 19-70 V.H. 2"},
        {"Direcciones" : "C.C. Unicentro food court"},
        {"Direcciones" : "Calzada Roosevelt, 34-15 zona 11, Utatlán"},
        {"Direcciones" : "C.C. Miraflores food court"},
        {"Direcciones" : "C.C. Portales food court"},
        {"Direcciones" : "C.C. Oakland Mall food court"},
        {"Direcciones" : "C.C. Naranjo Mall food court"},
        {"Direcciones" : "C.C. Pradera Concepción food court"},
        {"Direcciones" : "C.C. Peri Roosevelt food court"},
        {"Direcciones" : "Pointer, map, direction, location icon - Free downloadC.C. Pradera Vistares food court"}
    ];

    return (
      <Layout>       
          <h1 className={classes.Titulo}>Ubicaciones</h1>   
          <hr
          style={{border:"2px solid #000"}}
          />
          <hr
          style={{border:"2px solid #000"}}
          />
           <Grid container 
            columns={{ xs: 10, sm: 7, md: 7, lg: 7 }}
            className={classes.root}
            spacing={2}
          >   
          {
              Object.keys(Direcciones).map( (index) => {
                  return(                      
                    <Grid item key={index}
                    xs={12} sm={12} md={5} lg={5}
                    className={classes.root2}             
                    >                      
                    <p>
                        <span>
                        <MapMarker
                        style={{color: "#ff1800bd"}}
                        />
                        </span>
                        <span>
                            <a>
                                {
                                Direcciones[index]["Direcciones"]
                                }
                            </a>
                        </span>
                        
                    </p>
                    </Grid>                    
                  );
              })
          }                                                       

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

export default withApollo()(withCart(withStyles(styles, { withTheme: true })(Ubicaciones)));
