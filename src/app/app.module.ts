import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { BadgePriceDirective } from './directives/badge-price.directive';
import { TvaPricePipe } from './pipes/tva-price.pipe';
import { ChildComponent } from './components/child/child.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { CategoryComponent } from './components/category/category.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    BadgePriceDirective,
    TvaPricePipe,
    ChildComponent,
    MyDirectiveDirective,
    CategoryComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
