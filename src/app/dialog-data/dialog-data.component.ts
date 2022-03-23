import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../todo';
@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})
export class DialogDataComponent implements OnInit {

   constructor(public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,){

   }
  
  mintext = new FormControl('', [Validators.required, Validators.minLength(4)]);
  getErrorMessage() {
    if (this.mintext.hasError('required')) {
      return 'You must enter a value';
    }
    else{
      return  "todo-list must be at lest 4 characters" ;
    }
  }
 


  ngOnInit(): void {
  }

}
