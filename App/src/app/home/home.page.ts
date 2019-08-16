import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { GaleryModel } from '../model/galery';
import { Contacts } from '@ionic-native/contacts/ngx';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaContactos:any[]=[];
  avatar:string="./assets/icon/avatar.png";
  image: string; 
  galery: GaleryModel;
  galeries: Array<GaleryModel>
  db: SQLiteObject = null;
  fecha;

  constructor(
    private contacts:Contacts,  
    private camera: Camera, 
    private geolocation:Geolocation,  
    private sqlite: SQLite,
    private service: ServiceService 
  ) {
    this.getGeolocation(),
    this.galery = new GaleryModel(),
    this.galeries = new Array<GaleryModel>()

  }



  getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.galery.latitud = geoposition.coords.latitude;
      this.galery.longitud = geoposition.coords.longitude;
    });
  }
  private createDatabase() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db) => {
      alert("si se creo la base")
      this.setDatabase(db);
      return this.createTable();
    }).catch(error => {
      alert('oh no ' + error);
    }).catch(e => alert('no funciono nada ' + e));
  }
  
    setDatabase(db: SQLiteObject) {
      if (this.db === null) {
        this.db = db;
      }
    }
    createTable() {
      let sql = 'CREATE TABLE IF NOT EXISTS galery(latitud INTEGER, longitud INTERGER, description VARCHAR, imagen VARCHAR, fechaCompleta DATWE )';
      return this.db.executeSql(sql, []);
    }  


    createImagen(galery: any) {
      alert('si se guardar la imagen ')
      let sql = 'INSERT INTO galery(latitud, longitud,description,imagen,fechaCompleta) VALUES(?,?,?,?,?)';
      return this.db.executeSql(sql, [this.galery.latitud, this.galery.longitud, this.galery.descripcion, this.galery.imagen, this.galery.fechaCompleta]);
    }

  tomarFoto(){
    this.fecha = this.fechaActual();
    this.galery.fechaCompleta = this.fecha
let options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  sourceType: this.camera.PictureSourceType.CAMERA
};
this.camera.getPicture(options)
.then((imageData)=>{
  this.image = 'data:image/jpeg;base64,' + imageData;
}, (error)=>{
  console.log(error);
});
  }

  fechaActual() {
    var hoy = 'fecha'+ new Date().getDate() + new Date().getMonth() + new Date().getDay()+ new Date().getFullYear();
   return hoy;

    
  }

  postgalery(){
    this.service.post('galery',{'latitud':this.galery.latitud,'longitud':this.galery.latitud,'descripcion':this.galery.descripcion,'fechaCompleta':this.fechaActual()}).subscribe(
      response => {
        alert("oh si "+response);
      },
      error => {
        console.log("oh no "+error);
      }
    );
  }


}
