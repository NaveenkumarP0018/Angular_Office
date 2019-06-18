import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from './data.service';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


export interface User {
  position: number,
  name    : string,
  weight  : number,
  symbol  : string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: any;
  dataSource;
  users: User[];
  constructor(private dialog: MatDialog , private dataService: DataService){
    
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
 


  ngOnInit() { 
    return this.dataService.getData().subscribe((users: User[]) => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort      = this.sort;
    })
  }

  // Filter Values
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Delete a Row
  delete(element) {
    this.dataSource.data = this.dataSource.data.filter(i => i !== element);
  }
 
  // Update a Row
  openDialogEdit(user) {  

    // console.log('user=>',user);
    
    const dialogRef = this.dialog.open(EditComponent, {
      width: '300px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = user;
    });
  }

  // Create a Row
  openDialogCreate(){
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe( result => {
      
    })
  }

}






// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: User) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
