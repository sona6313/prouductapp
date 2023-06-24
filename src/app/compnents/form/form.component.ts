import { Component, Inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

Submitform : FormGroup = new FormGroup ({});
  freshness:string='';
  freshcatogoty = ['Brand New', 'Second Hand','Refurshnished']
 
  constructor( private service:ServiceService ,
     private fb:FormBuilder ,
     @Inject(MAT_DIALOG_DATA)  public editdata :any,

     private diologeref:MatDialogRef<FormComponent>)
     {

      this.Submitform = this.fb.group({
        name: new FormControl ('',[Validators.required]),
        catogory:new FormControl ('',[Validators.required]),
        date:new FormControl ('',[Validators.required]),
        fresh:new FormControl ('',[Validators.required]),
        addinfo:new FormControl ('',[Validators.required]),
        price:new FormControl ('',[Validators.required]),
        comment:new FormControl ('',[Validators.required]),
      });

      }
  ngOnInit(): void {
    this.Submitform.patchValue(this.editdata)
  }



 
  
  
   submit(){
       if(this.Submitform.valid){
        console.log(this.Submitform.value , 'values'); 
        this.service.adduser(this.Submitform.value).subscribe({
          next: (res) => {
          console.log(res, 'addedform value to the array');
          Swal.fire('Product added succesfully');
          this.Submitform.reset();
          },error:()=>{
            Swal.fire('while erro during the add user')
          }
        })
       }
   }

}
