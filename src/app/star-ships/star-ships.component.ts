import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.css']
})
export class StarShipsComponent {
  response: any;
  rowData: any;
  columnDefs: { field: string; }[];
  number: any;
  ships: any;

  constructor(private http: HttpClient){
    
    this.columnDefs = [
      { field: 'Name' },
      { field: 'Crew' },
      { field: 'Passengers' },
      { field: 'hyperDrive_Rating' },
      { field: 'MGLT' },
    ];
    this.rowData = null;
  }

  ngOnInit() {
    this.number=1
    this.fetchData();
  }

  fetchData() {
    const apiUrl = `https://swapi.dev/api/starships/?page=${this.number}`;
    this.http.get(apiUrl).subscribe((response: any) => {
      this.ships = response;
      this.rowData = this.createRowData();
    });
  }

  createRowData() {
    return this.ships.results.map((ship: any) => ({
      Name: ship.name,
      Crew: ship.crew,
      Passengers: ship.passengers,
      hyperDrive_Rating: ship.hyperdrive_rating,
      MGLT: ship.MGLT,
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

}