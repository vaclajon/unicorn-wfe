import React from 'react';

class Person extends React.PureComponent {
	render() {
		const { data } = this.props;

		return (
			<li>
				{`${data.firstName} ${data.lastName}`}
			</li>
		);
	}
}

export default Person;
