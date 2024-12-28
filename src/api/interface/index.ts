// 请求响应参数（不包含data）
export interface Result {
	code: string;
	msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = unknown> extends Result {
	data: T;
}

// 分页响应参数
export interface ResPage<T> {
	list: T[];
	pageNum: number;
	pageSize: number;
	total: number;
}

// 分页请求参数
export interface ReqPage {
	pageNum: number;
	pageSize: number;
}

// 文件上传模块
export namespace Upload {
	export interface ResFileUrl {
		fileUrl: string;
	}
}

// 登录模块
export namespace Login {
	export interface ReqLoginForm {
		uuid: string; // 唯一标识
		rememberMe: boolean; // 记住密码
		grantType: string; // 授权类型
		tenantId: string; // 租户id
		username: string; // 用户名
		password: string; // 密码
		code: string; // 验证码
		clientId: string; // 客户端id
	}
	export interface ResLogin {
		access_token: string;
	}
	export interface ResAuthButtons {
		[key: string]: string[];
	}
}

// 用户管理模块
export namespace User {
	export interface ReqUserParams extends ReqPage {
		username: string;
		gender: number;
		idCard: string;
		email: string;
		address: string;
		createTime: string[];
		status: number;
	}
	export interface ResUserList {
		id: string;
		username: string;
		gender: number;
		user: { detail: { age: number } };
		idCard: string;
		email: string;
		address: string;
		createTime: string;
		status: number;
		avatar: string;
		photo: unknown[];
		children?: ResUserList[];
	}
	export interface ResStatus {
		userLabel: string;
		userValue: number;
	}
	export interface ResGender {
		genderLabel: string;
		genderValue: number;
	}
	export interface ResDepartment {
		id: string;
		name: string;
		children?: ResDepartment[];
	}
	export interface ResRole {
		id: string;
		name: string;
		children?: ResDepartment[];
	}
}
