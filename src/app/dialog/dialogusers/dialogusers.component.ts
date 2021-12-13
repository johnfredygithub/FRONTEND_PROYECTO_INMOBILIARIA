import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APIService } from 'src/app/services/api.service';
import { Users } from 'src/models/users';
//import {FormControl,ReactiveFormsModule, Validators} from '@angular/forms';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
 ///selector: 'app-dialogusers',
  selector: 'input-error-state-matcher-example',
  templateUrl: './dialogusers.component.html',
  styleUrls: ['./dialogusers.component.scss'],
})

export class DialogusersComponent {

  public Ase_Nombres: string="";
  public Ase_Apellidos:string="";
  public Ase_Cedula: string="";
  public Ase_Telefono: string="";
  public Ase_Direccion:  string="";
  public Ase_Email: string="";
  public FechaInicio: string="";
  public Ase_Clave:string:"";
  /////piblic id admin
 /*  public Adm_Id=[{
      est:1,
      nombre: "ADMIN1"
  }
]; */    
//seleccionada_tipo: number = this.Adm_Id[0].est; 
seleccion_admin=1;
    

  constructor(

    public dialogRef: MatDialogRef<DialogusersComponent>,
    public api: APIService,
    public snackBar: MatSnackBar
    
  ) {}
  close(){
    this.dialogRef.close();
  }
  addUser(){const user:Users = {
    Ase_Nombres:this.Ase_Nombres,
      Ase_Apellidos:this.Ase_Apellidos,
      Ase_Cedula:this.Ase_Cedula,
      Ase_Telefono:this.Ase_Telefono,
      Ase_Direccion:this.Ase_Direccion,
      Ase_Email:this.Ase_Email,
      FechaInicio:this.FechaInicio,            
      Adm_Id:this.seleccion_admin
    };
  
    this.api.add(user).subscribe(response => {
      console.log(response);
       if(response){
        this.dialogRef.close();
        this.snackBar.open("CLIENTE INGRESADO CORRECTAMENTE","",{
          duration:2000
        });
      }else{
        this.dialogRef.close();
        this.snackBar.open("ERROR","",{
          duration:2000
        });
      }
    });
  }

  ngOnInit(): void {}
}
