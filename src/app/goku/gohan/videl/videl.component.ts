import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique, techniques } from '../../../techniques/techniques';

@Component({
  selector: 'app-videl',
  templateUrl: './videl.component.html',
  styleUrls: ['./videl.component.scss']
})
export class VidelComponent {
   
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

  @Output() learnTechniqueFromGoku: EventEmitter<any> = new EventEmitter();

  learnTechnique(technique: Technique) {
    this.learnTechniqueFromGoku.emit(technique);
  }
 
  constructor() { }
}

