import { connect } from 'react-redux';
import CustomTabBar from '../components/TabBar'
import { bindActionCreators } from 'redux';
import { activateCreateTask, deactivateCreateTask } from '../actions/task';

const mapStateToProps = (state)  => ({
 createTaskActive: state.tasks.createTaskActive,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
 activateCreateTask,
 deactivateCreateTask
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabBar);