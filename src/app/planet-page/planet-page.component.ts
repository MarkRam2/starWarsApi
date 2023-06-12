import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.css']
})

export class PlanetPageComponent {
  response: any;
  rowData: any;
  columnDefs: { field: string; }[];
  number: any;
  planets: any;

  constructor(private http: HttpClient){
    
    this.columnDefs = [
      { field: 'Name' },
      { field: 'Day' },
      { field: 'Year' },
      { field: 'Climate' },
      { field: 'Gravity' },
      { field: 'Terrain' },
      { field: 'Population' },
    ];
    this.rowData = null;
  }

  ngOnInit() {
    this.number=1
    this.fetchData();
  }

  fetchData() {
    const apiUrl = `https://swapi.dev/api/planets/?page=${this.number}`;
    this.http.get(apiUrl).subscribe((response: any) => {
      this.planets = response;
      this.rowData = this.createRowData();
    });
  }

  createRowData() {
    return this.planets.results.map((planet: any) => ({
      Name: planet.name,
      Day: planet.rotation_period,
      Year: planet.orbital_period,
      Climate: planet.climate,
      Gravity: planet.gravity,
      Terrain: planet.terrain,
      Population: planet.population,
    }));
  }

  page1(){
    this.number=1
    this.fetchData();
  }
  page2(){
    this.number=2
    this.fetchData();
  }
  page3(){
    this.number=3
    this.fetchData();
  }
  page4(){
    this.number=4
    this.fetchData();
  }
  page5(){
    this.number=5
    this.fetchData();
  }
  page6(){
    this.number=6
    this.fetchData();
  }

}
