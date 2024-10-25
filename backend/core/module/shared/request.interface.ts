export interface Meta {
	userAgent?: string | null | undefined;
	user?: any;
	headers?: any;
	isAuthenticated?: boolean;
	request: any;
}

export interface Params {
	params?: any;
	body?: any;
	query?: any;
}