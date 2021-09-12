// == Imports

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IVMState } from '../../../../typings';

import Ad from '../../../../components/VM/Screen/Ad';

const mapStateToProps = (state: IVMState) => ({
  purchaseCounter: state.purchaseCounter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ad);