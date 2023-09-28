import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique } from '../../techniques/techniques';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
})

export class gohanComponent {
 private _techniques: Technique[] = [];
 private _mediumTechnique: Technique[] = [];

  @Input() set techniques(techniques: Technique[]) {
    this._techniques = techniques;
    this._mediumTechnique = techniques.filter(technique =>
      technique.complexity === 'Media'
    );
  }
  get techniques() { return this._techniques; }
  get mediumTechnique() { return this._mediumTechnique; }


  @Output() learnTechniqueFromGoku: EventEmitter<any> = new EventEmitter();

  learnTechnique(technique: Technique) {
    this.learnTechniqueFromGoku.emit(technique)
  }
  
  constructor() { }  
}




  
