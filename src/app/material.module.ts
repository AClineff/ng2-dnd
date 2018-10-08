import { MatButtonModule, MatCardModule, MatInputModule, MatSidenavModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatSlideToggleModule, MatCardModule, MatSidenavModule, MatInputModule],
  exports: [MatToolbarModule, MatButtonModule, MatSlideToggleModule, MatCardModule, MatSidenavModule, MatInputModule]
})
export class CustomMaterialModule {
}

