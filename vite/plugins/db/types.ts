interface BaseProperty {
	type: string;
	description?: string;
}

interface ResponseItem {
	description: string;
	content: Record<ContentType, { schema: SchemaProperty }>;
}

interface Response {
	'200': ResponseItem;
	'401': ResponseItem;
}

// 从API文档中解析出的类型属性
interface SchemaProperty extends BaseProperty {
	format?: string;
	$ref?: string;
	items?: SchemaProperty;
	additionalProperties?: SchemaProperty;
}

// 从API文档中解析出的类型
interface Schema extends BaseProperty {
	properties?: Record<string, SchemaProperty>;
	required?: string[];
	additionalProperties?: BaseProperty;
}

interface ExistingType {
	id: number;
	name: string;
	description: string;
	type: string;
	properties: string;
	additionalProperties: string;
	required: string;
	created_at: string;
	updated_at: string;
}

interface ExistingProperty {
	id: number;
	type_id: number;
	name: string;
	type: string;
	additionalProperties: string;
	items: string;
	description: string;
	format: string;
	is_required: number;
	created_at: string;
	updated_at: string;
}

interface ExistingApi {
	id: number;
	modules_id: number;
	method: string;
	path: string;
	tags: string;
	summary: string;
	description: string;
	operationId: string;
	parameters: string;
	requestBody: string;
	responses: string;
	created_at: string;
	updated_at: string;
}

interface ExistingModule {
	id: number;
	name: string;
	created_at: string;
	updated_at: string;
}

// 联系信息
interface Contact {
	name: string;
	url: string;
	email: string;
}

// 服务器
interface Server {
	url: string;
	description: string;
}

// 安全
interface Security {
	apiKey: {
		type: string;
		in: string;
		name: string;
	}[];
}

// 标签
interface Tag {
	name: string;
	description: string;
}

// 参数
interface Parameter {
	name: string;
	in: string;
	description: string;
	required: boolean;
	schema: Schema;
}

type ContentType =
	| 'application/json'
	| 'application/x-www-form-urlencoded'
	| 'multipart/form-data'
	| 'text/plain'
	| 'text/html'
	| 'text/xml'
	| 'application/xml'
	| 'application/octet-stream'
	| '*/*';

interface RequestBody {
	required?: boolean;
	description?: string;
	content: Record<ContentType, SchemaProperty>;
}

// 路径
interface PathItem {
	tags: string[];
	summary: string;
	description: string;
	operationId: string;
	parameters: Parameter[];
	requestBody: RequestBody;
	responses: Record<'200' | '401', Response>;
}

// 响应
interface Response {
	description: string;
	content: Record<ContentType, SchemaProperty>;
}

// 组件
interface Components {
	schemas: Record<string, Schema>;
	securitySchemes: {
		apiKey: {
			type: string;
			in: string;
			name: string;
		};
	};
}

// 信息
type Info = {
	title: string;
	description: string;
	contact: Contact;
	version: string;
};

// API文档
interface ApiDoc {
	openapi: string;
	info: Info;
	servers: Server[];
	security: Security[];
	tags: Tag[];
	paths: Record<string, Record<string, PathItem>>;
	components: Components;
}

const typeMapping = {
	string: 'string',
	number: 'number',
	integer: 'number',
	boolean: 'boolean',
	array: 'Array<T>',
	object: 'Record<string, any>',
	null: 'null',
	// 特殊格式映射
	'string:date': 'Date',
	'string:date-time': 'Date',
	'string:binary': 'File',
	'string:byte': 'string',
	'string:email': 'string',
	'string:uuid': 'string',
	'string:uri': 'string',
	'number:float': 'number',
	'number:double': 'number',
	'integer:int32': 'number',
	'integer:int64': 'number',
};

export type {
	Response,
	ExistingType,
	ExistingApi,
	Schema,
	SchemaProperty,
	ApiDoc,
	ExistingProperty,
	PathItem,
	ExistingModule,
	Parameter,
	RequestBody,
};
export { typeMapping };
