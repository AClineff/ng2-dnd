import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DndService } from './services/dnd.service'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { CustomMaterialModule } from './material.module'
import { EditComponent } from './edit/edit.component'
import { CharacterComponent } from './character/character.component'
import { EditFormComponent } from './edit/edit-form/edit-form.component'
import { ActiveComponent } from './active/active.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EditComponent,
    CharacterComponent,
    EditFormComponent,
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DndService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
