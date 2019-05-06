import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObraComponent } from './obra/obra.component';
import { AvancoComponent } from './avanco/avanco.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { UserComponent } from './user/user.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { LoginComponent } from './security/login/login.component';
import { AddUserComponent } from './user/add-user.component';

export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent},    
    {path: 'obra', component: ObraComponent},
    {path: 'materiais', component: MateriaisComponent},
    {path: 'list', component: UserComponent},
    {path: 'usuario', component: AddUserComponent},
    {path: 'avanco', component: AvancoComponent},
    {path: 'funcionario', component: FuncionarioComponent}

]