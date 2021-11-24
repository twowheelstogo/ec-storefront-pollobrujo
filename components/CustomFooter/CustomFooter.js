import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Link from "components/Link";

const date = new Date();
const styles = (theme) => ({
  root: {
    background: theme.palette.primary.main,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
  },
  main: {
    flex: "1 1 auto",
    maxWidth: theme.layout.mainContentMaxWidth,
    marginLeft: "auto",
    marginRight: "auto",
    // background:theme.palette.primary.light
  },
  items: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "20px",
  },
  divider: {
    color: "white",
    background: "white",
    opacity: "50%",
  },
  bottomItems: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end",
    },
  },
  copyright: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    opacity: "50%",
    fontSize: "15px",
  },
  flexItems: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  flexIcons: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    opacity: "75%",
  },
});
const CustomTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
const CustomItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 50%;
`;

//{imageUrl="urlLogo",Mensaje1 : "Contáctenos", Mensaje2: "Encuétrenos",ContenidoMensaje1:["+502 41427517","20 calle 24-26 bodega 15 zona 10 Ofibodegas Pradera","Lunes- Sábado: 8am - 8pm",Domingo: 10am - 8pm],ContenidoMensaje2:[{Titulo:"Sobre Nosotros",ruta:"/sobre"},{Titulo:"Extra",ruta:"/sobre"}]}
const CustomFooter = (props) => {
  const { classes, Descripcion } = props;
  const goToPage = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <div
        className={classes.root}
        style={{ backgroundColor: Descripcion.Colores.Fondo, color: Descripcion.Colores.Letra }}
      >
        <div className={classes.main}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <img src={Descripcion.urlLogo} width={"130px"} />
            </Grid>
            <Grid item xs={12} md={3} className={classes.items}>
              <CustomTitle>{Descripcion.Mensaje1}</CustomTitle>
              {Object.keys(Descripcion.ContenidoMensaje1).map((i) => {
                return <CustomItem>{Descripcion.ContenidoMensaje1[i]}</CustomItem>;
              })}
            </Grid>
            <Grid item xs={12} md={3} lg={3} className={classes.items}>
              <CustomTitle>{Descripcion.Mensaje2}</CustomTitle>
              {Object.keys(Descripcion.ContenidoMensaje2).map((i) => {
                return (
                  <Link href={`${Descripcion.ContenidoMensaje2[i].ruta}`}>
                    <CustomItem>{Descripcion.ContenidoMensaje2[i].Titulo}</CustomItem>
                  </Link>
                );
              })}
            </Grid>
          </Grid>
          <br></br>
          <Divider className={classes.divider} />
          <div className={classes.bottomItems}>
            <Hidden xsDown>
              <div className={classes.flexItems}>
                <div className={classes.copyright}>
                  <small style={{ fontSize: "15px" }}>
                    &copy; {`${Descripcion.NombreEmpresa} ${date.getFullYear()}`}
                  </small>
                </div>
              </div>
            </Hidden>

            <div className={classes.flexIcons}>
              <p style={{ fontSize: "15px" }}>Siguenos</p>
              {Object.keys(Descripcion.RedesSociales).map((i) => {
                return (
                  <IconButton
                    color="inherit"
                    size="small"
                    onClick={() => goToPage(`${Descripcion.RedesSociales[i].ruta}`)}
                  >
                    {Descripcion.RedesSociales[i].Icono}
                  </IconButton>
                );
              })}
            </div>
          </div>
          <Hidden smUp>
            <div className={classes.copyright}>
              <small style={{ fontSize: "15px" }}>&copy; {`${Descripcion.NombreEmpresa} ${date.getFullYear()}`}</small>
            </div>
          </Hidden>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(CustomFooter);
