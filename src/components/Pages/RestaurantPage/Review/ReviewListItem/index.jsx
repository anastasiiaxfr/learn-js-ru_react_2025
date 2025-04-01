import {useSelector} from 'react-redux';
import {selectReviewById} from '../../../../../redux/entities/reviews/slice';
import {selectUserById} from '../../../../../redux/entities/users/slice';

function ReviewList({id}) {
	const review = useSelector((state) => selectReviewById(state, id));

	const user = useSelector((state) => selectUserById(state, review.userId));

	return (
		<li>
			<b>{user.name}: &nbsp;</b>
			{review.text} <b>{review.rating}</b>
		</li>
	);
}

export default ReviewList;
