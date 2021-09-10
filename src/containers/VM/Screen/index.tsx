// == Imports

import { connect } from 'react-redux';
import Screen from '../../../components/VM/Screen';
import { TInventory } from '../../../typings';
import { Dispatch } from 'redux';

import { setSelectedProduct } from '../../../actions/vm';

interface RootState {
  inventory: TInventory,
  selectedProduct: number,
}

const mapStateToProps = (state: RootState) => ({
  inventory: state.inventory,
  selectedProduct: state.selectedProduct,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedProduct: (productId: number) => {
    dispatch(setSelectedProduct(productId));
  }
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen);