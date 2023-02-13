import { connect } from 'react-redux';
import Login from './login';
import { loginAction } from '../../actions/authActions';

const mapDispatchToProps = dispatch => ({
  login: (values, actions) => loginAction(values, actions)(dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
