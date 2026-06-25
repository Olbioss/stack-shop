import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/form-D2eiYF_8.js
var import_jsx_runtime = require_jsx_runtime();
function Form({ form, onSubmit, multiStep, ...props }) {
	const handleStepSubmit = async (event) => {
		event.preventDefault();
		if (multiStep && multiStep.currentStep < multiStep.totalSteps) {
			const currentStepFieldNames = multiStep.fieldNamesByStep?.[multiStep.currentStep];
			if (currentStepFieldNames) {
				await form.validateAllFields("blur");
				await form.validateAllFields("change");
				if (!currentStepFieldNames.some((fieldName) => (form.state.fieldMeta[fieldName]?.errors?.length ?? 0) > 0)) multiStep.onStepChange?.(multiStep.currentStep + 1);
			}
		} else form.handleSubmit();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		...props,
		onSubmit: (event) => {
			onSubmit?.(event);
			if (multiStep) handleStepSubmit(event);
			else {
				event.preventDefault();
				form.handleSubmit();
			}
		}
	});
}
//#endregion
export { Form as t };
