import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentinfoComponent } from './storedata/studentinfo/studentinfo.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule,MatDialogModule,MatMenuModule,MatGridListModule,MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatToolbarModule, MatIconModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatNavList, MatListModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { UpdateinfoComponent } from './storedata/updateinfo/updateinfo.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { DashboardComponent } from './storedata/dashboard/dashboard.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FormdemoComponent } from './storedata/formdemo/formdemo.component';
import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts';
import { PdfmakerComponent } from './storedata/pdfmaker/pdfmaker.component';
import { MattabledemoComponent } from './storedata/mattabledemo/mattabledemo.component';

import {NgxTTitanColorPickerModule} from "ngx-ttitan-color-picker";
import { ObjectpassingComponent } from './storedata/objectpassing/objectpassing.component';
import { ImageuploadComponent } from './storedata/imageupload/imageupload.component';
import { PopulatdemoComponent } from './storedata/populatdemo/populatdemo.component';


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
    FileSelectDirective,
    DashboardComponent,
    MainNavComponent,
    FormdemoComponent,
    PdfmakerComponent,
    MattabledemoComponent,
    ObjectpassingComponent,
    ImageuploadComponent,
    PopulatdemoComponent,
    
    

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
    MatSelectModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    ReactiveFormsModule,
    KeyboardShortcutsModule,
    NgxTTitanColorPickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
   entryComponents: [UpdateinfoComponent]
})
export class AppModule { }
