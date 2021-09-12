// == Imports

import { connect } from 'react-redux';
import VM from '../../components/VM';
import { IVMState } from '../../typings';
import { Dispatch } from 'redux';

import { activateRewardsProgram } from '../../actions/vm';

const mapStateToProps = (state: IVMState) => ({
  inventory: state.inventory,
  purchaseCounter: state.purchaseCounter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  activateRewardsProgram: () => {
    dispatch(activateRewardsProgram());
  }
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VM);