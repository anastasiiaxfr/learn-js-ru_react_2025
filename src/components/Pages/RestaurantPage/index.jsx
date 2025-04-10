'use client';
import {Outlet} from 'react-router';
import Tabs from '../../UI/Tabs/index.jsx';
import Tags from './Tags';
import {useGetRestaurantsQuery} from '../../../redux/services/api.js';

function RestaurauntsPage() {
	const {data, isLoading, isError} = useGetRestaurantsQuery();

	if (isLoading) {
		return 'loading...';
	}

	if (isError) {
		return 'ERROR';
	}

	return (
		<>
			<section>
				<div className="container">
					<Tabs>
						{data.map(({id, name}) => (
							<Tags key={id} id={id} name={name} />
						))}
					</Tabs>
				</div>
			</section>

			<Outlet />
		</>
	);
}

export default RestaurauntsPage;
