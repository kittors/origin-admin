type LogLevel = 'info' | 'success' | 'warning' | 'error' | 'debug';

interface LoggerOptions {
	prefix?: string;
	env?: 'development' | 'production' | 'test';
}

class Logger {
	private prefix: string;
	private env: string;

	constructor(options: LoggerOptions = {}) {
		this.prefix = options.prefix || '🚀 [App]';
		this.env = options.env || 'development';
	}

	updateEnv(env: string) {
		this.env = env;
	}

	private log(level: LogLevel, message: unknown, ...args: unknown[]) {
		// 生产环境下不输出 debug 日志
		if (this.env === 'production' && level === 'debug') {
			return;
		}

		const timestamp = new Date().toISOString();
		const prefix = `${this.prefix} ${timestamp}`;

		// 不同级别使用不同的样式
		const styles = {
			info: 'color: #1890ff',
			success: 'color: #52c41a',
			warning: 'color: #faad14',
			error: 'color: #ff4d4f',
			debug: 'color: #722ed1',
		};

		// 开发环境使用带样式的输出
		if (this.env === 'development') {
			switch (level) {
				case 'success':
					console.log(`%c${prefix}`, styles[level], message, ...args);
					break;
				case 'warning':
					console.warn(`%c${prefix}`, styles[level], message, ...args);
					break;
				case 'error':
					console.error(`%c${prefix}`, styles[level], message, ...args);
					break;
				case 'info':
					console.info(`%c${prefix}`, styles[level], message, ...args);
					break;
				case 'debug':
					console.debug(`%c${prefix}`, styles[level], message, ...args);
					break;
			}
			return;
		}

		// 生产环境使用普通输出
		console.log(prefix, message, ...args);
	}

	info(message: unknown, ...args: unknown[]) {
		this.log('info', message, ...args);
	}

	success(message: unknown, ...args: unknown[]) {
		this.log('success', message, ...args);
	}

	warning(message: unknown, ...args: unknown[]) {
		this.log('warning', message, ...args);
	}

	error(message: unknown, ...args: unknown[]) {
		this.log('error', message, ...args);
	}

	debug(message: unknown, ...args: unknown[]) {
		this.log('debug', message, ...args);
	}
}

export const logger = new Logger();
export const updateLoggerEnv = (env: string) => {
	logger.updateEnv(env);
};
export default logger;
