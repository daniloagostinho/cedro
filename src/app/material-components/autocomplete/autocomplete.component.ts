import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
    myControl: FormControl = new FormControl();

    options = [
      'One',
      'Two',
      'Three'
     ];

  constructor() { }

  ngOnInit() {
      console.log(this.myControl);
  }

}
