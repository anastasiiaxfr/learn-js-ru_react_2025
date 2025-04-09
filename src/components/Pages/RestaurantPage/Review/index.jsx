import ReviewListItem from './ReviewListItem';

function ReviewRestaurant({reviews}) {
	return (
		<ul>
			{reviews.map(data => (
				<ReviewListItem data={data} key={data.id} />
			))}
		</ul>
	);
}

export default ReviewRestaurant;
