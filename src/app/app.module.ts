import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {TranslationService} from "./services/translation.service";
import {TranslationPipe} from "./pipes/translation.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TranslationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
