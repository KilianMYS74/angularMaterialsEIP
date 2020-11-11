import {Component} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'app-paginator-material',
  templateUrl: 'paginator-material.component.html',
  styleUrls: ['paginator-material.component.css'],
})
// tslint:disable-next-line:class-name
export class paginatorMaterialComponent {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  // tslint:disable-next-line:typedef
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
