import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PosterFilterPipe } from './pipes/poster-filter.pipe';
import { HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdNavCustom } from './app.component';
import { SharedUIModule } from '../app/shared-ui/shared-ui.module';

@NgModule({
  declarations: [
    NgbdNavCustom,
    PosterFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SharedUIModule
  ],
  providers: [],
  bootstrap: [NgbdNavCustom]
})
export class AppModule { }

