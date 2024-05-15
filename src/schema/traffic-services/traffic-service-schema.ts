import { z } from "zod";

export const trafficServiceStepOneSchema = z.object({
	emirate: z.string({ required_error: "Emirate is required" }),
	licenseType: z.string({ required_error: "License Type is required" }),
	serviceType: z.string({ required_error: "Service Type is required" }),
	gear: z.string({ required_error: "Gear is required" }),
	type: z.string({ required_error: "Type is required" }),
});