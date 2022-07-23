import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  },
  {
    path: 'edit-item',
    loadChildren: () => import('./edit-item/edit-item.module').then( m => m.EditItemPageModule)
  },
  {
    path: 'view-item',
    loadChildren: () => import('./view-item/view-item.module').then( m => m.ViewItemPageModule)
  },
  {
    path: 'wood',
    loadChildren: () => import('./wood/wood.module').then( m => m.WoodPageModule)
  },
  {
    path: 'delete-item',
    loadChildren: () => import('./delete-item/delete-item.module').then( m => m.DeleteItemPageModule)
  },  {
    path: 'woodprod',
    loadChildren: () => import('./delete/woodprod/woodprod.module').then( m => m.WoodprodPageModule)
  },
  {
    path: 'masonry',
    loadChildren: () => import('./masonry/masonry.module').then( m => m.MasonryPageModule)
  },
  {
    path: 'plumbing',
    loadChildren: () => import('./plumbing/plumbing.module').then( m => m.PlumbingPageModule)
  },
  {
    path: 'rebars',
    loadChildren: () => import('./rebars/rebars.module').then( m => m.RebarsPageModule)
  },
  {
    path: 'concreting',
    loadChildren: () => import('./delete/concreting/concreting.module').then( m => m.ConcretingPageModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./delete/pipes/pipes.module').then( m => m.PipesPageModule)
  },
  {
    path: 'rebar',
    loadChildren: () => import('./delete/rebar/rebar.module').then( m => m.RebarPageModule)
  },
  {
    path: 'painting',
    loadChildren: () => import('./painting/painting.module').then( m => m.PaintingPageModule)
  },
  {
    path: 'roofing',
    loadChildren: () => import('./roofing/roofing.module').then( m => m.RoofingPageModule)
  },
  {
    path: 'insulation',
    loadChildren: () => import('./delete/insulation/insulation.module').then( m => m.InsulationPageModule)
  },
  {
    path: 'paint',
    loadChildren: () => import('./delete/paint/paint.module').then( m => m.PaintPageModule)
  },

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
