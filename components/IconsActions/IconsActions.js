import React, { Component } from "react";
import { TextField, InputAdornment, Grid } from "@material-ui/core";
import { AccountCircleOutline } from "mdi-material-ui";
import { ShoppingOutline } from "mdi-material-ui";
//import { withComponents } from "@reactioncommerce/components-context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    ["@media (min-width:960px)"]: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "50px",
    },
    ["@media (max-width:959px)"]: {
      marginTop: "35px",
    },
  },
  Usuario: {
    marginRight: "15px",
    ["@media (min-width:557px)"]: {
      width: "35px",
      height: "35px",
    },
    ["@media (max-width:556px)"]: {
      width: "30px",
      height: "30px",
    },
  },
  Compra: {
    width: "35px",
    height: "35px",
  },
});

class IconsActions extends Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  };
  render() {
    const { classes, ColorIcono, MetodoUsuario, MetodoCompra } = this.props;
    return (
      <div className={classes.root}>
        <AccountCircleOutline
          className={classes.Usuario}
          style={{ color: ColorIcono, cursor: "pointer" }}
          onClick={() => MetodoUsuario()}
        />
        <ShoppingOutline
          className={classes.Compra}
          style={{ color: ColorIcono, cursor: "pointer" }}
          onClick={() => MetodoCompra()}
        />
      </div>
    );
  }
}

export default withStyles(styles)(IconsActions);
