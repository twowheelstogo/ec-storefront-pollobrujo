import React, { Component } from "react";
import { TextField, InputAdornment,Box } from "@material-ui/core";
import { Magnify } from "mdi-material-ui";
import Autocomplete from "@material-ui/lab/Autocomplete";
//import { withComponents } from "@reactioncommerce/components-context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withCatalogItems from "containers/catalog/withCatalogItems";
import inject from "hocs/inject";

const styles = (theme) => ({
  root: {
    ["@media (min-width:600px)"]: {
      marginTop: "20px",
    },
  },
  input: {
    color: "#979797",
    fontWeight: "300",
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
      backgroundColor: "rgba(216, 216, 216, 0.2)",      
    }    
  },
  Contenedor:{
    ["@media (max-width:599px)"]: {
      borderLeft: "2px solid #979797",  
      height: "41px"    
    }  
  },
  Letra:{
    color: '#000'
  }
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { Busqueda: "", productList: [{name:'s',photo:'s',price:'s',slug:''}], bandera: false  };
  }

  static propTypes = {
    classes: PropTypes.object,
    catalogItems: PropTypes.array,
  };

  static defaultProps = {
    classes: {},
  };

  productList_ = (product_) => {
    let tmpList = [];
    Object.keys(product_).map( (index) => {
      let items = product_[index];
      tmpList.push(
        {name: items["title"], slug: items['slug'], price: items["pricing"][0]["displayPrice"],photo: items['primaryImage']['URLs']['small'] } 
      )
    });       
    
    return tmpList;
  }

  componentDidMount()
  {
    let products = (this.props.catalogItems || []).map((items) => items.node.product); 
    
    if(products.length > 0)
    {
      this.setState({productList: this.productList_(products),bandera: true});         
    }                
  }

  searchProduct(data)
  {
    if(typeof data === 'object'){
      alert('yes');
    }
    else{
      alert('nop')
    }
  }

  render() {
    const { classes, Metodo , size  } = this.props;    
    console.log(this.state.Busqueda);  
    
    const renderBox = (option) =>{
      return(
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
      <img              
        width="20"
        src={option.photo}                            
      />            
      {option.name}               
      <br/>            
      {option.price}
      </Box>
      );
    }

    return (
      <div className={classes.root}>
         <Autocomplete
      id="country-select-demo"      
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.defaultMuiPrevented = true;          
          this.searchProduct(this.state.Busqueda);          
        }
      }}
      options={this.state.productList}      
      onChange={(event, newValue) => {
        this.setState({Busqueda: newValue});
      }}      
      onInputChange={(event, newInputValue) => {
        this.setState({Busqueda: newInputValue});
      }}
      getOptionLabel={(option) => option.name}
      renderOption={(option) => {
        return renderBox(option) }}

      renderInput={(params) => (
        <TextField
        {...params}
        variant="outlined"
        size={size}
        placeholder="Buscar producto..."
        fullWidth
        className={classes.TextField_}        
        onKeyPress={(ev) => {
          if (ev.key === "Enter") {              
            this.searchProduct(this.state.Busqueda);
          }
        }}
        InputProps={{
          ...params.InputProps,
            autoComplete: 'new-password',
          className: classes.input,
          classes: {
            notchedOutline: classes.notchedOutline,
          },
          endAdornment: (
            <InputAdornment position="end" className={classes.InputAdornment_}>
              <div className={classes.Contenedor}><p style={{color:"transparent"}}>ss</p></div>   
              <Magnify className={classes.Magnify_}  onClick={() => this.searchProduct(this.state.Busqueda)} />                             
            </InputAdornment>
          ),
        }}
      />
      )}
    />      
      </div>
    );
  }
}

export default (withStyles(styles))(SearchBar);
