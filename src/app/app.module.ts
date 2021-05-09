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
    FilterCountryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
