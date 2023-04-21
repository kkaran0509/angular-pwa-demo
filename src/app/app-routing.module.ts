import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  {path: '', component: ScannerComponent},
  {path: 'chat', component: ChatScreenComponent},
  {path: 'scanner', component: ScannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
