import {Component, OnInit} from '@angular/core';
import {DiagnosticsState} from '../../../state/diagnostics/reducers';
import {Store} from '@ngrx/store';
import {getDiagnostics} from '../../../state/diagnostics/selectors/diagnostics';
import {Observable} from 'rxjs/Observable';
import {Diagnostics} from '../../models/diagnostics';

@Component({
    selector: 'app-version-number',
    templateUrl: './version-number.component.html',
    styleUrls: ['./version-number.component.css']
})
export class VersionNumberComponent implements OnInit {
    public applicationVersion: string;
    private diagnostics: Observable<Diagnostics>;

    constructor(private store: Store<DiagnosticsState>) {
        this.diagnostics = this.store.select(getDiagnostics);
    }

    ngOnInit() {
    }

}
