import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../model/Member.model';

@Component({
  selector: 'app-initials-button',
  templateUrl: './initials-button.component.html',
  styleUrls: ['./initials-button.component.styl']
})
export class InitialsButtonComponent implements OnInit {

  @Input()
  user: Member;

  constructor() { }

  ngOnInit() {
  }

}
