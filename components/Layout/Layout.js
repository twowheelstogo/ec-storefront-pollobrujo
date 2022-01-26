import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
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
  }
});

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    viewer: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    const {
      classes,
      children,
      viewer,
      shop,
      components: { NavigationHeader },
      components: { CustomFooter },
      withHero
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

    return (
      <React.Fragment>
        <div className={classes.root}>
          {/* <Header shop={shop} viewer={viewer} /> */}          
          <NavigationHeader
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

          <main className={classes.main}>
            <article className={classes.article}>{children}</article>
          </main>
          <CustomFooter Descripcion={Descripcion} />
        </div>
      </React.Fragment>
    );
  }
}

export default withComponents(withStyles(styles)(Layout));
