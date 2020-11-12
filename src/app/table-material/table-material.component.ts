import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
    fullname: 'Kilian Mayans',
    INS: 46165418,
    date: '25/11/2020',
    nomMaladie: 'asthme',
    risque: '',
    pourcentage: 33,
    fichiers: 'test.txt'
  },
];
