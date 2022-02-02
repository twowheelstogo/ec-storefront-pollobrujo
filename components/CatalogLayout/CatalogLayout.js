import React, { Fragment,Component } from "react";
import HorizontalProductCard from "components/HorizontalProductCard";
import HorizontalTagsProducts from "../HorizontalTagsProducts";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({    
    main: {
      flex: "1 1 auto",
      maxWidth: theme.layout.mainContentMaxWidth,
      marginLeft: "auto",
      marginRight: "auto"
    },
    article: {
        ["@media (min-width:900px)"]: {
            padding: theme.spacing(3),
          },
          ["@media (max-width:899px)"]: {
            padding: theme.spacing(0)
          },      
    }
  });

class CatalogLayout extends Component {

    static propTypes = {
        catalogItems: PropTypes.array,
        currencyCode: PropTypes.string,
        isLoadingCatalogItems: PropTypes.bool,
        pageInfo: PropTypes.object,
        pageSize: PropTypes.number,
        tags: PropTypes.array,
        setPageSize: PropTypes.func,
        setSortBy: PropTypes.func,
        sortBy: PropTypes.string,
        viewer: PropTypes.object,
      };

    static defaultProps = {
        classes: {},
      };
    
  render() {    
    const {
        classes,
        catalogItems,
        currencyCode,
        isLoadingCatalogItems,
        pageInfo,
        pageSize,
        tags,
        setPageSize,
        setSortBy,
        sortBy,
    } = this.props;


    let products = (catalogItems || []).map((items) => items.node.product);

    (tags || []).map((e) => {
        let catalogProducts = [...products]
        return e.catalogProducts = catalogProducts.filter(element => element.tagIds[0] == e._id);
    });

    return (
        <Fragment>
              <main className={classes.main}>
            <article className={classes.article}>
            <HorizontalTagsProducts 
                tags={tags}
                currencyCode={currencyCode}
                isLoadingCatalogItems={isLoadingCatalogItems}
                pageInfo={pageInfo}
                pageSize={pageSize}                
                setPageSize={setPageSize}
                setSortBy={setSortBy}
                sortBy={sortBy} 
            />
            {/* <HorizontalProductCard
                tags={tags}
                currencyCode={currencyCode}
                isLoadingCatalogItems={isLoadingCatalogItems}
                pageInfo={pageInfo}
                pageSize={pageSize}
                tags={tags}
                setPageSize={setPageSize}
                setSortBy={setSortBy}
                sortBy={sortBy}
            /> */}
            </article>
          </main>
        </Fragment>
    )
        }

}

export default withStyles(styles)(CatalogLayout);
