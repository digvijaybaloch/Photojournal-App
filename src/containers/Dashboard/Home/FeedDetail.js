import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeedDetail from '../../../screens/Dashboard/Home/FeedDetail';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetail);