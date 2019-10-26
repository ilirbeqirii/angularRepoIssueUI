import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { IssueDetailsComponent } from "./issues/issue-details/issue-details.component";
import { IssuesListComponent } from "./issues/issues-list/issues-list.component";
import { HttpErrorInterceptor } from "./http-error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    IssueDetailsComponent,
    IssuesListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
