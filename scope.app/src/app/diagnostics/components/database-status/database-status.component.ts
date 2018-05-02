import {Component, OnInit} from '@angular/core';
import {DiagnosticsState} from '../../../state/diagnostics/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Diagnostics} from '../../models/diagnostics';
import {getDiagnostics} from '../../../state/diagnostics/selectors/diagnostics';

@Component({
    selector: 'app-database-status',
    templateUrl: './database-status.component.html',
    styleUrls: ['./database-status.component.css']
})
export class DatabaseStatusComponent implements OnInit {

    private diagnostics: Observable<Diagnostics>;

    constructor(private store: Store<DiagnosticsState>) {
        this.diagnostics = this.store.select(getDiagnostics);
    }

    ngOnInit() {
    }

}
