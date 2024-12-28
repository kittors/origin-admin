<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin">
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
        placeholder="密码：admin123"
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
      <div class="login-code" @click="getCodeUrl">
        <img :src="codeUrl" alt="" />
      </div>
    </el-form-item>
    <el-checkbox v-model="loginForm.rememberMe" style="margin: 0 0 25px 0">记住密码</el-checkbox>
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
import { getCodeApi, loginApi } from '@/api/modules/auth';
import { HOME_URL } from '@/config';
import { initDynamicRouter } from '@/routers/modules/dynamicRouter';
import { useKeepAliveStore } from '@/stores/modules/keepAlive';
import { useTabsStore } from '@/stores/modules/tabs';
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
	uuid: '', // 唯一标识
	grantType: 'password', // 授权类型
	tenantId: '000000', // 租户id
	username: '', // 用户名
	password: '', // 密码
	code: '', // 验证码
	rememberMe: false,
	clientId: import.meta.env.VITE_APP_CLIENT_ID, // 客户端id
});

// 获取验证码图片地址
const codeUrl = ref('');
const getCodeUrl = async () => {
	const { data } = await getCodeApi();
	if (data.img) {
		// 将图片地址转换为 base64
		codeUrl.value = `data:image/png;base64,${data.img}`;
		loginForm.uuid = data.uuid;
	}
};

// login
const login = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid) => {
		if (!valid) return;
		loading.value = true;
		try {
			// 勾选了需要记住密码设置在 localStorage 中设置记住用户名和密码
			if (loginForm.rememberMe) {
				localStorage.setItem('tenantId', String(loginForm.tenantId));
				localStorage.setItem('username', String(loginForm.username));
				localStorage.setItem('password', String(loginForm.password));
				localStorage.setItem('rememberMe', String(loginForm.rememberMe));
			} else {
				// 否则移除
				localStorage.removeItem('tenantId');
				localStorage.removeItem('username');
				localStorage.removeItem('password');
				localStorage.removeItem('rememberMe');
			}
			// 1.执行登录接口
			await loginApi(JSON.stringify({ ...loginForm }))
				.then((res) => {
					userStore.setToken(res.data.access_token);
					router.push(HOME_URL);
					ElNotification({
						title: '登录成功',
						message: '欢迎登录 origin-admin',
						type: 'success',
						duration: 3000,
					});
				})
				.catch(async (err) => {
					// 重新获取获取验证码
					await getCodeUrl();
				});

			// userStore.setToken(data.access_token)
			// 2.添加动态路由
			// await initDynamicRouter();
			// 3.清空 tabs、keepAlive 数据
			// tabsStore.setTabs([]);
			// keepAliveStore.setKeepAliveName([]);
			// 4.跳转到首页
			//
		} finally {
			loading.value = false;
		}
	});
};

const getLoginData = async () => {
	const tenantId = localStorage.getItem('tenantId');
	const username = localStorage.getItem('username');
	const password = localStorage.getItem('password');
	const rememberMe = localStorage.getItem('rememberMe');
	if (tenantId && username && password && rememberMe) {
		loginForm.tenantId = tenantId;
		loginForm.username = username;
		loginForm.password = password;
		loginForm.rememberMe = rememberMe === 'true';
	}
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
	getLoginData();
});

onBeforeUnmount(() => {
	document.onkeydown = null;
});
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
