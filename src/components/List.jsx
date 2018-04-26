import React from 'react';

import Person from './Person';

import '../style.scss';

class List extends React.PureComponent {
	render() {
		const { list } = this.props;

		return (
			<ul>
				{list.map(person => <Person data={person} key={person.id} />)}
			</ul>
		);
	}
}

export default List;
