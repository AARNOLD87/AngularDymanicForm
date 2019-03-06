import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { FormComponent } from './form/form.component';
import { FormService } from './services/form.service';
import { ControlContainerComponent } from './form/control-container/control-container.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToInvalidFieldDirective } from './form/scroll-to-invalid-field.directive';
import { DateComponent } from './controls/date/date.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    CheckboxComponent,
    DateComponent,
    FormComponent,
    ControlContainerComponent,
    ScrollToInvalidFieldDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
