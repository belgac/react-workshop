/**
 * The root file that combines all of our types
 */

// TODO: Define your queries
const Query = /* GraphQL */`
	type Query {
		dummy: String,
		recipes(vegetarian: Boolean, ingredient: ID): [Recipe],
		ingredients: [Ingredient]
	}
`;

const Schema = /* GraphQL */`
	schema {
		query: Query
	}
`

const Recipe = /* GraphQL */`
	type Recipe {
		_id: ID
		title: String
		vegetarian: Boolean
		preparation: [String]
		ingredients: [Ingredient]
	}
`

const Ingredient = /* GraphQL */`
	type Ingredient {
		_id: ID
		name: String
	}
`


// TODO: Add all of your types to this array
export default [Schema, Query, Recipe, Ingredient];
