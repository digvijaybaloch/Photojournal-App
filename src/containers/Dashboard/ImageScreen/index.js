import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImageScreen from '../../../screens/Dashboard/ImageScreen';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ImageScreen);