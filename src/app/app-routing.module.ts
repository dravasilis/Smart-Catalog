import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { CatalogInfoComponent } from './catalog_info/catalog_info.component';

const routes: Routes = [
  {
    //home path
    path:'',
    component: CatalogsComponent
  },
  {
    //catalog path
    path: 'catalog/:id',
    component: CatalogInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }