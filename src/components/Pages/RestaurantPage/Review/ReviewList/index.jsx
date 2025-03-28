import {useSelector} from 'react-redux';
import {selectReviewById} from '../../../../../redux/entities/reviews/slice';

function ReviewList({id}) {
	const review = useSelector((state) => selectReviewById(state, id));

	return (
		<li>
			{review.text} <b>{review.rating}</b>
		</li>
	);
}

export default ReviewList;
