"use strict";
import { Errors } from "moleculer";
import * as dotenv from "dotenv";

const {  MoleculerError } = Errors;

dotenv.config();

let environmentPrefix = "prod";

if (process.env.NODE_ENV === "development") {
	environmentPrefix = "dev";
} else if (process.env.NODE_ENV === "staging") {
	environmentPrefix = "staging";
} else if (process.env.NODE_ENV === "production") {
	environmentPrefix = "prod";
}

export interface SuccesResponse {
    message: string;
    code: number;
    data: any;
};

export const success = (params: any | any[] | null = null): SuccesResponse => ({
    message: "success",
    code: 200,
    data: params,
});

export const error = (code: number, message: string, data: any): any => new MoleculerError(message, code, environmentPrefix, data);
