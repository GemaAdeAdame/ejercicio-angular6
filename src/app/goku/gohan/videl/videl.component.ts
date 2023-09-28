import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique } from '../../../techniques/techniques';

@Component({
  selector: 'app-videl',
  templateUrl: './videl.component.html',

})
export class videlComponent {
    private _techniques: Technique[] = [];
    private _lowTechnique: Technique[] = [];
   
     @Input() set techniques(techniques: Technique[]) {
       this._techniques = techniques;
       this._lowTechnique = techniques.filter(technique =>
         technique.complexity === 'Baja'
       );
     }
     get techniques() { return this._techniques; }
     get lowTechnique() { return this._lowTechnique; }
   
   
     @Output() notifyFromVidel: EventEmitter<any> = new EventEmitter();
   
     learnTechniques(technique: Technique) {
       this.notifyFromVidel.emit(technique)
     }
     
     constructor() { }
   }