import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoTabsComponent } from './todo-tabs/todo-tabs.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { HomeComponent } from './home/home.component';
import { FilterTaskComponent } from './filter-task/filter-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTabsComponent,
    TodoFormComponent,
    DetailTaskComponent,
    HomeComponent,
    FilterTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: ':priority',
        component: FilterTaskComponent
      },
      {
        path: 'task/:id',
        component: DetailTaskComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
