import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// esto se importa para poder leer un json
import {HttpClient} from '@angular/common/http';
//esto se importa para poder mapear nuestro json
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-character-des',
  templateUrl: './character-des.page.html',
  styleUrls: ['./character-des.page.scss'],
})
export class CharacterDesPage implements OnInit {

  characters:any=[]
  id:any;
  name:String;
  status:string;
  species:string;
  gender:string;
  origin:string;
  location:string;
  image:string;
  constructor(private activatedRoute:ActivatedRoute,private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<any>('https://rickandmortyapi.com/api/character/'+this.id)
    .subscribe(res =>{
      console.log(res);
      // this.characters = res.results;
      this.name = res.name;
      this.status = res.status;
      this.species = res.species;
      this.gender = res.gender;
      this.origin = res.origin.name;
      this.location = res.location.name;
      this.image = res.image;


    })
  }

}
