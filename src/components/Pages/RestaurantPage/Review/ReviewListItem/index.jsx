import {useGetUsersQuery} from '../../../../../redux/services/api';

function ReviewList({data}) {
	const {rating, text, userId} = data;

	const users = useGetUsersQuery();
	const user = users?.data?.find(user => user.id === userId);

	return (
		<li>
			<b>{user?.name}: &nbsp;</b>
			{text} <b>{rating}</b>
		</li>
	);
}

export default ReviewList;
