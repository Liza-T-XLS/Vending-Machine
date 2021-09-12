// == Imports

import { connect } from 'react-redux';
import Screen from '../../../components/VM/Screen';
import { IVMState } from '../../../typings';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IVMState) => ({
  inventory: state.inventory,
  selectedProduct: state.selectedProduct,
  instructionsMsg: state.instructionsMsg,
  pickupBoxProduct: state.pickupBoxProduct,
  refillStatus: state.refillStatus,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen);