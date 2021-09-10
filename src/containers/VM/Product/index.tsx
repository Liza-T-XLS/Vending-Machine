// == Imports

import { connect } from 'react-redux';
import Product from '../../../components/VM/Product';
import { IVMState, IProduct } from '../../../typings';
import { Dispatch } from 'redux';

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