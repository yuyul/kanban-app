import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lanes from '../components/Lanes.jsx';
import {createLane} from '../actions/lanes';

@DragDropContext(HTML5Backend)

class App extends Component {

    static propTypes = {
        lanes: PropTypes.array,
        createLaneAction: PropTypes.func,
    };

    static defaultProps = {
        lanes: [],
    };

    constructor() {
        super();
        this.createNewLane = this.createNewLane.bind(this);
    }

    createNewLane() {
        const { createLaneAction } = this.props;
        createLaneAction({ name: 'New lane' });
    }
    render() {
        const {lanes } = this.props;
        return (
            <div>
                <button className="add-lane"
                        onClick={ this.createNewLane }>+</button>
                <Lanes lanes={ lanes } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { lanes } = state;
    return {lanes };
}

function mapDispatchToProps(dispatch) {
    return {
        createLaneAction: bindActionCreators(createLane, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
