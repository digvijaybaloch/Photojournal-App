import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../../screens/Dashboard/Home';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);