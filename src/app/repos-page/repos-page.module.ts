import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReposPagePageRoutingModule } from './repos-page-routing.module';

import { ReposPagePage } from './repos-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReposPagePageRoutingModule
  ],
  declarations: [ReposPagePage]
})
export class ReposPagePageModule {}
