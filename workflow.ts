import http from '@/api';
import { ResultData } from '@/api/interface';
import type { RVoid, ModelBo, RTestLeaveVo, TestLeaveBo, WfFormManageBo, WfCategoryBo, TransmitBo, TerminationBo, RMapStringObject, StartProcessBo, DeleteMultiBo, DelegateBo, CompleteTaskBo, RString, BackProcessBo, AddMultiBo, TaskUrgingBo, ProcessInvalidBo, WfDefinitionConfigBo, RListWfTaskBackNode, RTaskVo, TableDataInfoTaskVo, TaskBo, PageQuery, RListTaskVo, RListVariableVo, TableDataInfoProcessInstanceVo, ProcessInstanceBo, RListActHistoryInfoVo, TableDataInfoProcessDefinitionVo, ProcessDefinitionBo, RListProcessDefinitionVo, TableDataInfoModel, RModelVo, TableDataInfoTestLeaveVo, RWfFormManageVo, TableDataInfoWfFormManageVo, RListWfFormManageVo, RListWfDefinitionConfigVo, RWfDefinitionConfigVo, RWfCategoryVo, RListWfCategoryVo } from './types/api-types';


	/**
	 * 修改任务办理人
	 * @description 修改任务办理人
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskUpdateAssigneeUpdateAssigneeApi = (params: {
		taskIds: string[];
		userId: string
	}) => {
		return http.put<RVoid>(
			`/workflow/task/updateAssignee/${params.taskIds}/${params.userId}`, params
		);
	};

	/**
	 * 激活或者挂起流程定义
	 * @description 激活或者挂起流程定义
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessDefinitionUpdateDefinitionStateUpdateDefinitionStateApi = (params: {
		processDefinitionId: string
	}) => {
		return http.put<RVoid>(
			`/workflow/processDefinition/updateDefinitionState/${params.processDefinitionId}`, params
		);
	};

	/**
	 * 迁移流程定义
	 * @description 迁移流程定义
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessDefinitionMigrationDefinitionMigrationDefinitionApi = (params: {
		currentProcessDefinitionId: string;
		fromProcessDefinitionId: string
	}) => {
		return http.put<RVoid>(
			`/workflow/processDefinition/migrationDefinition/${params.currentProcessDefinitionId}/${params.fromProcessDefinitionId}`, params
		);
	};

	/**
	 * 流程定义转换为模型
	 * @description 流程定义转换为模型
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessDefinitionConvertToModelConvertToModelApi = (params: {
		processDefinitionId: string
	}) => {
		return http.put<RVoid>(
			`/workflow/processDefinition/convertToModel/${params.processDefinitionId}`, params
		);
	};

	/**
	 * 修改模型信息
	 * @description 修改模型信息
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowModelUpdateUpdateApi = (params: ModelBo) => {
		return http.put<RVoid>(
			`/workflow/model/update`, params
		);
	};

	/**
	 * 编辑XMl模型
	 * @description 编辑XMl模型
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowModelEditModelXmlEditModelApi = (params: ModelBo) => {
		return http.put<RVoid>(
			`/workflow/model/editModelXml`, params
		);
	};

	/**
	 * 修改请假
	 * @description 修改请假
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowLeaveEditApi = (params: TestLeaveBo) => {
		return http.put<RTestLeaveVo>(
			`/workflow/leave`, params
		);
	};

	/**
	 * 新增请假
	 * @description 新增请假
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowLeaveAddApi = (params: TestLeaveBo) => {
		return http.post<RTestLeaveVo>(
			`/workflow/leave`, params
		);
	};

	/**
	 * 修改表单管理
	 * @description 修改表单管理
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowFormManageEdit_1Api = (params: WfFormManageBo) => {
		return http.put<RVoid>(
			`/workflow/formManage`, params
		);
	};

	/**
	 * 新增表单管理
	 * @description 新增表单管理
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowFormManageAdd_1Api = (params: WfFormManageBo) => {
		return http.post<RVoid>(
			`/workflow/formManage`, params
		);
	};

	/**
	 * 修改流程分类
	 * @description 修改流程分类
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowCategoryEdit_2Api = (params: WfCategoryBo) => {
		return http.put<RVoid>(
			`/workflow/category`, params
		);
	};

	/**
	 * 新增流程分类
	 * @description 新增流程分类
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowCategoryAdd_2Api = (params: WfCategoryBo) => {
		return http.post<RVoid>(
			`/workflow/category`, params
		);
	};

	/**
	 * 转办任务
	 * @description 转办任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskTransferTaskTransferTaskApi = (params: TransmitBo) => {
		return http.post<RVoid>(
			`/workflow/task/transferTask`, params
		);
	};

	/**
	 * 终止任务
	 * @description 终止任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskTerminationTaskTerminationTaskApi = (params: TerminationBo) => {
		return http.post<RVoid>(
			`/workflow/task/terminationTask`, params
		);
	};

	/**
	 * 启动任务
	 * @description 启动任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskStartWorkFlowStartWorkFlowApi = (params: StartProcessBo) => {
		return http.post<RMapStringObject>(
			`/workflow/task/startWorkFlow`, params
		);
	};

	/**
	 * 归还（拾取的）任务
	 * @description 归还（拾取的）任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskReturnTaskReturnTaskApi = (params: {
		taskId: string
	}) => {
		return http.post<RVoid>(
			`/workflow/task/returnTask/${params.taskId}`, params
		);
	};

	/**
	 * 会签任务减签
	 * @description 会签任务减签
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskDeleteMultiInstanceExecutionDeleteMultiInstanceExecutionApi = (params: DeleteMultiBo) => {
		return http.post<RVoid>(
			`/workflow/task/deleteMultiInstanceExecution`, params
		);
	};

	/**
	 * 委派任务
	 * @description 委派任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskDelegateTaskDelegateTaskApi = (params: DelegateBo) => {
		return http.post<RVoid>(
			`/workflow/task/delegateTask`, params
		);
	};

	/**
	 * 办理任务
	 * @description 办理任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskCompleteTaskCompleteTaskApi = (params: CompleteTaskBo) => {
		return http.post<RVoid>(
			`/workflow/task/completeTask`, params
		);
	};

	/**
	 * 签收（拾取）任务
	 * @description 签收（拾取）任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskClaimClaimTaskApi = (params: {
		taskId: string
	}) => {
		return http.post<RVoid>(
			`/workflow/task/claim/${params.taskId}`, params
		);
	};

	/**
	 * 驳回审批
	 * @description 驳回审批
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskBackProcessBackProcessApi = (params: BackProcessBo) => {
		return http.post<RString>(
			`/workflow/task/backProcess`, params
		);
	};

	/**
	 * 会签任务加签
	 * @description 会签任务加签
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskAddMultiInstanceExecutionAddMultiInstanceExecutionApi = (params: AddMultiBo) => {
		return http.post<RVoid>(
			`/workflow/task/addMultiInstanceExecution`, params
		);
	};

	/**
	 * 任务催办(给当前任务办理人发送站内信，邮件，短信等)
	 * @description 任务催办(给当前任务办理人发送站内信，邮件，短信等)
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceTaskUrgingTaskUrgingApi = (params: TaskUrgingBo) => {
		return http.post<RVoid>(
			`/workflow/processInstance/taskUrging`, params
		);
	};

	/**
	 * 作废流程实例，不会删除历史记录(删除运行中的实例)
	 * @description 作废流程实例，不会删除历史记录(删除运行中的实例)
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceDeleteRunInstanceDeleteRunInstanceApi = (params: ProcessInvalidBo) => {
		return http.post<RVoid>(
			`/workflow/processInstance/deleteRunInstance`, params
		);
	};

	/**
	 * 撤销流程申请
	 * @description 撤销流程申请
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceCancelProcessApplyCancelProcessApplyApi = (params: {
		businessKey: string
	}) => {
		return http.post<RVoid>(
			`/workflow/processInstance/cancelProcessApply/${params.businessKey}`, params
		);
	};

	/**
	 * 通过zip或xml部署流程定义
	 * @description 通过zip或xml部署流程定义
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessDefinitionDeployByFileDeployByFileApi = (params: Record<string, unknown>) => {
		return http.post<ResultData<string>>(
			`/workflow/processDefinition/deployByFile`, params
		);
	};

	/**
	 * 新增模型
	 * @description 新增模型
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowModelSaveSaveNewModelApi = (params: ModelBo) => {
		return http.post<RVoid>(
			`/workflow/model/save`, params
		);
	};

	/**
	 * 模型部署
	 * @description 模型部署
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowModelModelDeployDeployApi = (params: {
		id: string
	}) => {
		return http.post<RVoid>(
			`/workflow/model/modelDeploy/${params.id}`, params
		);
	};

	/**
	 * 复制模型
	 * @description 复制模型
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowModelCopyModelCopyModelApi = (params: ModelBo) => {
		return http.post<RVoid>(
			`/workflow/model/copyModel`, params
		);
	};

	/**
	 * 导出请假列表
	 * @description 导出请假列表
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowLeaveExportExportApi = (params: {
		bo: TestLeaveBo
	}) => {
		return http.post<ResultData<string>>(
			`/workflow/leave/export`, params
		);
	};

	/**
	 * 导出表单管理列表
	 * @description 导出表单管理列表
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowFormManageExportExport_1Api = (params: {
		bo: WfFormManageBo
	}) => {
		return http.post<ResultData<string>>(
			`/workflow/formManage/export`, params
		);
	};

	/**
	 * 新增流程定义配置
	 * @description 新增流程定义配置
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowDefinitionConfigSaveOrUpdateSaveOrUpdateApi = (params: WfDefinitionConfigBo) => {
		return http.post<RVoid>(
			`/workflow/definitionConfig/saveOrUpdate`, params
		);
	};

	/**
	 * 导出流程分类列表
	 * @description 导出流程分类列表
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowCategoryExportExport_2Api = (params: {
		bo: WfCategoryBo
	}) => {
		return http.post<ResultData<string>>(
			`/workflow/category/export`, params
		);
	};

	/**
	 * 查询工作流任务用户选择加签人员
	 * @description 查询工作流任务用户选择加签人员
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetTaskUserIdsByAddMultiInstanceGetTaskUserIdsByAddMultiInstanceApi = (params: {
		taskId: string
	}) => {
		return http.get<RString>(
			`/workflow/task/getTaskUserIdsByAddMultiInstance/${params.taskId}`, { params }
		);
	};

	/**
	 * 获取可驳回得任务节点
	 * @description 获取可驳回得任务节点
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetTaskNodeListGetNodeListApi = (params: {
		processInstanceId: string
	}) => {
		return http.get<RListWfTaskBackNode>(
			`/workflow/task/getTaskNodeList/${params.processInstanceId}`, { params }
		);
	};

	/**
	 * 获取当前任务
	 * @description 获取当前任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetTaskByIdGetTaskByIdApi = (params: {
		taskId: string
	}) => {
		return http.get<RTaskVo>(
			`/workflow/task/getTaskById/${params.taskId}`, { params }
		);
	};

	/**
	 * 查询当前用户的待办任务
	 * @description 查询当前用户的待办任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetPageByTaskWaitGetPageByTaskWaitApi = (params: {
		taskBo: TaskBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoTaskVo>(
			`/workflow/task/getPageByTaskWait`, { params }
		);
	};

	/**
	 * 查询当前用户的已办任务
	 * @description 查询当前用户的已办任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetPageByTaskFinishGetPageByTaskFinishApi = (params: {
		taskBo: TaskBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoTaskVo>(
			`/workflow/task/getPageByTaskFinish`, { params }
		);
	};

	/**
	 * 查询当前用户的抄送
	 * @description 查询当前用户的抄送
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetPageByTaskCopyGetPageByTaskCopyApi = (params: {
		taskBo: TaskBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoTaskVo>(
			`/workflow/task/getPageByTaskCopy`, { params }
		);
	};

	/**
	 * 查询当前租户所有待办任务
	 * @description 查询当前租户所有待办任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetPageByAllTaskWaitGetPageByAllTaskWaitApi = (params: {
		taskBo: TaskBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoTaskVo>(
			`/workflow/task/getPageByAllTaskWait`, { params }
		);
	};

	/**
	 * 查询当前租户所有已办任务
	 * @description 查询当前租户所有已办任务
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetPageByAllTaskFinishGetPageByAllTaskFinishApi = (params: {
		taskBo: TaskBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoTaskVo>(
			`/workflow/task/getPageByAllTaskFinish`, { params }
		);
	};

	/**
	 * 查询工作流选择减签人员
	 * @description 查询工作流选择减签人员
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetListByDeleteMultiInstanceGetListByDeleteMultiInstanceApi = (params: {
		taskId: string
	}) => {
		return http.get<RListTaskVo>(
			`/workflow/task/getListByDeleteMultiInstance/${params.taskId}`, { params }
		);
	};

	/**
	 * 查询流程变量
	 * @description 查询流程变量
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowTaskGetInstanceVariableGetProcessInstVariableApi = (params: {
		taskId: string
	}) => {
		return http.get<RListVariableVo>(
			`/workflow/task/getInstanceVariable/${params.taskId}`, { params }
		);
	};

	/**
	 * 分页查询正在运行的流程实例
	 * @description 分页查询正在运行的流程实例
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceGetPageByRunningGetPageByRunningApi = (params: {
		bo: ProcessInstanceBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoProcessInstanceVo>(
			`/workflow/processInstance/getPageByRunning`, { params }
		);
	};

	/**
	 * 分页查询已结束的流程实例
	 * @description 分页查询已结束的流程实例
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceGetPageByFinishGetPageByFinishApi = (params: {
		bo: ProcessInstanceBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoProcessInstanceVo>(
			`/workflow/processInstance/getPageByFinish`, { params }
		);
	};

	/**
	 * 分页查询当前登录人单据
	 * @description 分页查询当前登录人单据
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceGetPageByCurrentGetPageByCurrentApi = (params: {
		bo: ProcessInstanceBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoProcessInstanceVo>(
			`/workflow/processInstance/getPageByCurrent`, { params }
		);
	};

	/**
	 * 获取审批记录
	 * @description 获取审批记录
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceGetHistoryRecordGetHistoryRecordApi = (params: {
		businessKey: string
	}) => {
		return http.get<RListActHistoryInfoVo>(
			`/workflow/processInstance/getHistoryRecord/${params.businessKey}`, { params }
		);
	};

	/**
	 * 通过业务id获取历史流程图运行中，历史等节点
	 * @description 通过业务id获取历史流程图运行中，历史等节点
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceGetHistoryListGetHistoryListApi = (params: {
		businessKey: string
	}) => {
		return http.get<RMapStringObject>(
			`/workflow/processInstance/getHistoryList/${params.businessKey}`, { params }
		);
	};

	/**
	 * 通过业务id获取历史流程图
	 * @description 通过业务id获取历史流程图
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessInstanceGetHistoryImageGetHistoryImageApi = (params: {
		businessKey: string
	}) => {
		return http.get<RString>(
			`/workflow/processInstance/getHistoryImage/${params.businessKey}`, { params }
		);
	};

	/**
	 * 分页查询
	 * @description 分页查询
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessDefinitionListPageApi = (params: {
		bo: ProcessDefinitionBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoProcessDefinitionVo>(
			`/workflow/processDefinition/list`, { params }
		);
	};

	/**
	 * 查询历史流程定义列表
	 * @description 查询历史流程定义列表
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessDefinitionGetListByKeyGetListByKeyApi = (params: {
		key: string
	}) => {
		return http.get<RListProcessDefinitionVo>(
			`/workflow/processDefinition/getListByKey/${params.key}`, { params }
		);
	};

	/**
	 * 查看流程定义xml文件
	 * @description 查看流程定义xml文件
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessDefinitionDefinitionXmlDefinitionXmlApi = (params: {
		processDefinitionId: string
	}) => {
		return http.get<RMapStringObject>(
			`/workflow/processDefinition/definitionXml/${params.processDefinitionId}`, { params }
		);
	};

	/**
	 * 查看流程定义图片
	 * @description 查看流程定义图片
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowProcessDefinitionDefinitionImageDefinitionImageApi = (params: {
		processDefinitionId: string
	}) => {
		return http.get<RString>(
			`/workflow/processDefinition/definitionImage/${params.processDefinitionId}`, { params }
		);
	};

	/**
	 * 分页查询模型
	 * @description 分页查询模型
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowModelListPage_1Api = (params: {
		modelBo: ModelBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoModel>(
			`/workflow/model/list`, { params }
		);
	};

	/**
	 * 查询模型
	 * @description 查询模型
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowModelGetInfoGetInfoApi = (params: {
		id: string
	}) => {
		return http.get<RModelVo>(
			`/workflow/model/getInfo/${params.id}`, { params }
		);
	};

	/**
	 * 导出模型zip压缩包
	 * @description 导出模型zip压缩包
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowModelExportZipExportZipApi = (params: {
		modelIds: string[]
	}) => {
		return http.get<ResultData<string>>(
			`/workflow/model/export/zip/${params.modelIds}`, { params }
		);
	};

	/**
	 * 获取请假详细信息
	 * @description 获取请假详细信息
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowLeaveGetInfo_1Api = (params: {
		id: number
	}) => {
		return http.get<RTestLeaveVo>(
			`/workflow/leave/${params.id}`, { params }
		);
	};

	/**
	 * 查询请假列表
	 * @description 查询请假列表
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowLeaveListListApi = (params: {
		bo: TestLeaveBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoTestLeaveVo>(
			`/workflow/leave/list`, { params }
		);
	};

	/**
	 * 获取表单管理详细信息
	 * @description 获取表单管理详细信息
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowFormManageGetInfo_2Api = (params: {
		id: number
	}) => {
		return http.get<RWfFormManageVo>(
			`/workflow/formManage/${params.id}`, { params }
		);
	};

	/**
	 * 查询表单管理列表
	 * @description 查询表单管理列表
	 * @date 2024-12-22T12:48:34.483Z
	 */
	export const workflowFormManageListList_1Api = (params: {
		bo: WfFormManageBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoWfFormManageVo>(
			`/workflow/formManage/list`, { params }
		);
	};

	/**
	 * 查询表单管理列表
	 * @description 查询表单管理列表
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowFormManageListSelectListSelectListApi = () => {
		return http.get<RListWfFormManageVo>(
			`/workflow/formManage/list/selectList`
		);
	};

	/**
	 * 查询流程定义配置排除当前查询的流程定义
	 * @description 查询流程定义配置排除当前查询的流程定义
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowDefinitionConfigGetByTableNameNotDefIdGetByTableNameNotDefIdApi = (params: {
		tableName: string;
		definitionId: string
	}) => {
		return http.get<RListWfDefinitionConfigVo>(
			`/workflow/definitionConfig/getByTableNameNotDefId/${params.tableName}/${params.definitionId}`, { params }
		);
	};

	/**
	 * 获取流程定义配置详细信息
	 * @description 获取流程定义配置详细信息
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowDefinitionConfigGetByDefIdGetByDefIdApi = (params: {
		definitionId: string
	}) => {
		return http.get<RWfDefinitionConfigVo>(
			`/workflow/definitionConfig/getByDefId/${params.definitionId}`, { params }
		);
	};

	/**
	 * 获取流程分类详细信息
	 * @description 获取流程分类详细信息
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowCategoryGetInfo_3Api = (params: {
		id: number
	}) => {
		return http.get<RWfCategoryVo>(
			`/workflow/category/${params.id}`, { params }
		);
	};

	/**
	 * 查询流程分类列表
	 * @description 查询流程分类列表
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowCategoryListList_2Api = (params: {
		bo: WfCategoryBo
	}) => {
		return http.get<RListWfCategoryVo>(
			`/workflow/category/list`, { params }
		);
	};

	/**
	 * 运行中的实例 删除程实例，删除历史记录，删除业务与流程关联信息
	 * @description 运行中的实例 删除程实例，删除历史记录，删除业务与流程关联信息
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowProcessInstanceDeleteRunAndHisInstanceDeleteRunAndHisInstanceApi = (params: {
		businessKeys: string[]
	}) => {
		return http.delete<RVoid>(
			`/workflow/processInstance/deleteRunAndHisInstance/${params.businessKeys}`, { params }
		);
	};

	/**
	 * 已完成的实例 删除程实例，删除历史记录，删除业务与流程关联信息
	 * @description 已完成的实例 删除程实例，删除历史记录，删除业务与流程关联信息
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowProcessInstanceDeleteFinishAndHisInstanceDeleteFinishAndHisInstanceApi = (params: {
		businessKeys: string[]
	}) => {
		return http.delete<RVoid>(
			`/workflow/processInstance/deleteFinishAndHisInstance/${params.businessKeys}`, { params }
		);
	};

	/**
	 * 删除流程定义
	 * @description 删除流程定义
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowProcessDefinitionDeleteDeploymentApi = (params: {
		deploymentIds: string[];
		processDefinitionIds: string[]
	}) => {
		return http.delete<RVoid>(
			`/workflow/processDefinition/${params.deploymentIds}/${params.processDefinitionIds}`, { params }
		);
	};

	/**
	 * 删除流程模型
	 * @description 删除流程模型
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowModelDeleteApi = (params: {
		ids: string[]
	}) => {
		return http.delete<RVoid>(
			`/workflow/model/${params.ids}`, { params }
		);
	};

	/**
	 * 删除请假
	 * @description 删除请假
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowLeaveRemove_4Api = (params: {
		ids: number[]
	}) => {
		return http.delete<RVoid>(
			`/workflow/leave/${params.ids}`, { params }
		);
	};

	/**
	 * 删除表单管理
	 * @description 删除表单管理
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowFormManageRemove_5Api = (params: {
		ids: number[]
	}) => {
		return http.delete<RVoid>(
			`/workflow/formManage/${params.ids}`, { params }
		);
	};

	/**
	 * 删除流程定义配置
	 * @description 删除流程定义配置
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowDefinitionConfigRemove_6Api = (params: {
		ids: number[]
	}) => {
		return http.delete<RVoid>(
			`/workflow/definitionConfig/${params.ids}`, { params }
		);
	};

	/**
	 * 删除流程分类
	 * @description 删除流程分类
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const workflowCategoryRemove_7Api = (params: {
		ids: number[]
	}) => {
		return http.delete<RVoid>(
			`/workflow/category/${params.ids}`, { params }
		);
	};
