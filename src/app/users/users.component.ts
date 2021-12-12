import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Response } from 'src/models/response';  
import { DialogusersComponent } from '../dialog/dialogusers/dialogusers.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public lst: any;
  public columnas: string[] = ['id','USUARIO','EMAIL','TIPO','ESTADO','ACTIONS'];
  readonly width:string='300px';
  ApiEditorial: any;
  constructor(
    private api_service:APIService,
    public dialog:MatDialog,
    public snackBar:MatSnackBar
 
    ) {
     }

  ngOnInit(): void {
    this.getUsuarios();
  }
////////get
  getUsuarios(){
    this.api_service.getUsuarios().subscribe( response => {
      this.lst=response;
      ////console.log(response);     
    });  
}

 ///////POST ADD 
 openAdd(){
  const dialogRef=this.dialog.open(DialogusersComponent,{
    width:'300'
  });//////refrescar tabla despues de insertar
  dialogRef.afterClosed().subscribe(result=>{
    this.getUsuarios();
  });
  
}
}