import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LinesComponent } from "./lines/lines.component";
import { FooterComponent } from "./footer/footer.component";
import { NgbCarouselModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MainComponent } from "./main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from "@angular/core";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localePt, "pt");

@NgModule({
  declarations: [AppComponent, HeaderComponent, LinesComponent, FooterComponent, MainComponent],
  imports: [BrowserModule, NgbModule, NgbCarouselModule, HttpClientModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt",
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "BRL",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
