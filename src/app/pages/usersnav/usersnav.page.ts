import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usersnav',
  templateUrl: './usersnav.page.html',
  styleUrls: ['./usersnav.page.scss'],
})
export class UsersnavPage implements OnInit {
  characters:any=[]
  route:string;
  next:string;
  prev:string;
  constructor(public toastController: ToastController,private activatedRoute:ActivatedRoute,private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.route = this.activatedRoute.snapshot.paramMap.get("route");
    console.log(this.route)
    this.http.get<any>(this.route)
    .subscribe(res =>{
      console.log(res);
      this.characters = res.results;
      this.next = res.info.next;
      this.prev = res.info.prev;
    })
  }

  gotoNext(){
    if(this.next != null){
      this.router.navigate(['/usersnav',this.next])
    }
    else{
      this.presentToast();
    }
  }

  gotoPrev(){
    if(this.prev != null){
      this.router.navigate(['/usersnav',this.prev])
    }
    else{
      this.presentToast();
    }
    
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: "No Hay Más Páginas",
      duration: 1000,
      position: "bottom"
    });
    toast.present();
  }

}
