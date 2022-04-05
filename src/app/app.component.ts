import {Component} from '@angular/core';
import { locale as enLang } from '../assets/ii8n/en';
import { locale as esLang } from '../assets/ii8n/es';
import {TranslationService} from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RDL';
  constructor( private translationService: TranslationService ) {
    this.translationService.loadTranslations(
      enLang,
      esLang
    );
  }
}
