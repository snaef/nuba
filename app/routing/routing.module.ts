import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JournalComponent }   from '../nubaJournal/nubaJournal.component';
import { AnalysisComponent }   from '../nubaAnalysis/nubaAnalysis.component';
import { UserAccountComponent }  from '../nubaUserAccount/nubaUserAccount.component';

const routes: Routes = [
  { path: '', redirectTo: '/journal', pathMatch: 'full' },
  { path: 'journal',  component: JournalComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'account',     component: UserAccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}