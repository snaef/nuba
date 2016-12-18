import { Component } from '@angular/core';

import { journalEntry } from './journalEntry';
import { JournalEntriesService } from './journalEntries.service';

import { FoodDatabaseService } from '../foodDatabase/food.service';

@Component({
  selector: "journal-list",
  templateUrl: "./app/nubaJournal/journalList.component.html",
  providers: [FoodDatabaseService]
})
export class JournalList  { 
  
  journalList: Array<journalEntry>;
  showEntriesOfDate: Object;
  activeListDate: any;

  subscription: any;

  constructor(private JournalEntriesService: JournalEntriesService, private foodDatabase: FoodDatabaseService) {

    // ****
    // get all mutable Data
    // TODO, evtl. setMutable Data mit ngOnInit zusammenführen?
    let mutableData = JournalEntriesService.getMutableData();
    this.setMutableData(mutableData);

  }

  ngOnInit(){
    this.JournalEntriesService.data.subscribe((data: any) => {
        this.activeListDate = data.activeDate;
        this.journalList = data.entriesOfActiveDate;
      });
  }

  setMutableData (mutableData: any){
    this.activeListDate = mutableData.activeDate;
    this.journalList = mutableData.entriesOfActiveDate;
  }

  // *** siehe TODO oben



  deleteEntry (id: any){
    this.JournalEntriesService.deleteEntry(id);
  }

  dateChange (step: number) {
     this.JournalEntriesService.changeDateInSteps(step);
  }

}
