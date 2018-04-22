import {Component, OnInit} from '@angular/core';
import {DiagnosticsService} from '../../services/diagnostics.service';

@Component({
    selector: 'app-version-number',
    templateUrl: './version-number.component.html',
    styleUrls: ['./version-number.component.css']
})
export class VersionNumberComponent implements OnInit {
    public applicationVersion: string;
    private diagnosticsService: DiagnosticsService;

    constructor(diagnosticsService: DiagnosticsService) {
        this.diagnosticsService = diagnosticsService;
        diagnosticsService.diagnosticsFetched$
            .subscribe(s => this.applicationVersion = s.applicationVersion)
    }

    ngOnInit() {
        this.diagnosticsService.fetchDiagnostics();
    }

}
