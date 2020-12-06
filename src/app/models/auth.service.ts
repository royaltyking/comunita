import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(p: any): Observable<any>{
    // Validaciones
    // ::fixme pendiente de validar comportamiento de excepciones
    if (p.first_name === ''){
      alert('Debe ingresar un nombre válido');
      return;
    }

    if (p.last_name === ''){
      alert('Debe ingresar un apellido válido');
      return;
    }

    if (p.gender === -1){
      alert('Debe seleccionar un genero');
      return;
    }

    if (p.birth_date === ''){
      alert('Debe seleccionar una fecha de nacimiento');
      return;
    }

    if (p.document_type === -1){
      alert('Debe seleccionar un tipo de documento');
      return;
    }

    if (p.document_number === ''){
      alert('Debe ingresar un documento valido');
      return;
    }

    if (p.phone === ''){
      alert('Debe ingresar un celular valido');
      return;
    }

    if (p.state === -1){
      alert('Debe seleccionar un departamento');
      return;
    }

    if (p.city === -1){
      alert('Debe seleccionar una ciudad');
      return;
    }

    if (p.commune === ''){
      alert('Debe ingresar una comuna valida');
      return;
    }

    if (p.commune.length > 3){
      alert('La comuna debe tener una longitud maxima de 3');
      return;
    }

    if (p.address === ''){
      alert('Debe ingresar una direccion valida');
      return;
    }

    if (p.email === ''){
      alert('Debe ingresar un correo electronico valido');
      return;
    }

    if (p.password === ''){
      alert('Debe ingresar una contrasena valida');
      return;
    }

    if (p.confirmed_password === ''){
      alert('Debe confirmar la contrasena');
      return;
    }

    if (p.password !== p.confirmed_password){
      alert('Las contrasenas no coinciden');
      return;
    }

    if (p.terms_and_conditions === false){
      alert('Debe aceptar los terminos y condiciones');
      return;
    }

    if (p.security_politics === false){
      alert('Debe aceptar la politica de privacidad');
      return;
    }

    const obj = {
      first_name: p.first_name,
      last_name: p.last_name,
      email: p.email,
      password: p.password,
      terms_and_conditions: p.terms_and_conditions,
      security_politics: p.security_politics,
      document_number: p.document_number,
      birth_date: String(p.birth_date).substr(0, 10),
      phone: p.phone,
      commune: p.commune,
      address: p.address,
      document_type: p.document_type,
      gender: p.gender,
      city: p.city
    };
    
    return this.http.post<any>('/api/auth/sign-in', obj);
  }
}