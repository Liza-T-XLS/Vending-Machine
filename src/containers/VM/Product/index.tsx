// == Imports

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IVMState, IProduct } from '../../../typings';

import Product from '../../../components/VM/Product';

const mapStateToProps = (state: IVMState, ownProps: IProduct) => ({
  item: ownProps,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);