// == Imports

import { connect } from 'react-redux';
import Product from '../../../components/VM/Product';
import { TInventory, IProduct } from '../../../typings';
import { Dispatch } from 'redux';

interface RootState {
  inventory: TInventory
}

const mapStateToProps = (state: RootState, ownProps: IProduct) => ({
  item: ownProps,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);