export interface Technique {
    name: string;
    damage: number;
    complexity: string;
  }
  

export const techniques: Technique[] = [
    { name: 'Genkidama', damage: 2000, complexity: 'Media' },
    { name: 'Kamehameha', damage: 1000, complexity: 'Alta' },
    { name: 'Jutli', damage: 2500, complexity: 'Baja' },
    { name: 'fo', damage: 2000, complexity: 'Media' },
    { name: 'ff', damage: 1000, complexity: 'Alta' },
    { name: 'sn', damage: 2500, complexity: 'Baja' }
  ];

export const mediumTechnique = techniques.filter((techniques) => techniques.complexity > 'Media');
console.log(mediumTechnique);

export const lowTechnique = techniques.filter((techniques) => techniques.complexity > 'Baja');
console.log(lowTechnique);


