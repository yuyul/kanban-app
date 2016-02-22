import React, {Component, PropTypes} from 'react';
import Lane from './Lane.jsx';

class Lanes extends Component {
    static propTypes = {
        lanes: PropTypes.array,
    };

    static defaultProps = {
        lanes: [],
    };

    render() {
        const { lanes } = this.props;
        return (
            <div className="lanes">{lanes.map((lane) =>
            <Lane className="lane" key={lane.id} lane={lane} />
                )}</div>
        );
    };
}

export default Lanes;