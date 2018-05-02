import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule, MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule, MatListModule,
    MatMenuModule, MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

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
    MatTooltipModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
];

@NgModule({
    imports: modules,
    providers: [HttpClient],
    exports: modules,
    declarations: []
})
export class SharedModule {}
