import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { RatingComponent } from './shared/rating/rating.component';
import { ObraComponent } from './obra/obra.component';
import { ObraCustoComponent } from './obra/obra-custo/obra-custo.component';
import { AvancoComponent } from './avanco/avanco.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { LoginComponent } from './security/login/login.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { UserService } from './user/user.service';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { LoginService } from './security/login/login.service';

//import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvancoComponent,
    HomeComponent,
    InputComponent,
    RadioComponent,
    RatingComponent,
    ObraComponent,
    ObraCustoComponent,
    MateriaisComponent,
    UserComponent,
    AddUserComponent,
    UserDetailComponent,
   // UserService,
    FuncionarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //NgxMaskModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt-BR'}, UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
