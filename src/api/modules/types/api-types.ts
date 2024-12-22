// 自动生成的类型定义

/**
 * 响应信息主体
 */
export interface RVoid {

	code: number;

	msg: string;

	data: Record<string, unknown>;
}

/**
 * 模型请求对象
 */
export interface ModelBo {
 // 模型id
	id: string;
 // 模型名称
	name: string;
 // 模型标识key
	key: string;
 // 模型分类
	categoryCode: string;
 // 模型XML
	xml: string;
 // 模型SVG图片
	svg: string;
 // 备注
	description?: string;
}

/**
 * 请假业务对象 test_leave
 */
export interface TestLeaveBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 主键
	id: number;
 // 请假类型
	leaveType: string;
 // 开始时间
	startDate: string;
 // 结束时间
	endDate: string;
 // 请假天数
	leaveDays: number;
 // 开始时间
	startLeaveDays?: number;
 // 结束时间
	endLeaveDays?: number;
 // 请假原因
	remark?: string;
 // 状态
	status?: string;
}

/**
 * 响应信息主体
 */
export interface RTestLeaveVo {

	code: number;

	msg: string;

	data: TestLeaveVo;
}

/**
 * 请假视图对象 test_leave
 */
export interface TestLeaveVo {
 // 主键
	id: number;
 // 请假类型
	leaveType: string;
 // 开始时间
	startDate: string;
 // 结束时间
	endDate: string;
 // 请假天数
	leaveDays: number;
 // 备注
	remark: string;
 // 状态
	status: string;
}

/**
 * 表单管理业务对象 wf_form_manage
 */
export interface WfFormManageBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 主键
	id: number;
 // 表单名称
	formName: string;
 // 表单类型
	formType: string;
 // 路由地址/表单ID
	router: string;
 // 备注
	remark?: string;
}

/**
 * 流程分类业务对象 wf_category
 */
export interface WfCategoryBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 主键
	id: number;
 // 分类名称
	categoryName: string;
 // 分类编码
	categoryCode: string;
 // 父级id
	parentId: number;
 // 排序
	sortNum?: number;
}

/**
 * 业务表 gen_table
 */
export interface GenTable {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 编号
	tableId?: number;
 // 数据源名称
	dataName: string;
 // 表名称
	tableName: string;
 // 表描述
	tableComment: string;
 // 关联父表的表名
	subTableName?: string;
 // 本表关联父表的外键名
	subTableFkName?: string;
 // 实体类名称(首字母大写)
	className: string;
 // 使用的模板（crud单表操作 tree树表操作 sub主子表操作）
	tplCategory?: string;
 // 生成包路径
	packageName: string;
 // 生成模块名
	moduleName: string;
 // 生成业务名
	businessName: string;
 // 生成功能名
	functionName: string;
 // 生成作者
	functionAuthor: string;
 // 生成代码方式（0zip压缩包 1自定义路径）
	genType?: string;
 // 生成路径（不填默认项目路径）
	genPath?: string;

	pkColumn?: GenTableColumn;
 // 表列信息
	columns?: GenTableColumn[];
 // 其它生成选项
	options?: string;
 // 备注
	remark?: string;
 // 树编码字段
	treeCode?: string;
 // 树父编码字段
	treeParentCode?: string;
 // 树名称字段
	treeName?: string;

	menuIds?: number[];
 // 上级菜单ID字段
	parentMenuId?: number;
 // 上级菜单名称字段
	parentMenuName?: string;

	tree?: boolean;

	crud?: boolean;
}

/**
 * 代码生成业务字段表 gen_table_column
 */
export interface GenTableColumn {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 编号
	columnId?: number;
 // 归属表编号
	tableId?: number;
 // 列名称
	columnName?: string;
 // 列描述
	columnComment?: string;
 // 列类型
	columnType?: string;
 // JAVA类型
	javaType?: string;
 // JAVA字段名
	javaField: string;
 // 是否主键（1是）
	isPk?: string;
 // 是否自增（1是）
	isIncrement?: string;
 // 是否必填（1是）
	isRequired?: string;
 // 是否为插入字段（1是）
	isInsert?: string;
 // 是否编辑字段（1是）
	isEdit?: string;
 // 是否列表字段（1是）
	isList?: string;
 // 是否查询字段（1是）
	isQuery?: string;
 // 查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）
	queryType?: string;
 // 显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）
	htmlType?: string;
 // 字典类型
	dictType?: string;
 // 排序
	sort?: number;

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
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 用户ID
	userId?: number;
 // 部门ID
	deptId?: number;
 // 用户账号
	userName: string;
 // 用户昵称
	nickName: string;
 // 用户类型（sys_user系统用户）
	userType?: string;
 // 用户邮箱
	email?: string;
 // 手机号码
	phonenumber?: string;
 // 用户性别（0男 1女 2未知）
	sex?: string;
 // 密码
	password?: string;
 // 帐号状态（0正常 1停用）
	status?: string;
 // 备注
	remark?: string;
 // 角色组
	roleIds?: number[];
 // 岗位组
	postIds?: number[];
 // 数据权限 当前角色ID
	roleId?: number;
 // 排除不查询的用户(工作流用)
	excludeUserIds?: string;

	superAdmin?: boolean;
}

/**
 * 个人信息业务处理
 */
export interface SysUserProfileBo {
 // 创建部门
	createDept: number;
 // 创建者
	createBy: number;
 // 创建时间
	createTime: string;
 // 更新者
	updateBy: number;
 // 更新时间
	updateTime: string;
 // 请求参数
	params: Record<string, object>;
 // 用户昵称
	nickName: string;
 // 用户邮箱
	email: string;
 // 手机号码
	phonenumber: string;
 // 用户性别（0男 1女 2未知）
	sex: string;
}

/**
 * 用户密码修改bo
 */
export interface SysUserPasswordBo {
 // 旧密码
	oldPassword: string;
 // 新密码
	newPassword: string;
}

/**
 * 租户业务对象 sys_tenant
 */
export interface SysTenantBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // id
	id: number;
 // 租户编号
	tenantId?: string;
 // 联系人
	contactUserName: string;
 // 联系电话
	contactPhone: string;
 // 企业名称
	companyName: string;
 // 用户名（创建系统用户）
	username: string;
 // 密码（创建系统用户）
	password: string;
 // 统一社会信用代码
	licenseNumber?: string;
 // 地址
	address?: string;
 // 域名
	domain?: string;
 // 企业简介
	intro?: string;
 // 备注
	remark?: string;
 // 租户套餐编号
	packageId: number;
 // 过期时间
	expireTime?: string;
 // 用户数量（-1不限制）
	accountCount?: number;
 // 租户状态（0正常 1停用）
	status?: string;
}

/**
 * 租户套餐业务对象 sys_tenant_package
 */
