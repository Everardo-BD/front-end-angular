import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.name }</div>` +
      `<div>State: ${ data.state }</div>` +
      `<div>Population: ${ data.population }</div>`
  }

  makeDenuesPopup(data: any): string {
    return `` +
      `<div>Nombre: ${ data.nombre }</div>` +
      `<div>Dirección: ${ data.calle } ${ data.numero } , ${ data.colonia } ${ data.cp }</div>` +
      `<div>Municipio: ${ data.municipio }</div>` +
      `<div>Estado: ${ data.estado }</div>` +
      `<div>GPS: ${ data.lat }, ${ data.lng }</div>` 
  }
}
