import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "mdi-material-ui/Menu";

class NavigationToggleMobile extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    ModalMenuColores: PropTypes.object,
  };

  render() {
    const { ModalMenuColores } = this.props;

    return (
      <IconButton color="inherit" onClick={this.props.onClick}>
        <MenuIcon style={{ color: ModalMenuColores.Icono }} />
      </IconButton>
    );
  }
}

export default NavigationToggleMobile;
