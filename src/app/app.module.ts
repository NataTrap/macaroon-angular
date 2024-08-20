import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {PriorityComponent} from "./component/priority/priority.component";
import { ItemComponent } from './component/item/item.component';
import { ButtonBackgroundDirective } from './directives/button-background.directive';
import { NumberOfCharacterPipe } from './pipes/number-of-character.pipe';
import { ChangeFormatOfNumberPipe } from './pipes/change-format-of-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PriorityComponent,
    ItemComponent,
    ButtonBackgroundDirective,
    NumberOfCharacterPipe,
    ChangeFormatOfNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
