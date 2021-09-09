// == Imports

import { connect } from 'react-redux';
import VM from '../../components/VM';
import { TInventory } from '../../typings';
import { Dispatch } from 'redux';

interface RootState {
  inventory: TInventory
}

const mapStateToProps = (state: RootState) => ({
  inventory: state.inventory,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VM);