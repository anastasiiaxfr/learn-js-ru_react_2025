import {use} from 'react';
import AuthContext from '../../../Context/AuthContext/constant.js';
import s from './styles.module.sass';
import Card from '../Card';
import ReviewForm from '../../../UI/Forms/ReviewForm';

function Cards({data}) {
	const {isAuth} = use(AuthContext);

	return (
		<div className={s.cards}>
			{data.length ? (
				data.map((restaurant) => <Card data={restaurant} key={restaurant.id} />)
			) : (
				<>
					<div>
						<Card data={data} />
						{isAuth && <ReviewForm />}
					</div>
				</>
			)}
		</div>
	);
}

export default Cards;
