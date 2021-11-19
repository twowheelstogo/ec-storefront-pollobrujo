import React, { Component } from "react";
import { Grid, BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { withComponents } from "@reactioncommerce/components-context";
//import { withComponents } from "@reactioncommerce/components-context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  Estilo: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
    fontWeight: "bold",
    fontFamily: "Lato",
  },
});

class NavigationMenu extends Component {
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
    const {
      classes,
      OpcionesMenu,
      FondoColorMenu,
      components: { Link },
    } = this.props;

    return (
      <>
        <BottomNavigation
          style={{ backgroundColor: FondoColorMenu }}
          showLabels
          value={this.state.value}
          onChange={(event, newValue) => {
            this.setState({ value: newValue });
          }}
        >
          {Object.keys(OpcionesMenu).map((i) => {
            return (
              <BottomNavigationAction
                value={this.state.value}
                className={classes.Estilo}
                style={{ color: OpcionesMenu[i].Color }}
                label={OpcionesMenu[i].Opcion}
                icon={OpcionesMenu[i].Icono}
              >
                <Link route={`${OpcionesMenu[i].Link}`} />
              </BottomNavigationAction>
            );
          })}
        </BottomNavigation>
      </>
    );
  }
}

export default withComponents(withStyles(styles)(NavigationMenu));
