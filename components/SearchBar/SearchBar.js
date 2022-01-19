import React, { Component } from "react";
import { TextField, InputAdornment,Divider } from "@material-ui/core";
import { Magnify } from "mdi-material-ui";
//import { withComponents } from "@reactioncommerce/components-context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    ["@media (min-width:600px)"]: {
      marginTop: "20px",
    },
  },
  input: {
    color: "#979797",
    fontWeight: "600",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#E3E3E3 !important",
  },
  Magnify_: {
    ["@media (min-width:600px)"]: {
    color: theme.palette.colors.SearchColor,
    },
    ["@media (max-width:599px)"]: {
      color: "#979797"
    },
    cursor: "pointer"
  },
  InputAdornment_: {
    ["@media (min-width:600px)"]: {
    borderRightColor: theme.palette.colors.SearchColor,
    },    
  },
  TextField_:{
    ["@media (min-width:600px)"]: {
      backgroundColor: theme.palette.background.theme_,
    },

    ["@media (max-width:599px)"]: {
      backgroundColor: "rgba(216, 216, 216, 0.2)"
    }    
  },
  Contenedor:{
    ["@media (max-width:599px)"]: {
      borderLeft: "2px solid #979797",      
    }  
  }
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
    const { classes, Metodo } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          variant="outlined"
          rows="10"
          placeholder="Buscar producto..."
          fullWidth
          className={classes.TextField_}
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
              <InputAdornment position="end" className={classes.InputAdornment_}>
                <div className={classes.Contenedor}><p style={{color:"transparent"}}>ss</p></div>   
                <Magnify className={classes.Magnify_}  onClick={() => Metodo(this.state.Busqueda)} />                             
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
