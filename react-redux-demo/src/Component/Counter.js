import React from 'react';
import { CakeActions } from '../Redux';
import { connect } from 'react-redux';
function Counter(props) {
    return (
        <div>
            <h4>Total Number of Cakes </h4>
            <button >Buy Cake</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CakeActions: () => dispatch(CakeActions())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);