import { Gt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DLhAwWpU.js
var passwordSchema = zod_default.string().min(8, "Password must be at least 8 characters").max(128, "Password must be at most 128 characters").refine((val) => /[A-Z]/.test(val), { message: "Must contain at least one uppercase letter" }).refine((val) => /[a-z]/.test(val), { message: "Must contain at least one lowercase letter" }).refine((val) => /\d/.test(val), { message: "Must contain at least one number" }).refine((val) => /[^A-Za-z0-9]/.test(val), { message: "Must contain at least one special character" });
var loginSchema = zod_default.object({
	email: zod_default.email("Invalid email address"),
	password: zod_default.string().min(8, "Password must be at least 8 characters"),
	rememberMe: zod_default.boolean().optional().default(true)
});
var registerSchema = zod_default.object({
	name: zod_default.string().min(2, "Name must be at least 2 characters"),
	email: zod_default.email("Invalid email address"),
	password: passwordSchema,
	confirmPassword: passwordSchema
}).refine((data) => data.password === data.confirmPassword, {
	path: ["confirmPassword"],
	message: "Passwords do not match"
});
var vendorRegisterSchema = zod_default.object({
	name: zod_default.string().min(2, "Name must be at least 2 characters"),
	email: zod_default.email("Invalid email address"),
	password: passwordSchema,
	confirmPassword: zod_default.string(),
	storeName: zod_default.string().min(2, "Store name must be at least 2 characters"),
	storeDescription: zod_default.string().optional(),
	contactPhone: zod_default.string().optional(),
	countryCode: zod_default.string().optional().default("BD"),
	address: zod_default.string().optional()
}).refine((data) => data.password === data.confirmPassword, {
	path: ["confirmPassword"],
	message: "Passwords do not match"
});
//#endregion
export { vendorRegisterSchema as i, passwordSchema as n, registerSchema as r, loginSchema as t };
