import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {SiteModule} from './app/site/site.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SiteModule);
