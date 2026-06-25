import { r as __exportAll } from "../_runtime.mjs";
//#region node_modules/@uploadcare/file-uploader/dist/index.ssr.js
var index_ssr_exports = /* @__PURE__ */ __exportAll({
	ActivityBlock: () => ActivityBlock,
	ActivityHeader: () => ActivityHeader,
	BaseComponent: () => BaseComponent,
	Block: () => Block,
	BtnUi: () => BtnUi,
	CameraSource: () => CameraSource,
	CloudImageEditor: () => CloudImageEditor,
	CloudImageEditorActivity: () => CloudImageEditorActivity,
	CloudImageEditorBlock: () => CloudImageEditorBlock,
	Config: () => Config,
	Copyright: () => Copyright,
	CropFrame: () => CropFrame,
	Data: () => Data,
	DropArea: () => DropArea,
	EditorAspectRatioButtonControl: () => EditorAspectRatioButtonControl,
	EditorCropButtonControl: () => EditorCropButtonControl,
	EditorFilterControl: () => EditorFilterControl,
	EditorFreeformButtonControl: () => EditorFreeformButtonControl,
	EditorImageCropper: () => EditorImageCropper,
	EditorImageFader: () => EditorImageFader,
	EditorOperationControl: () => EditorOperationControl,
	EditorScroller: () => EditorScroller,
	EditorSlider: () => EditorSlider,
	EditorToolbar: () => EditorToolbar,
	ExternalSource: () => ExternalSource,
	ExternalUploadSource: () => ExternalUploadSource,
	FileItem: () => FileItem,
	FileUploaderInline: () => FileUploaderInline,
	FileUploaderMinimal: () => FileUploaderMinimal,
	FileUploaderRegular: () => FileUploaderRegular,
	FormInput: () => FormInput,
	IS_SSR_STUBS: () => true,
	Icon: () => Icon,
	Img: () => Img,
	LineLoaderUi: () => LineLoaderUi,
	Modal: () => Modal,
	ModalEvents: () => ModalEvents,
	PACKAGE_NAME: () => PACKAGE_NAME,
	PACKAGE_VERSION: () => PACKAGE_VERSION,
	PluginActivityHost: () => PluginActivityHost,
	PluginActivityRenderer: () => PluginActivityRenderer,
	PresenceToggle: () => PresenceToggle,
	ProgressBar: () => ProgressBar,
	ProgressBarCommon: () => ProgressBarCommon,
	Select: () => Select,
	SimpleBtn: () => SimpleBtn,
	SliderUi: () => SliderUi,
	SolutionBlock: () => SolutionBlock,
	SourceBtn: () => SourceBtn,
	SourceList: () => SourceList,
	Spinner: () => Spinner,
	StartFrom: () => StartFrom,
	Thumb: () => Thumb,
	UID: () => UID,
	UploadCtxProvider: () => UploadCtxProvider,
	UploadList: () => UploadList,
	UploadSource: () => UploadSource,
	UploaderBlock: () => UploaderBlock,
	UrlSource: () => UrlSource,
	defineComponents: () => defineComponents,
	defineLocale: () => defineLocale,
	loadFileUploaderFrom: () => loadFileUploaderFrom,
	toKebabCase: () => toKebabCase
});
var ActivityBlock = class {
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var ActivityHeader = class {
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var BaseComponent = class {
	static reg = () => {};
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Block = class {
	static styleAttrs = [];
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var BtnUi = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var CameraSource = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var CloudImageEditor = class {
	static styleAttrs = [];
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var CloudImageEditorActivity = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var CloudImageEditorBlock = class {
	static styleAttrs = [];
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Config = class {
	static observedAttributes = [
		"ctx-name",
		"debug",
		"pubkey",
		"multiple",
		"multiple-min",
		"multiple-max",
		"confirm-upload",
		"img-only",
		"accept",
		"external-sources-preferred-types",
		"external-sources-embed-css",
		"store",
		"camera-mirror",
		"camera-capture",
		"source-list",
		"top-level-origin",
		"max-local-file-size-bytes",
		"thumb-size",
		"show-empty-list",
		"use-local-image-editor",
		"remove-copyright",
		"crop-preset",
		"image-shrink",
		"modal-scroll-lock",
		"modal-backdrop-strokes",
		"source-list-wrap",
		"remote-tab-session-key",
		"cdn-cname",
		"cdn-cname-prefixed",
		"base-url",
		"social-base-url",
		"secure-signature",
		"secure-expire",
		"secure-delivery-proxy",
		"retry-throttled-request-max-times",
		"retry-network-error-max-times",
		"multipart-min-file-size",
		"multipart-chunk-size",
		"max-concurrent-requests",
		"multipart-max-concurrent-requests",
		"multipart-max-attempts",
		"check-for-url-duplicates",
		"save-url-for-recurrent-uploads",
		"group-output",
		"user-agent-integration",
		"locale-name",
		"secure-uploads-expire-threshold",
		"validation-timeout",
		"validation-concurrency",
		"camera-modes",
		"default-camera-mode",
		"enable-audio-recording",
		"enable-video-recording",
		"max-video-recording-duration",
		"files-view-mode",
		"grid-show-file-names",
		"use-cloud-image-editor",
		"cloud-image-editor-auto-open",
		"cloud-image-editor-tabs",
		"cloud-image-editor-mask-href",
		"test-mode",
		"quality-insights",
		"paste-scope",
		"multiplemin",
		"multiplemax",
		"confirmupload",
		"imgonly",
		"externalsourcespreferredtypes",
		"externalsourcesembedcss",
		"cameramirror",
		"cameracapture",
		"sourcelist",
		"toplevelorigin",
		"maxlocalfilesizebytes",
		"thumbsize",
		"showemptylist",
		"uselocalimageeditor",
		"removecopyright",
		"croppreset",
		"imageshrink",
		"modalscrolllock",
		"modalbackdropstrokes",
		"sourcelistwrap",
		"remotetabsessionkey",
		"cdncname",
		"cdncnameprefixed",
		"baseurl",
		"socialbaseurl",
		"securesignature",
		"secureexpire",
		"securedeliveryproxy",
		"retrythrottledrequestmaxtimes",
		"retrynetworkerrormaxtimes",
		"multipartminfilesize",
		"multipartchunksize",
		"maxconcurrentrequests",
		"multipartmaxconcurrentrequests",
		"multipartmaxattempts",
		"checkforurlduplicates",
		"saveurlforrecurrentuploads",
		"groupoutput",
		"useragentintegration",
		"localename",
		"secureuploadsexpirethreshold",
		"validationtimeout",
		"validationconcurrency",
		"cameramodes",
		"defaultcameramode",
		"enableaudiorecording",
		"enablevideorecording",
		"maxvideorecordingduration",
		"filesviewmode",
		"gridshowfilenames",
		"usecloudimageeditor",
		"cloudimageeditorautoopen",
		"cloudimageeditortabs",
		"cloudimageeditormaskhref",
		"testmode",
		"qualityinsights",
		"pastescope"
	];
	static styleAttrs = [];
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Copyright = class {
	static styleAttrs = [];
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var CropFrame = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Data = class {
	static registerCtx = () => {};
	static deleteCtx = () => {};
	static getCtx = () => {};
	static hasCtx = () => {};
	static apply = () => {};
	static bind = () => {};
	static call = () => {};
	static toString = () => {};
	static hasOwnProperty = () => {};
	static isPrototypeOf = () => {};
	static propertyIsEnumerable = () => {};
	static valueOf = () => {};
	static toLocaleString = () => {};
};
var DropArea = class {
	static styleAttrs = [];
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorAspectRatioButtonControl = class {
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorCropButtonControl = class {
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorFilterControl = class {
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorFreeformButtonControl = class {
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorImageCropper = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorImageFader = class {
	static styleAttrs = [];
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorOperationControl = class {
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorScroller = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorSlider = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var EditorToolbar = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var ExternalSource = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var ExternalUploadSource = {
	FACEBOOK: "facebook",
	DROPBOX: "dropbox",
	DROPBOX_CHOOSER: "dropboxchooser",
	GDRIVE: "gdrive",
	GPHOTOS: "gphotos",
	FLICKR: "flickr",
	VK: "vk",
	EVERNOTE: "evernote",
	BOX: "box",
	ONEDRIVE: "onedrive",
	HUDDLE: "huddle"
};
var FileItem = class {
	static activeInstances = {};
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var FileUploaderInline = class {
	static lazyPlugins = [
		{ configDeps: ["useCloudImageEditor"] },
		{ configDeps: ["imageShrink"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] }
	];
	static styleAttrs = [];
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var FileUploaderMinimal = class {
	static lazyPlugins = [
		{ configDeps: ["useCloudImageEditor"] },
		{ configDeps: ["imageShrink"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] }
	];
	static styleAttrs = [];
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var FileUploaderRegular = class {
	static lazyPlugins = [
		{ configDeps: ["useCloudImageEditor"] },
		{ configDeps: ["imageShrink"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] },
		{ configDeps: ["sourceList"] }
	];
	static styleAttrs = [];
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var FormInput = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Icon = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Img = class {
	static observedAttributes = [
		"dev-mode",
		"pubkey",
		"uuid",
		"src",
		"lazy",
		"intersection",
		"breakpoints",
		"cdn-cname",
		"proxy-cname",
		"secure-delivery-proxy",
		"hi-res-support",
		"ultra-res-support",
		"format",
		"cdn-operations",
		"progressive",
		"quality",
		"is-background-for",
		"is-preview-blur"
	];
	static reg = () => {};
	static finalized = {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static elementStyles = [];
	static shadowRootOptions = { mode: "open" };
	static elementProperties = {};
};
var LineLoaderUi = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Modal = class {
	static styleAttrs = [];
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var ModalEvents = {
	ADD: "modal:add",
	DELETE: "modal:delete",
	OPEN: "modal:open",
	CLOSE: "modal:close",
	CLOSE_ALL: "modal:closeAll",
	DESTROY: "modal:destroy"
};
var PACKAGE_NAME = `blocks`;
var PACKAGE_VERSION = `1.29.0`;
var PluginActivityHost = class {
	static elementProperties = {};
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static finalized = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var PluginActivityRenderer = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var PresenceToggle = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var ProgressBar = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var ProgressBarCommon = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Select = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var SimpleBtn = class {
	static styleAttrs = [];
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var SliderUi = class {
	static elementProperties = {};
	static styleAttrs = [];
	static finalized = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var SolutionBlock = class {
	static styleAttrs = [];
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var SourceBtn = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var SourceList = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Spinner = class {
	static styleAttrs = [];
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var StartFrom = class {
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var Thumb = class {
	static elementProperties = {};
	static finalized = {};
	static elementStyles = [];
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var UID = class {
	static generateFastUid = () => {};
	static generateRandomUUID = () => {};
	static apply = () => {};
	static bind = () => {};
	static call = () => {};
	static toString = () => {};
	static hasOwnProperty = () => {};
	static isPrototypeOf = () => {};
	static propertyIsEnumerable = () => {};
	static valueOf = () => {};
	static toLocaleString = () => {};
};
var UploadCtxProvider = class {
	static styleAttrs = [];
	static EventType = {
		FILE_ADDED: "file-added",
		FILE_REMOVED: "file-removed",
		FILE_UPLOAD_START: "file-upload-start",
		FILE_UPLOAD_PROGRESS: "file-upload-progress",
		FILE_UPLOAD_SUCCESS: "file-upload-success",
		FILE_UPLOAD_FAILED: "file-upload-failed",
		FILE_URL_CHANGED: "file-url-changed",
		MODAL_OPEN: "modal-open",
		MODAL_CLOSE: "modal-close",
		DONE_CLICK: "done-click",
		UPLOAD_CLICK: "upload-click",
		ACTIVITY_CHANGE: "activity-change",
		COMMON_UPLOAD_START: "common-upload-start",
		COMMON_UPLOAD_PROGRESS: "common-upload-progress",
		COMMON_UPLOAD_SUCCESS: "common-upload-success",
		COMMON_UPLOAD_FAILED: "common-upload-failed",
		CHANGE: "change",
		GROUP_CREATED: "group-created"
	};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var UploadList = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var UploadSource = {
	LOCAL: "local",
	DROP_AREA: "drop-area",
	CAMERA: "camera",
	EXTERNAL: "external",
	API: "js-api",
	URL: "url",
	MOBILE_VIDEO_CAMERA: "mobile-video-camera",
	MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
	FACEBOOK: "facebook",
	DROPBOX: "dropbox",
	DROPBOX_CHOOSER: "dropboxchooser",
	GDRIVE: "gdrive",
	GPHOTOS: "gphotos",
	FLICKR: "flickr",
	VK: "vk",
	EVERNOTE: "evernote",
	BOX: "box",
	ONEDRIVE: "onedrive",
	HUDDLE: "huddle"
};
var UploaderBlock = class {
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementProperties = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var UrlSource = class {
	static elementProperties = {};
	static extSrcList = {
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static sourceTypes = {
		LOCAL: "local",
		DROP_AREA: "drop-area",
		CAMERA: "camera",
		EXTERNAL: "external",
		API: "js-api",
		URL: "url",
		MOBILE_VIDEO_CAMERA: "mobile-video-camera",
		MOBILE_PHOTO_CAMERA: "mobile-photo-camera",
		FACEBOOK: "facebook",
		DROPBOX: "dropbox",
		DROPBOX_CHOOSER: "dropboxchooser",
		GDRIVE: "gdrive",
		GPHOTOS: "gphotos",
		FLICKR: "flickr",
		VK: "vk",
		EVERNOTE: "evernote",
		BOX: "box",
		ONEDRIVE: "onedrive",
		HUDDLE: "huddle"
	};
	static finalized = {};
	static elementStyles = [];
	static activities = {
		START_FROM: "start-from",
		CAMERA: "camera",
		UPLOAD_LIST: "upload-list",
		URL: "url",
		CLOUD_IMG_EDIT: "cloud-image-edit",
		EXTERNAL: "external"
	};
	static styleAttrs = [];
	static reg = () => {};
	static addInitializer = () => {};
	static createProperty = () => {};
	static getPropertyDescriptor = () => {};
	static getPropertyOptions = () => {};
	static finalize = () => {};
	static finalizeStyles = () => {};
	static shadowRootOptions = { mode: "open" };
};
var defineComponents = () => {};
var defineLocale = () => {};
var loadFileUploaderFrom = () => {};
var toKebabCase = () => {};
//#endregion
export { UploadCtxProvider as a, UID as i, FileUploaderMinimal as n, defineComponents as o, FileUploaderRegular as r, index_ssr_exports as s, Config as t };
