import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/List';

const list = [
	{ id: 1, firstName: 'Petr', lastName: 'Okurka' },
	{ id: 2, firstName: 'Jan', lastName: 'Novák' },
	{ id: 3, firstName: 'Pavel', lastName: 'Svoboda' },
	{ id: 4, firstName: 'Jana', lastName: 'Okrouhalová' },
	{ id: 5, firstName: 'Jolana', lastName: 'Nová' }
];

ReactDOM.render(
	<List list={list} />,
	document.getElementById('root')
);

