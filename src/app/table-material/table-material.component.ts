import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/*Todo: add fullname, INS, date, nom maladie, risque, pourcentage, fichiers*/

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-table-material',
  templateUrl: './table-material.component.html',
  styleUrls: ['./table-material.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableMaterialComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['fullname', 'INS', 'date', 'nomMaladie', 'risque', 'pourcentage', 'fichiers'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  fullname: string;
  INS: number;
  date: string;
  nomMaladie: string;
  risque: string;
  pourcentage: number;
  fichiers: string;
}

// Todo: Fix position error
const ELEMENT_DATA: PeriodicElement[] = [
  {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  },   {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  },   {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  },   {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  }, {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  },   {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  },   {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  },   {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  }, {
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  }, {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];
