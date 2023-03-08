import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-mytitle',
  templateUrl: './mytitle.component.html',
  styleUrls: ['./mytitle.component.css']
})
export class MytitleComponent implements OnInit, OnChanges {
  @Input() public mytitle:string = 'Esse titulo veio do My title'
  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log("Conteudo foi alterado")
  }

}
