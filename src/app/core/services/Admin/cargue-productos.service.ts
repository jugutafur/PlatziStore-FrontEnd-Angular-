import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargueProductosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  cargueMasivo(datos){
    return this.httpClient.post(`${environment.Url_apiPlatziStore}`, datos);
  }
}
