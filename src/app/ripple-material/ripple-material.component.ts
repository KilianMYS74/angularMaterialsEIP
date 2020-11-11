import {Component} from '@angular/core';

/**
 * @title MatRipple basic usage
 */
@Component({
  selector: 'app-ripple-material',
  templateUrl: 'ripple-material.component.html',
  styleUrls: ['ripple-material.component.css'],
})
// tslint:disable-next-line:class-name
export class rippleMaterialComponent {
  centered = true;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}
