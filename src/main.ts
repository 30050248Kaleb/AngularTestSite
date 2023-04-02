import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// ng serve

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
