// == Imports

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IVMState } from '../../../../typings';

import Pad from '../../../../components/VM/Screen/Pad';

import { setSelectedProduct } from '../../../../actions/vm';

const mapStateToProps = (state: IVMState) => ({
  selectedProduct: state.selectedProduct,
  rewardsProgramStatus: state.rewardsProgramStatus,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedProduct: (productId: number) => {
    dispatch(setSelectedProduct(productId));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pad);