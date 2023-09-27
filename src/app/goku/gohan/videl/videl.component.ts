import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique, techniques } from '../../../techniques/techniques';

@Component({
  selector: 'app-videl',
  templateUrl: './videl.component.html',
  styleUrls: ['./videl.component.scss']
})
export class VidelComponent {
   
  private _techniques: Technique[] = [];
  private _mediumTechnique: Technique[] = [];
  private _lowTechnique: Technique[] = []; 

  
  @Input() set techniques(techniques: Technique[]) {
    this._techniques = techniques;

    this._mediumTechnique = techniques.filter(technique =>
      technique.complexity === 'Media');

      this._lowTechnique = techniques.filter(technique =>
        technique.complexity === 'Baja' 
    );
  }
  get techniques() { return this._techniques; }
  get mediumTechnique() { return this._mediumTechnique; }
  get lowTechnique() { return this._lowTechnique; }

  @Output() learnTechnique = new EventEmitter<Technique>();

  learnTechniqueFromGohan(technique: Technique) {
    // Agregar la técnica a las que gohan ha aprendido.
    //this.learnTechnique.push(technique);
  }
 
  constructor() { }
}
