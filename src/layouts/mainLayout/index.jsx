import { connect } from 'react-redux';
import MainLayout from './mainLayout';

const mapStateToProps = ({ user: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(MainLayout);
