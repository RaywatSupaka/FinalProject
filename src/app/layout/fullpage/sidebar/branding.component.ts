import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/user" style="display: flex; align-items: center; text-decoration: none !important;">
        <img
          src="./assets/images/logos/Picture3.jpg"
          class="align-middle m-2"
          alt="logo"
          style="width: 120px; height: 90px;"
        />
        <p style="font-size: 21px; margin-left: -19px; margin-top: 21px; color: black; font-family: cursive; text-align: center;">Authentication \n Service</p>
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
