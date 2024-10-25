import type { Context, Service, ServiceSchema, ServiceSettingSchema } from "moleculer";


import { 
    DomainFunction, 
    DomainValidator, 
    IDomain,
    RequestFunction,
    ResponseFunction
} from "../core/module"

export interface ActionHelloParams {
	name: string;
}

interface DomainSettings extends ServiceSettingSchema {
	defaultName: string;
}

interface DomainMethods {
	uppercase(str: string): string;
}

interface DomainLocalVars {
	myVar: string;
}

type DomainThis = Service<DomainSettings> & DomainMethods & DomainLocalVars;

const DomainService: ServiceSchema<DomainSettings> = {
	name: "domain",

	/**
	 * Settings
	 */
	settings: {
		defaultName: "Moleculer",
	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		hello: {
			rest: {
				method: "GET",
				path: "/",
			},
            params: DomainValidator.GET_DOMAIN,
			async handler(this: DomainThis, ctx: Context<IDomain.GetDomainQueryParams, IDomain.DomainMeta>): Promise<any> {
                try {
					const data = await DomainFunction.getDomain(ctx);
					return ResponseFunction.success(data);
				} catch(err) {
					throw ResponseFunction.error(422, err.message, err);
				}
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};

export default DomainService;
