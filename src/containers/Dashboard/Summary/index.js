import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Summary from '../../../screens/Dashboard/Summary';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Summary);