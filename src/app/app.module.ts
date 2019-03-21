import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentinfoComponent } from './storedata/studentinfo/studentinfo.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule,MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatToolbarModule, MatIconModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { UpdateinfoComponent } from './storedata/updateinfo/updateinfo.component';
import { FileSelectDirective } from 'ng2-file-upload';
 
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'middle',
			distance: 50
		},
		vertical: {
			position: 'top',
			distance: 50,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  declarations: [
    AppComponent,
    StudentinfoComponent,
    UpdateinfoComponent,
    FileSelectDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule, 
    MatSelectModule,
    MatInputModule, 
    MatCardModule, 
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NotifierModule.withConfig(customNotifierOptions),
    MatTooltipModule,
    MatGridListModule,
    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