export interface SysTenantPackageBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 租户套餐id
	packageId: number;
 // 套餐名称
	packageName: string;
 // 关联菜单id
	menuIds?: number[];
 // 备注
	remark?: string;
 // 菜单树选择项是否关联显示
	menuCheckStrictly?: boolean;
 // 状态（0正常 1停用）
	status?: string;
}

/**
 * 角色信息业务对象 sys_role
 */
export interface SysRoleBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 角色ID
	roleId?: number;
 // 角色名称
	roleName: string;
 // 角色权限字符串
	roleKey: string;
 // 显示顺序
	roleSort: number;
 // 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）
	dataScope?: string;
 // 菜单树选择项是否关联显示
	menuCheckStrictly?: boolean;
 // 部门树选择项是否关联显示
	deptCheckStrictly?: boolean;
 // 角色状态（0正常 1停用）
	status?: string;
 // 备注
	remark?: string;
 // 菜单组
	menuIds?: number[];
 // 部门组（数据权限）
	deptIds?: number[];

	superAdmin?: boolean;
}

/**
 * 用户和角色关联 sys_user_role
 */
export interface SysUserRole {
 // 用户ID
	userId: number;
 // 角色ID
	roleId: number;
}

/**
 * 岗位信息业务对象 sys_post
 */
export interface SysPostBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 岗位ID
	postId?: number;
 // 部门id（单部门）
	deptId: number;
 // 归属部门id（部门树）
	belongDeptId?: number;
 // 岗位编码
	postCode: string;
 // 岗位名称
	postName: string;
 // 岗位类别编码
	postCategory?: string;
 // 显示顺序
	postSort: number;
 // 状态（0正常 1停用）
	status?: string;
 // 备注
	remark?: string;
}

/**
 * 通知公告业务对象 sys_notice
 */
export interface SysNoticeBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 公告ID
	noticeId?: number;
 // 公告标题
	noticeTitle: string;
 // 公告类型（1通知 2公告）
	noticeType?: string;
 // 公告内容
	noticeContent?: string;
 // 公告状态（0正常 1关闭）
	status?: string;
 // 备注
	remark?: string;
 // 创建人名称
	createByName?: string;
}

/**
 * 菜单权限业务对象 sys_menu
 */
export interface SysMenuBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 菜单ID
	menuId?: number;
 // 父菜单ID
	parentId?: number;
 // 菜单名称
	menuName: string;
 // 显示顺序
	orderNum: number;
 // 路由地址
	path?: string;
 // 组件路径
	component?: string;
 // 路由参数
	queryParam?: string;
 // 是否为外链（0是 1否）
	isFrame?: string;
 // 是否缓存（0缓存 1不缓存）
	isCache?: string;
 // 菜单类型（M目录 C菜单 F按钮）
	menuType: string;
 // 显示状态（0显示 1隐藏）
	visible?: string;
 // 菜单状态（0正常 1停用）
	status?: string;
 // 权限标识
	perms?: string;
 // 菜单图标
	icon?: string;
 // 备注
	remark?: string;
}

/**
 * 字典类型业务对象 sys_dict_type
 */
export interface SysDictTypeBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 字典主键
	dictId?: number;
 // 字典名称
	dictName: string;
 // 字典类型
	dictType: string;
 // 备注
	remark?: string;
}

/**
 * 字典数据业务对象 sys_dict_data
 */
export interface SysDictDataBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 字典编码
	dictCode?: number;
 // 字典排序
	dictSort?: number;
 // 字典标签
	dictLabel: string;
 // 字典键值
	dictValue: string;
 // 字典类型
	dictType: string;
 // 样式属性（其他样式扩展）
	cssClass?: string;
 // 表格回显样式
	listClass?: string;
 // 是否默认（Y是 N否）
	isDefault?: string;
 // 备注
	remark?: string;
}

/**
 * 部门业务对象 sys_dept
 */
export interface SysDeptBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 部门id
	deptId?: number;
 // 父部门ID
	parentId?: number;
 // 部门名称
	deptName: string;
 // 部门类别编码
	deptCategory?: string;
 // 显示顺序
	orderNum: number;
 // 负责人
	leader?: number;
 // 联系电话
	phone?: string;
 // 邮箱
	email?: string;
 // 部门状态（0正常 1停用）
	status?: string;
}

/**
 * 参数配置业务对象 sys_config
 */
export interface SysConfigBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 参数主键
	configId?: number;
 // 参数名称
	configName: string;
 // 参数键名
	configKey: string;
 // 参数键值
	configValue: string;
 // 系统内置（Y是 N否）
	configType?: string;
 // 备注
	remark?: string;
}

/**
 * 授权管理业务对象 sys_client
 */
export interface SysClientBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // id
	id: number;
 // 客户端id
	clientId?: string;
 // 客户端key
	clientKey: string;
 // 客户端秘钥
	clientSecret: string;
 // 授权类型
	grantTypeList: string[];
 // 授权类型
	grantType?: string;
 // 设备类型
	deviceType?: string;
 // token活跃超时时间
	activeTimeout?: number;
 // token固定超时时间
	timeout?: number;
 // 状态（0正常 1停用）
	status?: string;
}

/**
 * 对象存储配置业务对象 sys_oss_config
 */
export interface SysOssConfigBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 主键
	ossConfigId: number;
 // 配置key
	configKey: string;
 // accessKey
	accessKey: string;
 // 秘钥
	secretKey: string;
 // 桶名称
	bucketName: string;
 // 前缀
	prefix?: string;
 // 访问站点
	endpoint: string;
 // 自定义域名
	domain?: string;
 // 是否https（Y=是,N=否）
	isHttps?: string;
 // 是否默认（0=是,1=否）
	status?: string;
 // 域
	region?: string;
 // 扩展字段
	ext1?: string;
 // 备注
	remark?: string;
 // 桶权限类型(0private 1public 2custom)
	accessPolicy: string;
}

/**
 * 测试树表业务对象 test_tree
 */
export interface TestTreeBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 主键
	id: number;
 // 父ID
	parentId?: number;
 // 部门id
	deptId: number;
 // 用户id
	userId: number;
 // 树节点名
	treeName: string;
}

/**
 * 测试单表业务对象 test_demo
 */
export interface TestDemoBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 主键
	id: number;
 // 部门id
	deptId: number;
 // 用户id
	userId: number;
 // 排序号
	orderNum: number;
 // key键
	testKey: string;
 // 值
	value: string;
}

/**
 * 终转办务请求对象
 */
export interface TransmitBo {
 // 任务id
	taskId: string;
 // 转办人id
	userId: string;
 // 审批意见
	comment?: string;
}

/**
 * 终止任务请求对象
 */
export interface TerminationBo {
 // 任务id
	taskId: string;
 // 审批意见
	comment?: string;
}

/**
 * 启动流程对象
 */
export interface StartProcessBo {
 // 业务唯一值id
	businessKey: string;
 // 表名
	tableName: string;
 // 流程变量，前端会提交一个元素{'entity': {业务详情数据对象}}
	variables?: Record<string, object>;
}

