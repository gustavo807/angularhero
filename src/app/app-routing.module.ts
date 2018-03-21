import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PostsComponent } from './posts/posts.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PeopleComponent } from './people/people.component';

const routes : Routes = [
  { path : '', redirectTo : '/dashboard', pathMatch : 'full'},
  { path : 'heroes', component : HeroesComponent },
  { path : 'detail/:id', component : HeroDetailComponent },
  { path : 'dashboard', component : DashboardComponent },
  { path : 'posts', component : PostsComponent},
  { path : 'pokemons', component : PokemonsComponent},
  { path: 'people', component: PeopleComponent }
  //{ path: 'assets/data/people.json', 'assets/data/people.json' }
];

@NgModule({
  imports : [ RouterModule.forRoot(routes)],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
