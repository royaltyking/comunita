import { Component } from '@angular/core';
import { AuthService } from '../models/auth.service';
import { MasterDataService } from '../models/masterdata.service';

@Component({
  selector: 'sign-up',
  templateUrl: '../views/signUp.html',
  styleUrls: ['../views/signUp.scss']
})
export class SignUpComponent {
  constructor(
    private master_data_service: MasterDataService,
    private auth_service: AuthService
  ) {
    
  }

  d = {
    genders: [],
    documents_types: [],
    states: [],
    cities: []
  };

  f = {
    first_name: '',
    last_name: '',
    gender: -1,
    birth_date: '',
    document_type: -1,
    document_number: '',
    phone: '',
    state: -1,
    city: -1,
    commune: '',
    address: '',
    email: '',
    password: '',
    confirmed_password: '',
    terms_and_conditions: false,
    security_politics: false
  };

  month_names = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  ngOnInit() {
    this.ers();
  }

  ers(){
    // Consultar generos
    this.master_data_service.findGenders().subscribe(
      data => {
        this.d.genders = data;
      }
    );

    // Tipos de documentos
    this.master_data_service.findDocumentsTypes().subscribe(
      data => {
        this.d.documents_types = data;
      }
    );

    // Departamentos
    this.master_data_service.findStates().subscribe(
      data => {
        this.d.states = data;
      }
    );
  }


  findCities(){
    this.master_data_service.findCities(this.f.state).subscribe(
      data => {
        this.d.cities = data;
      }
    );
  }

  save(){
    //console.log('form', this.f);

    this.auth_service.signUp(this.f).subscribe(
      data => {
        alert('Registro satisfactorio, podras ingresar cuando tu cuenta haya sido aprobada.');
      }
    );
  }
  
}
