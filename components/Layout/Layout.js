import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from "components/Footer";
import { withComponents } from "@reactioncommerce/components-context";
import { Silverware, Home } from "mdi-material-ui";

const styles = (theme) => ({
  root: {
    minHeight: "100vh",
    color: "white",
    backgroundColor: "#000000",
    //color: "white",
  },
  main: {
    flex: "1 1 auto",
    maxWidth: theme.layout.mainContentMaxWidth,
    marginLeft: "auto",
    marginRight: "auto",
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

    const Descripcion = {
      imageUrl: "https://pollobrujo.com.gt/wp-content/uploads/2019/11/logo.png",
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
    };
    return (
      <React.Fragment>
        <div className={classes.root}>
          {/* <Header shop={shop} viewer={viewer} /> */}

          <NavigationHeader
            urlLogo={"https://pollobrujo.com.gt/wp-content/uploads/2019/11/logo.png"}
            ColoresBusqueda={["#000000", "#dcdcdc"]}
            ColorIcono={"#FFFFFF"}
            MetodoBusqueda={(Busqueda) => {
              alert(Busqueda);
            }}
            ImageCoverUrl={
              "https://pollobrujo.com.gt/wp-content/uploads/2020/09/Banner-de-inicio-pollo-sabor-unico-a-la-parrilla-1.jpg"
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
