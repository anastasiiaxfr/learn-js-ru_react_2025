import {use} from 'react';
import {useState} from 'react';
import AuthContext from '../../Context/AuthContext/constant.js';
import s from './styles.module.sass';
import Card from './Card';
import Tags from '../../UI/Tags';
import ReviwForm from '../../UI/ReviewForm';
import {defaultTab, allRestaurantCat} from '../../UI/Tags/constant.js';
import {countDishesRange} from './Dish/constants.js';

function Restauraunt({data}) {
	const {isAuth} = use(AuthContext);
	const [currentTab, setCurrentTab] = useState(defaultTab);

	const currentRestaraunt =
		currentTab.name === 'All'
			? data
			: data.find(restaurant => restaurant.id === currentTab.id);

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
					<div className={s.cards}>
						{currentRestaraunt.length ? (
							currentRestaraunt.map(restaurant => (
								<Card
									data={restaurant}
									key={restaurant.id}
									countDishesRange={countDishesRange}
								/>
							))
						) : (
							<>
								<div>
									<Card
										data={currentRestaraunt}
										countDishesRange={countDishesRange}
									/>
									{isAuth && <ReviwForm />}
								</div>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
}

export default Restauraunt;