/**
 * 响应信息主体
 */
export interface RMapStringObject {

	code: number;

	msg: string;

	data: Record<string, object>;
}

/**
 * 减签参数请求
 */
export interface DeleteMultiBo {
 // 任务ID
	taskId: string;
 // 减签人员
	taskIds: string[];
 // 执行id
	executionIds: string[];
 // 人员id
	assigneeIds: number[];
 // 人员名称
	assigneeNames: string[];
}

/**
 * 委派任务请求对象
 */
export interface DelegateBo {
 // 委派人id
	userId: string;
 // 委派人名称
	nickName: string;
 // 任务id
	taskId: string;
}

/**
 * 办理任务请求对象
 */
export interface CompleteTaskBo {
 // 任务id
	taskId: string;
 // 附件id
	fileId?: string;
 // 抄送人员
	wfCopyList?: WfCopy[];
 // 消息类型
	messageType?: string[];
 // 办理意见
	message?: string;
 // 流程变量
	variables?: Record<string, object>;
}

/**
 * 抄送
 */
export interface WfCopy {
 // 用户id
	userId: number;
 // 用户名称
	userName: string;
}

/**
 * 驳回参数请求
 */
export interface BackProcessBo {
 // 任务ID
	taskId: string;
 // 消息类型
	messageType?: string[];
 // 驳回的节点id(目前未使用，直接驳回到申请人)
	targetActivityId: string;
 // 办理意见
	message?: string;
}

/**
 * 响应信息主体
 */
export interface RString {

	code: number;

	msg: string;

	data: string;
}

/**
 * 加签参数请求
 */
export interface AddMultiBo {
 // 任务ID
	taskId: string;
 // 加签人员id
	assignees: number[];
 // 加签人员名称
	assigneeNames: string[];
}

/**
 * 任务催办
 */
export interface TaskUrgingBo {
 // 流程实例id
	processInstanceId: string;
 // 消息类型
	messageType: string[];
 // 催办内容（为空默认系统内置信息）
	message: string;
}

/**
 * 流程实例作废请求对象
 */
export interface ProcessInvalidBo {
 // 业务id
	businessKey: string;
 // 作废原因
	deleteReason?: string;
}

/**
 * 流程定义配置业务对象 wf_form_definition
 */
export interface WfDefinitionConfigBo {
 // 创建部门
	createDept?: number;
 // 创建者
	createBy?: number;
 // 创建时间
	createTime?: string;
 // 更新者
	updateBy?: number;
 // 更新时间
	updateTime?: string;
 // 请求参数
	params?: Record<string, object>;
 // 主键
	id: number;
 // 表名
	tableName: string;
 // 流程定义ID
	definitionId: string;
 // 流程KEY
	processKey: string;
 // 流程版本
	version: number;
 // 备注
	remark?: string;
}

/**
 * 用户头像信息
 */
export interface AvatarVo {
 // 头像地址
	imgUrl: string;
}

/**
 * 响应信息主体
 */
export interface RAvatarVo {

	code: number;

	msg: string;

	data: AvatarVo;
}

/**
 * 响应信息主体
 */
export interface RSysOssUploadVo {

	code: number;

	msg: string;

	data: SysOssUploadVo;
}

/**
 * 上传对象信息
 */
export interface SysOssUploadVo {
 // URL地址
	url: string;
 // 文件名
	fileName: string;
 // 对象存储主键
	ossId: string;
}

/**
 * 操作日志记录业务对象 sys_oper_log
 */
export interface SysOperLogBo {
 // 日志主键
	operId: number;
 // 租户编号
	tenantId: string;
 // 模块标题
	title: string;
 // 业务类型（0其它 1新增 2修改 3删除）
	businessType: number;
 // 业务类型数组
	businessTypes: number[];
 // 方法名称
	method: string;
 // 请求方式
	requestMethod: string;
 // 操作类别（0其它 1后台用户 2手机端用户）
	operatorType: number;
 // 操作人员
	operName: string;
 // 部门名称
	deptName: string;
 // 请求URL
	operUrl: string;
 // 主机地址
	operIp: string;
 // 操作地点
	operLocation: string;
 // 请求参数
	operParam: string;
 // 返回参数
	jsonResult: string;
 // 操作状态（0正常 1异常）
	status: number;
 // 错误消息
	errorMsg: string;
 // 操作时间
	operTime: string;
 // 消耗时间
	costTime: number;
 // 请求参数
	params: Record<string, object>;
}

/**
 * 系统访问记录业务对象 sys_logininfor
 */
export interface SysLogininforBo {
 // 访问ID
	infoId: number;
 // 租户编号
	tenantId: string;
 // 用户账号
	userName: string;
 // 客户端
	clientKey: string;
 // 设备类型
	deviceType: string;
 // 登录IP地址
	ipaddr: string;
 // 登录地点
	loginLocation: string;
 // 浏览器类型
	browser: string;
 // 操作系统
	os: string;
 // 登录状态（0成功 1失败）
	status: string;
 // 提示消息
	msg: string;
 // 访问时间
	loginTime: string;
 // 请求参数
	params: Record<string, object>;
}

/**
 * 带有下拉选的Excel导出
 */
export interface ExportDemoVo {
 // 用户昵称
	nickName: string;
 // 用户类型    使用ExcelEnumFormat注解需要进行下拉选的部分
	userStatus: string;

	/**
	 * 性别
	 *  
	 *  使用ExcelDictFormat注解需要进行下拉选的部分
	 */
	gender: string;
 // 手机号
	phoneNumber: string;
 // Email
	email: string;

	/**
	 * 省
	 *  
	 *  级联下拉，仅判断是否选了
	 */
	province: string;
 // 数据库中的省ID    处理完毕后再判断是否市正确的值
	provinceId: number;

	/**
	 * 市
	 *  
	 *  级联下拉
	 */
	city: string;
 // 数据库中的市ID
	cityId: number;

	/**
	 * 县
	 *  
	 *  级联下拉
	 */
	area: string;
 // 数据库中的县ID
	areaId: number;
}

/**
 * 三方登录对象
 */
export interface SocialLoginBody {
 // 客户端id
	clientId: string;
 // 授权类型
	grantType: string;
 // 租户ID
	tenantId?: string;
 // 验证码
	code?: string;
 // 唯一标识
	uuid?: string;
 // 第三方登录平台
	source: string;
 // 第三方登录code
	socialCode: string;
 // 第三方登录socialState
	socialState: string;
}

/**
 * 用户注册对象
 */
export interface RegisterBody {
 // 客户端id
	clientId: string;
 // 授权类型
	grantType: string;
 // 租户ID
	tenantId?: string;
 // 验证码
	code?: string;
 // 唯一标识
	uuid?: string;
 // 用户名
	username: string;
 // 用户密码
	password: string;

	userType?: string;
}

/**
 * 登录验证信息
 */
