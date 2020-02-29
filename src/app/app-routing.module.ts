import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { ReimbSumComponent } from './components/reimb-sum/reimb-sum.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: TableComponent},
    { path: 'summary', component: ReimbSumComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [ LoginComponent, TableComponent, ReimbSumComponent]