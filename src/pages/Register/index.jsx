import { connect } from 'react-redux';
import { registerAction } from '../../actions/authActions';
import Register from './register.';

const mapDispatchToProps = dispatch => ({
  register: (values, actions) => registerAction(values, actions)(dispatch),
});

export default connect(null, mapDispatchToProps)(Register);
