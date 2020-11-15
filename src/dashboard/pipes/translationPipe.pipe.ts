import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
	name: 'I18n'
})
export class TranslationPipe implements PipeTransform {

	public constructor(private service: TranslationService) { }

	public transform(path: string): any {
		return this.service.data[path];
	}

}
