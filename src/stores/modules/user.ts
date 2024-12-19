import piniaPersistConfig from '@/stores/helper/persist';
import type { UserState } from '@/stores/interface';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('origin-user', {
	state: (): UserState => ({
		token: '',
		userInfo: { name: 'admin' },
	}),
	getters: {},
	actions: {
		// Set Token
		setToken(token: string) {
			this.token = token;
		},
		// Set setUserInfo
		setUserInfo(userInfo: UserState['userInfo']) {
			this.userInfo = userInfo;
		},
	},
	persist: piniaPersistConfig('origin-user'),
});
