import { connect } from 'react-redux';
import Home from './home';
import { loadProducts } from '../../actions/productsActions';
import { loadCartAction } from '../../actions/cartActions';

const mapStateToProps = ({ products, loading }) => ({
  products,
  loading: loading.some(
    x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  ),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => loadProducts()(dispatch),
  loadCart: () => loadCartAction()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
