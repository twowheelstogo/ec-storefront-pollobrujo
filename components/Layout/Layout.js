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
    } = this.props;

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
            MetodoUsuario={() => {
              alert("usuario");
            }}
            MetodoCompra={() => {
              alert("compra");
            }}
            ImageCoverUrl={
              "https://pollobrujo.com.gt/wp-content/uploads/2020/09/Banner-de-inicio-pollo-sabor-unico-a-la-parrilla-1.jpg"
            }
            MessageCover={"SABOR ÚNICO A LA PARILLA"}
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
