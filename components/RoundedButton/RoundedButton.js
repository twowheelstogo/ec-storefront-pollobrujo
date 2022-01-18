import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import {ArrowRight}  from "mdi-material-ui";
import {IconButton} from "@material-ui/core";

const CustomSubtitle=styled.div`
font-size:13px;
font-weight:300;
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;
const styles = (theme) => ({
	root:{
		width:"100%",
		height:"120px",
		backgroundColor: theme.palette.secondary.botones,    
		color: theme.palette.colors.BotonColor,
		borderRadius:"16px",
		borderColor: theme.palette.secondary.botones, 
		fontWeight:"800",
		fontSize:"18px",
		paddingLeft:theme.spacing(2),
		paddingRight:theme.spacing(2),
		// paddingTop:theme.spacing(3),
		// paddingBottom:theme.spacing(3),
		display:"flex",
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		cursor:"pointer"
	},	
	leading:{
	},
	trailing:{
		// background:'red',
		alignItems:"center",
		color:"white",
	},
	title:{
		fontSize:"21px",
		fontWeight:600
	},
	Icono_:{
		color: theme.palette.primary.dark
	}
});
const RoundedButton = props => {
	const {classes,onClick,buttonTitle,buttonSubtitle, disabled} = props;
	return(
		<React.Fragment>
			<div className={classes.root} onClick={onClick}>
				<div className={classes.leading}>
					<div className={classes.title}>
						{buttonTitle}
					</div>
					<CustomSubtitle>{buttonSubtitle}</CustomSubtitle>
				</div>
				<div className={classes.trailing}>
					<IconButton className={classes.Icono_} onClick={onClick} disabled={disabled}>
						<ArrowRight/>
					</IconButton>
				</div>
			</div>
		</React.Fragment>
	);
};

export default withStyles(styles)(RoundedButton);