import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {

  characters:any=[]
  next:string;
  prev:string;
  constructor(private httpclient:HttpClient,private router: Router) { }

  ngOnInit() {
    this.httpclient.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res =>{
      // console.log(res);
      this.characters = res.results;
      this.next = res.info.next;
      this.prev = res.info.prev;
    })
  }

  gotoNext(){
    this.router.navigate(['/usersnav',this.next])
  }

}
