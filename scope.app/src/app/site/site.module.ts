import {NgModule} from '@angular/core';
import {RootComponent} from './root/root.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
  ],
  declarations: [
    RootComponent,
    NavigationComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class SiteModule {
}
