import { createQueryObject } from '../helpers/helper.js';
import { FaListUl } from 'react-icons/fa';

import styles from './Sidebar.module.css';

function Sidebar({ setQuery }) {
	const categoryHandler = (event) => {
		const { tagName } = event.target;
		const category = event.target.innerText.toLowerCase();
		console.log(category);
		if (tagName != 'LI') return;
		setQuery((query) => createQueryObject(query, { category }));
	};

	return (
		<div>
			<div>
				<FaListUl />
				<p>Categories</p>
			</div>
			<ul onClick={categoryHandler}>
				<li>All</li>
				<li>Electronics</li>
				<li>Jewelery</li>
				<li>Men's Clothing</li>
				<li>Women's Clothing</li>
			</ul>
		</div>
	);
}

export default Sidebar;