export const GET_DOMAIN = {
	query: {
		type: "object",
		props: {
			domain: { type: "string", optional: false },
			type: { 
				type: "string",
				optional: false,
				enum: [
					"json",
					"xml"
				],
			},
			requested_data: {
				type: "string",
				optional: false,
				enum: [
					"domain_information",
					"contact_information",
					"none"
				],
			},
		},
	},
};