import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UiActions } from '../../state/actions';
import { selectDarkMode } from '../../state/selectors';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
/**
 * Component for toggling UI theme (dark/light).
 */
export class ThemeToggleComponent implements OnInit {
  /**
   * Observable that emits the current dark mode state.
   */
  darkMode$ = this.store.select(selectDarkMode);

  constructor(private store: Store) {}

  /**
   * Lifecycle hook that runs after component initialization. 
   * Checks for saved theme preference and subscribes to theme changes.
   */
  ngOnInit(): void {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.store.dispatch(UiActions.toggleDarkMode());
    }
    
    // Subscribe to theme changes to apply them to the document
    this.darkMode$.subscribe(isDark => {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  /**
   * Dispatches an action to toggle the dark mode state.
   */
  toggleTheme(): void {
    this.store.dispatch(UiActions.toggleDarkMode());
  }
}
