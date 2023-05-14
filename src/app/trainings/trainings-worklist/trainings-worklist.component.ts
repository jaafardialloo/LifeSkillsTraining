import {Component, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid-community";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainings-worklist',
  templateUrl: './trainings-worklist.component.html',
  styleUrls: ['./trainings-worklist.component.css']
})
export class TrainingsWorklistComponent implements OnInit{

  constructor(
    private router: Router,
  ) {
  }
  // @ts-ignore
  gridOptions: GridOptions;
  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  ngOnInit() {
    this.gridOptions = <GridOptions>{
      rowSelection: 'multiple',
      rowModelType: 'clientSide',
      paginationPageSize: 50,
      cacheBlockSize: 50,
      suppressRowClickSelection: true,
      singleClickEdit: true,
      floatingFilter: true,
      defaultColDef: {
        checkboxSelection: true,
        headerCheckboxSelection: false,
        flex:1
      }
    };
  }

  goToFormTraining() {
    // @ts-ignore
    this.router.navigateByUrl('');
  }
}
