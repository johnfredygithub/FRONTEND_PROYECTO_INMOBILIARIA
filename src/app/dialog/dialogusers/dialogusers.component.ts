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
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Youaaaaaaaaa must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  public hide = true;
  public username: string="";
  ///public email: string="";
    public password: string="";
    tipo_user=[{
      est:1,
      nombre: "ADMIN"
  },{
      est:2,
      nombre: "ASESOR"
  },{
    est:3,
    nombre: "CLIENTE"
}
];    
seleccionada_tipo: string = this.tipo_user[0].nombre; 
    estado=[{
      est:1,
      nombre: "ACTIVO"
  },{
      est:2,
      nombre: "INACTIVO"
  }
];    
seleccionada: string = this.estado[0].nombre;


  constructor(

    public dialogRef: MatDialogRef<DialogusersComponent>,
    public api: APIService,
    public snackBar: MatSnackBar
    
  ) {}
  close(){
    this.dialogRef.close();
  }
  addUser(){const user:Users = {
      username:this.username,
      email:this.email,
      password:this.password,
      tipo_user:this.seleccionada_tipo,
      estado:this.seleccionada
    };
    //console.log(user);
    this.api.add(user).subscribe(response => {
      console.log(response.data);
       if(response.message ==="USER CREATED"){
        this.dialogRef.close();
        this.snackBar.open("CLIENTE INGRESADO CORRECTAMENTE","",{
          duration:2000
        });
      }else{
        this.snackBar.open("ERROR VERIFIQUE EMAIL ","",{
          duration:2000
        });
      }
    });
  }

  ngOnInit(): void {}
}
