import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-dark dark:text-light mb-6">Angular 19 + Tailwind + NgRx</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A modern, responsive portfolio landing page showcasing advanced Angular features and state management.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition">
              View Portfolio
            </button>
            <button class="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-heading font-bold text-center text-dark dark:text-light mb-12">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-3 text-dark dark:text-light">Angular 19</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Using the latest Angular features like standalone components, signals, and defer blocks.
            </p>
          </div>
          <div class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-3 text-dark dark:text-light">Tailwind CSS</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Modern utility-first CSS framework for rapid UI development with dark mode support.
            </p>
          </div>
          <div class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-3 text-dark dark:text-light">NgRx State Management</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Robust state management with actions, reducers, selectors, and effects for a predictable state container.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent {
}
