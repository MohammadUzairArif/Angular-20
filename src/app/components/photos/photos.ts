import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photos',
  imports: [FormsModule],
  templateUrl: './photos.html',
  styleUrl: './photos.css'
})
export class Photos implements OnInit {
  photoList: any[] = [];

  // 2 methods hai http client ko inject krne ke dependecy injection jisay kehty hai ek new aur dusra old

  /* old method
   constructor(private http: HttpClient) {

   } */

  //  new method
  http = inject(HttpClient);
  newPhoto: any = {
    'id': 0,
    'albumId': 0,
    'title': '',
    'url': '',
    'thumbnailUrl': ''
  }

  ngOnInit() {
    this.getAllPhotos();
  }

  getAllPhotos(){
    // this.http.get(url).subscribe()

    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((result : any)=>{
    
      this.photoList = result;
      
    });
  }

  onSavePhoto(){
    debugger
    this.http.post('https://jsonplaceholder.typicode.com/photos', this.newPhoto).subscribe((response:any)=>{
      alert('Photo saved successfully');
      debugger
      this.getAllPhotos()

    });
  }
  onDeletePhoto(id: number){
    debugger
    this.http.delete('https://jsonplaceholder.typicode.com/photos/'+id).subscribe((response:any)=>{
      alert('Photo deleted successfully');
      debugger
      this.getAllPhotos()
    });
  }
  onEditPhoto(data: any){
    this.newPhoto = data;
  }
  onUpdatePhoto(){
    debugger
    this.http.put('https://jsonplaceholder.typicode.com/photos/'+this.newPhoto.id, this.newPhoto).subscribe((response:any)=>{
      alert('Photo updated successfully');
      debugger
      this.getAllPhotos()
    });
  }
}
