import {Component} from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';

@Component({
  selector: 'my-app',
  template: require('./first-component.html'),
  directives: [ MdButton, MdInput ]
})
export class AppComponent { }