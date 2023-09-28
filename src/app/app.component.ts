
import { Component } from '@angular/core';
import { Technique, techniques } from './techniques/techniques'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  gohanLearnedTechniques: Technique[] = [];

  techniques: Technique[] = techniques; 

  videlLearnedTechniques: Technique[] = [];
}