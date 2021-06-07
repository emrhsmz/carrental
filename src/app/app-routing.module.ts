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
import { AreaEditFormComponent } from './components/pages/admin-dashboard-page/areas-dashboard/area-edit-form/area-edit-form.component';
import { AreaAddFormComponent } from './components/pages/admin-dashboard-page/areas-dashboard/area-add-form/area-add-form.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { BrandAddFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { ModelDashboardComponent } from './components/pages/admin-dashboard-page/model-dashboard/model-dashboard.component';
import { ModelAddFormComponent } from './components/pages/admin-dashboard-page/model-dashboard/model-add-form/model-add-form.component';
import { ModelEditFormComponent } from './components/pages/admin-dashboard-page/model-dashboard/model-edit-form/model-edit-form.component';
import { BranchesDashboardComponent } from './components/pages/admin-dashboard-page/branches-dashboard/branches-dashboard.component';
import { BranchAddFormComponent } from './components/pages/admin-dashboard-page/branches-dashboard/branch-add-form/branch-add-form.component';
import { BranchEditFormComponent } from './components/pages/admin-dashboard-page/branches-dashboard/branch-edit-form/branch-edit-form.component';
import { CustomerAddFormComponent } from './components/pages/admin-dashboard-page/customers-dashboard/customer-add-form/customer-add-form.component';
import { CustomerEditFormComponent } from './components/pages/admin-dashboard-page/customers-dashboard/customer-edit-form/customer-edit-form.component';
import { CustomersDashboardComponent } from './components/pages/admin-dashboard-page/customers-dashboard/customers-dashboard.component';
import { AddressesDashboardComponent } from './components/pages/admin-dashboard-page/addresses-dashboard/addresses-dashboard.component';
import { AddressAddFormComponent } from './components/pages/admin-dashboard-page/addresses-dashboard/address-add-form/address-add-form.component';
import { AddressEditFormComponent } from './components/pages/admin-dashboard-page/addresses-dashboard/address-edit-form/address-edit-form.component';
import { CustomerGroupAddFormComponent } from './components/pages/admin-dashboard-page/customer-group-dashboard/customer-group-add-form/customer-group-add-form.component';
import { CustomerGroupEditFormComponent } from './components/pages/admin-dashboard-page/customer-group-dashboard/customer-group-edit-form/customer-group-edit-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AdminDashboardPageComponent },

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
      { path: 'brands', component: BrandsDashboardComponent },
      { path: 'brands/add', component: BrandAddFormComponent },
      { path: 'brands/edit/:id', component: BrandEditFormComponent },
      { path: 'models', component: ModelDashboardComponent },
      { path: 'models/add', component: ModelAddFormComponent },
      { path: 'models/edit/:id', component: ModelEditFormComponent },
      { path: 'branches', component: BranchesDashboardComponent },
      { path: 'branches/add', component: BranchAddFormComponent },
      { path: 'branches/edit/:id', component: BranchEditFormComponent },
      { path: 'customers', component: CustomersDashboardComponent },
      { path: 'customers/add', component: CustomerAddFormComponent },
      { path: 'customers/edit/:id', component: CustomerEditFormComponent },
      //{ path: 'addresses', component: AddressesDashboardComponent },
      { path: 'addresses/customerId/:id', component: AddressesDashboardComponent },
      { path: 'addresses/add', component: AddressAddFormComponent },
      { path: 'addresses/edit/:id', component: AddressEditFormComponent },
      { path: 'customergroups', component: CustomerGroupDashboardComponent },
      { path: 'customergroups/add', component: CustomerGroupAddFormComponent },
      { path: 'customergroups/edit/:id', component: CustomerGroupEditFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
