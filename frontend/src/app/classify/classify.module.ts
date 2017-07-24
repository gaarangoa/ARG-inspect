import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

// Visualization
import {NgxChartsModule} from '@swimlane/ngx-charts';

// primeng
import { PanelModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/primeng';

import { ClassifyComponent } from './classify.component';
import { ClassifyRoutingModule } from './classify-routing.module';

// Metadata
import { UniprotComponent } from './metadata/uniprot/uniprot.component';
import { CardComponent } from './metadata/card/card.component';
import { ArdbComponent } from './metadata/ardb/ardb.component';

// BestHit
import { BestHitCardComponent } from './besthit/card/card.component';
import { BestHitArdbComponent } from './besthit/ardb/ardb.component';

// Genomes and MGE
import { GenomeComponent } from './genomes/genome.component';
// import { GenomeModule } from './genomes/genome.module';

// Curate
import { CurateComponent } from './curate/curate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,

    ClassifyRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

    NgxChartsModule,
    PanelModule,
    AutoCompleteModule,
    StepsModule
    // GenomeModule
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA, 
  ],
  declarations: [
    ClassifyComponent,
      UniprotComponent,
      CardComponent,
      ArdbComponent,

      BestHitArdbComponent,
      BestHitCardComponent,

      GenomeComponent,

      CurateComponent
  ],
  providers: [
  ],
  bootstrap: [
    ClassifyComponent
  ]
})
export class ClassifyModule { }
