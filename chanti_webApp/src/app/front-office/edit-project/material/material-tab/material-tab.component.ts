import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMaterial } from '../../../../shared/models/material.model';


@Component({
  selector: 'app-material-tab',
  templateUrl: './material-tab.component.html',
  styleUrls: ['./material-tab.component.scss']
})
export class MaterialTabComponent implements OnInit {
 @Input('materialList') public materialList: IMaterial[];
 @Output('') public onMaterialListChanged: EventEmitter<any> = new EventEmitter();
  materialForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.materialForm = this.fb.group({
      materialname: [''],
      quantity: [0],
      unitprice: [0]
    });
  }

  addMaterial() {
    console.log(this.materialForm.value);
  }

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }


}
