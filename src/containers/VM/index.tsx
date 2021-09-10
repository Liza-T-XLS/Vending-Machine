// == Imports

import { connect } from 'react-redux';
import VM from '../../components/VM';
import { IVMState } from '../../typings';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IVMState) => ({
  inventory: state.inventory,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VM);