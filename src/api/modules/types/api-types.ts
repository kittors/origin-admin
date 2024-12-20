// 自动生成的类型定义

/**
 * 响应信息主体
 */
export interface RVoid {
	code?: number;
	msg?: string;
	data?: Record<string, unknown>;
}

/**
 * 模型请求对象
 */
export interface ModelBo {
	id: string; // 模型id
	name: string; // 模型名称
	key: string; // 模型标识key
	categoryCode: string; // 模型分类
	xml: string; // 模型XML
	svg: string; // 模型SVG图片
	description?: string; // 备注
}

/**
 * 请假业务对象 test_leave
 */
export interface TestLeaveBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	id: number; // 主键
	leaveType: string; // 请假类型
	startDate: string; // 开始时间
	endDate: string; // 结束时间
	leaveDays: number; // 请假天数
	startLeaveDays?: number; // 开始时间
	endLeaveDays?: number; // 结束时间
	remark?: string; // 请假原因
	status?: string; // 状态
}

/**
 * 响应信息主体
 */
export interface RTestLeaveVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 请假视图对象 test_leave
 */
export interface TestLeaveVo {
	id?: number; // 主键
	leaveType?: string; // 请假类型
	startDate?: string; // 开始时间
	endDate?: string; // 结束时间
	leaveDays?: number; // 请假天数
	remark?: string; // 备注
	status?: string; // 状态
}

/**
 * 表单管理业务对象 wf_form_manage
 */
export interface WfFormManageBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	id: number; // 主键
	formName: string; // 表单名称
	formType: string; // 表单类型
	router: string; // 路由地址/表单ID
	remark?: string; // 备注
}

/**
 * 流程分类业务对象 wf_category
 */
export interface WfCategoryBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	id: number; // 主键
	categoryName: string; // 分类名称
	categoryCode: string; // 分类编码
	parentId: number; // 父级id
	sortNum?: number; // 排序
}

/**
 * 业务表 gen_table
 */
export interface GenTable {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	tableId?: number; // 编号
	dataName: string; // 数据源名称
	tableName: string; // 表名称
	tableComment: string; // 表描述
	subTableName?: string; // 关联父表的表名
	subTableFkName?: string; // 本表关联父表的外键名
	className: string; // 实体类名称(首字母大写)
	tplCategory?: string; // 使用的模板（crud单表操作 tree树表操作 sub主子表操作）
	packageName: string; // 生成包路径
	moduleName: string; // 生成模块名
	businessName: string; // 生成业务名
	functionName: string; // 生成功能名
	functionAuthor: string; // 生成作者
	genType?: string; // 生成代码方式（0zip压缩包 1自定义路径）
	genPath?: string; // 生成路径（不填默认项目路径）
	pkColumn?: unknown;
	columns?: GenTableColumn[]; // 表列信息
	options?: string; // 其它生成选项
	remark?: string; // 备注
	treeCode?: string; // 树编码字段
	treeParentCode?: string; // 树父编码字段
	treeName?: string; // 树名称字段
	menuIds?: number[];
	parentMenuId?: number; // 上级菜单ID字段
	parentMenuName?: string; // 上级菜单名称字段
	tree?: boolean;
	crud?: boolean;
}

/**
 * 代码生成业务字段表 gen_table_column
 */
export interface GenTableColumn {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	columnId?: number; // 编号
	tableId?: number; // 归属表编号
	columnName?: string; // 列名称
	columnComment?: string; // 列描述
	columnType?: string; // 列类型
	javaType?: string; // JAVA类型
	javaField: string; // JAVA字段名
	isPk?: string; // 是否主键（1是）
	isIncrement?: string; // 是否自增（1是）
	isRequired?: string; // 是否必填（1是）
	isInsert?: string; // 是否为插入字段（1是）
	isEdit?: string; // 是否编辑字段（1是）
	isList?: string; // 是否列表字段（1是）
	isQuery?: string; // 是否查询字段（1是）
	queryType?: string; // 查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）
	htmlType?: string; // 显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）
	dictType?: string; // 字典类型
	sort?: number; // 排序
	required?: boolean;
	usableColumn?: boolean;
	superColumn?: boolean;
	list?: boolean;
	increment?: boolean;
	capJavaField?: string;
	pk?: boolean;
	insert?: boolean;
	edit?: boolean;
	query?: boolean;
}

/**
 * 用户信息业务对象 sys_user
 */
export interface SysUserBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	userId?: number; // 用户ID
	deptId?: number; // 部门ID
	userName: string; // 用户账号
	nickName: string; // 用户昵称
	userType?: string; // 用户类型（sys_user系统用户）
	email?: string; // 用户邮箱
	phonenumber?: string; // 手机号码
	sex?: string; // 用户性别（0男 1女 2未知）
	password?: string; // 密码
	status?: string; // 帐号状态（0正常 1停用）
	remark?: string; // 备注
	roleIds?: number[]; // 角色组
	postIds?: number[]; // 岗位组
	roleId?: number; // 数据权限 当前角色ID
	excludeUserIds?: string; // 排除不查询的用户(工作流用)
	superAdmin?: boolean;
}

/**
 * 个人信息业务处理
 */
export interface SysUserProfileBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	nickName?: string; // 用户昵称
	email?: string; // 用户邮箱
	phonenumber?: string; // 手机号码
	sex?: string; // 用户性别（0男 1女 2未知）
}

/**
 * 用户密码修改bo
 */
export interface SysUserPasswordBo {
	oldPassword: string; // 旧密码
	newPassword: string; // 新密码
}

/**
 * 租户业务对象 sys_tenant
 */
export interface SysTenantBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	id: number; // id
	tenantId?: string; // 租户编号
	contactUserName: string; // 联系人
	contactPhone: string; // 联系电话
	companyName: string; // 企业名称
	username: string; // 用户名（创建系统用户）
	password: string; // 密码（创建系统用户）
	licenseNumber?: string; // 统一社会信用代码
	address?: string; // 地址
	domain?: string; // 域名
	intro?: string; // 企业简介
	remark?: string; // 备注
	packageId: number; // 租户套餐编号
	expireTime?: string; // 过期时间
	accountCount?: number; // 用户数量（-1不限制）
	status?: string; // 租户状态（0正常 1停用）
}

/**
 * 租户套餐业务对象 sys_tenant_package
 */
