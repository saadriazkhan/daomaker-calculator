import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CalcluationsService {

	constructor() { }

	public addition(value1: number, value2: number): number {
		return value1 + value2;
	}

	public subtraction(value1: number, value2: number): number {
		return value1 - value2;
	}

	public multiply(value1: number, value2: number): number {
		return value1 * value2;
	}

	public divide(value1: number, value2: number): number {
		if (value2 === 0)
			return 0;

		return value1 / value2;
	}

}
