import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  displayedColumns: string[] = ['id', 'ProductName', 'Catogory', 'Date','Freshness','Price','AddInformation' , 'yourcomment', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public diolog:MatDialog, private service:ServiceService) { }

  ngOnInit(){
    this.GetAllProductList();
  }


  openDialog(){
    const diologref = this.diolog.open(FormComponent) ;
    diologref.afterClosed().subscribe (result => {
      console.log(`diolog result : ${result}`);
    })
  }
   
  GetAllProductList(){
      this.service.getuser().subscribe({
        next:(res)=> {
          console.log(res);
           this.dataSource = new MatTableDataSource(res);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
        },error:(err)=> {
         Swal.fire('error fetching the records')
         console.log(err);
        }
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

   editbutton(row:any){
    this.diolog.open(FormComponent, {
      // width:'350%',
      data:row
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
   }

   deletebutton(id:number){
     this.service.deleteuser(id).subscribe({
      next:(res)=>{
        Swal.fire('Deleted Succesfully')
        console.log(res);
        
      },
      error:(err)=>{
        Swal.fire('something error')
        console.log(err);
        
      }
     })
   }
}
