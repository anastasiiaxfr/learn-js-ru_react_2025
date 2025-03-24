import {useState} from 'react';
import Tags from '../../UI/Tags';
import {defaultTab, allRestaurantCat} from '../../UI/Tags/constant.js';
import Cards from './Cards/index.jsx';

function Restauraunt({data}) {
	const [currentTab, setCurrentTab] = useState(defaultTab);

	const currentRestaraunt =
		currentTab.name === 'All'
			? data
			: data.find((restaurant) => restaurant.id === currentTab.id);

	return (
		<>
			<section>
				<div className="container">
					<Tags
						data={[defaultTab, ...allRestaurantCat]}
						setCurrentTab={setCurrentTab}
						selected={currentTab}
					/>
				</div>
			</section>
			<section>
				<div className="container">
					<Cards data={currentRestaraunt} />
				</div>
			</section>
		</>
	);
}

export default Restauraunt;
