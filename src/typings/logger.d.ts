type LogLevel = 'info' | 'success' | 'warning' | 'error' | 'debug';

interface LoggerOptions {
	prefix?: string;
	env?: 'development' | 'production' | 'test';
}

interface Logger {
	info(message: unknown, ...args: unknown[]): void;
	success(message: unknown, ...args: unknown[]): void;
	warning(message: unknown, ...args: unknown[]): void;
	error(message: unknown, ...args: unknown[]): void;
	debug(message: unknown, ...args: unknown[]): void;
}

declare global {
	interface Window {
		logger: Logger;
	}

	const logger: Logger;
}

export {};
