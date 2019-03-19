import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {

    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;

    });

  }

  private cargarEquipo() {

    // Leer el archivo JSON (ruta de firebase)
    this.http.get('https://angular-fhudemy.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {

      this.equipo = resp;

      //console.log(resp);

    });


  }


}
