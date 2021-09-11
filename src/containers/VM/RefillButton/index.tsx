// == Imports

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IVMState } from '../../../typings';

import RefillButton from '../../../components/VM/RefillButton';

import { refillMachine } from '../../../actions/vm';

const mapStateToProps = (state: IVMState) => ({
  inventory: state.inventory,
  selectedProduct: state.selectedProduct,
  pickupBoxProduct: state.pickupBoxProduct,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  refillMachine: () => {
    dispatch(refillMachine());
  }
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RefillButton);