import {useSelector} from 'react-redux';
import {useRequest} from '../../../../../redux/hooks/use-request';
import {getUsers} from '../../../../../redux/entities/users/get-users.js';
import {selectReviewById} from '../../../../../redux/entities/reviews/slice';
import {selectUserById} from '../../../../../redux/entities/users/slice';
import {IDLE, PENDING, REJECTED} from '../../../../../redux/constant.js';
function ReviewList({id}) {
	const requestStatus = useRequest(getUsers);

	const review = useSelector(state => selectReviewById(state, id));

	const user = useSelector(state => selectUserById(state, review.userId));

	if (requestStatus === IDLE || requestStatus === PENDING) {
		return 'loading User...';
	}

	if (requestStatus === REJECTED) {
		return 'error';
	}

	return (
		<li>
			<b>{user.name}: &nbsp;</b>
			{review.text} <b>{review.rating}</b>
		</li>
	);
}

export default ReviewList;
