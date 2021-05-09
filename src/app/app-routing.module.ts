import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardPageComponent } from './components/pages/admin-dashboard-page/admin-dashboard-page.component';
import { AreasDashboardComponent } from './components/pages/admin-dashboard-page/areas-dashboard/areas-dashboard.component';
import { CitiesAddFormComponent } from './components/pages/admin-dashboard-page/cities-dashboard/cities-add-form/cities-add-form.component';
import { CitiesDashboardComponent } from './components/pages/admin-dashboard-page/cities-dashboard/cities-dashboard.component';
import { CitiesEditFormComponent } from './components/pages/admin-dashboard-page/cities-dashboard/cities-edit-form/cities-edit-form.component';
import { CountriesDashboardComponent } from './components/pages/admin-dashboard-page/countries-dashboard/countries-dashboard.component';
import { CountryAddFormComponent } from './components/pages/admin-dashboard-page/countries-dashboard/country-add-form/country-add-form.component';
import { CountryEditFormComponent } from './components/pages/admin-dashboard-page/countries-dashboard/country-edit-form/country-edit-form.component';
import { CustomerGroupDashboardComponent } from './components/pages/admin-dashboard-page/customer-group-dashboard/customer-group-dashboard.component';
import { MainDashboardComponent } from './components/pages/admin-dashboard-page/main-dashboard/main-dashboard.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import {AreaEditFormComponent} from './components/pages/admin-dashboard-page/areas-dashboard/area-edit-form/area-edit-form.component';
import {AreaAddFormComponent} from './components/pages/admin-dashboard-page/areas-dashboard/area-add-form/area-add-form.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', component: AdminDashboardPageComponent },

  {
    path: 'admin',
    component: AdminDashboardPageComponent,
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'countries', component: CountriesDashboardComponent },
      { path: 'countries/add', component: CountryAddFormComponent },
      { path: 'countries/edit/:id', component: CountryEditFormComponent },
      { path: 'cities', component: CitiesDashboardComponent },
      { path: 'cities/add', component: CitiesAddFormComponent },
      { path: 'cities/edit/:id', component: CitiesEditFormComponent },
      { path: 'areas', component: AreasDashboardComponent },
      { path: 'areas/add', component: AreaAddFormComponent },
      { path: 'areas/edit/:id', component: AreaEditFormComponent },
      { path: 'customergroup', component: CustomerGroupDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
