// eslint-disable-next-line no-unused-vars
import React, { Component, useEffect } from "react";
import { withComponents } from "@reactioncommerce/components-context";
import { Grid, useMediaQuery } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles, useTheme } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomStyle: "solid",
    borderBottomColor: "#979797",
  },
  Logo: {
    marginRight: "5px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "10px",
    },
    //backgroundColor: "red",
  },
  searchbar: {
    color: "white",
    marginTop: "1%",
    //backgroundColor: "blue",
  },
  Espacio: {
    marginTop: "10px",
  },
  Espacio2: {
    marginTop: "20px",
  },
  Iconos: {
    marginLeft: "auto",
    //backgroundColor: "orange",
  },
  Menu: {
    display: "flex",
    justifyContent: "center",
  },
});

class NavigationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", bandera: false };
  }

  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    //urlLogo: Contiene la url de logo
    //urlLogoSize: Es un array donde estan las dimensiones del logo, [width,height], ejemplo:["10px","15px"]
    //ColoresBusqueda: color 1 es el color de letra, color 2 es color de fondo y color 3 es el del icono, array de colores,["black", "red", "blue"]
    //ColoresIcono, son los colores del icono, entrada: nombre o hexa del color,ejemplo: #FFFFF
    //MetodoBusqueda, debe de ser un metodo y debe de contener como parametro la busqueda
    //MetodoUsuario y MetodoCompra, debe de ser un metodo en el que se desea que se haga al darle click al icono
    //OpcionesMenu, una lista con las opciones que contendra el nombre de la opcion y el icono, ejemplo: [{Icono: <AccountCircle/>,Opcion:"Menu",Link:"/lol",Color:"white"}], si lo quieren sin icono solo se pone en el campo de icono ""
    const {
      classes,
      urlLogo,
      urlLogoSize,
      ColoresBusqueda,
      ColorIcono,
      MetodoBusqueda,
      MetodoUsuario,
      MetodoCompra,
      OpcionesMenu,
      FondoColorMenu,
      components: { SearchBar },
      components: { IconsActions },
      components: { NavigationMenu },
    } = this.props;

    return (
      <Grid xs={12} md={12} lg={12} spacing={5}>
        {/* Contenedor Principal */}
        <Grid container xs={11} md={11} lg={11} className={classes.root}>
          {/* LOGO */}
          <Grid item xs={12} md={3} lg={3} className={classes.Logo}>
            <img src={urlLogo} width={urlLogoSize[0]} height={urlLogoSize[1]} />
          </Grid>

          {/* Bara de busqueda */}
          <Grid item xs={8} md={6} lg={6} className={classes.searchbar}>
            <SearchBar Metodo={MetodoBusqueda} Colores={ColoresBusqueda} />
          </Grid>

          {/* Iconos */}
          <Grid item xs={2} md={2} lg={2} className={classes.Iconos}>
            <IconsActions ColorIcono={ColorIcono} MetodoCompra={MetodoCompra} MetodoUsuario={MetodoUsuario} />
          </Grid>

          {/* Espacio Extra */}
          <Grid xs={12} md={12} lg={12} className={classes.Espacio}>
            <h1> </h1>
          </Grid>
        </Grid>

        {/* Espacio Extra */}
        <Grid xs={12} md={12} lg={12} className={classes.Espacio2}>
          <h1> </h1>
        </Grid>

        {/* Contenedor Navigation Menu */}
        <Grid container xs={11} md={11} lg={11} className={classes.Menu}>
          <NavigationMenu OpcionesMenu={OpcionesMenu} FondoColorMenu={FondoColorMenu} />
        </Grid>
      </Grid>
    );
  }
}

export default withComponents(withStyles(styles)(NavigationHeader));
