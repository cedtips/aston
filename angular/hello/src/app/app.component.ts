import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world !!!';
  name = '';
  state = 'OFF';
  limiteText ='';
  showDemo = false;

  clickMe() {
    this.title = 'Ma fonction rox du poney!!!';
  }

  updateName(event: Event): void {
    let element = <HTMLInputElement>event.target;
    //console.log(element.value);
    this.name = element.value;
  }

  switchBtn() {
    if(this.state === 'OFF'){
      this.state ="ON";
    } else{
      this.state = "OFF";
    }
  }

    demo(){
      this.showDemo = !this.showDemo;
    }

}
