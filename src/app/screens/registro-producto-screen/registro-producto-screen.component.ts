import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service';
declare var $:any;

@Component({
  selector: 'app-registro-producto-screen',
  templateUrl: './registro-producto-screen.component.html',
  styleUrls: ['./registro-producto-screen.component.scss']
})
export class RegistroProductoScreenComponent implements OnInit {

  //Aquí van las variables
  public editar:boolean = false;
  public user: any = {};
  //Para detectar errores
  public errors:any ={};


  constructor(
    private location: Location,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaProduct();
    console.log("User: ", this.user);
    
  }

  public regresar(){
    this.location.back();
  }


  public registrar(){
    //Validar
    this.errors = [];

    this.errors = this.usuariosService.validarProduct(this.user);
    if(!$.isEmptyObject(this.errors)){
      //Pasa la validación y sale de la función
      return false;
    }
  }

}

