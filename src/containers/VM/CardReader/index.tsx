// == Imports

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IVMState } from '../../../typings';

import CardReader from '../../../components/VM/CardReader';

import { processOrder } from '../../../actions/vm';

const mapStateToProps = (state: IVMState) => ({
  inventory: state.inventory,
  selectedProduct: state.selectedProduct,
  pickupBoxProduct: state.pickupBoxProduct,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  processOrder: () => {
    dispatch(processOrder());
  }
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardReader);