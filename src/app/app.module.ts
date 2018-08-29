import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameOptionsComponent } from './game-options/game-options.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SinglePlayerComponent } from './single-player/single-player.component';
import { MultiPlayerComponent } from './multi-player/multi-player.component';


@NgModule({
  declarations: [
    AppComponent,
    GameOptionsComponent,
    HomeComponentComponent,
    SinglePlayerComponent,
    MultiPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'gameOptions', component: GameOptionsComponent },
      { path: 'home', component: HomeComponentComponent },
      { path: 'singlePlayer', component: SinglePlayerComponent },
      { path: 'multiPlayer', component: MultiPlayerComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', redirectTo: '/home' }
  ]),
  ],
  // entryComponents:[
  //   GameOptionsComponent,
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
