import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique, techniques } from '../techniques/techniques'; 

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.scss']
})

export class GokuComponent {
  techniques: Technique[] = techniques;

  techniquesGohan: Technique[] = []
  techniquesvidel: Technique[] = []

  learnTechniqueFromGoku(technique: Technique){
    let t: Technique | undefined = techniques.find(t => t == technique)
    if (t)
      this.techniquesGohan.push(t)
  }
  notificar(technique: Technique){
  let t: Technique | undefined = techniques.find(t => t == technique)
  if (t)
    this.techniquesvidel.push(t)
}
}