export interface SysTenantPackageBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	packageId: number; // 租户套餐id
	packageName: string; // 套餐名称
	menuIds?: number[]; // 关联菜单id
	remark?: string; // 备注
	menuCheckStrictly?: boolean; // 菜单树选择项是否关联显示
	status?: string; // 状态（0正常 1停用）
}

/**
 * 角色信息业务对象 sys_role
 */
export interface SysRoleBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	roleId?: number; // 角色ID
	roleName: string; // 角色名称
	roleKey: string; // 角色权限字符串
	roleSort: number; // 显示顺序
	dataScope?: string; // 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）
	menuCheckStrictly?: boolean; // 菜单树选择项是否关联显示
	deptCheckStrictly?: boolean; // 部门树选择项是否关联显示
	status?: string; // 角色状态（0正常 1停用）
	remark?: string; // 备注
	menuIds?: number[]; // 菜单组
	deptIds?: number[]; // 部门组（数据权限）
	superAdmin?: boolean;
}

/**
 * 用户和角色关联 sys_user_role
 */
export interface SysUserRole {
	userId?: number; // 用户ID
	roleId?: number; // 角色ID
}

/**
 * 岗位信息业务对象 sys_post
 */
export interface SysPostBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	postId?: number; // 岗位ID
	deptId: number; // 部门id（单部门）
	belongDeptId?: number; // 归属部门id（部门树）
	postCode: string; // 岗位编码
	postName: string; // 岗位名称
	postCategory?: string; // 岗位类别编码
	postSort: number; // 显示顺序
	status?: string; // 状态（0正常 1停用）
	remark?: string; // 备注
}

/**
 * 通知公告业务对象 sys_notice
 */
export interface SysNoticeBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	noticeId?: number; // 公告ID
	noticeTitle: string; // 公告标题
	noticeType?: string; // 公告类型（1通知 2公告）
	noticeContent?: string; // 公告内容
	status?: string; // 公告状态（0正常 1关闭）
	remark?: string; // 备注
	createByName?: string; // 创建人名称
}

/**
 * 菜单权限业务对象 sys_menu
 */
export interface SysMenuBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	menuId?: number; // 菜单ID
	parentId?: number; // 父菜单ID
	menuName: string; // 菜单名称
	orderNum: number; // 显示顺序
	path?: string; // 路由地址
	component?: string; // 组件路径
	queryParam?: string; // 路由参数
	isFrame?: string; // 是否为外链（0是 1否）
	isCache?: string; // 是否缓存（0缓存 1不缓存）
	menuType: string; // 菜单类型（M目录 C菜单 F按钮）
	visible?: string; // 显示状态（0显示 1隐藏）
	status?: string; // 菜单状态（0正常 1停用）
	perms?: string; // 权限标识
	icon?: string; // 菜单图标
	remark?: string; // 备注
}

/**
 * 字典类型业务对象 sys_dict_type
 */
export interface SysDictTypeBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	dictId?: number; // 字典主键
	dictName: string; // 字典名称
	dictType: string; // 字典类型
	remark?: string; // 备注
}

/**
 * 字典数据业务对象 sys_dict_data
 */
export interface SysDictDataBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	dictCode?: number; // 字典编码
	dictSort?: number; // 字典排序
	dictLabel: string; // 字典标签
	dictValue: string; // 字典键值
	dictType: string; // 字典类型
	cssClass?: string; // 样式属性（其他样式扩展）
	listClass?: string; // 表格回显样式
	isDefault?: string; // 是否默认（Y是 N否）
	remark?: string; // 备注
}

/**
 * 部门业务对象 sys_dept
 */
export interface SysDeptBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	deptId?: number; // 部门id
	parentId?: number; // 父部门ID
	deptName: string; // 部门名称
	deptCategory?: string; // 部门类别编码
	orderNum: number; // 显示顺序
	leader?: number; // 负责人
	phone?: string; // 联系电话
	email?: string; // 邮箱
	status?: string; // 部门状态（0正常 1停用）
}

/**
 * 参数配置业务对象 sys_config
 */
export interface SysConfigBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	configId?: number; // 参数主键
	configName: string; // 参数名称
	configKey: string; // 参数键名
	configValue: string; // 参数键值
	configType?: string; // 系统内置（Y是 N否）
	remark?: string; // 备注
}

/**
 * 授权管理业务对象 sys_client
 */
export interface SysClientBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	id: number; // id
	clientId?: string; // 客户端id
	clientKey: string; // 客户端key
	clientSecret: string; // 客户端秘钥
	grantTypeList: string[]; // 授权类型
	grantType?: string; // 授权类型
	deviceType?: string; // 设备类型
	activeTimeout?: number; // token活跃超时时间
	timeout?: number; // token固定超时时间
	status?: string; // 状态（0正常 1停用）
}

/**
 * 对象存储配置业务对象 sys_oss_config
 */
export interface SysOssConfigBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	ossConfigId: number; // 主键
	configKey: string; // 配置key
	accessKey: string; // accessKey
	secretKey: string; // 秘钥
	bucketName: string; // 桶名称
	prefix?: string; // 前缀
	endpoint: string; // 访问站点
	domain?: string; // 自定义域名
	isHttps?: string; // 是否https（Y=是,N=否）
	status?: string; // 是否默认（0=是,1=否）
	region?: string; // 域
	ext1?: string; // 扩展字段
	remark?: string; // 备注
	accessPolicy: string; // 桶权限类型(0private 1public 2custom)
}

/**
 * 测试树表业务对象 test_tree
 */
export interface TestTreeBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	id: number; // 主键
	parentId?: number; // 父ID
	deptId: number; // 部门id
	userId: number; // 用户id
	treeName: string; // 树节点名
}

/**
 * 测试单表业务对象 test_demo
 */
export interface TestDemoBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	id: number; // 主键
	deptId: number; // 部门id
	userId: number; // 用户id
	orderNum: number; // 排序号
	testKey: string; // key键
	value: string; // 值
}

/**
 * 终转办务请求对象
 */
export interface TransmitBo {
	taskId: string; // 任务id
	userId: string; // 转办人id
	comment?: string; // 审批意见
}

/**
 * 终止任务请求对象
 */
export interface TerminationBo {
	taskId: string; // 任务id
	comment?: string; // 审批意见
}

/**
 * 启动流程对象
 */
