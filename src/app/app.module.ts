import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ChoseComponent} from './chose/chose.component';
import {VocaleSoundService} from "./vocale/vocale-sound.service";
import { ListDesChosesComponent} from './list-des-choses/list-des-choses.component';
import { TodoListService } from './NF/todo-list.service';
import { VocaleComponent } from './vocale/vocale.component';
import { RecoVocaleComponent } from './reco-vocale/reco-vocale.component';
import {RecoVocaleService} from "./reco-vocale/reco-vocale.service";
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoseComponent,
    ListDesChosesComponent,
    VocaleComponent,
    RecoVocaleComponent,
    WarningComponent

  ],
  exports: [
    ListDesChosesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    TodoListService,
    VocaleSoundService,
    RecoVocaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
