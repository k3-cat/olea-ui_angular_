import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinkComponent } from './pink/pink.component';
import { ProjComponent } from './proj/proj.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialStyleModule } from './matrial-style-module';
import { AboutComponent } from './about/about.component';
import { ConfigComponent } from './config/config.component';
import { PinkDetailComponent } from './pink-detail/pink-detail.component';
import { ProjDetailComponent } from './proj-detail/proj-detail.component';
import { LoginComponent } from './login/login.component';
import { LeafStatePipe, DepNamePipe } from './pipes'
import { PinkName } from './pipes2';

@NgModule({
  declarations: [
    AppComponent,
    PinkComponent,
    ProjComponent,
    UserComponent,
    AboutComponent,
    ConfigComponent,
    PinkDetailComponent,
    ProjDetailComponent,
    LoginComponent,
    LeafStatePipe,
    DepNamePipe,
    PinkName,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialStyleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
