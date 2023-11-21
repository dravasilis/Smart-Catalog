import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { CatalogInfoComponent } from './catalog_info/catalog_info.component';
import { SelectedOptionComponent } from './shared/selected-option/selected-option.component';

const routes: Routes = [
  {
    //home path
    path:'',
    component: CatalogsComponent
  },
  {
    //catalog path
    path: 'catalog/:name',
    component: CatalogInfoComponent 
  },
  {
    path: 'catalog/:name/:title',
    component: SelectedOptionComponent 
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
