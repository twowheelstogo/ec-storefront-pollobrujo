import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from "components/Footer";
import { withComponents } from "@reactioncommerce/components-context";
import { Silverware, Home } from "mdi-material-ui";

const styles = (theme) => ({
  root: {
    minHeight: "100vh",
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
    } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          {/* <Header shop={shop} viewer={viewer} /> */}

          <NavigationHeader
            urlLogo={"https://pollobrujo.com.gt/wp-content/uploads/2019/11/logo.png"}
            urlLogoSize={["150px", "100px"]}
            ColoresBusqueda={["white", "#979797"]}
            ColorIcono={"#FFFFFF"}
            MetodoBusqueda={(Busqueda) => {
              alert(Busqueda);
            }}
            MetodoUsuario={() => {
              alert("usuario");
            }}
            MetodoCompra={() => {
              alert("compra");
            }}
            OpcionesMenu={[
              {
                Icono: "",
                Opcion: "Menú",
                Link: "/lol",
                Color: "#FFFFFF",
              },
              { Icono: "", Opcion: "Nosotros", Link: "/lol", Color: "#FFFFFF" },
              { Icono: "", Opcion: "Ubicaciones", Link: "/lol", Color: "#FFFFFF" },
              { Icono: "", Opcion: "Empleos", Link: "/lol", Color: "#FFFFFF" },
            ]}
            FondoColorMenu={"#000000"}
          />
          <main className={classes.main}>
            <article className={classes.article}>{children}</article>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withComponents(withStyles(styles)(Layout));
