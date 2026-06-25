import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "./@floating-ui/react-dom+[...].mjs";
import { a as UploadCtxProvider, i as UID, n as FileUploaderMinimal, o as defineComponents, r as FileUploaderRegular, s as index_ssr_exports, t as Config } from "./uploadcare__file-uploader.mjs";
//#region node_modules/@uploadcare/react-uploader/dist/AdapterUploadCtxProvider-DK2Ix_xd.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var b = /* @__PURE__ */ new Set([
	"children",
	"ref",
	"style",
	"className"
]), A = (e = {}) => Object == null ? void 0 : Object.keys(e).reduce((n, o) => {
	var s, t;
	const r = e == null ? void 0 : e[o], a = `on${(t = (s = r == null ? void 0 : r.split("-")) == null ? void 0 : s.map((c) => c.charAt(0).toUpperCase() + c.slice(1))) == null ? void 0 : t.join("")}`;
	return n[a] = r, n;
}, {}), m = /* @__PURE__ */ new WeakMap(), M = (e) => {
	let n = m.get(e);
	return n === void 0 && (n = /* @__PURE__ */ new Map(), m.set(e, n)), n;
}, E$1 = ({ node: e, nameProp: n, valueProp: o, prevValueProp: s, event: t }) => {
	if (t !== void 0) {
		if (o !== s) {
			const r = M(e), a = r.has(t);
			let c = r.get(t);
			o !== void 0 ? a ? c.handleEvent = o : (c = { handleEvent: o }, r.set(t, c), e.addEventListener(t, (u) => c.handleEvent(u.detail))) : a && (r.delete(t), e.removeEventListener(t, c));
		}
		return;
	}
	e[n] = o, o == null && n in HTMLElement.prototype && e.removeAttribute(n);
}, O = (e, n, o) => {
	const s = {}, t = {};
	return Object.entries(e).forEach(([r, a]) => {
		b.has(r) ? s[r === "className" ? "class" : r] = a : n.has(r) || r in o.prototype ? t[r] = a : s[r] = a;
	}), {
		reactProps: s,
		customElProps: t
	};
}, g$1 = ({ react: e, tag: n, elClass: o, schemaEvents: s }) => {
	const t = A(s), r = new Set(Object.keys(t ?? {})), a = e.forwardRef((c, u) => {
		const i = e.useRef(/* @__PURE__ */ new Map()), d = e.useRef(null), { reactProps: h, customElProps: f } = O(c, r, o);
		return e.useLayoutEffect(() => {
			if (d.current === null) return;
			const p = /* @__PURE__ */ new Map();
			for (const l in f) E$1({
				node: d.current,
				nameProp: l,
				valueProp: f[l],
				prevValueProp: i.current.get(l),
				event: t[l]
			}), i.current.delete(l), p.set(l, c[l]);
			for (const [l, C] of i.current) E$1({
				node: d.current,
				nameProp: l,
				valueProp: void 0,
				prevValueProp: C,
				event: t[l]
			});
			i.current = p;
		}), e.createElement(n ?? o.__tag, {
			...h,
			ref: e.useCallback((p) => {
				d.current = p, typeof u == "function" ? u(p) : u !== null && (u.current = p);
			}, [u])
		});
	});
	return a.displayName = o.name, a;
}, x = ({ children: e }) => e, R$1 = () => {
	const [e, n] = (0, import_react.useState)(!1);
	return (0, import_react.useEffect)(() => {
		typeof window < "u" && n(!0);
	}, []), e;
}, k = (e) => {
	const n = {}, o = {}, s = {};
	for (const [t, r] of Object.entries(e)) {
		if (t.startsWith("on")) {
			n[t] = r;
			continue;
		}
		if (t === "headless") {
			s[t] = r;
			continue;
		}
		o[t] = r;
	}
	return {
		eventHandlers: n,
		uploader: s,
		config: o
	};
}, U = "1.14.0", j = "React-Uploader", I$1 = () => `${j}/${U}`, L = g$1({
	react: import_react.default,
	tag: "uc-config",
	elClass: Config
}), S = g$1({
	react: import_react.default,
	tag: "uc-upload-ctx-provider",
	elClass: UploadCtxProvider,
	schemaEvents: UploadCtxProvider.EventType
});
//#endregion
//#region node_modules/@uploadcare/react-uploader/dist/FileUploaderInline-Ca080NNM.js
defineComponents(index_ssr_exports);
g$1({
	react: import_react.default,
	tag: "uc-file-uploader-inline",
	elClass: FileUploaderMinimal
});
//#endregion
//#region node_modules/@uploadcare/react-uploader/dist/FileUploaderMinimal-JNabNX1o.js
defineComponents(index_ssr_exports);
var I = g$1({
	react: import_react.default,
	tag: "uc-file-uploader-minimal",
	elClass: FileUploaderMinimal
}), v = ({ ctxName: n, className: r, classNameUploader: o, apiRef: s, fallback: i, ...l }) => {
	const a = (0, import_react.useMemo)(() => n ?? UID.generateRandomUUID(), [n]), { eventHandlers: m, config: c } = k(l), p = R$1();
	return /* @__PURE__ */ import_react.createElement(x, {
		condition: p,
		fallback: i
	}, /* @__PURE__ */ import_react.createElement("div", { className: r }, /* @__PURE__ */ import_react.createElement(L, {
		userAgentIntegration: I$1(),
		"ctx-name": a,
		...c
	}), /* @__PURE__ */ import_react.createElement(S, {
		ref: s,
		"ctx-name": a,
		...m
	}), /* @__PURE__ */ import_react.createElement(I, {
		class: o,
		"ctx-name": a
	})));
};
//#endregion
//#region node_modules/@uploadcare/react-uploader/dist/FileUploaderRegular-BB9J8mIV.js
defineComponents(index_ssr_exports);
var R = g$1({
	react: import_react.default,
	tag: "uc-file-uploader-regular",
	elClass: FileUploaderRegular
}), F = ({ ctxName: a, className: o, classNameUploader: n, apiRef: s, fallback: l, ...c }) => {
	const t = (0, import_react.useMemo)(() => a ?? UID.generateRandomUUID(), [a]), { eventHandlers: i, config: p, uploader: d } = k(c), m = R$1();
	return /* @__PURE__ */ import_react.createElement(x, {
		condition: m,
		fallback: l
	}, /* @__PURE__ */ import_react.createElement("div", { className: o }, /* @__PURE__ */ import_react.createElement(L, {
		userAgentIntegration: I$1(),
		"ctx-name": t,
		...p
	}), /* @__PURE__ */ import_react.createElement(S, {
		ref: s,
		"ctx-name": t,
		...i
	}), /* @__PURE__ */ import_react.createElement(R, {
		class: n,
		"ctx-name": t,
		...d
	})));
};
//#endregion
export { v as n, F as t };
