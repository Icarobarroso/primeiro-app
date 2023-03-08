import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  template:`
  <app-title></app-title>
  <app-mytitle mytitle="conteudo alterado"></app-mytitle>
  <router-outlet></router-outlet>
  `
 
})
export class AppComponent implements OnInit{
  constructor() {}
    ngOnInit():void{
      setTimeout(()=>{
        console.log(1);
      },6000)
    }
}
