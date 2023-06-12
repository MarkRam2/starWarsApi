import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  response: any;
  category: string;
  number: number;
  people: any[] = [];
  columnDefs: any[];
  rowData: any[] | null;
  homeworld: any | null;

  constructor(private http: HttpClient) {
    this.category = 'people';
    this.number = 1;
    this.columnDefs = [
      { field: 'Name' },
      { field: 'Height' },
      { field: 'Mass' },
      { field: 'HairColor' },
      { field: 'SkinColor' },
      { field: 'EyeColor' },
      { field: 'BirthYear' },
      { field: 'Gender' },
      { field: 'HomeWorld' },
    ];
    this.rowData = null;
  }

  ngOnInit() {
    this.fetchData();
  }

  
  fetchData() {
    const apiUrl = `https://swapi.dev/api/${this.category}/?page=${this.number}`;
    this.http.get(apiUrl).subscribe((response: any) => {
      this.response = response;
      this.populatePeopleArray(this.response.results);
      this.rowData = this.createRowData();
    });
  }
  
  getHomeworld(peapleWorld: any){
    this.http.get(peapleWorld).subscribe((response: any) => {
      this.homeworld = response;
    });
  }

  populatePeopleArray(data: any[]) {
    this.people = data.map(person => {
      this.getHomeworld(person.homeworld)
      person.homeworld=this.homeworld.name
      return Object.keys(person).map(key => person[key]);
    });
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
  page7(){
    this.number=7
    this.fetchData();
  }
  page8(){
    this.number=8
    this.fetchData();
  }
  page9(){
    this.number=9
    this.fetchData()
  }



  createRowData() {
    return this.people.map(person => ({
      Name: person[0],
      Height: person[1],
      Mass: person[2],
      HairColor: person[3],
      SkinColor: person[4],
      EyeColor: person[5],
      BirthYear: person[6],
      Gender: person[7],
      HomeWorld: person[8]
    }));
  }
}
