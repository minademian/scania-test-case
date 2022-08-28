import { newSpecPage } from '@stencil/core/testing';
import { ScaniaFleetPortalDropdown } from './scania-fleetportal-dropdown';

describe('scania-fleetportal-dropdown', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ScaniaFleetPortalDropdown],
      html: '<scania-fleetportal-dropdown></scania-fleetportal-dropdown>',
    });
    expect(root).toEqualHtml(`
      <scania-fleetportal-dropdown>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </scania-fleetportal-dropdown>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ScaniaFleetPortalDropdown],
      html: `<scania-fleetportal-dropdown first="Stencil" last="'Don't call me a framework' JS"></scania-fleetportal-dropdown>`,
    });
    expect(root).toEqualHtml(`
      <scania-fleetportal-dropdown first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </scania-fleetportal-dropdown>
    `);
  });
});
