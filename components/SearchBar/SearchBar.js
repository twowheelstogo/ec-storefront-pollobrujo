import React, { Component } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { Magnify } from "mdi-material-ui";
//import { withComponents } from "@reactioncommerce/components-context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    marginTop: "20px",
  },
  input: {
    color: "#979797",
    fontWeight: "600",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#E3E3E3 !important",
  },
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { Busqueda: "" };
  }

  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    const { classes, Metodo, Colores } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          variant="outlined"
          rows="10"
          placeholder="Buscar producto..."
          fullWidth
          style={{ backgroundColor: Colores[0] }}
          onChange={(e) => {
            this.setState({ Busqueda: e.target.value });
          }}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              //ev.preventDefault();
              Metodo(this.state.Busqueda);
            }
          }}
          InputProps={{
            className: classes.input,
            classes: {
              notchedOutline: classes.notchedOutline,
            },
            endAdornment: (
              <InputAdornment position="end">
                <Magnify style={{ color: Colores[1], cursor: "pointer" }} onClick={() => Metodo(this.state.Busqueda)} />
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
