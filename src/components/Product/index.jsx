import { connect } from 'react-redux';
import Product from './product';
import {
  addCartItemAction,
  deleteCartItemAction,
  updateCartItemAction,
} from '../../actions/cartActions';

const mapStateToProps = ({ cart, loading }, { product }) => ({
  cartItem: cart.find(x => x.productId === product.id),
  isLoading: loading.some(x => x.loadingId === product.id),
});

const mapDispatchToProps = dispatch => ({
  addToCart: data => addCartItemAction(data)(dispatch),
  updateCartItem: data => updateCartItemAction(data)(dispatch),
  deleteCartItem: data => deleteCartItemAction(data)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
