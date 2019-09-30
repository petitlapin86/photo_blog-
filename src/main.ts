
import './styles/main.css'; // Import global stylesheet
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//get rid of dynamic when finished
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
