import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewPost from '../../../screens/Dashboard/NewPost';
import { fetchLocation } from '../../../actions/location';
import { fetchTemperature } from '../../../actions/temperature';

const mapStateToProps = (state) => ({
 locationData: state.location.data,
 temperature: state.temperature.temperature
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
 fetchLocation,
 fetchTemperature
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);