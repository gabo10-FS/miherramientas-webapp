import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
  ) { }

  public esquemaProduct(){
    return{
      'id': '',
      'nombre': '',
      'precio': '',
      'departamento': ''
    }
  }

  public esquemaUser(){
    return {
      'matricula': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'confirmar_password': '',
      'fecha_nacimiento': '',
      'curp': '',
      'rfc': '',
      'edad': '',
      'telefono': '',
      'ocupacion': '',
    }
  }

  //Función para validar datos del usuario
  public validarUsuario(data: any){
    console.log("Validando user... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["matricula"])){
      error["matricula"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["first_name"])){
      error["first_name"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["last_name"])){
      error["last_name"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["email"])){
      error["email"] = this.errorService.required;
    }else if(!this.validatorService.max(data["email"], 40)){
      error["email"] = this.errorService.max(40);
    }else if (!this.validatorService.email(data['email'])) {
      error['email'] = this.errorService.email;
    }

    if(!this.validatorService.required(data["password"])){
      error["password"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["confirmar_password"])){
      error["confirmar_password"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["fecha_nacimiento"])){
      error["fecha_nacimiento"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["curp"])){
      error["curp"] = this.errorService.required;
    }else if(!this.validatorService.min(data["curp"], 18)){
      error["curp"] = this.errorService.min(18);
      alert("La longitud de caracteres de la CURP es menor, deben ser 18");
    }else if(!this.validatorService.max(data["curp"], 18)){
      error["curp"] = this.errorService.max(18);
      alert("La longitud de caracteres de la CURP es mayor, deben ser 18");
    }

    if(!this.validatorService.required(data["rfc"])){
      error["rfc"] = this.errorService.required;
    }else if(!this.validatorService.min(data["rfc"], 12)){
      error["rfc"] = this.errorService.min(12);
      alert("La longitud de caracteres deL RFC es menor, deben ser 12");
    }else if(!this.validatorService.max(data["rfc"], 13)){
      error["rfc"] = this.errorService.max(13);
      alert("La longitud de caracteres deL RFC es mayor, deben ser 13");
    }

    if(!this.validatorService.required(data["edad"])){
      error["edad"] = this.errorService.required;
    }else if(!this.validatorService.numeric(data["edad"])){
      alert("El formato es solo números");
    }

    if(!this.validatorService.required(data["telefono"])){
      error["telefono"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["ocupacion"])){
      error["ocupacion"] = this.errorService.required;
    }

    return error;
    
  }

  //Función para validar datos del producto
public validarProduct(data: any){
  console.log("Validando product... ", data);
  let error: any = [];

  if(!this.validatorService.required(data["id"])){
    error["id"] = this.errorService.required;
  }

  if(!this.validatorService.required(data["nombre"])){
    error["nombre"] = this.errorService.required;
  }else if(!this.validatorService.min(data["nombre"], 3)){
    error["nombre"] = this.errorService.min(12);
    alert("La longitud de caracteres deL NOMBRE es menor, deben ser 3");
  }else if(!this.validatorService.max(data["nombre"], 20)){
    error["nombre"] = this.errorService.max(13);
    alert("La longitud de caracteres deL NOMBRE es mayor, deben ser 20");
  }else if(this.validatorService.numeric(data["nombre"])){
    alert("El formato NOMBRE no admite números");
  }

  if(!this.validatorService.required(data["precio"])){
    error["precio"] = this.errorService.required;
  }else if(!this.validatorService.numeric(data["precio"])){
    alert("El formato es solo números");
  }

  if(!this.validatorService.required(data["departamento"])){
    error["departamento"] = this.errorService.required;
  }else if(!this.validatorService.min(data["departamento"], 3)){
    error["departamento"] = this.errorService.min(12);
    alert("La longitud de caracteres deL DEPARTAMENTO es menor, deben ser 3");
  }else if(!this.validatorService.max(data["departamento"], 20)){
    error["departamento"] = this.errorService.max(13);
    alert("La longitud de caracteres deL DEPARTAMENTO es mayor, deben ser 20");
  }else if(this.validatorService.numeric(data["nombre"])){
    alert("El formato DEPARTAMENTO no admite números");
  }

  return error;
  
}
}