export interface LoginVo {
 // 令牌权限
	scope: string;
 // 用户 openid
	openid: string;
 // 授权令牌
	access_token: string;
 // 刷新令牌
	refresh_token: string;
 // 授权令牌 access_token 的有效期
	expire_in: number;
 // 刷新令牌 refresh_token 的有效期
	refresh_expire_in: number;
 // 应用id
	client_id: string;
}

/**
 * 响应信息主体
 */
export interface RLoginVo {

	code: number;

	msg: string;

	data: LoginVo;
}

/**
 * 响应信息主体
 */
export interface RListWfTaskBackNode {

	code: number;

	msg: string;

	data: WfTaskBackNode[];
}

/**
 * 节点驳回记录 wf_task_back_node
 */
export interface WfTaskBackNode {
 // 创建部门
	createDept: number;
 // 创建者
	createBy: number;
 // 创建时间
	createTime: string;
 // 更新者
	updateBy: number;
 // 更新时间
	updateTime: string;
 // 请求参数
	params: Record<string, object>;
 // 租户编号
	tenantId: string;
 // 主键
	id: number;
 // 实例id
	instanceId: string;
 // 节点id
	nodeId: string;
 // 节点名称
	nodeName: string;
 // 排序
	orderNo: number;
 // 节点类型
	taskType: string;
 // 办理人
	assignee: string;
}

/**
 * 参与者
 */
export interface ParticipantVo {
 // 组id（角色id）
	groupIds: number[];
 // 候选人id（用户id） 当组id不为空时，将组内人员查出放入candidate
	candidate: number[];
 // 候选人名称（用户名称） 当组id不为空时，将组内人员查出放入candidateName
	candidateName: string[];
 // 是否认领标识  当为空时默认当前任务不需要认领  当为true时当前任务说明为候选模式并且有人已经认领了任务可以归还，  当为false时当前任务说明为候选模式该任务未认领，
	claim: boolean;
}

/**
 * 响应信息主体
 */
export interface RTaskVo {

	code: number;

	msg: string;

	data: TaskVo;
}

/**
 * 任务视图
 */
export interface TaskVo {
 // 任务id
	id: string;
 // 任务名称
	name: string;
 // 描述
	description: string;
 // 优先级
	priority: number;
 // 负责此任务的人员的用户id
	owner: string;
 // 办理人id
	assignee: number;
 // 办理人
	assigneeName: string;
 // 流程实例id
	processInstanceId: string;
 // 执行id
	executionId: string;
 // 无用
	taskDefinitionId: string;
 // 流程定义id
	processDefinitionId: string;
 // 创建时间
	createTime: string;
 // 已办任务-创建时间
	startTime: string;
 // 结束时间
	endTime: string;
 // 节点id
	taskDefinitionKey: string;
 // 任务截止日期
	dueDate: string;
 // 流程类别
	category: string;
 // 父级任务id
	parentTaskId: string;
 // 租户id
	tenantId: string;
 // 认领时间
	claimTime: string;
 // 流程状态
	businessStatus: string;
 // 流程状态
	businessStatusName: string;
 // 流程定义名称
	processDefinitionName: string;
 // 流程定义key
	processDefinitionKey: string;
 // 流程定义版本
	processDefinitionVersion: number;

	participantVo: ParticipantVo;
 // 是否会签
	multiInstance: boolean;
 // 业务id
	businessKey: string;

	wfDefinitionConfigVo: WfDefinitionConfigVo;

	wfNodeConfigVo: WfNodeConfigVo;
}

/**
 * 流程定义配置视图对象 wf_definition_config
 */
export interface WfDefinitionConfigVo {
 // 主键
	id: number;
 // 表名
	tableName: string;
 // 流程定义ID
	definitionId: string;
 // 流程KEY
	processKey: string;
 // 流程版本
	version: number;
 // 备注
	remark: string;

	wfFormManageVo: WfFormManageVo;
}

/**
 * 表单管理视图对象 wf_form_manage
 */
export interface WfFormManageVo {
 // 主键
	id: number;
 // 表单名称
	formName: string;
 // 表单类型
	formType: string;
 // 表单类型名称
	formTypeName: string;
 // 路由地址/表单ID
	router: string;
 // 备注
	remark: string;
}

/**
 * 节点配置视图对象 wf_node_config
 */
export interface WfNodeConfigVo {
 // 主键
	id: number;
 // 表单id
	formId: number;
 // 表单类型
	formType: string;
 // 节点名称
	nodeName: string;
 // 节点id
	nodeId: string;
 // 流程定义id
	definitionId: string;
 // 是否为申请人节点 （0是 1否）
	applyUserTask: string;

	wfFormManageVo: WfFormManageVo;
}

/**
 * 任务请求对象
 */
export interface TaskBo {
 // 任务名称
	name: string;
 // 流程定义名称
	processDefinitionName: string;
 // 流程定义key
	processDefinitionKey: string;
}

/**
 * 分页查询实体类
 */
export interface PageQuery {
 // 分页大小
	pageSize: number;
 // 当前页数
	pageNum: number;
 // 排序列
	orderByColumn: string;
 // 排序的方向desc或者asc
	isAsc: string;

	firstNum: number;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoTaskVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: TaskVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RListTaskVo {

	code: number;

	msg: string;

	data: TaskVo[];
}

/**
 * 响应信息主体
 */
export interface RListVariableVo {

	code: number;

	msg: string;

	data: VariableVo[];
}

/**
 * 流程变量
 */
export interface VariableVo {
 // 变量key
	key: string;
 // 变量值
	value: string;
}

/**
 * 流程实例请求对象
 */
export interface ProcessInstanceBo {
 // 流程名称
	name: string;
 // 流程key
	key: string;
 // 任务发起人
	startUserId: string;
 // 业务id
	businessKey: string;
 // 模型分类
	categoryCode: string;
}

/**
 * 流程实例视图
 */
export interface ProcessInstanceVo {
 // 流程实例id
	id: string;
 // 流程定义id
	processDefinitionId: string;
 // 流程定义名称
	processDefinitionName: string;
 // 流程定义key
	processDefinitionKey: string;
 // 流程定义版本
	processDefinitionVersion: number;
 // 部署id
	deploymentId: string;
 // 业务id
	businessKey: string;
 // 是否挂起
	isSuspended: boolean;
 // 租户id
	tenantId: string;
 // 启动时间
	startTime: string;
 // 结束时间
	endTime: string;
 // 启动人id
	startUserId: string;
 // 流程状态
	businessStatus: string;
 // 流程状态
	businessStatusName: string;
 // 待办任务集合
	taskVoList: TaskVo[];

