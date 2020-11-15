import { Component } from '@angular/core';

@Component({
	selector: 'daomaker-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	public value1: number = 0;
	public value2: number = 0;

	public result: number;

	public constructor() { }

	public assignResult(result: number): void {
		this.result = result;
	}

	public clearValues(): void {
		this.value1 = 0;
		this.value2 = 0;
	}

}
