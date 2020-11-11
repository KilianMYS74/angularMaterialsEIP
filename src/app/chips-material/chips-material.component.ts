import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

/**
 * @title Stacked chips
 */
@Component({
  selector: 'app-chips-material',
  templateUrl: 'chips-material.component.html',
  styleUrls: ['chips-material.component.css'],
})
// tslint:disable-next-line:class-name
export class chipsMaterialComponent {
  availableColors: ChipColor[] = [
    {name: 'non défini', color: undefined},
    {name: 'Normal', color: 'primary'},
    {name: 'Prioritaire', color: 'accent'},
    {name: 'Urgent', color: 'warn'}
  ];
}

/**
 * @title Basic chips
 */
@Component({
  selector: 'app-chips-material',
  templateUrl: 'chips-material.component.html',
})
export class ChipsOverviewExample {}
