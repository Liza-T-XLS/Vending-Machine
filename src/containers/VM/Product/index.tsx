// == Imports

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IVMState, IProduct } from '../../../typings';

import Product from '../../../components/VM/Product';

import { setSelectedProduct } from '../../../actions/vm';

const mapStateToProps = (state: IVMState, ownProps: IProduct) => ({
  item: ownProps,
  selectedProduct: state.selectedProduct,
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
)(Product);