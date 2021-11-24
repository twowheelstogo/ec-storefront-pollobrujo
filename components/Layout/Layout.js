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
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  main: {
    flex: "1 1 auto",
    maxWidth: theme.layout.mainContentMaxWidth,
    marginLeft: "auto",
    marginRight: "auto",
    //backgroundColor: "white",
  },
  article: {
    padding: theme.spacing(3),
  },
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
      // shop,
      // viewer,
      components: { NavigationHeader },
      components: { CustomFooter },
    } = this.props;

    const Logo = {
      urlLogo:
        "https://firebasestorage.googleapis.com/v0/b/twg-vehicle-dashboard.appspot.com/o/Iconos%2Flogo.png?alt=media&token=585118cc-e2a5-43b2-be99-582ba654fdff",
      WidthDesktop: "111px",
      WidthMobile: "111px",
      HeightDesktop: "71px",
      HeightMobile: "71px",
    };

    const Descripcion = {
      urlLogo: Logo.urlLogo,
      Mensaje1: "Contáctenos",
      Mensaje2: "Encuétrenos",
      ContenidoMensaje1: [
        "+502 41427517",
        "20 calle 24-26 bodega 15 zona 10 Ofibodegas Pradera",
        "Lunes- Sábado: 8am - 8pm",
        "Domingo: 10am - 8pm",
      ],
      ContenidoMensaje2: [
        { Titulo: "Sobre Nosotros", ruta: "/sobre" },
        { Titulo: "Extra", ruta: "/sobre" },
      ],
      NombreEmpresa: "Pollo Brujo",
      RedesSociales: [
        { Icono: <InstagramIcon />, ruta: "https://www.instagram.com/pollobrujoguatemala/" },
        { Icono: <FacebookIcon />, ruta: "https://www.facebook.com/pollobrujoguatemala" },
        { Icono: <Twitter />, ruta: "https://twitter.com/pollobrujogt" },
      ],
      Colores: { Fondo: "#000000", Letra: "#FFFFFF" },
    };
    return (
      <React.Fragment>
        <div className={classes.root}>
          {/* <Header shop={shop} viewer={viewer} /> */}

          <NavigationHeader
            Logo={Logo}
            ColoresBusqueda={["#000000", "#dcdcdc"]}
            ColorIcono={"#FFFFFF"}
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