export interface StartProcessBo {
	businessKey: string; // 业务唯一值id
	tableName: string; // 表名
	variables?: Record<string, unknown>; // 流程变量，前端会提交一个元素{'entity': {业务详情数据对象}}
}

/**
 * 响应信息主体
 */
export interface RMapStringObject {
	code?: number;
	msg?: string;
	data?: Record<string, unknown>;
}

/**
 * 减签参数请求
 */
export interface DeleteMultiBo {
	taskId: string; // 任务ID
	taskIds: string[]; // 减签人员
	executionIds: string[]; // 执行id
	assigneeIds: number[]; // 人员id
	assigneeNames: string[]; // 人员名称
}

/**
 * 委派任务请求对象
 */
export interface DelegateBo {
	userId: string; // 委派人id
	nickName: string; // 委派人名称
	taskId: string; // 任务id
}

/**
 * 办理任务请求对象
 */
export interface CompleteTaskBo {
	taskId: string; // 任务id
	fileId?: string; // 附件id
	wfCopyList?: WfCopy[]; // 抄送人员
	messageType?: string[]; // 消息类型
	message?: string; // 办理意见
	variables?: Record<string, unknown>; // 流程变量
}

/**
 * 抄送
 */
export interface WfCopy {
	userId?: number; // 用户id
	userName?: string; // 用户名称
}

/**
 * 驳回参数请求
 */
export interface BackProcessBo {
	taskId: string; // 任务ID
	messageType?: string[]; // 消息类型
	targetActivityId: string; // 驳回的节点id(目前未使用，直接驳回到申请人)
	message?: string; // 办理意见
}

/**
 * 响应信息主体
 */
export interface RString {
	code?: number;
	msg?: string;
	data?: string;
}

/**
 * 加签参数请求
 */
export interface AddMultiBo {
	taskId: string; // 任务ID
	assignees: number[]; // 加签人员id
	assigneeNames: string[]; // 加签人员名称
}

/**
 * 任务催办
 */
export interface TaskUrgingBo {
	processInstanceId?: string; // 流程实例id
	messageType?: string[]; // 消息类型
	message?: string; // 催办内容（为空默认系统内置信息）
}

/**
 * 流程实例作废请求对象
 */
export interface ProcessInvalidBo {
	businessKey: string; // 业务id
	deleteReason?: string; // 作废原因
}

/**
 * 流程定义配置业务对象 wf_form_definition
 */
export interface WfDefinitionConfigBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	id: number; // 主键
	tableName: string; // 表名
	definitionId: string; // 流程定义ID
	processKey: string; // 流程KEY
	version: number; // 流程版本
	remark?: string; // 备注
}

/**
 * 用户头像信息
 */
export interface AvatarVo {
	imgUrl?: string; // 头像地址
}

/**
 * 响应信息主体
 */
export interface RAvatarVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 响应信息主体
 */
export interface RSysOssUploadVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 上传对象信息
 */
export interface SysOssUploadVo {
	url?: string; // URL地址
	fileName?: string; // 文件名
	ossId?: string; // 对象存储主键
}

/**
 * 操作日志记录业务对象 sys_oper_log
 */
export interface SysOperLogBo {
	operId?: number; // 日志主键
	tenantId?: string; // 租户编号
	title?: string; // 模块标题
	businessType?: number; // 业务类型（0其它 1新增 2修改 3删除）
	businessTypes?: number[]; // 业务类型数组
	method?: string; // 方法名称
	requestMethod?: string; // 请求方式
	operatorType?: number; // 操作类别（0其它 1后台用户 2手机端用户）
	operName?: string; // 操作人员
	deptName?: string; // 部门名称
	operUrl?: string; // 请求URL
	operIp?: string; // 主机地址
	operLocation?: string; // 操作地点
	operParam?: string; // 请求参数
	jsonResult?: string; // 返回参数
	status?: number; // 操作状态（0正常 1异常）
	errorMsg?: string; // 错误消息
	operTime?: string; // 操作时间
	costTime?: number; // 消耗时间
	params?: Record<string, unknown>; // 请求参数
}

/**
 * 系统访问记录业务对象 sys_logininfor
 */
export interface SysLogininforBo {
	infoId?: number; // 访问ID
	tenantId?: string; // 租户编号
	userName?: string; // 用户账号
	clientKey?: string; // 客户端
	deviceType?: string; // 设备类型
	ipaddr?: string; // 登录IP地址
	loginLocation?: string; // 登录地点
	browser?: string; // 浏览器类型
	os?: string; // 操作系统
	status?: string; // 登录状态（0成功 1失败）
	msg?: string; // 提示消息
	loginTime?: string; // 访问时间
	params?: Record<string, unknown>; // 请求参数
}

/**
 * 带有下拉选的Excel导出
 */
export interface ExportDemoVo {
	nickName: string; // 用户昵称
	userStatus: string; // 用户类型
 </p>
 使用ExcelEnumFormat注解需要进行下拉选的部分
	gender: string; // 性别
 <p>
 使用ExcelDictFormat注解需要进行下拉选的部分
	phoneNumber: string; // 手机号
	email: string; // Email
	province: string; // 省
 <p>
 级联下拉，仅判断是否选了
	provinceId: number; // 数据库中的省ID
 </p>
 处理完毕后再判断是否市正确的值
	city: string; // 市
 <p>
 级联下拉
	cityId: number; // 数据库中的市ID
	area: string; // 县
 <p>
 级联下拉
	areaId: number; // 数据库中的县ID
}

/**
 * 三方登录对象
 */
export interface SocialLoginBody {
	clientId: string; // 客户端id
	grantType: string; // 授权类型
	tenantId?: string; // 租户ID
	code?: string; // 验证码
	uuid?: string; // 唯一标识
	source: string; // 第三方登录平台
	socialCode: string; // 第三方登录code
	socialState: string; // 第三方登录socialState
}

/**
 * 用户注册对象
 */
export interface RegisterBody {
	clientId: string; // 客户端id
	grantType: string; // 授权类型
	tenantId?: string; // 租户ID
	code?: string; // 验证码
	uuid?: string; // 唯一标识
	username: string; // 用户名
	password: string; // 用户密码
	userType?: string;
}

/**
 * 登录验证信息
 */
