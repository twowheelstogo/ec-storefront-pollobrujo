import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import inject from "hocs/inject";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CartEmptyMessage from "components/CartEmptyMessage";
import CartSummary from "components/CartSummary";
import withCart from "containers/cart/withCart";
import CartItems from "components/CartItems";
import CheckoutButtons from "components/CheckoutButtons";
import Link from "components/Link";
import Layout from "components/Layout";
import Router from "translations/i18nRouter";
import PageLoading from "components/PageLoading";
import { withApollo } from "lib/apollo/withApollo";
import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";
import fetchTranslations from "staticUtils/translations/fetchTranslations";
import { withComponents } from "@reactioncommerce/components-context";

const styles = (theme) => ({
  contenedorPrincipal:{
    ["@media (min-width:800px)"]: {
      display:"flex",justifyContent:"center"
    },
    ["@media(min-width:600px) and (max-width:799px)"]: {
      display:"flex",justifyContent:"space-evenly"
    }
  },
  cartEmptyMessageContainer: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  checkoutButtonsContainer: {
    backgroundColor: "#202124",    
    padding: theme.spacing(2)
  },
  customerSupportCopy: {
    paddingLeft: `${theme.spacing(4)}px !important`
  },
  phoneNumber: {
    fontWeight: theme.typography.fontWeightBold
  },
  title: {
    fontWeight: 700,
    marginTop: "1.6rem",
    marginBottom: "3.1rem",
    fontSize: "36px",
  },
  itemWrapper: {
    borderTop: theme.palette.borders.default,
    borderBottom: theme.palette.borders.default
  }
});

class CartPage extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      totalItems: PropTypes.number,
      items: PropTypes.arrayOf(PropTypes.object),
      checkout: PropTypes.shape({
        fulfillmentTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        }),
        itemTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        }),
        taxTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        })
      })
    }),
    classes: PropTypes.object,
    hasMoreCartItems: PropTypes.bool,
    loadMoreCartItems: PropTypes.func,
    onChangeCartItemsQuantity: PropTypes.func,
    onRemoveCartItems: PropTypes.func,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  };

  handleClick = () => Router.push("/");

  handleItemQuantityChange = (quantity, cartItemId) => {
    const { onChangeCartItemsQuantity } = this.props;

    onChangeCartItemsQuantity({ quantity, cartItemId });
  };

  handleRemoveItem = async (itemId) => {
    const { onRemoveCartItems } = this.props;

    await onRemoveCartItems(itemId);
  };

  renderEmpty()
  {
    const { cart, classes, hasMoreCartItems, loadMoreCartItems } = this.props;

    if (cart && Array.isArray(cart.items) && cart.items.length) {
      return (
          <div>            
          </div>
      );
    }

    return (
      <Grid item xs={9} md={2} lg={2} className={classes.cartEmptyMessageContainer}>
        <CartEmptyMessage onClick={this.handleClick} />
      </Grid>
    );
  }

  renderCartItems() {
    const { cart, classes, hasMoreCartItems, loadMoreCartItems } = this.props;

    if (cart && Array.isArray(cart.items) && cart.items.length) {
      return (
          <>
            {/* <div className={classes.itemWrapper}>  */}
            <CartItems
              hasMoreCartItems={hasMoreCartItems}
              onLoadMoreCartItems={loadMoreCartItems}
              items={cart.items}
              onChangeCartItemQuantity={this.handleItemQuantityChange}
              onRemoveItemFromCart={this.handleRemoveItem}
            />
            {/* </div>  */}
          </>
      );
    }

    return (
      <div>            
      </div>
    );
  }

  renderCartSummary() {
    const { cart, classes } = this.props;


    if (cart && cart.checkout && cart.checkout.summary && Array.isArray(cart.items) && cart.items.length) {
      const { fulfillmentTotal, itemTotal, surchargeTotal, taxTotal, total } = cart.checkout.summary;
      console.log({
        fulfillmentTotal,
        itemTotal,
        surchargeTotal,
        taxTotal,
        total
      })
      return (
        <>
          <CartSummary
            displayShipping={fulfillmentTotal && fulfillmentTotal.displayAmount}
            displaySubtotal={itemTotal && itemTotal.displayAmount}
            displaySurcharge={surchargeTotal && surchargeTotal.displayAmount}
            displayTax={taxTotal && taxTotal.displayAmount}
            displayTotal={total && total.displayAmount}
            itemsQuantity={cart.totalItemQuantity}
          />          
        </>
      );
    }

    return null;
  }

  render() {
    const { cart, classes, shop, components: { CartItem, CartSummary } } = this.props;
    // when a user has no item in cart in a new session, this.props.cart is null
    // when the app is still loading, this.props.cart is undefined
    if (typeof cart === "undefined") return <PageLoading delay={0} />;

    return (
      <Layout shop={shop}>
        <Helmet
          title={`Cart | ${shop && shop.name}`}
          meta={[{ name: "description", content: shop && shop.description }]}
        />

        {/* <Grid container>
          <Grid item xs = {12} md = {6}>
            <CartItem/>
          </Grid>
          <Grid item xs = {12} md = {6}>
            <CartSummary/>
          </Grid>
        </Grid> */}
        <section>
          <Typography className={classes.title} variant="h6" align="center">
            Mi Carrito
          </Typography>
          <br/>
          <Grid container className={classes.contenedorPrincipal}>

          <Grid item xs={12} sm={5} md={5} lg={7} style={{padding:'12px'}}>
            {this.renderCartItems()}
          </Grid>

          <Grid item xs={1} sm={1} md={2} lg={1}></Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
            {this.renderCartSummary()}
            <div className={classes.checkoutButtonsContainer}>
            <CheckoutButtons />
            </div>
            </Grid>
            
            
            {this.renderEmpty()}

          </Grid>
        </section>
      </Layout>
    );
  }
}
/**
 *  Server props for the cart route
 *
 * @param {String} lang - the shop's language
 * @returns {Object} props
 */
export async function getServerSideProps({ params: { lang } }) {
  return {
    props: {
      ...await fetchPrimaryShop(lang),
      ...await fetchTranslations(lang, ["common"])
    }
  };
}

export default withApollo()(withComponents(withStyles(styles)(withCart(inject("uiStore")(CartPage)))));