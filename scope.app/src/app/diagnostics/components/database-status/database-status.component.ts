import {Component, OnInit} from '@angular/core';
import {DiagnosticsService} from '../../services/diagnostics.service';

@Component({
    selector: 'app-database-status',
    templateUrl: './database-status.component.html',
    styleUrls: ['./database-status.component.css']
})
export class DatabaseStatusComponent implements OnInit {

    public databaseOnline: boolean;
    public databaseStatusKnown = false;
    private diagnosticsService: DiagnosticsService;

    constructor(diagnosticsService: DiagnosticsService) {
        this.diagnosticsService = diagnosticsService;
        diagnosticsService.diagnosticsFetched$
            .subscribe(s => this.setStatus(s))
    }

    private setStatus(s) {
        this.databaseStatusKnown = true;
        this.databaseOnline = s.databaseOnline;
    }

    ngOnInit() {
    }

}
