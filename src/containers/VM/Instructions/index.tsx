// == Imports

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IVMState } from '../../../typings';

import Instructions from '../../../components/VM/Instructions';

const mapStateToProps = (state: IVMState) => ({
  instructionsMsg: state.instructionsMsg,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Instructions);