import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminDashboardPageComponent } from './components/pages/admin-dashboard-page/admin-dashboard-page.component';
import { CountriesDashboardComponent } from './components/pages/admin-dashboard-page/countries-dashboard/countries-dashboard.component';
import { CitiesDashboardComponent } from './components/pages/admin-dashboard-page/cities-dashboard/cities-dashboard.component';
import { AreasDashboardComponent } from './components/pages/admin-dashboard-page/areas-dashboard/areas-dashboard.component';
import { CustomerGroupDashboardComponent } from './components/pages/admin-dashboard-page/customer-group-dashboard/customer-group-dashboard.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { MainDashboardComponent } from './components/pages/admin-dashboard-page/main-dashboard/main-dashboard.component';
import { AdminSidebarComponent } from './components/shared/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/shared/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './components/shared/admin-footer/admin-footer.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CountryAddFormComponent } from './components/pages/admin-dashboard-page/countries-dashboard/country-add-form/country-add-form.component';
import { CountryEditFormComponent } from './components/pages/admin-dashboard-page/countries-dashboard/country-edit-form/country-edit-form.component';
import { CitiesAddFormComponent } from './components/pages/admin-dashboard-page/cities-dashboard/cities-add-form/cities-add-form.component';
import { CitiesEditFormComponent } from './components/pages/admin-dashboard-page/cities-dashboard/cities-edit-form/cities-edit-form.component';
import { FilterCountryPipe } from './pipes/filter-country.pipe';
import { AreaAddFormComponent } from './components/pages/admin-dashboard-page/areas-dashboard/area-add-form/area-add-form.component';
import { AreaEditFormComponent } from './components/pages/admin-dashboard-page/areas-dashboard/area-edit-form/area-edit-form.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { BrandAddFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { ModelDashboardComponent } from './components/pages/admin-dashboard-page/model-dashboard/model-dashboard.component';
import { ModelAddFormComponent } from './components/pages/admin-dashboard-page/model-dashboard/model-add-form/model-add-form.component';
import { ModelEditFormComponent } from './components/pages/admin-dashboard-page/model-dashboard/model-edit-form/model-edit-form.component';
import { BranchesDashboardComponent } from './components/pages/admin-dashboard-page/branches-dashboard/branches-dashboard.component';
import { BranchAddFormComponent } from './components/pages/admin-dashboard-page/branches-dashboard/branch-add-form/branch-add-form.component';
import { BranchEditFormComponent } from './components/pages/admin-dashboard-page/branches-dashboard/branch-edit-form/branch-edit-form.component';
import { CustomerEditFormComponent } from './components/pages/admin-dashboard-page/customers-dashboard/customer-edit-form/customer-edit-form.component';
import { CustomerAddFormComponent } from './components/pages/admin-dashboard-page/customers-dashboard/customer-add-form/customer-add-form.component';
import { CustomersDashboardComponent } from './components/pages/admin-dashboard-page/customers-dashboard/customers-dashboard.component';
import { AddressesDashboardComponent } from './components/pages/admin-dashboard-page/addresses-dashboard/addresses-dashboard.component';
import { AddressAddFormComponent } from './components/pages/admin-dashboard-page/addresses-dashboard/address-add-form/address-add-form.component';
import { AddressEditFormComponent } from './components/pages/admin-dashboard-page/addresses-dashboard/address-edit-form/address-edit-form.component';
import { CustomerGroupAddFormComponent } from './components/pages/admin-dashboard-page/customer-group-dashboard/customer-group-add-form/customer-group-add-form.component';
import { CustomerGroupEditFormComponent } from './components/pages/admin-dashboard-page/customer-group-dashboard/customer-group-edit-form/customer-group-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardPageComponent,
    CountriesDashboardComponent,
    CitiesDashboardComponent,
    AreasDashboardComponent,
    CustomerGroupDashboardComponent,
    HomepageComponent,
    MainDashboardComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    FooterComponent,
    NavbarComponent,
    CountryAddFormComponent,
    CountryEditFormComponent,
    CitiesAddFormComponent,
    CitiesEditFormComponent,
    FilterCountryPipe,
    AreaAddFormComponent,
    AreaEditFormComponent,
    BrandsDashboardComponent,
    BrandAddFormComponent,
    BrandEditFormComponent,
    ModelDashboardComponent,
    ModelAddFormComponent,
    ModelEditFormComponent,
    BranchesDashboardComponent,
    BranchAddFormComponent,
    BranchEditFormComponent,
    CustomersDashboardComponent,
    CustomerEditFormComponent,
    CustomerAddFormComponent,
    AddressesDashboardComponent,
    AddressAddFormComponent,
    AddressEditFormComponent,
    CustomerGroupAddFormComponent,
    CustomerGroupEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
