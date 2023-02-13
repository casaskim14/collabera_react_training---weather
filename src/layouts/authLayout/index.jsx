import { connect } from 'react-redux';
import AuthLayout from './layout';

const mapStateToProps = ({ user: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(AuthLayout);
