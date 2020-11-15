import { Injectable } from '@angular/core';
import { translation } from '../translations/en';

@Injectable()
export class TranslationService {

	public data: Record<string, any> = {};

	public constructor() {
		this.loadTranslations();
	}

	public loadTranslations(): void {
		this.data = translation;
	}

}
