import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, Grid, useMediaQuery } from "@material-ui/core"
import { withStyles, useTheme } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import Link from "components/Link";
import styled from "styled-components";
import RenderDesktop from "./renderDesktop"
import RenderPhone  from "./renderPhone";



const styles = (theme) => ({
    imageProduct: {
        height: "100%",
        width: "150px",
        objectFit: "cover"
    },
    textPrice: {
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '16px',
        lineHeight: '17px',
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '5px',
        flex: "1 1 auto"
        
    },
    titleWeb: {
        fontWeight: 800,
        fontSize: '24px',
        paddingTop: '40px',
        paddingBottom: '40px',
        color: '#fff'
    },
    titleMobil: {
        fontWeight: 800,
        fontSize: '24px',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '7px',
        color: '#fff'
    },
    productPadding: {
        paddingLeft: '10px',
    },
    cardMobil:{
        paddingLeft: '7px',
        paddingRight: '7px',
        paddingBottom:'15px'
    },
    productPaddingHorizontaal:{
        paddingLeft: '56px',
        paddingBottom: '20px',
    },
    gridSpacing:{
        paddingRight:'30px',
        paddingBottom: '30px'
    }
})

const HorizontalProductCard = props => {
    // HorizontalProductCard.propTypes = {
    //     classes: PropTypes.object,
    //     currencyCode: PropTypes.string.isRequired,
    //     isLoadingCatalogItems: PropTypes.bool,
    //     pageInfo: PropTypes.shape({
    //         startCursor: PropTypes.string,
    //         endCursor: PropTypes.string,
    //         hasNextPage: PropTypes.bool,
    //         hasPreviousPage: PropTypes.bool,
    //         loadNextPage: PropTypes.func,
    //         loadPreviousPage: PropTypes.func
    //     }),
    //     pageSize: PropTypes.number.isRequired,
    //     setPageSize: PropTypes.func.isRequired,
    //     setSortBy: PropTypes.func.isRequired,
    //     sortBy: PropTypes.string.isRequired,
    //     tags: PropTypes.object,
    // };
    HorizontalProductCard.propTypes = {
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

    const { tags, classes, components: { ProgressiveImage } } = props    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));
    return (
    <>      
            {matches !== true ? (                        
                <RenderDesktop
                tags={tags}
                classes={classes}
                />                                                       
            ) : (                
                <RenderPhone
                tags={tags}
                classes={classes}
                />                         
            )
            }                  
        </>
    )

}


export default withComponents(withStyles(styles)(HorizontalProductCard));