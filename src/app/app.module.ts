import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { EquiposComponent } from './components/equipos/equipos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EquiporojoComponent } from './components/equiporojo/equiporojo.component';
import { EquiponegroComponent } from './components/equiponegro/equiponegro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquiposComponent,
    EquiporojoComponent,
    EquiponegroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
