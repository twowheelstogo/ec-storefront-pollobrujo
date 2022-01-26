import React, { useState, Fragment, useEffect } from "react";
import inject from "hocs/inject";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from "@material-ui/core/ButtonBase";
import { AccountCircleOutline } from "mdi-material-ui";
//import AccountIcon from "mdi-material-ui/Account";
import Popover from "@material-ui/core/Popover";
import useViewer from "hooks/viewer/useViewer";
import ViewerInfo from "@reactioncommerce/components/ViewerInfo/v1";
import Link from "components/Link";
import useStores from "hooks/useStores";
import EntryModal from "../Entry/EntryModal";
import getAccountsHandler from "../../lib/accountsServer.js";

const useStyles = makeStyles((theme) => ({  
  accountDropdown: {
    width: 320,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.theme_, 
    border:"1px solid white"
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.theme_, 
    border:"1px solid"
  },
  Info_: {
    color: theme.palette.colors.TextTheme,
    ["@media(max-width:1099px) and (min-width:600px)"]: {
      width: "26px",
      height: "26px",
      marginRight:"1%"
    },
    ["@media (min-width:1100px)"]: {
      width: "30px",
      height: "30px",
    },
    ["@media (max-width:599px)"]: {
      width: "25px",
      height: "22px",
    }},
  Usuario: {
    color: theme.palette.colors.TextTheme,
    ["@media (min-width:600px)"]: {
      width: "35px",
      height: "35px",
    },
    ["@media (max-width:599px)"]: {
      width: "25px",
      height: "25px",
    },
  },
  BotonPrincipal:{
    backgroundColor: theme.palette.secondary.botones,    
    color: theme.palette.colors.BotonColor,    
    fontWeight: "800",    
    "&:hover": {      
      backgroundColor: theme.palette.secondary.botones,    
      color: theme.palette.colors.BotonColor,
      borderColor: theme.palette.secondary.botones,   
      }
  },  
  Borde:{
    marginTop: "0.5rem",
    marginRight: "1rem",        
  },

}));

const AccountDropdown = (props) => {
  const router = useRouter();
  const { uiStore } = useStores();
  const { setEntryModal } = uiStore;
  const resetToken = router?.query?.resetToken;
  const classes = useStyles();
  const [anchorElement, setAnchorElement] = useState(null);
  const [viewer, , refetch] = useViewer();
  const { accountsClient } = getAccountsHandler();
  const isAuthenticated = viewer && viewer._id;

  useEffect(() => {
    // Open the modal in case of reset-password link
    if (!resetToken) {
      return;
    }
    setEntryModal("reset-password");
  }, [resetToken]);

  const onClose = () => {
    setAnchorElement(null);
  };

  const handleSignOut = async () => {
    await accountsClient.logout();
    await refetch();
    onClose();
  };

  const toggleOpen = (event) => {
    setAnchorElement(event.currentTarget);
  };
  

  
  return (
    <Fragment>
      <EntryModal onClose={onClose} resetToken={resetToken} />
      {isAuthenticated ? (
        // <ButtonBase onClick={toggleOpen}>                  
        // <ViewerInfo viewer={viewer} className={classes.Info_}/> 
        // </ButtonBase>
        <IconButton color="inherit" onClick={toggleOpen}>
          <AccountCircleOutline className={classes.Usuario}/>
        </IconButton>
      ) : (
        <IconButton color="inherit" onClick={toggleOpen}>
          <AccountCircleOutline className={classes.Usuario}/>
        </IconButton>
      )}

      <Popover      
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={Boolean(anchorElement)}
        onClose={onClose}
        className={classes.Borde}
      >
        <div className={classes.accountDropdown}>
          {isAuthenticated ? (
            <Fragment >
              <div className={classes.marginBottom}>
                <Link href="/profile/address">
                  <Button  className={classes.BotonPrincipal} fullWidth>
                    Perfil
                  </Button>
                </Link>
              </div>
              <div className={classes.marginBottom}>
                <Button className={classes.BotonPrincipal} fullWidth onClick={() => setEntryModal("change-password")}>
                  Cambiar Contraseña
                </Button>
              </div>              
              <Button className={classes.BotonPrincipal} fullWidth onClick={handleSignOut} variant="contained">
                Cerrar Sesión
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <div className={classes.authContent}>
                <Button className={classes.BotonPrincipal}  fullWidth onClick={() => setEntryModal("login")}>
                  Iniciar Sesión
                </Button>
              </div>
              <br/>
              <Button className={classes.BotonPrincipal} fullWidth onClick={() => setEntryModal("signup")}>
                Crear Cuenta
              </Button>
            </Fragment>
          )}
        </div>
      </Popover>
    </Fragment>
  );
};

export default inject("authStore")(AccountDropdown);
