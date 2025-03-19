import { restaurants } from '../../mock.js'

export const defaultTab = {
    id: 0,
    name: 'All',
}

export const countDishesRange = {
    min: 0,
    max: 5,
}

export const allRestaurantCat = [
	...new Set(
		restaurants
			.filter((cat) => cat.name)
			.map((cat) => ({
				id: cat.id,
				name: cat.name,
			}))
	),
]