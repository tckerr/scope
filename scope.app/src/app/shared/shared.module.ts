import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    MatButtonModule, MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule, MatListModule,
    MatMenuModule, MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

const modules = [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
];

@NgModule({
    imports: modules,
    providers: [HttpClient],
    exports: modules,
    declarations: []
})
export class SharedModule {}
