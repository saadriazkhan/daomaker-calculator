import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { OperatorsComponent } from './operators/operators.component';
import { TranslationPipe } from './pipes/translationPipe.pipe';
import { TranslationService } from './services/translation.service';
import { FormsModule } from '@angular/forms';
import { CalcluationsService } from './services/calcluations.service';

@NgModule({
	declarations: [
		DashboardComponent,
		OperatorsComponent,
		TranslationPipe
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		TranslationService,
		CalcluationsService,
		TranslationPipe
	],
	bootstrap: [
		DashboardComponent
	]
})
export class AppModule { }
