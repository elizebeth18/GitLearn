import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//For forms element
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//For Routing
import { RouterModule } from '@angular/router'
//Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/myDiscount.pipe';
import { ProductSearchPipe } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { OrdersComponent } from './orders/orders.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { MusicService } from './music/music.service';
import { ProductModule } from './products/product.module';
import { MusicModule } from './music/music.module';


//decorator
@NgModule({
  //Modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'music', component: MusicComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home',pathMatch: 'full'},
      {path: '**', component: NotFoundComponent},
    ]),
    ProductModule,
    MusicModule
  ],

  //Components and Pipes
  declarations: [
    AppComponent,
    MoviesComponent,
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    ProductSearchPipe,
    StarComponent,
    HomeComponent,
    MusicComponent,
    OrdersComponent,
    NotFoundComponent,
    ProductDetailComponent,
  ],

  //Only main/first component
  bootstrap: [
    AppComponent
  ],
  //Only services
  providers: [
    ProductService,
    MusicService,
  ]
})



export class AppModule {

}