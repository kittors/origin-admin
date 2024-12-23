<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon">
            <User />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        placeholder="密码：123456"
        show-password
        autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input v-model="loginForm.code" placeholder="验证码" class="code-input"></el-input>
      <!-- 验证码 -->
      <div class="login-code">
        <img :src="codeUrl" alt="" />
      </div>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round size="large" @click="resetForm(loginFormRef)">
      重置
    </el-button>
    <el-button
      :icon="UserFilled"
      round
      size="large"
      type="primary"
      :loading="loading"
      @click="login(loginFormRef)"
    >
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
// import { getTimeState } from "@/utils";
import type { Login } from '@/api/interface';
import { authCodeGetCodeApi } from '@/api/modules/auth';
import { HOME_URL } from '@/config';
import { initDynamicRouter } from '@/routers/modules/dynamicRouter';
import { useKeepAliveStore } from '@/stores/modules/keepAlive';
import { useTabsStore } from '@/stores/modules/tabs';
// import { loginApi } from '@/api/modules/login'
import { useUserStore } from '@/stores/modules/user';
import { Lock, User } from '@element-plus/icons-vue';
import { CircleClose, UserFilled } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';
import type { ElForm } from 'element-plus';
import md5 from 'md5';

const router = useRouter();
const userStore = useUserStore();
const tabsStore = useTabsStore();
const keepAliveStore = useKeepAliveStore();

type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
	username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
	code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
});

const loading = ref(false);
const loginForm = reactive<Login.ReqLoginForm>({
	username: '',
	password: '',
	code: '',
});

// 获取验证码图片地址
const codeUrl = ref('');
const getCodeUrl = async () => {
	const { data } = await authCodeGetCodeApi();
	if (data.img) {
		// 将图片地址转换为 base64
		codeUrl.value = `data:image/png;base64,${data.img}`;
	}
};

// login
const login = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid) => {
		if (!valid) return;
		loading.value = true;
		try {
			// 1.执行登录接口
			// const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) })
			// userStore.setToken(data.access_token)

			// 2.添加动态路由
			await initDynamicRouter();

			// 3.清空 tabs、keepAlive 数据
			tabsStore.setTabs([]);
			keepAliveStore.setKeepAliveName([]);

			// 4.跳转到首页
			router.push(HOME_URL);
			// ElNotification({
			//   title: getTimeState(),
			//   message: "欢迎登录 Geeker-Admin",
			//   type: "success",
			//   duration: 3000
			// });
			ElNotification({
				title: 'React 付费版本 🔥🔥🔥',
				dangerouslyUseHTMLString: true,
				message: "预览地址：<a href='https://pro.spicyboy.cn'>https://pro.spicyboy.cn</a>",
				type: 'success',
				duration: 8000,
			});
		} finally {
			loading.value = false;
		}
	});
};

// resetForm
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};

onMounted(() => {
	// 监听 enter 事件（调用登录）
	document.onkeydown = (e: KeyboardEvent) => {
		if (e.code === 'Enter' || e.code === 'enter' || e.code === 'NumpadEnter') {
			if (loading.value) return;
			login(loginFormRef.value);
		}
	};
	getCodeUrl();
});

onBeforeUnmount(() => {
	document.onkeydown = null;
});
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
