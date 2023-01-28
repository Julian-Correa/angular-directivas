import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
// modulo personalizado para listas
import { ListsModule } from './modules/lists/lists.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule  
    // ctrl + space para que te lo importe automaticamente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