	wfNodeConfigVo: WfNodeConfigVo;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoProcessInstanceVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: ProcessInstanceVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 流程审批记录视图
 */
export interface ActHistoryInfoVo {
 // 任务id
	id: string;
 // 节点id
	taskDefinitionKey: string;
 // 任务名称
	name: string;
 // 流程实例id
	processInstanceId: string;
 // 版本
	version: number;
 // 开始时间
	startTime: string;
 // 结束时间
	endTime: string;
 // 运行时长
	runDuration: string;
 // 状态
	status: string;
 // 状态
	statusName: string;
 // 办理人id
	assignee: string;
 // 办理人名称
	nickName: string;
 // 办理人id
	owner: string;
 // 审批信息id
	commentId: string;
 // 审批信息
	comment: string;
 // 审批附件
	attachmentList: Attachment[];
}

/**
 * 
 */
export interface Attachment {

	name: string;

	id: string;

	type: string;

	time: string;

	description: string;

	processInstanceId: string;

	url: string;

	userId: string;

	contentId: string;

	taskId: string;
}

/**
 * 响应信息主体
 */
export interface RListActHistoryInfoVo {

	code: number;

	msg: string;

	data: ActHistoryInfoVo[];
}

/**
 * 流程定义请求对象
 */
export interface ProcessDefinitionBo {
 // 流程定义名称key
	key: string;
 // 流程定义名称
	name: string;
 // 模型分类
	categoryCode: string;
}

/**
 * 流程定义视图
 */
export interface ProcessDefinitionVo {
 // 流程定义id
	id: string;
 // 流程定义名称
	name: string;
 // 流程定义标识key
	key: string;
 // 流程定义版本
	version: number;
 // 流程定义挂起或激活 1激活 2挂起
	suspensionState: number;
 // 流程xml名称
	resourceName: string;
 // 流程图片名称
	diagramResourceName: string;
 // 流程部署id
	deploymentId: string;
 // 流程部署时间
	deploymentTime: string;

	wfDefinitionConfigVo: WfDefinitionConfigVo;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoProcessDefinitionVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: ProcessDefinitionVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RListProcessDefinitionVo {

	code: number;

	msg: string;

	data: ProcessDefinitionVo[];
}

/**
 * 
 */
export interface Model {

	name: string;

	key: string;

	id: string;

	version: number;

	category: string;

	metaInfo: string;

	deploymentId: string;

	createTime: string;

	tenantId: string;

