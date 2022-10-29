import doSomething from './stuff/stuff';
export const number = 10;
export function normalFunction(params: string): string {
	return params;
}
export class Class {
	constructor() {}

	init() {
		console.log('o');
	}
}

export default doSomething;
