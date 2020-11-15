import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalcluationsService } from '../services/calcluations.service';

@Component({
	selector: 'daomaker-operators',
	templateUrl: './operators.component.html',
	styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {

	@Input()
	public value1: string;

	@Input()
	public value2: string;

	@Output()
	public result = new EventEmitter<number>();

	public constructor(private calculationsService: CalcluationsService) { }

	public calculate(operator: string): void {
		switch (operator) {
			case 'add':
				this.emitResult(
					this.calculationsService.addition(
						parseFloat(this.value1),
						parseFloat(this.value2)
					)
				);
				break;
			case 'subtract':
				this.emitResult(
					this.calculationsService.subtraction(
						parseFloat(this.value1),
						parseFloat(this.value2)
					)
				);
				break;
			case 'multiply':
				this.emitResult(
					this.calculationsService.multiply(
						parseFloat(this.value1),
						parseFloat(this.value2)
					)
				);
				break;
			case 'divide':
				this.emitResult(
					this.calculationsService.divide(
						parseFloat(this.value1),
						parseFloat(this.value2)
					)
				)
				break;
		}
	}

	public emitResult(value: number): void {
		this.result.emit(value);
	}
}
