import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  discription:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol:'H',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',discription:'hi, i have more than one paragraphs with the view more/less button but when i click on any one of them, all the paragraphs will be in view more/less mode. how do i fix this? – mhfour Jun 4 at 5:52'},
];


@Component({
  selector: 'app-mattableshow',
  templateUrl: './mattableshow.component.html',
  styleUrls: ['./mattableshow.component.css']
})
export class MattableshowComponent implements OnInit {
  show=false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','discription'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}
