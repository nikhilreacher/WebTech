import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AddComponent } from './vendor/add/add.component';
import { UpdateComponent } from './vendor/update/update.component';
import { DeleteComponent } from './vendor/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: 'buyer', component: BuyerComponent},
  { path: 'vendor', component: VendorComponent},
  { path: 'vendor/add', component: AddComponent},
  { path: 'vendor/update', component: UpdateComponent},
  { path: 'vendor/delete', component: DeleteComponent},
  { path: 'vendor/add/update', redirectTo: 'vendor/update'},
  { path: 'vendor/add/delete', redirectTo: 'vendor/delete'},
  { path: 'vendor/update/add', redirectTo: 'vendor/add'},
  { path: 'vendor/update/delete', redirectTo: 'vendor/delete'},
  { path: 'vendor/delete/update', redirectTo: 'vendor/update'},
  { path: 'vendor/delete/add', redirectTo: 'vendor/add'},
]

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    BuyerComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