export interface LoginVo {
	scope?: string; // 令牌权限
	openid?: string; // 用户 openid
	access_token?: string; // 授权令牌
	refresh_token?: string; // 刷新令牌
	expire_in?: number; // 授权令牌 access_token 的有效期
	refresh_expire_in?: number; // 刷新令牌 refresh_token 的有效期
	client_id?: string; // 应用id
}

/**
 * 响应信息主体
 */
export interface RLoginVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 响应信息主体
 */
export interface RListWfTaskBackNode {
	code?: number;
	msg?: string;
	data?: WfTaskBackNode[];
}

/**
 * 节点驳回记录 wf_task_back_node
 */
export interface WfTaskBackNode {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	tenantId?: string; // 租户编号
	id?: number; // 主键
	instanceId?: string; // 实例id
	nodeId?: string; // 节点id
	nodeName?: string; // 节点名称
	orderNo?: number; // 排序
	taskType?: string; // 节点类型
	assignee?: string; // 办理人
}

/**
 * 参与者
 */
export interface ParticipantVo {
	groupIds?: number[]; // 组id（角色id）
	candidate?: number[]; // 候选人id（用户id） 当组id不为空时，将组内人员查出放入candidate
	candidateName?: string[]; // 候选人名称（用户名称） 当组id不为空时，将组内人员查出放入candidateName
	claim?: boolean; // 是否认领标识
 当为空时默认当前任务不需要认领
 当为true时当前任务说明为候选模式并且有人已经认领了任务可以归还，
 当为false时当前任务说明为候选模式该任务未认领，
}

/**
 * 响应信息主体
 */
export interface RTaskVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 任务视图
 */
export interface TaskVo {
	id?: string; // 任务id
	name?: string; // 任务名称
	description?: string; // 描述
	priority?: number; // 优先级
	owner?: string; // 负责此任务的人员的用户id
	assignee?: number; // 办理人id
	assigneeName?: string; // 办理人
	processInstanceId?: string; // 流程实例id
	executionId?: string; // 执行id
	taskDefinitionId?: string; // 无用
	processDefinitionId?: string; // 流程定义id
	createTime?: string; // 创建时间
	startTime?: string; // 已办任务-创建时间
	endTime?: string; // 结束时间
	taskDefinitionKey?: string; // 节点id
	dueDate?: string; // 任务截止日期
	category?: string; // 流程类别
	parentTaskId?: string; // 父级任务id
	tenantId?: string; // 租户id
	claimTime?: string; // 认领时间
	businessStatus?: string; // 流程状态
	businessStatusName?: string; // 流程状态
	processDefinitionName?: string; // 流程定义名称
	processDefinitionKey?: string; // 流程定义key
	processDefinitionVersion?: number; // 流程定义版本
	participantVo?: unknown;
	multiInstance?: boolean; // 是否会签
	businessKey?: string; // 业务id
	wfDefinitionConfigVo?: unknown;
	wfNodeConfigVo?: unknown;
}

/**
 * 流程定义配置视图对象 wf_definition_config
 */
export interface WfDefinitionConfigVo {
	id?: number; // 主键
	tableName?: string; // 表名
	definitionId?: string; // 流程定义ID
	processKey?: string; // 流程KEY
	version?: number; // 流程版本
	remark?: string; // 备注
	wfFormManageVo?: unknown;
}

/**
 * 表单管理视图对象 wf_form_manage
 */
export interface WfFormManageVo {
	id?: number; // 主键
	formName?: string; // 表单名称
	formType?: string; // 表单类型
	formTypeName?: string; // 表单类型名称
	router?: string; // 路由地址/表单ID
	remark?: string; // 备注
}

/**
 * 节点配置视图对象 wf_node_config
 */
export interface WfNodeConfigVo {
	id?: number; // 主键
	formId?: number; // 表单id
	formType?: string; // 表单类型
	nodeName?: string; // 节点名称
	nodeId?: string; // 节点id
	definitionId?: string; // 流程定义id
	applyUserTask?: string; // 是否为申请人节点 （0是 1否）
	wfFormManageVo?: unknown;
}

/**
 * 任务请求对象
 */
export interface TaskBo {
	name?: string; // 任务名称
	processDefinitionName?: string; // 流程定义名称
	processDefinitionKey?: string; // 流程定义key
}

/**
 * 分页查询实体类
 */
