import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMaterial } from '../../../../shared/models/material.model';
import { MaterialService } from '../../../material.service';
import { IApiResponse } from '../../../../shared/models/api-response.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-material-tab',
  templateUrl: './material-tab.component.html',
  styleUrls: ['./material-tab.component.scss']
})
export class MaterialTabComponent implements OnInit {
  @Input('materialList') public materialList: IMaterial[];
  @Input('projectId') public projectId: string;
  @Output() public onMaterialListChanged: EventEmitter<boolean> = new EventEmitter(false);

  public subscription;

  materialForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.materialForm = this.fb.group({
      materialname: [''],
      quantity: [0],
      unitprice: [0]
    });
  }

  addMaterial() {
    this.materialService.addNewMaterial(this.projectId, this.materialForm.value).subscribe(
      {
        next: (response: IApiResponse) => {
          this.snackBar.open(response.message, '', { duration: 5000 });
        },
        error: error => {
          this.snackBar.open(error.message, 'Close')
        },
        complete: () =>{ this.onMaterialListChanged.emit(true);}

      });
  }

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }


}
