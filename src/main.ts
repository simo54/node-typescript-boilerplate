import doSomething from './stuff/stuff';
export const number = 10;
export function normalFunction(params: string): string {
	return params;
}
export class Class {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	public something() {
		console.log('o');
	}
}

export default doSomething;
