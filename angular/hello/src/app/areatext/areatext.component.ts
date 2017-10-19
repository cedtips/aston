import { Component } from '@angular/core';

@Component({
    selector: 'app-areatext',
    templateUrl:'./areatext.component.html',
  //  styleUrls: ['./areatext.component.css'],
  styles: [`
    .textColor{
        color: red
    }
  `]
})

export class AreatextComponent {
    limiteText ='';
    maxLength = '20';
}
