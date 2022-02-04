import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import BreadcrumbsSwitch from "components/BreadcrumbsSwitch";
import Breadcrumbs from "components/Breadcrumbs";
import { Grid } from "@material-ui/core";
import withCatalogItems from "containers/catalog/withCatalogItems";
import { withApollo } from "lib/apollo/withApollo";

import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Whatsapp as WhatsAppIcon,
  Twitter,
} from "mdi-material-ui";

const styles = (theme) => ({
  root: {
    minHeight: "100vh",    
    backgroundColor: theme.palette.background.theme_,    
    color: theme.palette.colors.TextTheme,
  },
  main: {
    flex: "1 1 auto",
    maxWidth: theme.layout.mainContentMaxWidth,
    marginLeft: "auto",
    marginRight: "auto"
  },
  article: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0)
    }
  }, 
  Dividers:{
    border: '10px solid transparent'
     },
     breadcrumbGrid: {		      
      padding: theme.spacing(1),  
      ["@media (min-width:960px)"]: {
        marginLeft: theme.spacing(5),
      },
      ["@media (max-width:959px)"]: {
        marginLeft: theme.spacing(0)
      },    
      
      ["@media (min-width:600px)"]: {
        marginBottom: theme.spacing(0.5),
          marginTop: theme.spacing(0.5),  
      },
      ["@media (max-width:959px)"]: {      
            marginTop: "-1px",  
      },          
      },
    page: {
      backgroundColor: "#202124",
      ["@media (min-width:600px)"]: {
        height: '43px',   
      },
      ["@media (max-width:599px)"]: {
        height: '33px',   
      },    		
      },      
});

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    viewer: PropTypes.object,
    routerLabel: PropTypes.string,
    router: PropTypes.object,
    routerType: PropTypes.number,
    catalogItems: PropTypes.array,
    product: PropTypes.object
  };

  static defaultProps = {
    classes: {},
  };

  productList_ = (product_) => {
    let tmpList = [];
    Object.keys(product_).map( (index) => {
      let items = product_[index];
      tmpList.push(
        {name: items["title"], slug: items['slug'], price: items["pricing"][0]["displayPrice"],photo: items['primaryImage']['URLs']['small'],tagsID:items['tagIds'][0] } 
      )
    });       
    
    return tmpList;
  }

  render() {
    const {
      classes,
      children,
      viewer,
      shop,
      components: { NavigationHeader },
      components: { CustomFooter },
      withHero,      
      catalogItems,
      routerLabel,
      router,
      routerType,
      product           
    } = this.props;     
        

    const Logo = {
      urlLogo:
        "https://firebasestorage.googleapis.com/v0/b/twg-vehicle-dashboard.appspot.com/o/Iconos%2Flogo.png?alt=media&token=585118cc-e2a5-43b2-be99-582ba654fdff",     
    };

    const Descripcion = {
      urlLogo: Logo.urlLogo,
      Mensaje1: "Contáctenos",
      Mensaje2: "Encuétrenos",
      ContenidoMensaje1: [
        "+502 2320 3434",
        "Calle 19, Boulevard Vista Hermosa II - Zona 15 - Guatemala",
        "Lunes- Sábado: 8am - 8pm",
        "Domingo: 10am - 8pm",
      ],
      ContenidoMensaje2: [
        { Titulo: "Sobre Nosotros", ruta: "/Nosotros" },
        { Titulo: "Extra", ruta: "/Ubicaciones" },
      ],
      NombreEmpresa: "Pollo Brujo",
      RedesSociales: [
        { Icono: <InstagramIcon />, ruta: "https://www.instagram.com/pollobrujoguatemala/" },
        { Icono: <FacebookIcon />, ruta: "https://www.facebook.com/pollobrujoguatemala" },
        { Icono: <Twitter />, ruta: "https://twitter.com/pollobrujogt" },
      ],      
    };
   

    let products = this.productList_((this.props.catalogItems || []).map((items) => items.node.product)); 
    console.log(this.props.catalogItems);

    return (
      <React.Fragment>
        <div className={classes.root}>
          {/* <Header shop={shop} viewer={viewer} /> */}          
          <NavigationHeader
            catalogItems={products}
            withHero={withHero}
            shop={shop}
            viewer={viewer}
            Logo={Logo}                                    
            MetodoBusqueda={(Busqueda) => {
              alert(Busqueda);
            }}
            ImageCoverUrl={
              "https://firebasestorage.googleapis.com/v0/b/twg-vehicle-dashboard.appspot.com/o/Iconos%2FBanner-de-inicio-pollo-sabor-unico-a-la-parrilla-1.jpg?alt=media&token=c5a89313-1e99-4f9d-ba04-a8c9be3763e3"
            }
            MessageCover={"SABOR ÚNICO A LA PARILLA"}              
          />                      

        {
          <>
          {routerType === 2 ? 
          <div className = { classes.page }>
          <Grid container> 
          <Grid item xs={12} className={classes.breadcrumbGrid}>
          <Breadcrumbs isPDP tagId={routerLabel} product={product} />
          </Grid>
          </Grid>
          </div>
           :
          <BreadcrumbsSwitch routerLabel={routerLabel} router={router} routerType={routerType}/>}
          </>
          }
        <hr className={classes.Dividers}/>                    

          <main className={classes.main}>
            <article className={classes.article}>{children}</article>
          </main>
          <CustomFooter Descripcion={Descripcion} />
        </div>
      </React.Fragment>
    );
  }
}

export default withApollo()(withComponents(withCatalogItems(withStyles(styles)(Layout))));
