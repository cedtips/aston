import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AreatextComponent } from './areatext/areatext.component';
import { TodoComponent } from './todo/todo.component';
import { EchoComponent } from './echo/echo.component';
import { MessageComponent } from './echo/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AreatextComponent,
    TodoComponent,
    EchoComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
