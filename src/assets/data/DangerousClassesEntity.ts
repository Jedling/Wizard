import { DangerousClassesTypeModel } from '@/types/DangerousClasses/DangerousClassesTypeModel';

const dangerousClassesTypeData: DangerousClassesTypeModel[] = [
  {
    Name: 'Class 1',
    Image: './img/dangerous_classes/1.png',
    Id: 1,
    Description: 'Explosive',
    Selected: false,
    Childrens: [
      {
        Name: 'Class 1.1',
        Description: 'Explosives',
        Expr1: 'Substances and articles which have a mass explosion hazard.',
        Id: 11,
        Image: './img/dangerous_classes/1-1.png',
        Selected: false,
      },
      {
        Name: 'Class 1.2',
        Description: 'Explosives',
        Expr1: 'Substances and articles which have a projectin hazard but not a mass explosion hazard.',
        Id: 21,
        Image: './img/dangerous_classes/1-2.png',
        Selected: false,
      },
      {
        Name: 'Class 1.3',
        Description: 'Explosives',
        Expr1: 'Substances and articles which have a fire hazard and either a minor blast hazard or a minor projection hazard or both, but not a mass explosion hazard.',
        Id: 31,
        Image: './img/dangerous_classes/1-3.png',
        Selected: false,
      },
      {
        Name: 'Class 1.4',
        Description: 'Explosives',
        Expr1: 'Substances and articles which present no significant hazard.',
        Id: 41,
        Image: './img/dangerous_classes/1-4.png',
        Selected: false,
      },
      {
        Name: 'Class 1.5',
        Description: 'Explosives',
        Expr1: 'Very insensetive substances which have a mass explosion hazard.',
        Id: 51,
        Image: './img/dangerous_classes/1-5.png',
        Selected: false,
      },
      {
        Name: 'Class 1.6',
        Description: 'Explosives',
        Expr1: 'Extremely insensitive articles which do not have a mass explosion hazard.',
        Id: 61,
        Image: './img/dangerous_classes/1-6.png',
        Selected: false,
      },
    ],
  },
  {
    Name: 'Class 2',
    Image: './img/dangerous_classes/2.png',
    Id: 2,
    Description: 'Gases',
    Selected: false,
    Childrens: [
      {
        Name: 'Class 2.1',
        Description: 'Gases',
        Expr1: 'Flammable Gases.',
        Id: 71,
        Image: './img/dangerous_classes/2-1.png',
        Selected: false,
      },
      {
        Name: 'Class 2.2',
        Description: 'Gases',
        Expr1: 'Non-flammable, Non-toxic gases.',
        Id: 81,
        Image: './img/dangerous_classes/2-2.png',
        Selected: false,
      },
      {
        Name: 'Class 2.3',
        Description: 'Gases',
        Expr1: 'Toxic Gases',
        Id: 91,
        Image: './img/dangerous_classes/2-3.png',
        Selected: false,
      },
    ],
  },
  {
    Name: 'Class 3',
    Image: './img/dangerous_classes/3.png',
    Id: 3,
    Description: 'Flammable Liquids',
    Selected: false,
    Childrens: [],
  },
  {
    Name: 'Class 4',
    Image: './img/dangerous_classes/4.png',
    Id: 4,
    Description: 'Flammable Solids',
    Selected: false,
    Childrens: [
      {
        Name: 'Class 4.1',
        Description: 'Flammable Solids',
        Expr1: 'Flammable solids, Self-reactive substances and Solid desensitized explosives.',
        Id: 110,
        Image: './img/dangerous_classes/4-1.png',
        Selected: false,
      },
      {
        Name: 'Class 4.2',
        Description: 'Flammable Solids',
        Expr1: 'Substances liable to spontaneous combustion.',
        Id: 111,
        Image: './img/dangerous_classes/4-2.png',
        Selected: false,
      },
      {
        Name: 'Class 4.3',
        Description: 'Flammable Solids',
        Expr1: 'Substances which, in contact with water, emit flammable gases.',
        Id: 121,
        Image: './img/dangerous_classes/4-3.png',
        Selected: false,
      },
    ],
  },
  {
    Name: 'Class 5',
    Image: './img/dangerous_classes/5.png',
    Id: 5,
    Description: 'Oxidizing Substances and Organic Peroxides',
    Selected: false,
    Childrens: [
      {
        Name: 'Class 5.1',
        Description: 'Oxidizing Substances and Organic Peroxides',
        Expr1: 'Oxidizing substances',
        Id: 113,
        Image: './img/dangerous_classes/5-1.png',
        Selected: false,
      },
      {
        Name: 'Class 5.2',
        Description: 'Oxidizing Substances and Organic Peroxides',
        Expr1: 'Organic peroxides.',
        Id: 14,
        Image: './img/dangerous_classes/5-2.png',
        Selected: false,
      },
    ],
  },
  {
    Name: 'Class 6',
    Image: './img/dangerous_classes/6.png',
    Id: 6,
    Description: 'Toxic and Infectious Substances.',
    Selected: false,
    Childrens: [
      {
        Name: 'Class 6.1',
        Description: 'Toxic and Infectious Substances.',
        Expr1: 'Toxic subtances.',
        Id: 15,
        Image: './img/dangerous_classes/6-1.png',
        Selected: false,
      },
      {
        Name: 'Class 6.2',
        Description: 'Toxic and Infectious Substances.',
        Expr1: 'Infectious substances',
        Id: 16,
        Image: './img/dangerous_classes/6-2.png',
        Selected: false,
      },
    ],
    },
  {
    Name: 'Class 7',
    Image: './img/dangerous_classes/7.png',
    Id: 7,
    Description: 'Radioactive Material',
    Selected: false,
    Childrens: [],
  },
  {
    Name: 'Class 8',
    Image: './img/dangerous_classes/8.png',
    Id: 8,
    Description: 'Corrosive Substances',
    Selected: false,
    Childrens: [],
  },
  {
    Name: 'Class 9',
    Image: './img/dangerous_classes/9.png',
    Id: 9,
    Description: 'Miscellaneous Dangerous Substances and Articles',
    Selected: false,
    Childrens: [],
  },
];
const dangerousClassesType: DangerousClassesTypeModel[] = dangerousClassesTypeData;

export default dangerousClassesType;