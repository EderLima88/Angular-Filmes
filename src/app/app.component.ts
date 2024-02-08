import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { MovieComponent } from './movie/movie.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PostComponent, MovieComponent]
})
export class AppComponent {
  title = 'Angular-Filmes';
}
