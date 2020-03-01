import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: TableComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [ LoginComponent, TableComponent]