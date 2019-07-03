import { CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import {Component, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import 'hammerjs';

export interface Example_Element {
  name: string;
  id: number;

}

const ELEMENT_DATA: Example_Element[] = [
  {id: 1, name: 'Naveen'},
  {id: 2, name: 'Anil'},
  {id: 3, name: 'LingaRao'},
  {id: 4, name: 'Manikanta'}
];


@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css']
})
export class DraganddropComponent implements OnInit  {
  columns: any[] = [
    { field: 'id' },
    { field: 'name' }
  ];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  previousIndex: number;

  ngOnInit() {
    this.setDisplayedColumns();
  }

  setDisplayedColumns() {
    this.columns.forEach(( colunm, index) => {
      // colunm.index = index;
      this.displayedColumns[index] = colunm.field;
    });
  }

  dragStarted(event: CdkDragStart, index: number ) {
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      moveItemInArray(this.columns, this.previousIndex, index);
      this.setDisplayedColumns();
    }
  }
}
