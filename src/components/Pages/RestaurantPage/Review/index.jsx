import {useSelector} from 'react-redux';
import {selectReviewById} from '../../../../redux/entities/reviews/slice';

function ReviewRestaurant({reviews}) {
	const getReview = useSelector((state) => (id) => {
		const {text, rating} = selectReviewById(state, id);
		return {text, rating};
	});
	return (
		<ul className="">
			{reviews.map((id) => (
				<li key={id}>
					{getReview(id).text} <b>{getReview(id).rating}</b>
				</li>
			))}
		</ul>
	);
}

export default ReviewRestaurant;
