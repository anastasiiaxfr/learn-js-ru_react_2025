import {useGetUsersQuery} from '../../../../../redux/services/api';

function ReviewList({data}) {
	const {rating, text, userId} = data;

	const {data: user} = useGetUsersQuery(undefined, {
		selectFromResult: (result) => ({
			...result,
			data: result.data?.find(({id}) => id === userId),
		}),
	});

	const name = user?.name;

	return (
		<li>
			<b>{name}: &nbsp;</b>
			{text} <b>{rating}</b>
		</li>
	);
}

export default ReviewList;