export interface PageQuery {
	pageSize?: number; // 分页大小
	pageNum?: number; // 当前页数
	orderByColumn?: string; // 排序列
	isAsc?: string; // 排序的方向desc或者asc
	firstNum?: number;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoTaskVo {
	total?: number; // 总记录数
	rows?: TaskVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RListTaskVo {
	code?: number;
	msg?: string;
	data?: TaskVo[];
}

/**
 * 响应信息主体
 */
export interface RListVariableVo {
	code?: number;
	msg?: string;
	data?: VariableVo[];
}

/**
 * 流程变量
 */
export interface VariableVo {
	key?: string; // 变量key
	value?: string; // 变量值
}

/**
 * 流程实例请求对象
 */
export interface ProcessInstanceBo {
	name?: string; // 流程名称
	key?: string; // 流程key
	startUserId?: string; // 任务发起人
	businessKey?: string; // 业务id
	categoryCode?: string; // 模型分类
}

/**
 * 流程实例视图
 */
export interface ProcessInstanceVo {
	id?: string; // 流程实例id
	processDefinitionId?: string; // 流程定义id
	processDefinitionName?: string; // 流程定义名称
	processDefinitionKey?: string; // 流程定义key
	processDefinitionVersion?: number; // 流程定义版本
	deploymentId?: string; // 部署id
	businessKey?: string; // 业务id
	isSuspended?: boolean; // 是否挂起
	tenantId?: string; // 租户id
	startTime?: string; // 启动时间
	endTime?: string; // 结束时间
	startUserId?: string; // 启动人id
	businessStatus?: string; // 流程状态
	businessStatusName?: string; // 流程状态
	taskVoList?: TaskVo[]; // 待办任务集合
	wfNodeConfigVo?: unknown;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoProcessInstanceVo {
	total?: number; // 总记录数
	rows?: ProcessInstanceVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 流程审批记录视图
 */
export interface ActHistoryInfoVo {
	id?: string; // 任务id
	taskDefinitionKey?: string; // 节点id
	name?: string; // 任务名称
	processInstanceId?: string; // 流程实例id
	version?: number; // 版本
	startTime?: string; // 开始时间
	endTime?: string; // 结束时间
	runDuration?: string; // 运行时长
	status?: string; // 状态
	statusName?: string; // 状态
	assignee?: string; // 办理人id
	nickName?: string; // 办理人名称
	owner?: string; // 办理人id
	commentId?: string; // 审批信息id
	comment?: string; // 审批信息
	attachmentList?: Attachment[]; // 审批附件
}

/**
 * 
 */
export interface Attachment {
	name?: string;
	id?: string;
	type?: string;
	time?: string;
	description?: string;
	processInstanceId?: string;
	url?: string;
	userId?: string;
	contentId?: string;
	taskId?: string;
}

/**
 * 响应信息主体
 */
export interface RListActHistoryInfoVo {
	code?: number;
	msg?: string;
	data?: ActHistoryInfoVo[];
}

/**
 * 流程定义请求对象
 */
export interface ProcessDefinitionBo {
	key?: string; // 流程定义名称key
	name?: string; // 流程定义名称
	categoryCode?: string; // 模型分类
}

/**
 * 流程定义视图
 */
export interface ProcessDefinitionVo {
	id?: string; // 流程定义id
	name?: string; // 流程定义名称
	key?: string; // 流程定义标识key
	version?: number; // 流程定义版本
	suspensionState?: number; // 流程定义挂起或激活 1激活 2挂起
	resourceName?: string; // 流程xml名称
	diagramResourceName?: string; // 流程图片名称
	deploymentId?: string; // 流程部署id
	deploymentTime?: string; // 流程部署时间
	wfDefinitionConfigVo?: unknown;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoProcessDefinitionVo {
	total?: number; // 总记录数
	rows?: ProcessDefinitionVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RListProcessDefinitionVo {
	code?: number;
	msg?: string;
	data?: ProcessDefinitionVo[];
}

/**
 * 
 */
export interface Model {
	name?: string;
	key?: string;
	id?: string;
	version?: number;
	category?: string;
	metaInfo?: string;
	deploymentId?: string;
	createTime?: string;
	tenantId?: string;
	lastUpdateTime?: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoModel {
	total?: number; // 总记录数
	rows?: Model[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 模型视图对象
 */
export interface ModelVo {
	id?: string; // 模型id
	name?: string; // 模型名称
	key?: string; // 模型标识key
	categoryCode?: string; // 模型分类
	xml?: string; // 模型XML
	description?: string; // 备注
}

/**
 * 响应信息主体
 */
export interface RModelVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoTestLeaveVo {
	total?: number; // 总记录数
	rows?: TestLeaveVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RWfFormManageVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoWfFormManageVo {
	total?: number; // 总记录数
	rows?: WfFormManageVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RListWfFormManageVo {
	code?: number;
	msg?: string;
	data?: WfFormManageVo[];
}

/**
 * 响应信息主体
 */
export interface RListWfDefinitionConfigVo {
	code?: number;
	msg?: string;
	data?: WfDefinitionConfigVo[];
}

/**
 * 响应信息主体
 */
export interface RWfDefinitionConfigVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 响应信息主体
 */
export interface RWfCategoryVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 流程分类视图对象 wf_category
 */
export interface WfCategoryVo {
	id?: number; // 主键
	categoryName?: string; // 分类名称
	categoryCode?: string; // 分类编码
	parentId?: number; // 父级id
	sortNum?: number; // 排序
}

/**
 * 响应信息主体
 */
export interface RListWfCategoryVo {
	code?: number;
	msg?: string;
	data?: WfCategoryVo[];
}

/**
 * 响应信息主体
 */
export interface RMapStringString {
	code?: number;
	msg?: string;
	data?: Record<string, unknown>;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoGenTable {
	total?: number; // 总记录数
	rows?: GenTable[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RObject {
	code?: number;
	msg?: string;
	data?: Record<string, unknown>;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoGenTableColumn {
	total?: number; // 总记录数
	rows?: GenTableColumn[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 用户个人信息
 */
export interface ProfileVo {
	user?: unknown;
	roleGroup?: string; // 用户所属角色组
	postGroup?: string; // 用户所属岗位组
}

/**
 * 响应信息主体
 */
export interface RProfileVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 角色信息视图对象 sys_role
 */
export interface SysRoleVo {
	roleId?: number; // 角色ID
	roleName?: string; // 角色名称
	roleKey?: string; // 角色权限字符串
	roleSort?: number; // 显示顺序
	dataScope?: string; // 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）
	menuCheckStrictly?: boolean; // 菜单树选择项是否关联显示
	deptCheckStrictly?: boolean; // 部门树选择项是否关联显示
	status?: string; // 角色状态（0正常 1停用）
	remark?: string; // 备注
	createTime?: string; // 创建时间
	flag?: boolean; // 用户是否存在此角色标识 默认不存在
	superAdmin?: boolean;
}

/**
 * 用户信息视图对象 sys_user
 */
export interface SysUserVo {
	userId?: number; // 用户ID
	tenantId?: string; // 租户ID
	deptId?: number; // 部门ID
	userName?: string; // 用户账号
	nickName?: string; // 用户昵称
	userType?: string; // 用户类型（sys_user系统用户）
	email?: string; // 用户邮箱
	phonenumber?: string; // 手机号码
	sex?: string; // 用户性别（0男 1女 2未知）
	avatar?: number; // 头像地址
	status?: string; // 帐号状态（0正常 1停用）
	loginIp?: string; // 最后登录IP
	loginDate?: string; // 最后登录时间
	remark?: string; // 备注
	createTime?: string; // 创建时间
	deptName?: string; // 部门名
	roles?: SysRoleVo[]; // 角色对象
	roleIds?: number[]; // 角色组
	postIds?: number[]; // 岗位组
	roleId?: number; // 数据权限 当前角色ID
}

/**
 * 响应信息主体
 */
export interface RListSysUserVo {
	code?: number;
	msg?: string;
	data?: SysUserVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysUserVo {
	total?: number; // 总记录数
	rows?: SysUserVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RUserInfoVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 登录用户信息
 */
export interface UserInfoVo {
	user?: unknown;
	permissions?: string[]; // 菜单权限
	roles?: string[]; // 角色权限
}

/**
 * 响应信息主体
 */
export interface RListTreeLong {
	code?: number;
	msg?: string;
	data?: TreeLong[];
}

/**
 * 
 */
export interface TreeLong {
	name?: Record<string, unknown>;
	id?: number;
	parentId?: number;
	config?: unknown;
	weight?: Record<string, unknown>;
	empty?: boolean;
}

/**
 * 
 */
export interface TreeNodeConfig {
	idKey?: string;
	parentIdKey?: string;
	weightKey?: string;
	nameKey?: string;
	childrenKey?: string;
	deep?: number;
}

/**
 * 响应信息主体
 */
export interface RSysUserInfoVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 岗位信息视图对象 sys_post
 */
export interface SysPostVo {
	postId?: number; // 岗位ID
	deptId?: number; // 部门id
	postCode?: string; // 岗位编码
	postName?: string; // 岗位名称
	postCategory?: string; // 岗位类别编码
	postSort?: number; // 显示顺序
	status?: string; // 状态（0正常 1停用）
	remark?: string; // 备注
	createTime?: string; // 创建时间
	deptName?: string; // 部门名
}

/**
 * 用户信息
 */
export interface SysUserInfoVo {
	user?: unknown;
	roleIds?: number[]; // 角色ID列表
	roles?: SysRoleVo[]; // 角色列表
	postIds?: number[]; // 岗位ID列表
	posts?: SysPostVo[]; // 岗位列表
}

/**
 * 响应信息主体
 */
export interface RSysTenantVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 租户视图对象 sys_tenant
 */
export interface SysTenantVo {
	id?: number; // id
	tenantId?: string; // 租户编号
	contactUserName?: string; // 联系人
	contactPhone?: string; // 联系电话
	companyName?: string; // 企业名称
	licenseNumber?: string; // 统一社会信用代码
	address?: string; // 地址
	domain?: string; // 域名
	intro?: string; // 企业简介
	remark?: string; // 备注
	packageId?: number; // 租户套餐编号
	expireTime?: string; // 过期时间
	accountCount?: number; // 用户数量（-1不限制）
	status?: string; // 租户状态（0正常 1停用）
}

/**
 * 响应信息主体
 */
export interface RSysTenantPackageVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 租户套餐视图对象 sys_tenant_package
 */
export interface SysTenantPackageVo {
	packageId?: number; // 租户套餐id
	packageName?: string; // 套餐名称
	menuIds?: string; // 关联菜单id
	remark?: string; // 备注
	menuCheckStrictly?: boolean; // 菜单树选择项是否关联显示
	status?: string; // 状态（0正常 1停用）
}

/**
 * 响应信息主体
 */
export interface RListSysTenantPackageVo {
	code?: number;
	msg?: string;
	data?: SysTenantPackageVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysTenantPackageVo {
	total?: number; // 总记录数
	rows?: SysTenantPackageVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysTenantVo {
	total?: number; // 总记录数
	rows?: SysTenantVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RListSysSocialVo {
	code?: number;
	msg?: string;
	data?: SysSocialVo[];
}

/**
 * 社会化关系视图对象 sys_social
 */
export interface SysSocialVo {
	id?: number; // 主键
	userId?: number; // 用户ID
	tenantId?: string; // 租户ID
	authId?: string; // 的唯一ID
	source?: string; // 用户来源
	accessToken?: string; // 用户的授权令牌
	expireIn?: number; // 用户的授权令牌的有效期，部分平台可能没有
	refreshToken?: string; // 刷新令牌，部分平台可能没有
	openId?: string; // 用户的 open id
	userName?: string; // 授权的第三方账号
	nickName?: string; // 授权的第三方昵称
	email?: string; // 授权的第三方邮箱
	avatar?: string; // 授权的第三方头像地址
	accessCode?: string; // 平台的授权信息，部分平台可能没有
	unionId?: string; // 用户的 unionid
	scope?: string; // 授予的权限，部分平台可能没有
	tokenType?: string; // 个别平台的授权信息，部分平台可能没有
	idToken?: string; // id token，部分平台可能没有
	macAlgorithm?: string; // 小米平台用户的附带属性，部分平台可能没有
	macKey?: string; // 小米平台用户的附带属性，部分平台可能没有
	code?: string; // 用户的授权code，部分平台可能没有
	oauthToken?: string; // Twitter平台用户的附带属性，部分平台可能没有
	oauthTokenSecret?: string; // Twitter平台用户的附带属性，部分平台可能没有
	createTime?: string; // 创建时间
}

/**
 * 响应信息主体
 */
export interface RSysRoleVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 响应信息主体
 */
export interface RListSysRoleVo {
	code?: number;
	msg?: string;
	data?: SysRoleVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysRoleVo {
	total?: number; // 总记录数
	rows?: SysRoleVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 角色部门列表树信息
 */
export interface DeptTreeSelectVo {
	checkedKeys?: number[]; // 选中部门列表
	depts?: TreeLong[]; // 下拉树结构列表
}

/**
 * 响应信息主体
 */
export interface RDeptTreeSelectVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 响应信息主体
 */
export interface RSysPostVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 响应信息主体
 */
export interface RListSysPostVo {
	code?: number;
	msg?: string;
	data?: SysPostVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysPostVo {
	total?: number; // 总记录数
	rows?: SysPostVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RSysNoticeVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 通知公告视图对象 sys_notice
 */
export interface SysNoticeVo {
	noticeId?: number; // 公告ID
	noticeTitle?: string; // 公告标题
	noticeType?: string; // 公告类型（1通知 2公告）
	noticeContent?: string; // 公告内容
	status?: string; // 公告状态（0正常 1关闭）
	remark?: string; // 备注
	createBy?: number; // 创建者
	createByName?: string; // 创建人名称
	createTime?: string; // 创建时间
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysNoticeVo {
	total?: number; // 总记录数
	rows?: SysNoticeVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RSysMenuVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 菜单权限视图对象 sys_menu
 */
export interface SysMenuVo {
	menuId?: number; // 菜单ID
	menuName?: string; // 菜单名称
	parentId?: number; // 父菜单ID
	orderNum?: number; // 显示顺序
	path?: string; // 路由地址
	component?: string; // 组件路径
	queryParam?: string; // 路由参数
	isFrame?: string; // 是否为外链（0是 1否）
	isCache?: string; // 是否缓存（0缓存 1不缓存）
	menuType?: string; // 菜单类型（M目录 C菜单 F按钮）
	visible?: string; // 显示状态（0显示 1隐藏）
	status?: string; // 菜单状态（0正常 1停用）
	perms?: string; // 权限标识
	icon?: string; // 菜单图标
	createDept?: number; // 创建部门
	remark?: string; // 备注
	createTime?: string; // 创建时间
	children?: SysMenuVo[]; // 子菜单
}

/**
 * 角色菜单列表树信息
 */
export interface MenuTreeSelectVo {
	checkedKeys?: number[]; // 选中菜单列表
	menus?: TreeLong[]; // 菜单下拉树结构列表
}

/**
 * 响应信息主体
 */
export interface RMenuTreeSelectVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 响应信息主体
 */
export interface RListSysMenuVo {
	code?: number;
	msg?: string;
	data?: SysMenuVo[];
}

/**
 * 路由显示信息
 */
export interface MetaVo {
	title?: string; // 设置该路由在侧边栏和面包屑中展示的名字
	icon?: string; // 设置该路由的图标，对应路径src/assets/icons/svg
	noCache?: boolean; // 设置为true，则不会被 <keep-alive>缓存
	link?: string; // 内链地址（http(s)://开头）
}

/**
 * 响应信息主体
 */
export interface RListRouterVo {
	code?: number;
	msg?: string;
	data?: RouterVo[];
}

/**
 * 路由配置信息
 */
export interface RouterVo {
	name?: string; // 路由名字
	path?: string; // 路由地址
	hidden?: boolean; // 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现
	redirect?: string; // 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
	component?: string; // 组件地址
	query?: string; // 路由参数：如 {"id": 1, "name": "ry"}
	alwaysShow?: boolean; // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
	meta?: unknown;
}

/**
 * 响应信息主体
 */
export interface RSysDictTypeVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 字典类型视图对象 sys_dict_type
 */
export interface SysDictTypeVo {
	dictId?: number; // 字典主键
	dictName?: string; // 字典名称
	dictType?: string; // 字典类型
	remark?: string; // 备注
	createTime?: string; // 创建时间
}

/**
 * 响应信息主体
 */
export interface RListSysDictTypeVo {
	code?: number;
	msg?: string;
	data?: SysDictTypeVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysDictTypeVo {
	total?: number; // 总记录数
	rows?: SysDictTypeVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RSysDictDataVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 字典数据视图对象 sys_dict_data
 */
export interface SysDictDataVo {
	dictCode?: number; // 字典编码
	dictSort?: number; // 字典排序
	dictLabel?: string; // 字典标签
	dictValue?: string; // 字典键值
	dictType?: string; // 字典类型
	cssClass?: string; // 样式属性（其他样式扩展）
	listClass?: string; // 表格回显样式
	isDefault?: string; // 是否默认（Y是 N否）
	remark?: string; // 备注
	createTime?: string; // 创建时间
}

/**
 * 响应信息主体
 */
export interface RListSysDictDataVo {
	code?: number;
	msg?: string;
	data?: SysDictDataVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysDictDataVo {
	total?: number; // 总记录数
	rows?: SysDictDataVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RSysDeptVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 部门视图对象 sys_dept
 */
export interface SysDeptVo {
	deptId?: number; // 部门id
	parentId?: number; // 父部门id
	parentName?: string; // 父部门名称
	ancestors?: string; // 祖级列表
	deptName?: string; // 部门名称
	deptCategory?: string; // 部门类别编码
	orderNum?: number; // 显示顺序
	leader?: number; // 负责人ID
	leaderName?: string; // 负责人
	phone?: string; // 联系电话
	email?: string; // 邮箱
	status?: string; // 部门状态（0正常 1停用）
	createTime?: string; // 创建时间
}

/**
 * 响应信息主体
 */
export interface RListSysDeptVo {
	code?: number;
	msg?: string;
	data?: SysDeptVo[];
}

/**
 * 响应信息主体
 */
export interface RSysConfigVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 参数配置视图对象 sys_config
 */
export interface SysConfigVo {
	configId?: number; // 参数主键
	configName?: string; // 参数名称
	configKey?: string; // 参数键名
	configValue?: string; // 参数键值
	configType?: string; // 系统内置（Y是 N否）
	remark?: string; // 备注
	createTime?: string; // 创建时间
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysConfigVo {
	total?: number; // 总记录数
	rows?: SysConfigVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RSysClientVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 授权管理视图对象 sys_client
 */
export interface SysClientVo {
	id?: number; // id
	clientId?: string; // 客户端id
	clientKey?: string; // 客户端key
	clientSecret?: string; // 客户端秘钥
	grantTypeList?: string[]; // 授权类型
	grantType?: string; // 授权类型
	deviceType?: string; // 设备类型
	activeTimeout?: number; // token活跃超时时间
	timeout?: number; // token固定超时时间
	status?: string; // 状态（0正常 1停用）
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysClientVo {
	total?: number; // 总记录数
	rows?: SysClientVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 
 */
export interface SseEmitter {
	timeout?: number;
}

/**
 * OSS对象存储分页查询对象 sys_oss
 */
export interface SysOssBo {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	ossId?: number; // ossId
	fileName?: string; // 文件名
	originalName?: string; // 原名
	fileSuffix?: string; // 文件后缀名
	url?: string; // URL地址
	service?: string; // 服务商
}

/**
 * OSS对象存储视图对象 sys_oss
 */
export interface SysOssVo {
	ossId?: number; // 对象存储主键
	fileName?: string; // 文件名
	originalName?: string; // 原名
	fileSuffix?: string; // 文件后缀名
	url?: string; // URL地址
	createTime?: string; // 创建时间
	createBy?: number; // 上传人
	createByName?: string; // 上传人名称
	service?: string; // 服务商
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysOssVo {
	total?: number; // 总记录数
	rows?: SysOssVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RListSysOssVo {
	code?: number;
	msg?: string;
	data?: SysOssVo[];
}

/**
 * 响应信息主体
 */
export interface RSysOssConfigVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 对象存储配置视图对象 sys_oss_config
 */
export interface SysOssConfigVo {
	ossConfigId?: number; // 主键
	configKey?: string; // 配置key
	accessKey?: string; // accessKey
	secretKey?: string; // 秘钥
	bucketName?: string; // 桶名称
	prefix?: string; // 前缀
	endpoint?: string; // 访问站点
	domain?: string; // 自定义域名
	isHttps?: string; // 是否https（Y=是,N=否）
	region?: string; // 域
	status?: string; // 是否默认（0=是,1=否）
	ext1?: string; // 扩展字段
	remark?: string; // 备注
	accessPolicy?: string; // 桶权限类型(0private 1public 2custom)
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysOssConfigVo {
	total?: number; // 总记录数
	rows?: SysOssConfigVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 操作日志记录视图对象 sys_oper_log
 */
export interface SysOperLogVo {
	operId?: number; // 日志主键
	tenantId?: string; // 租户编号
	title?: string; // 模块标题
	businessType?: number; // 业务类型（0其它 1新增 2修改 3删除）
	businessTypes?: number[]; // 业务类型数组
	method?: string; // 方法名称
	requestMethod?: string; // 请求方式
	operatorType?: number; // 操作类别（0其它 1后台用户 2手机端用户）
	operName?: string; // 操作人员
	deptName?: string; // 部门名称
	operUrl?: string; // 请求URL
	operIp?: string; // 主机地址
	operLocation?: string; // 操作地点
	operParam?: string; // 请求参数
	jsonResult?: string; // 返回参数
	status?: number; // 操作状态（0正常 1异常）
	errorMsg?: string; // 错误消息
	operTime?: string; // 操作时间
	costTime?: number; // 消耗时间
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysOperLogVo {
	total?: number; // 总记录数
	rows?: SysOperLogVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 当前在线会话
 */
export interface SysUserOnline {
	tokenId?: string; // 会话编号
	deptName?: string; // 部门名称
	userName?: string; // 用户名称
	clientKey?: string; // 客户端
	deviceType?: string; // 设备类型
	ipaddr?: string; // 登录IP地址
	loginLocation?: string; // 登录地址
	browser?: string; // 浏览器类型
	os?: string; // 操作系统
	loginTime?: number; // 登录时间
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysUserOnline {
	total?: number; // 总记录数
	rows?: SysUserOnline[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 系统访问记录视图对象 sys_logininfor
 */
export interface SysLogininforVo {
	infoId?: number; // 访问ID
	tenantId?: string; // 租户编号
	userName?: string; // 用户账号
	clientKey?: string; // 客户端
	deviceType?: string; // 设备类型
	status?: string; // 登录状态（0成功 1失败）
	ipaddr?: string; // 登录IP地址
	loginLocation?: string; // 登录地点
	browser?: string; // 浏览器类型
	os?: string; // 操作系统
	msg?: string; // 提示消息
	loginTime?: string; // 访问时间
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysLogininforVo {
	total?: number; // 总记录数
	rows?: SysLogininforVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 缓存监控列表信息
 */
export interface CacheListInfoVo {
	info?: Record<string, unknown>;
	dbSize?: number;
	commandStats?: unknown[];
}

/**
 * 响应信息主体
 */
export interface RCacheListInfoVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 消息的dto
 */
export interface WebSocketMessageDto {
	sessionKeys?: number[]; // 需要推送到的session key 列表
	message?: string; // 需要发送的消息
}

/**
 * 响应信息主体
 */
export interface RTestTreeVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 测试树表视图对象 test_tree
 */
export interface TestTreeVo {
	id?: number; // 主键
	parentId?: number; // 父id
	deptId?: number; // 部门id
	userId?: number; // 用户id
	treeName?: string; // 树节点名
	createTime?: string; // 创建时间
}

/**
 * 响应信息主体
 */
export interface RListTestTreeVo {
	code?: number;
	msg?: string;
	data?: TestTreeVo[];
}

/**
 * 响应信息主体
 */
export interface RTestSensitive {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 
 */
export interface TestSensitive {
	idCard?: string; // 身份证
	phone?: string; // 电话
	address?: string; // 地址
	email?: string; // 邮箱
	bankCard?: string; // 银行卡
}

/**
 * 
 */
export interface TestI18nBo {
	name: string;
	age: number;
}

/**
 * 响应信息主体
 */
export interface RTestI18nBo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 响应信息主体
 */
export interface RMapStringTestDemoEncrypt {
	code?: number;
	msg?: string;
	data?: Record<string, unknown>;
}

/**
 * 
 */
export interface TestDemoEncrypt {
	createDept?: number; // 创建部门
	createBy?: number; // 创建者
	createTime?: string; // 创建时间
	updateBy?: number; // 更新者
	updateTime?: string; // 更新时间
	params?: Record<string, unknown>; // 请求参数
	tenantId?: string; // 租户编号
	id?: number; // 主键
	deptId?: number; // 部门id
	userId?: number; // 用户id
	orderNum?: number; // 排序号
	testKey?: string; // key键
	value?: string; // 值
	version?: number; // 版本
	delFlag?: number; // 删除标志
}

/**
 * 响应信息主体
 */
export interface RTestDemoVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 测试单表视图对象 test_demo
 */
export interface TestDemoVo {
	id?: number; // 主键
	deptId?: number; // 部门id
	userId?: number; // 用户id
	orderNum?: number; // 排序号
	testKey?: string; // key键
	value?: string; // 值
	createTime?: string; // 创建时间
	createBy?: number; // 创建人
	createByName?: string; // 创建人账号
	updateTime?: string; // 更新时间
	updateBy?: number; // 更新人
	updateByName?: string; // 更新人账号
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoTestDemoVo {
	total?: number; // 总记录数
	rows?: TestDemoVo[]; // 列表数据
	code?: number; // 消息状态码
	msg?: string; // 消息内容
}

/**
 * 响应信息主体
 */
export interface RBoolean {
	code?: number;
	msg?: string;
	data?: boolean;
}

/**
 * 登录租户对象
 */
export interface LoginTenantVo {
	tenantEnabled?: boolean; // 租户开关
	voList?: TenantListVo[]; // 租户对象列表
}

/**
 * 响应信息主体
 */
export interface RLoginTenantVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

/**
 * 租户列表
 */
export interface TenantListVo {
	tenantId?: string; // 租户编号
	companyName?: string; // 企业名称
	domain?: string; // 域名
}

/**
 * 验证码信息
 */
export interface CaptchaVo {
	captchaEnabled?: boolean; // 是否开启验证码
	uuid?: string;
	img?: string; // 验证码图片
}

/**
 * 响应信息主体
 */
export interface RCaptchaVo {
	code?: number;
	msg?: string;
	data?: unknown;
}

