// == Imports

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IVMState } from '../../../typings';

import PickupBox from '../../../components/VM/PickupBox';

import { emptyPickupBox } from '../../../actions/vm';

const mapStateToProps = (state: IVMState) => ({
  inventory: state.inventory,
  pickupBoxProduct: state.pickupBoxProduct,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  emptyPickupBox: () => {
    dispatch(emptyPickupBox());
  }
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PickupBox);