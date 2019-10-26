import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IssuesListComponent } from "./issues/issues-list/issues-list.component";
import { IssueDetailsComponent } from "./issues/issue-details/issue-details.component";

const routes: Routes = [
  { path: "issues", component: IssuesListComponent },
  { path: "issues/:id", component: IssueDetailsComponent },
  { path: "", redirectTo: "issues", pathMatch: "full" },
  { path: "**", redirectTo: "issues", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
