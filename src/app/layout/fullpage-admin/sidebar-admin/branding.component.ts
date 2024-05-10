import { Component } from '@angular/core';

@Component({
  selector: 'app-branding-admin',
  template: `
    <div class="branding">
      <a href="/admin" style="display: flex; align-items: center; text-decoration: none !important;">
        <img
          src="./assets/images/logos/pic3.png"
          class="align-middle m-2"
          alt="logo"
          style="width: 120px; height: 90px;"
        />
        <p style="font-size: 21px; margin-left: -19px; margin-top: 21px; color: white; font-family: cursive; text-align: center;">Authentication \n Service</p>
      </a>
    </div>
  `,
})
export class BrandingAdminComponent {
  constructor() {}
}
