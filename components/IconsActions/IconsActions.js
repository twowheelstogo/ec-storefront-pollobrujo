import React, { Component } from "react";
import { TextField, InputAdornment, Grid } from "@material-ui/core";
import { AccountCircleOutline } from "mdi-material-ui";
import { ShoppingOutline } from "mdi-material-ui";
import { withComponents } from "@reactioncommerce/components-context";
import AccountDropdown from "components/AccountDropdown";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import inject from "hocs/inject";
import MiniCart from "components/MiniCart";

const styles = (theme) => ({
  root: {
    ["@media (min-width:1280px)"]: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px",
    },
    ["@media (max-width:1280px) and (min-width: 600px)"]: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px",
    },
    ["@media (max-width:599px)"]: {
      marginTop: "10px",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  Usuario: {
    ["@media (min-width:600px)"]: {
      display: "flex",
      justifyContent: "flex-start",
    },
    ["@media (max-width:599px) and (min-width:312px)"]: {
      display: "flex",
      justifyContent: "flex-start",
    },
    ["@media (max-width:311px)"]: {
      marginLeft: "-30px",
    },
  },
  Compra: {
    ["@media (max-width:599px) and (min-width:312px)"]: {
      display: "flex",
      justifyContent: "flex-start",
    },
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
    const { classes, width } = this.props;
    return (
      <Grid container xs={12} md={12} lg={12} className={classes.root} spacing={width !== "xs" ? 5 : 4}>
        <Grid item xs={1} md={2} lg={2} className={classes.Usuario}>
          <AccountDropdown />
        </Grid>
        <Grid item xs={1} md={2} lg={2} className={classes.Compra}>
          <MiniCart />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(inject("uiStore")(IconsActions));
