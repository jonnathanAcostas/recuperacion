import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { GaleryModel } from '../app/model/galery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Galeria Web';

  galery : GaleryModel;
  galeries : Array<GaleryModel>; 


  constructor(private service:ServiceService){
    

    this.galery = new GaleryModel();
    this.galeries = new Array<GaleryModel>();
    this.getGalery()
}

getGalery(){
  this.service.get('galery').subscribe(
    response => {
      console.log(this.galeries = response['galery']);
    },
    error => {
      console.log("oh no "+error);
    }
  )
}

}
