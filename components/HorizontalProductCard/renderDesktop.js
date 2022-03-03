import React, { Component, Fragment,useEffect,useState } from "react";
import { ReactDOM } from "react";
import PropTypes from "prop-types";
import { Typography, Grid, useMediaQuery } from "@material-ui/core"
import Link from "components/Link";
import styled from "styled-components";

const CardContainerHorizontal = styled.div`
    border: ${({ withBorder, boderColor }) => withBorder ? boderColor : "none"};
    display: flex;
    height: 150px;
    cursor: pointer;
    &:hover {
        background-color: #000;
        transition: background-color .5s;
    }
`

const ProductPaddingHorizontal = styled.div`
padding-left: 56px;
padding-bottom: 20px;
`;

const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
flex: 1 1 auto;
`;

const StyledTitle = styled.div`
font-size:18px;
font-weight:700;
color:#fff;
padding-left: 10px;
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const StyledSubtitle = styled.div`
font-size:14px;
color:#979797;
padding-left: 10px;
display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const Div = styled.div``;

const RenderDesktop = props => {

    RenderDesktop.propTypes = {
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

    const { tags, classes,currencyCode,isLoadingCatalogItems,pageInfo,pageSize,setPageSize,setSortBy,sortBy } = props
    const [titleWeb_,setTitleWeb_] = useState('');  
    const [isLoad,setisLoad] = useState(false);  
    let title = tags !== null ?  (tags.catalogProducts.length > 0 ? tags.displayTitle : ' ') : ' ';

    useEffect(() => {        
        setTitleWeb_(title);
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
            <Grid container direction="row">   
            {
                  tags.catalogProducts.map((values) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={values._id} className={classes.gridSpacing}>
                        <Link
                            href={values.slug && "/product/[...slugOrId]"}
                            as={values.slug && `/product/${values.slug}`}
                        >
                            <CardContainerHorizontal withBorder boderColor={"2px solid rgba(151, 151, 151, 0.5)"}>
                                {
                                    values.primaryImage !== null ? (
                                        <img src={values.primaryImage.URLs.medium} className={classes.imageProduct}></img>

                                    ) : (
                                        <img src="/images/placeholder.gif" />
                                    )
                                }
                                
                                <CardContent>                                                           
                                        <StyledTitle>{values.title}</StyledTitle>
                                        <StyledSubtitle>{values.description}</StyledSubtitle>                                                                
                                        <Typography className={classes.textPrice}>{values.pricing[0].displayPrice}</Typography>                                                                                                    
                                </CardContent>
                            </CardContainerHorizontal>
                        </Link>

                    </Grid>
                ))            
            }
            </Grid>                                                                                                                                                          
                );
            }  
            else {
                return (
                    <div>            
                    </div>
                  );
            }
    }

    return (
    
        <ProductPaddingHorizontal>       
              <Typography className={classes.titleWeb}>
                     {titleWeb_}
                 </Typography>
                 
     
                 {            
                   rendercatalogProducts(tags)
                 }       
      
           

        </ProductPaddingHorizontal>     
    
    )
}

export default RenderDesktop; 