import { Text } from '@angular/compiler';
import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogDataComponent } from './dialog-data/dialog-data.component';

export interface DialogData {
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public dialog: MatDialog ){
  }
  description:any [] = [];
  text: any [] =[];
  checkbox:any [] = [];

  title = 'todo-app';
  disabled = false;
  indeterminate = false;
  //opendialog(component)
  openDialog(value: string): void {
    let indx = this.text.indexOf(value)
    const dialogRef = this.dialog.open(DialogDataComponent, {
      data: { text: this.text[indx] },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.text[indx] = result
      }
    });
  }

  
 //ErrorMessage 
  mintext = new FormControl('', [Validators.required, Validators.minLength(4)]);
  getErrorMessage() {
    if (this.mintext.hasError('required')) {
      return 'You must enter a value';
    }
    else{
      return  "todo-list must be at lest 4 characters" ;
    }
  }


 
  
 //supprimer item 
  deletetodo(text:DialogData){
    const index = this.text.indexOf(text);
    this.text.splice(index,1)
  }
//Ajouter item
  Add(value:string) {
    this.text.push(value);
    this.checkbox.push('check');
    this.description.push('desc');
  }



  
}
