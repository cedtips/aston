import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
//import { AppComponent } from './app.component';

const routes: Route[] = [
    { path: 'movies', component: MovieListComponent },
    { path: 'movies-add', component: MovieFormComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}