import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatSlideToggleModule, MatCardModule, MatSidenavModule, MatInputModule, MatDividerModule],
  exports: [MatToolbarModule, MatButtonModule, MatSlideToggleModule, MatCardModule, MatSidenavModule, MatInputModule, MatDividerModule]
})
export class CustomMaterialModule {
}

