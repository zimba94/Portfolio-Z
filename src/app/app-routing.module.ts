import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', pathMatch: 'full', redirectTo: 'portfolio'},
  {path: '**', pathMatch: 'full', redirectTo: 'portfolio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
