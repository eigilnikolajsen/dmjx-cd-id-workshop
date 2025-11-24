interface CalculatedPrice {
	subtotal: number;
	discount: number;
	total: number;
}

interface Columns {
	mobile: string;
	tablet: string;
	desktop: string;
}

type ClassList = { [k: string]: boolean | undefined } | undefined;

export type { CalculatedPrice, ClassList, Columns };