	lastUpdateTime: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoModel {
 // 总记录数
	total: number;
 // 列表数据
	rows: Model[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 模型视图对象
 */
export interface ModelVo {
 // 模型id
	id: string;
 // 模型名称
	name: string;
 // 模型标识key
	key: string;
 // 模型分类
	categoryCode: string;
 // 模型XML
	xml: string;
 // 备注
	description: string;
}

/**
 * 响应信息主体
 */
export interface RModelVo {

	code: number;

	msg: string;

	data: ModelVo;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoTestLeaveVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: TestLeaveVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RWfFormManageVo {

	code: number;

	msg: string;

	data: WfFormManageVo;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoWfFormManageVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: WfFormManageVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RListWfFormManageVo {

	code: number;

	msg: string;

	data: WfFormManageVo[];
}

/**
 * 响应信息主体
 */
export interface RListWfDefinitionConfigVo {

	code: number;

	msg: string;

	data: WfDefinitionConfigVo[];
}

/**
 * 响应信息主体
 */
export interface RWfDefinitionConfigVo {

	code: number;

	msg: string;

	data: WfDefinitionConfigVo;
}

/**
 * 响应信息主体
 */
export interface RWfCategoryVo {

	code: number;

	msg: string;

	data: WfCategoryVo;
}

/**
 * 流程分类视图对象 wf_category
 */
export interface WfCategoryVo {
 // 主键
	id: number;
 // 分类名称
	categoryName: string;
 // 分类编码
	categoryCode: string;
 // 父级id
	parentId: number;
 // 排序
	sortNum: number;
}

/**
 * 响应信息主体
 */
export interface RListWfCategoryVo {

	code: number;

	msg: string;

	data: WfCategoryVo[];
}

/**
 * 响应信息主体
 */
export interface RMapStringString {

	code: number;

	msg: string;

	data: Record<string, string>;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoGenTable {
 // 总记录数
	total: number;
 // 列表数据
	rows: GenTable[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RObject {

	code: number;

	msg: string;

	data: Record<string, unknown>;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoGenTableColumn {
 // 总记录数
	total: number;
 // 列表数据
	rows: GenTableColumn[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 用户个人信息
 */
export interface ProfileVo {

	user: SysUserVo;
 // 用户所属角色组
	roleGroup: string;
 // 用户所属岗位组
	postGroup: string;
}

/**
 * 响应信息主体
 */
export interface RProfileVo {

	code: number;

	msg: string;

	data: ProfileVo;
}

/**
 * 角色信息视图对象 sys_role
 */
export interface SysRoleVo {
 // 角色ID
	roleId: number;
 // 角色名称
	roleName: string;
 // 角色权限字符串
	roleKey: string;
 // 显示顺序
	roleSort: number;
 // 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）
	dataScope: string;
 // 菜单树选择项是否关联显示
	menuCheckStrictly: boolean;
 // 部门树选择项是否关联显示
	deptCheckStrictly: boolean;
 // 角色状态（0正常 1停用）
	status: string;
 // 备注
	remark: string;
 // 创建时间
	createTime: string;
 // 用户是否存在此角色标识 默认不存在
	flag: boolean;

	superAdmin: boolean;
}

/**
 * 用户信息视图对象 sys_user
 */
export interface SysUserVo {
 // 用户ID
	userId: number;
 // 租户ID
	tenantId: string;
 // 部门ID
	deptId: number;
 // 用户账号
	userName: string;
 // 用户昵称
	nickName: string;
 // 用户类型（sys_user系统用户）
	userType: string;
 // 用户邮箱
	email: string;
 // 手机号码
	phonenumber: string;
 // 用户性别（0男 1女 2未知）
	sex: string;
 // 头像地址
	avatar: number;
 // 帐号状态（0正常 1停用）
	status: string;
 // 最后登录IP
	loginIp: string;
 // 最后登录时间
	loginDate: string;
 // 备注
	remark: string;
 // 创建时间
	createTime: string;
 // 部门名
	deptName: string;
 // 角色对象
	roles: SysRoleVo[];
 // 角色组
	roleIds: number[];
 // 岗位组
	postIds: number[];
 // 数据权限 当前角色ID
	roleId: number;
}

/**
 * 响应信息主体
 */
export interface RListSysUserVo {

	code: number;

	msg: string;

	data: SysUserVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysUserVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysUserVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RUserInfoVo {

	code: number;

	msg: string;

	data: UserInfoVo;
}

/**
 * 登录用户信息
 */
export interface UserInfoVo {

	user: SysUserVo;
 // 菜单权限
	permissions: string[];
 // 角色权限
	roles: string[];
}

/**
 * 响应信息主体
 */
export interface RListTreeLong {

	code: number;

	msg: string;

	data: TreeLong[];
}

/**
 * 
 */
export interface TreeLong {

	name: Record<string, unknown>;

	id: number;

	parentId: number;

	config: TreeNodeConfig;

	weight: Record<string, unknown>;

	empty: boolean;
}

/**
 * 
 */
export interface TreeNodeConfig {

	idKey: string;

	parentIdKey: string;

	weightKey: string;

	nameKey: string;

	childrenKey: string;

	deep: number;
}

/**
 * 响应信息主体
 */
export interface RSysUserInfoVo {

	code: number;

	msg: string;

	data: SysUserInfoVo;
}

/**
 * 岗位信息视图对象 sys_post
 */
export interface SysPostVo {
 // 岗位ID
	postId: number;
 // 部门id
	deptId: number;
 // 岗位编码
	postCode: string;
 // 岗位名称
	postName: string;
 // 岗位类别编码
	postCategory: string;
 // 显示顺序
	postSort: number;
 // 状态（0正常 1停用）
	status: string;
 // 备注
	remark: string;
 // 创建时间
	createTime: string;
 // 部门名
	deptName: string;
}

/**
 * 用户信息
 */
export interface SysUserInfoVo {

	user: SysUserVo;
 // 角色ID列表
	roleIds: number[];
 // 角色列表
	roles: SysRoleVo[];
 // 岗位ID列表
	postIds: number[];
 // 岗位列表
	posts: SysPostVo[];
}

/**
 * 响应信息主体
 */
export interface RSysTenantVo {

	code: number;

	msg: string;

	data: SysTenantVo;
}

/**
 * 租户视图对象 sys_tenant
 */
export interface SysTenantVo {
 // id
	id: number;
 // 租户编号
	tenantId: string;
 // 联系人
	contactUserName: string;
 // 联系电话
	contactPhone: string;
 // 企业名称
	companyName: string;
 // 统一社会信用代码
	licenseNumber: string;
 // 地址
	address: string;
 // 域名
	domain: string;
 // 企业简介
	intro: string;
 // 备注
	remark: string;
 // 租户套餐编号
	packageId: number;
 // 过期时间
	expireTime: string;
 // 用户数量（-1不限制）
	accountCount: number;
 // 租户状态（0正常 1停用）
	status: string;
}

/**
 * 响应信息主体
 */
export interface RSysTenantPackageVo {

	code: number;

	msg: string;

	data: SysTenantPackageVo;
}

/**
 * 租户套餐视图对象 sys_tenant_package
 */
export interface SysTenantPackageVo {
 // 租户套餐id
	packageId: number;
 // 套餐名称
	packageName: string;
 // 关联菜单id
	menuIds: string;
 // 备注
	remark: string;
 // 菜单树选择项是否关联显示
	menuCheckStrictly: boolean;
 // 状态（0正常 1停用）
	status: string;
}

/**
 * 响应信息主体
 */
export interface RListSysTenantPackageVo {

	code: number;

	msg: string;

	data: SysTenantPackageVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysTenantPackageVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysTenantPackageVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysTenantVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysTenantVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RListSysSocialVo {

	code: number;

	msg: string;

	data: SysSocialVo[];
}

/**
 * 社会化关系视图对象 sys_social
 */
export interface SysSocialVo {
 // 主键
	id: number;
 // 用户ID
	userId: number;
 // 租户ID
	tenantId: string;
 // 的唯一ID
	authId: string;
 // 用户来源
	source: string;
 // 用户的授权令牌
	accessToken: string;
 // 用户的授权令牌的有效期，部分平台可能没有
	expireIn: number;
 // 刷新令牌，部分平台可能没有
	refreshToken: string;
 // 用户的 open id
	openId: string;
 // 授权的第三方账号
	userName: string;
 // 授权的第三方昵称
	nickName: string;
 // 授权的第三方邮箱
	email: string;
 // 授权的第三方头像地址
	avatar: string;
 // 平台的授权信息，部分平台可能没有
	accessCode: string;
 // 用户的 unionid
	unionId: string;
 // 授予的权限，部分平台可能没有
	scope: string;
 // 个别平台的授权信息，部分平台可能没有
	tokenType: string;
 // id token，部分平台可能没有
	idToken: string;
 // 小米平台用户的附带属性，部分平台可能没有
	macAlgorithm: string;
 // 小米平台用户的附带属性，部分平台可能没有
	macKey: string;
 // 用户的授权code，部分平台可能没有
	code: string;
 // Twitter平台用户的附带属性，部分平台可能没有
	oauthToken: string;
 // Twitter平台用户的附带属性，部分平台可能没有
	oauthTokenSecret: string;
 // 创建时间
	createTime: string;
}

/**
 * 响应信息主体
 */
export interface RSysRoleVo {

	code: number;

	msg: string;

	data: SysRoleVo;
}

/**
 * 响应信息主体
 */
export interface RListSysRoleVo {

	code: number;

	msg: string;

	data: SysRoleVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysRoleVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysRoleVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 角色部门列表树信息
 */
export interface DeptTreeSelectVo {
 // 选中部门列表
	checkedKeys: number[];
 // 下拉树结构列表
	depts: TreeLong[];
}

/**
 * 响应信息主体
 */
export interface RDeptTreeSelectVo {

	code: number;

	msg: string;

	data: DeptTreeSelectVo;
}

/**
 * 响应信息主体
 */
export interface RSysPostVo {

	code: number;

	msg: string;

	data: SysPostVo;
}

/**
 * 响应信息主体
 */
export interface RListSysPostVo {

	code: number;

	msg: string;

	data: SysPostVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysPostVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysPostVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RSysNoticeVo {

	code: number;

	msg: string;

	data: SysNoticeVo;
}

/**
 * 通知公告视图对象 sys_notice
 */
export interface SysNoticeVo {
 // 公告ID
	noticeId: number;
 // 公告标题
	noticeTitle: string;
 // 公告类型（1通知 2公告）
	noticeType: string;
 // 公告内容
	noticeContent: string;
 // 公告状态（0正常 1关闭）
	status: string;
 // 备注
	remark: string;
 // 创建者
	createBy: number;
 // 创建人名称
	createByName: string;
 // 创建时间
	createTime: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysNoticeVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysNoticeVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RSysMenuVo {

	code: number;

	msg: string;

	data: SysMenuVo;
}

/**
 * 菜单权限视图对象 sys_menu
 */
export interface SysMenuVo {
 // 菜单ID
	menuId: number;
 // 菜单名称
	menuName: string;
 // 父菜单ID
	parentId: number;
 // 显示顺序
	orderNum: number;
 // 路由地址
	path: string;
 // 组件路径
	component: string;
 // 路由参数
	queryParam: string;
 // 是否为外链（0是 1否）
	isFrame: string;
 // 是否缓存（0缓存 1不缓存）
	isCache: string;
 // 菜单类型（M目录 C菜单 F按钮）
	menuType: string;
 // 显示状态（0显示 1隐藏）
	visible: string;
 // 菜单状态（0正常 1停用）
	status: string;
 // 权限标识
	perms: string;
 // 菜单图标
	icon: string;
 // 创建部门
	createDept: number;
 // 备注
	remark: string;
 // 创建时间
	createTime: string;
 // 子菜单
	children: SysMenuVo[];
}

/**
 * 角色菜单列表树信息
 */
export interface MenuTreeSelectVo {
 // 选中菜单列表
	checkedKeys: number[];
 // 菜单下拉树结构列表
	menus: TreeLong[];
}

/**
 * 响应信息主体
 */
export interface RMenuTreeSelectVo {

	code: number;

	msg: string;

	data: MenuTreeSelectVo;
}

/**
 * 响应信息主体
 */
export interface RListSysMenuVo {

	code: number;

	msg: string;

	data: SysMenuVo[];
}

/**
 * 路由显示信息
 */
export interface MetaVo {
 // 设置该路由在侧边栏和面包屑中展示的名字
	title: string;
 // 设置该路由的图标，对应路径src/assets/icons/svg
	icon: string;
 // 设置为true，则不会被 缓存
	noCache: boolean;
 // 内链地址（http(s)://开头）
	link: string;
}

/**
 * 响应信息主体
 */
export interface RListRouterVo {

	code: number;

	msg: string;

	data: RouterVo[];
}

/**
 * 路由配置信息
 */
export interface RouterVo {
 // 路由名字
	name: string;
 // 路由地址
	path: string;
 // 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现
	hidden: boolean;
 // 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
	redirect: string;
 // 组件地址
	component: string;
 // 路由参数：如 {"id": 1, "name": "ry"}
	query: string;
 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
	alwaysShow: boolean;

	meta: MetaVo;
}

/**
 * 响应信息主体
 */
export interface RSysDictTypeVo {

	code: number;

	msg: string;

	data: SysDictTypeVo;
}

/**
 * 字典类型视图对象 sys_dict_type
 */
export interface SysDictTypeVo {
 // 字典主键
	dictId: number;
 // 字典名称
	dictName: string;
 // 字典类型
	dictType: string;
 // 备注
	remark: string;
 // 创建时间
	createTime: string;
}

/**
 * 响应信息主体
 */
export interface RListSysDictTypeVo {

	code: number;

	msg: string;

	data: SysDictTypeVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysDictTypeVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysDictTypeVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RSysDictDataVo {

	code: number;

	msg: string;

	data: SysDictDataVo;
}

/**
 * 字典数据视图对象 sys_dict_data
 */
export interface SysDictDataVo {
 // 字典编码
	dictCode: number;
 // 字典排序
	dictSort: number;
 // 字典标签
	dictLabel: string;
 // 字典键值
	dictValue: string;
 // 字典类型
	dictType: string;
 // 样式属性（其他样式扩展）
	cssClass: string;
 // 表格回显样式
	listClass: string;
 // 是否默认（Y是 N否）
	isDefault: string;
 // 备注
	remark: string;
 // 创建时间
	createTime: string;
}

/**
 * 响应信息主体
 */
export interface RListSysDictDataVo {

	code: number;

	msg: string;

	data: SysDictDataVo[];
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysDictDataVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysDictDataVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RSysDeptVo {

	code: number;

	msg: string;

	data: SysDeptVo;
}

/**
 * 部门视图对象 sys_dept
 */
export interface SysDeptVo {
 // 部门id
	deptId: number;
 // 父部门id
	parentId: number;
 // 父部门名称
	parentName: string;
 // 祖级列表
	ancestors: string;
 // 部门名称
	deptName: string;
 // 部门类别编码
	deptCategory: string;
 // 显示顺序
	orderNum: number;
 // 负责人ID
	leader: number;
 // 负责人
	leaderName: string;
 // 联系电话
	phone: string;
 // 邮箱
	email: string;
 // 部门状态（0正常 1停用）
	status: string;
 // 创建时间
	createTime: string;
}

/**
 * 响应信息主体
 */
export interface RListSysDeptVo {

	code: number;

	msg: string;

	data: SysDeptVo[];
}

/**
 * 响应信息主体
 */
export interface RSysConfigVo {

	code: number;

	msg: string;

	data: SysConfigVo;
}

/**
 * 参数配置视图对象 sys_config
 */
export interface SysConfigVo {
 // 参数主键
	configId: number;
 // 参数名称
	configName: string;
 // 参数键名
	configKey: string;
 // 参数键值
	configValue: string;
 // 系统内置（Y是 N否）
	configType: string;
 // 备注
	remark: string;
 // 创建时间
	createTime: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysConfigVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysConfigVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RSysClientVo {

	code: number;

	msg: string;

	data: SysClientVo;
}

/**
 * 授权管理视图对象 sys_client
 */
export interface SysClientVo {
 // id
	id: number;
 // 客户端id
	clientId: string;
 // 客户端key
	clientKey: string;
 // 客户端秘钥
	clientSecret: string;
 // 授权类型
	grantTypeList: string[];
 // 授权类型
	grantType: string;
 // 设备类型
	deviceType: string;
 // token活跃超时时间
	activeTimeout: number;
 // token固定超时时间
	timeout: number;
 // 状态（0正常 1停用）
	status: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysClientVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysClientVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 
 */
export interface SseEmitter {

	timeout: number;
}

/**
 * OSS对象存储分页查询对象 sys_oss
 */
export interface SysOssBo {
 // 创建部门
	createDept: number;
 // 创建者
	createBy: number;
 // 创建时间
	createTime: string;
 // 更新者
	updateBy: number;
 // 更新时间
	updateTime: string;
 // 请求参数
	params: Record<string, object>;
 // ossId
	ossId: number;
 // 文件名
	fileName: string;
 // 原名
	originalName: string;
 // 文件后缀名
	fileSuffix: string;
 // URL地址
	url: string;
 // 服务商
	service: string;
}

/**
 * OSS对象存储视图对象 sys_oss
 */
export interface SysOssVo {
 // 对象存储主键
	ossId: number;
 // 文件名
	fileName: string;
 // 原名
	originalName: string;
 // 文件后缀名
	fileSuffix: string;
 // URL地址
	url: string;
 // 创建时间
	createTime: string;
 // 上传人
	createBy: number;
 // 上传人名称
	createByName: string;
 // 服务商
	service: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysOssVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysOssVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RListSysOssVo {

	code: number;

	msg: string;

	data: SysOssVo[];
}

/**
 * 响应信息主体
 */
export interface RSysOssConfigVo {

	code: number;

	msg: string;

	data: SysOssConfigVo;
}

/**
 * 对象存储配置视图对象 sys_oss_config
 */
export interface SysOssConfigVo {
 // 主键
	ossConfigId: number;
 // 配置key
	configKey: string;
 // accessKey
	accessKey: string;
 // 秘钥
	secretKey: string;
 // 桶名称
	bucketName: string;
 // 前缀
	prefix: string;
 // 访问站点
	endpoint: string;
 // 自定义域名
	domain: string;
 // 是否https（Y=是,N=否）
	isHttps: string;
 // 域
	region: string;
 // 是否默认（0=是,1=否）
	status: string;
 // 扩展字段
	ext1: string;
 // 备注
	remark: string;
 // 桶权限类型(0private 1public 2custom)
	accessPolicy: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysOssConfigVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysOssConfigVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 操作日志记录视图对象 sys_oper_log
 */
export interface SysOperLogVo {
 // 日志主键
	operId: number;
 // 租户编号
	tenantId: string;
 // 模块标题
	title: string;
 // 业务类型（0其它 1新增 2修改 3删除）
	businessType: number;
 // 业务类型数组
	businessTypes: number[];
 // 方法名称
	method: string;
 // 请求方式
	requestMethod: string;
 // 操作类别（0其它 1后台用户 2手机端用户）
	operatorType: number;
 // 操作人员
	operName: string;
 // 部门名称
	deptName: string;
 // 请求URL
	operUrl: string;
 // 主机地址
	operIp: string;
 // 操作地点
	operLocation: string;
 // 请求参数
	operParam: string;
 // 返回参数
	jsonResult: string;
 // 操作状态（0正常 1异常）
	status: number;
 // 错误消息
	errorMsg: string;
 // 操作时间
	operTime: string;
 // 消耗时间
	costTime: number;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysOperLogVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysOperLogVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 当前在线会话
 */
export interface SysUserOnline {
 // 会话编号
	tokenId: string;
 // 部门名称
	deptName: string;
 // 用户名称
	userName: string;
 // 客户端
	clientKey: string;
 // 设备类型
	deviceType: string;
 // 登录IP地址
	ipaddr: string;
 // 登录地址
	loginLocation: string;
 // 浏览器类型
	browser: string;
 // 操作系统
	os: string;
 // 登录时间
	loginTime: number;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysUserOnline {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysUserOnline[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 系统访问记录视图对象 sys_logininfor
 */
export interface SysLogininforVo {
 // 访问ID
	infoId: number;
 // 租户编号
	tenantId: string;
 // 用户账号
	userName: string;
 // 客户端
	clientKey: string;
 // 设备类型
	deviceType: string;
 // 登录状态（0成功 1失败）
	status: string;
 // 登录IP地址
	ipaddr: string;
 // 登录地点
	loginLocation: string;
 // 浏览器类型
	browser: string;
 // 操作系统
	os: string;
 // 提示消息
	msg: string;
 // 访问时间
	loginTime: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoSysLogininforVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: SysLogininforVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 缓存监控列表信息
 */
export interface CacheListInfoVo {

	info: Record<string, string>;

	dbSize: number;

	commandStats: Record<string, string>[];
}

/**
 * 响应信息主体
 */
export interface RCacheListInfoVo {

	code: number;

	msg: string;

	data: CacheListInfoVo;
}

/**
 * 消息的dto
 */
export interface WebSocketMessageDto {
 // 需要推送到的session key 列表
	sessionKeys: number[];
 // 需要发送的消息
	message: string;
}

/**
 * 响应信息主体
 */
export interface RTestTreeVo {

	code: number;

	msg: string;

	data: TestTreeVo;
}

/**
 * 测试树表视图对象 test_tree
 */
export interface TestTreeVo {
 // 主键
	id: number;
 // 父id
	parentId: number;
 // 部门id
	deptId: number;
 // 用户id
	userId: number;
 // 树节点名
	treeName: string;
 // 创建时间
	createTime: string;
}

/**
 * 响应信息主体
 */
export interface RListTestTreeVo {

	code: number;

	msg: string;

	data: TestTreeVo[];
}

/**
 * 响应信息主体
 */
export interface RTestSensitive {

	code: number;

	msg: string;

	data: TestSensitive;
}

/**
 * 
 */
export interface TestSensitive {
 // 身份证
	idCard: string;
 // 电话
	phone: string;
 // 地址
	address: string;
 // 邮箱
	email: string;
 // 银行卡
	bankCard: string;
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

	code: number;

	msg: string;

	data: TestI18nBo;
}

/**
 * 响应信息主体
 */
export interface RMapStringTestDemoEncrypt {

	code: number;

	msg: string;

	data: Record<string, unknown>;
}

/**
 * 
 */
export interface TestDemoEncrypt {
 // 创建部门
	createDept: number;
 // 创建者
	createBy: number;
 // 创建时间
	createTime: string;
 // 更新者
	updateBy: number;
 // 更新时间
	updateTime: string;
 // 请求参数
	params: Record<string, object>;
 // 租户编号
	tenantId: string;
 // 主键
	id: number;
 // 部门id
	deptId: number;
 // 用户id
	userId: number;
 // 排序号
	orderNum: number;
 // key键
	testKey: string;
 // 值
	value: string;
 // 版本
	version: number;
 // 删除标志
	delFlag: number;
}

/**
 * 响应信息主体
 */
export interface RTestDemoVo {

	code: number;

	msg: string;

	data: TestDemoVo;
}

/**
 * 测试单表视图对象 test_demo
 */
export interface TestDemoVo {
 // 主键
	id: number;
 // 部门id
	deptId: number;
 // 用户id
	userId: number;
 // 排序号
	orderNum: number;
 // key键
	testKey: string;
 // 值
	value: string;
 // 创建时间
	createTime: string;
 // 创建人
	createBy: number;
 // 创建人账号
	createByName: string;
 // 更新时间
	updateTime: string;
 // 更新人
	updateBy: number;
 // 更新人账号
	updateByName: string;
}

/**
 * 表格分页数据对象
 */
export interface TableDataInfoTestDemoVo {
 // 总记录数
	total: number;
 // 列表数据
	rows: TestDemoVo[];
 // 消息状态码
	code: number;
 // 消息内容
	msg: string;
}

/**
 * 响应信息主体
 */
export interface RBoolean {

	code: number;

	msg: string;

	data: boolean;
}

/**
 * 登录租户对象
 */
export interface LoginTenantVo {
 // 租户开关
	tenantEnabled: boolean;
 // 租户对象列表
	voList: TenantListVo[];
}

/**
 * 响应信息主体
 */
export interface RLoginTenantVo {

	code: number;

	msg: string;

	data: LoginTenantVo;
}

/**
 * 租户列表
 */
export interface TenantListVo {
 // 租户编号
	tenantId: string;
 // 企业名称
	companyName: string;
 // 域名
	domain: string;
}

/**
 * 验证码信息
 */
export interface CaptchaVo {
 // 是否开启验证码
	captchaEnabled: boolean;

	uuid: string;
 // 验证码图片
	img: string;
}

/**
 * 响应信息主体
 */
export interface RCaptchaVo {

	code: number;

	msg: string;

	data: CaptchaVo;
}

