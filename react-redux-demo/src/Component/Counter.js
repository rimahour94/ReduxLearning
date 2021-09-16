import React from 'react';
import { buyCake } from '../Redux';
import { connect } from 'react-redux';
import { compose } from 'redux';
function Counter(props) {
    console.log(props, "props")
    return (
        <div>
            <h4>Total Number of Cakes </h4>
            <button >Buy Cake</button>
        </div>
    );
}

const mapStateToProps = state => {
    // return {
    //     numOfCakes: state.numOfCakes
    // }
}

const mapDispatchToProps = dispatch => {
    // return {
    //     buyCake: () => dispatch(buyCake)
    // }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
