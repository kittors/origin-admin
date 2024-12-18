import type { PersistenceOptions } from "pinia-plugin-persistedstate";

/**
 * @description pinia 持久化参数配置
 * @param {string} key 存储到持久化的 name
 * @param {string[]} [pick] 需要持久化的 state name
 * @return {PersistenceOptions} persist
 */
const piniaPersistConfig = (key: string, pick?: string[]): PersistenceOptions => {
  const persist: PersistenceOptions = {
    key,
    storage: localStorage,
    pick
  };
  return persist;
};

export default piniaPersistConfig;
