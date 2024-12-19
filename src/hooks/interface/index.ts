export namespace Table {
	export interface Pageable {
		pageNum: number;
		pageSize: number;
		total: number;
	}
	export interface StateProps {
		tableData: unknown[];
		pageable: Pageable;
		searchParam: Record<string, unknown>;
		searchInitParam: Record<string, unknown>;
		totalParam: Record<string, unknown>;
		icon?: Record<string, unknown>;
	}
}

export namespace HandleData {
	export type MessageType = '' | 'success' | 'warning' | 'info' | 'error';
}

export namespace Theme {
	export type ThemeType = 'light' | 'inverted' | 'dark';
	export type GreyOrWeakType = 'grey' | 'weak';
}
