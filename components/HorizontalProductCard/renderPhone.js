import React, { Component, Fragment,useEffect,useState } from "react";
import PropTypes from "prop-types";
import { Typography, Grid, useMediaQuery } from "@material-ui/core"
import Link from "components/Link";
import styled from "styled-components";
import ProgressiveImage from "components/ProgressiveImage"

const CardContainerVertical = styled.div`
    border: ${({ withBorder, boderColor }) => withBorder ? boderColor : "none"};
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &:hover:{
        background-color: #EEEEEE;
        transition: background-color .5s;
    }
`


const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
flex: 1 1 auto;
`;

const StyledTitleVertical = styled.div`
font-size:18px;
font-weight:700;
color:#fff;
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const StyledSubtitleVertical = styled.div`
font-size:14px;
color:#979797;
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const Div = styled.div``;

const RenderPhone = props => {

    RenderPhone.propTypes = {
        classes: PropTypes.object,
        currencyCode: PropTypes.bool,
        isLoadingCatalogItems: PropTypes.bool,
        pageInfo: PropTypes.bool,
        pageSize: PropTypes.bool,
        setPageSize: PropTypes.bool,
        setSortBy: PropTypes.bool,
        sortBy: PropTypes.bool,
        tags: PropTypes.object,
    };

    const { tags, classes } = props 
    const [titleMobil_,setTitleMobil_] = useState('');  
    const [isLoad,setisLoad] = useState(false);  
    let title = tags !== null ?  (tags.catalogProducts.length > 0 ? tags.displayTitle : ' ') : ' ';

    useEffect(() => {        
        setTitleMobil_(title);
    },[title])

    useEffect(() => {
        if(tags !== null || tags !== undefined)
        {
            setisLoad(true);
        }
    },[tags])

    const rendercatalogProducts = (tags) => {
        if(isLoad)
        {
            return(
                <Grid container>
                {
                    tags.catalogProducts.length !== 0 ? (
                        tags.catalogProducts.map((values) => (
                            <Grid item xs={6} className={classes.cardMobil} key={values._id}>
                                <Link
                                    href={values.slug && "/product/[...slugOrId]"}
                                    as={values.slug && `/product/${values.slug}`}
                                >
                                    <CardContainerVertical withBorder boderColor={"2px solid rgba(151, 151, 151, 0.5)"}>                                                                    
                                            <ProgressiveImage
                                                fit={"cover"}
                                                altText={"description"}
                                                presrc={values.primaryImage !== null ? values.primaryImage.URLs.thumbnail : "/images/placeholder.gif"}
                                                srcs={values.primaryImage !== null ? values.primaryImage.URLs : "/images/placeholder.gif"}
                                            />                                                                    
                                        <CardContent>
                                            <div>
                                                <StyledTitleVertical>{values.title}</StyledTitleVertical>
                                                <StyledSubtitleVertical>{values.description}</StyledSubtitleVertical>
                                            </div>
                                            <div>
                                                <Typography className={classes.textPrice}>{values.pricing[0].displayPrice}</Typography>
                                            </div>
                                        </CardContent>
                                    </CardContainerVertical>
                                </Link>
                            </Grid>
                        ))
                    ) : null
                }
            </Grid>      
            );
        }else{
            return (
                <div>            
                </div>
              );
        }
    }

    return(
        <>
           <Typography className={classes.titleMobil}>
                        {titleMobil_}
           </Typography>                    
            {
                rendercatalogProducts(tags)
            }                                  
                   
        </>
    )

}

export default RenderPhone;