import http from '@/api';
import { ResultData } from '@/api/interface';
import type { RVoid, TestTreeBo, TestDemoBo, ExportDemoVo, WebSocketMessageDto, RTestTreeVo, RListTestTreeVo, RObject, RTestSensitive, RString, RTestI18nBo, TestI18nBo, RMapStringTestDemoEncrypt, RTestDemoVo, TableDataInfoTestDemoVo, PageQuery, RBoolean } from './types/api-types';


	/**
	 * 修改测试树表
	 * @description 修改测试树表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoTreeEdit_16Api = (params: TestTreeBo) => {
		return http.put<RVoid>(
			`/demo/tree`, params
		);
	};

	/**
	 * 新增测试树表
	 * @description 新增测试树表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoTreeAdd_16Api = (params: TestTreeBo) => {
		return http.post<RVoid>(
			`/demo/tree`, params
		);
	};

	/**
	 * 修改测试单表
	 * @description 修改测试单表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoDemoEdit_17Api = (params: TestDemoBo) => {
		return http.put<RVoid>(
			`/demo/demo`, params
		);
	};

	/**
	 * 新增测试单表
	 * @description 新增测试单表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoDemoAdd_17Api = (params: TestDemoBo) => {
		return http.post<RVoid>(
			`/demo/demo`, params
		);
	};

	/**
	 * 导入表格
	 * @description 导入表格
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoExcelImportWithOptionsImportWithOptionsApi = (params: FormData) => {
		return http.post<ExportDemoVo[]>(
			`/demo/excel/importWithOptions`, params, { headers: { "Content-Type": "multipart/form-data" } }
		);
	};

	/**
	 * 导入数据
	 * @description 导入数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoDemoImportDataImportData_1Api = (params: FormData) => {
		return http.post<RVoid>(
			`/demo/demo/importData`, params, { headers: { "Content-Type": "multipart/form-data" } }
		);
	};

	/**
	 * 导出测试单表列表
	 * @description 导出测试单表列表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoDemoExportExport_14Api = (params: {
		bo: TestDemoBo
	}) => {
		return http.post<ResultData<string>>(
			`/demo/demo/export`, params
		);
	};

	/**
	 * 新增批量方法 可完美替代 saveBatch 秒级插入上万数据 (对mysql负荷较大)
	 * @description 新增批量方法 可完美替代 saveBatch 秒级插入上万数据 (对mysql负荷较大) 3.5.0 版本 增加 rewriteBatchedStatements=true 批处理参数 使 MP 原生批处理可以达到同样的速度
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoBatchAddAdd_18Api = () => {
		return http.post<RVoid>(
			`/demo/batch/add`
		);
	};

	/**
	 * 新增或更新 可完美替代 saveOrUpdateBatch 高性能
	 * @description 新增或更新 可完美替代 saveOrUpdateBatch 高性能 3.5.0 版本 增加 rewriteBatchedStatements=true 批处理参数 使 MP 原生批处理可以达到同样的速度
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoBatchAddOrUpdateAddOrUpdateApi = () => {
		return http.post<RVoid>(
			`/demo/batch/addOrUpdate`
		);
	};

	/**
	 * 发布消息
	 * @description 发布消息
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoWebsocketSendSend_2Api = (params: {
		dto: WebSocketMessageDto
	}) => {
		return http.get<RVoid>(
			`/demo/websocket/send`, { params }
		);
	};

	/**
	 * 获取测试树表详细信息
	 * @description 获取测试树表详细信息
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoTreeGetInfo_22Api = (params: {
		id: number
	}) => {
		return http.get<RTestTreeVo>(
			`/demo/tree/${params.id}`, { params }
		);
	};

	/**
	 * 查询测试树表列表
	 * @description 查询测试树表列表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoTreeListList_21Api = (params: {
		bo: TestTreeBo
	}) => {
		return http.get<RListTestTreeVo>(
			`/demo/tree/list`, { params }
		);
	};

	/**
	 * 导出测试树表列表
	 * @description 导出测试树表列表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoTreeExportExport_15Api = (params: {
		bo: TestTreeBo
	}) => {
		return http.get<ResultData<string>>(
			`/demo/tree/export`, { params }
		);
	};

	/**
	 * 发送短信Tencent
	 * @description 发送短信Tencent
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoSmsSendTencentSendTencentApi = (params: {
		phones: string;
		templateId: string
	}) => {
		return http.get<RObject>(
			`/demo/sms/sendTencent`, { params }
		);
	};

	/**
	 * 发送短信Aliyun
	 * @description 发送短信Aliyun
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoSmsSendAliyunSendAliyunApi = (params: {
		phones: string;
		templateId: string
	}) => {
		return http.get<RObject>(
			`/demo/sms/sendAliyun`, { params }
		);
	};

	/**
	 * 移除黑名单
	 * @description 移除黑名单
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoSmsRemoveBlacklistRemoveBlacklistApi = (params: {
		phone: string
	}) => {
		return http.get<RObject>(
			`/demo/sms/removeBlacklist`, { params }
		);
	};

	/**
	 * 添加黑名单
	 * @description 添加黑名单
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoSmsAddBlacklistAddBlacklistApi = (params: {
		phone: string
	}) => {
		return http.get<RObject>(
			`/demo/sms/addBlacklist`, { params }
		);
	};

	/**
	 * 测试数据脱敏
	 * @description 测试数据脱敏
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoSensitiveTestTestApi = () => {
		return http.get<RTestSensitive>(
			`/demo/sensitive/test`
		);
	};

	/**
	 * 测试lock4j 注解
	 * @description 测试lock4j 注解
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoRedisLockTestLock4jTestLock4jApi = (params: {
		key: string;
		value: string
	}) => {
		return http.get<RString>(
			`/demo/redisLock/testLock4j`, { params }
		);
	};

	/**
	 * 测试lock4j 工具
	 * @description 测试lock4j 工具
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoRedisLockTestLock4jLockTemplateTestLock4jLockTemplateApi = (params: {
		key: string;
		value: string
	}) => {
		return http.get<RString>(
			`/demo/redisLock/testLock4jLockTemplate`, { params }
		);
	};

	/**
	 * 订阅消息
	 * @description 订阅消息
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoRedisPubsubSubSubApi = (params: {
		key: string
	}) => {
		return http.get<RVoid>(
			`/demo/redis/pubsub/sub`, { params }
		);
	};

	/**
	 * 发布消息
	 * @description 发布消息
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoRedisPubsubPubPubApi = (params: {
		key: string;
		value: string
	}) => {
		return http.get<RVoid>(
			`/demo/redis/pubsub/pub`, { params }
		);
	};

	/**
	 * 测试请求IP限流 同一IP请求受影响
	 * @description 测试请求IP限流 同一IP请求受影响
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoRateLimiterTestipTestipApi = (params: {
		value: string
	}) => {
		return http.get<RString>(
			`/demo/rateLimiter/testip`, { params }
		);
	};

	/**
	 * 测试集群实例限流 启动两个后端服务互不影响
	 * @description 测试集群实例限流 启动两个后端服务互不影响
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoRateLimiterTestclusterTestclusterApi = (params: {
		value: string
	}) => {
		return http.get<RString>(
			`/demo/rateLimiter/testcluster`, { params }
		);
	};

	/**
	 * 测试全局限流 全局影响
	 * @description 测试全局限流 全局影响
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoRateLimiterTestTest_1Api = (params: {
		value: string
	}) => {
		return http.get<RString>(
			`/demo/rateLimiter/test`, { params }
		);
	};

	/**
	 * 测试请求IP限流(key基于参数获取) 同一IP请求受影响 简单变量获取 #变量 复杂表达式 #{#变量 != 1 ? 1 : 0}
	 * @description 测试请求IP限流(key基于参数获取) 同一IP请求受影响 简单变量获取 #变量 复杂表达式 #{#变量 != 1 ? 1 : 0}
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoRateLimiterTestObjTestObjApi = (params: {
		value: string
	}) => {
		return http.get<RString>(
			`/demo/rateLimiter/testObj`, { params }
		);
	};

	/**
	 * 删除队列数据
	 * @description 删除队列数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueuePriorityRemoveRemove_1Api = (params: {
		queueName: string;
		name: string;
		orderNum: number
	}) => {
		return http.get<RVoid>(
			`/demo/queue/priority/remove`, { params }
		);
	};

	/**
	 * 获取队列数据
	 * @description 获取队列数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueuePriorityGetGetApi = (params: {
		queueName: string
	}) => {
		return http.get<RVoid>(
			`/demo/queue/priority/get`, { params }
		);
	};

	/**
	 * 添加队列数据
	 * @description 添加队列数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueuePriorityAddAdd_19Api = (params: {
		queueName: string
	}) => {
		return http.get<RVoid>(
			`/demo/queue/priority/add`, { params }
		);
	};

	/**
	 * 订阅队列
	 * @description 订阅队列
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueueDelayedSubscribeSubscribeApi = (params: {
		queueName: string
	}) => {
		return http.get<RVoid>(
			`/demo/queue/delayed/subscribe`, { params }
		);
	};

	/**
	 * 删除队列数据
	 * @description 删除队列数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueueDelayedRemoveRemove_2Api = (params: {
		queueName: string;
		orderNum: string
	}) => {
		return http.get<RVoid>(
			`/demo/queue/delayed/remove`, { params }
		);
	};

	/**
	 * 销毁队列
	 * @description 销毁队列
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueueDelayedDestroyDestroyApi = (params: {
		queueName: string
	}) => {
		return http.get<RVoid>(
			`/demo/queue/delayed/destroy`, { params }
		);
	};

	/**
	 * 添加队列数据
	 * @description 添加队列数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueueDelayedAddAdd_20Api = (params: {
		queueName: string;
		orderNum: string;
		time: number
	}) => {
		return http.get<RVoid>(
			`/demo/queue/delayed/add`, { params }
		);
	};

	/**
	 * 删除队列数据
	 * @description 删除队列数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueueBoundedRemoveRemove_3Api = (params: {
		queueName: string
	}) => {
		return http.get<RVoid>(
			`/demo/queue/bounded/remove`, { params }
		);
	};

	/**
	 * 获取队列数据
	 * @description 获取队列数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueueBoundedGetGet_1Api = (params: {
		queueName: string
	}) => {
		return http.get<RVoid>(
			`/demo/queue/bounded/get`, { params }
		);
	};

	/**
	 * 添加队列数据
	 * @description 添加队列数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoQueueBoundedAddAdd_21Api = (params: {
		queueName: string;
		capacity: number
	}) => {
		return http.get<RVoid>(
			`/demo/queue/bounded/add`, { params }
		);
	};

	/**
	 * 发送邮件
	 * @description 发送邮件
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoMailSendSimpleMessageSendSimpleMessageApi = (params: {
		to: string;
		subject: string;
		text: string
	}) => {
		return http.get<RVoid>(
			`/demo/mail/sendSimpleMessage`, { params }
		);
	};

	/**
	 * 发送邮件（带附件）
	 * @description 发送邮件（带附件）
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoMailSendMessageWithAttachmentSendMessageWithAttachmentApi = (params: {
		to: string;
		subject: string;
		text: string;
		filePath: string
	}) => {
		return http.get<RVoid>(
			`/demo/mail/sendMessageWithAttachment`, { params }
		);
	};

	/**
	 * 通过code获取国际化内容 code为 messages
	 * @description 通过code获取国际化内容 code为 messages.properties 中的 key 测试使用 user.register.success
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoI18nGet_2Api = (params: {
		code: string
	}) => {
		return http.get<RVoid>(
			`/demo/i18n`, { params }
		);
	};

	/**
	 * Bean 校验国际化 不传值 分别查看异常返回
	 * @description Bean 校验国际化 不传值 分别查看异常返回 测试使用 not.null
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoI18nTest2Test2Api = (params: {
		bo: TestI18nBo
	}) => {
		return http.get<RTestI18nBo>(
			`/demo/i18n/test2`, { params }
		);
	};

	/**
	 * Validator 校验国际化 不传值 分别查看异常返回
	 * @description Validator 校验国际化 不传值 分别查看异常返回 测试使用 not.null
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoI18nTest1Test1Api = (params: {
		str: string
	}) => {
		return http.get<RVoid>(
			`/demo/i18n/test1`, { params }
		);
	};

	/**
	 * 导出下拉框
	 * @description 导出下拉框
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoExcelExportWithOptionsExportWithOptionsApi = () => {
		return http.get<ResultData<string>>(
			`/demo/excel/exportWithOptions`
		);
	};

	/**
	 * 单列表多数据
	 * @description 单列表多数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoExcelExportTemplateOneExportTemplateOneApi = () => {
		return http.get<ResultData<string>>(
			`/demo/excel/exportTemplateOne`
		);
	};

	/**
	 * 多个sheet导出
	 * @description 多个sheet导出
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoExcelExportTemplateMultiSheetExportTemplateMultiSheetApi = () => {
		return http.get<ResultData<string>>(
			`/demo/excel/exportTemplateMultiSheet`
		);
	};

	/**
	 * 多列表多数据
	 * @description 多列表多数据
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoExcelExportTemplateMulitiExportTemplateMulitiApi = () => {
		return http.get<ResultData<string>>(
			`/demo/excel/exportTemplateMuliti`
		);
	};

	/**
	 * 测试数据库加解密
	 * @description 测试数据库加解密
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoEncryptTest_2Api = (params: {
		key: string;
		value: string
	}) => {
		return http.get<RMapStringTestDemoEncrypt>(
			`/demo/encrypt`, { params }
		);
	};

	/**
	 * 获取测试单表详细信息
	 * @description 获取测试单表详细信息
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoDemoGetInfo_23Api = (params: {
		id: number
	}) => {
		return http.get<RTestDemoVo>(
			`/demo/demo/${params.id}`, { params }
		);
	};

	/**
	 * 自定义分页查询
	 * @description 自定义分页查询
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoDemoPagePage_2Api = (params: {
		bo: TestDemoBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoTestDemoVo>(
			`/demo/demo/page`, { params }
		);
	};

	/**
	 * 查询测试单表列表
	 * @description 查询测试单表列表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoDemoListList_22Api = (params: {
		bo: TestDemoBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoTestDemoVo>(
			`/demo/demo/list`, { params }
		);
	};

	/**
	 * 测试设置过期时间 手动设置过期时间10秒 11秒后获取 判断是否相等
	 * @description 测试设置过期时间 手动设置过期时间10秒 11秒后获取 判断是否相等
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoCacheTest6Test6Api = (params: {
		key: string;
		value: string
	}) => {
		return http.get<RBoolean>(
			`/demo/cache/test6`, { params }
		);
	};

	/**
	 * 测试 @CacheEvict
	 * @description 测试 @CacheEvict 使用了CacheEvict注解的方法,会清空指定缓存 「一般用在删除的方法上」 cacheNames 命名规则 查看 {@link CacheNames CacheNames} 注释 支持多参数
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoCacheTest3Test3Api = (params: {
		key: string;
		value: string
	}) => {
		return http.get<RString>(
			`/demo/cache/test3`, { params }
		);
	};

	/**
	 * 测试 @CachePut
	 * @description 测试 @CachePut 加了@CachePut注解的方法,会把方法的返回值put到缓存里面缓存起来,供其它地方使用 它「通常用在新增或者实时更新方法上」 cacheNames 命名规则 查看 {@link CacheNames CacheNames} 注释 支持多参数
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoCacheTest2Test2_1Api = (params: {
		key: string;
		value: string
	}) => {
		return http.get<RString>(
			`/demo/cache/test2`, { params }
		);
	};

	/**
	 * 测试 @Cacheable
	 * @description 测试 @Cacheable 表示这个方法有了缓存的功能,方法的返回值会被缓存下来 下一次调用该方法前,会去检查是否缓存中已经有值 如果有就直接返回,不调用方法 如果没有,就调用方法,然后把结果缓存起来 这个注解「一般用在查询方法上」 重点说明: 缓存注解严谨与其他筛选数据功能一起使用 例如: 数据权限注解 会造成 缓存击穿 与 数据不一致问题 cacheNames 命名规则 查看 {@link CacheNames CacheNames} 注释 支持多参数
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoCacheTest1Test1_1Api = (params: {
		key: string;
		value: string
	}) => {
		return http.get<RString>(
			`/demo/cache/test1`, { params }
		);
	};

	/**
	 * 删除测试树表
	 * @description 删除测试树表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoTreeRemove_25Api = (params: {
		ids: number[]
	}) => {
		return http.delete<RVoid>(
			`/demo/tree/${params.ids}`, { params }
		);
	};

	/**
	 * 删除测试单表
	 * @description 删除测试单表
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoDemoRemove_26Api = (params: {
		ids: number[]
	}) => {
		return http.delete<RVoid>(
			`/demo/demo/${params.ids}`, { params }
		);
	};

	/**
	 * 删除批量方法
	 * @description 删除批量方法
	 * @date 2024-12-22T12:48:34.486Z
	 */
	export const demoBatchRemove_27Api = () => {
		return http.delete<RVoid>(
			`/demo/batch`
		);
	};
