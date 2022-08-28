import { Component, Prop, h, Event, EventEmitter, State } from "@stencil/core";

export interface IRangeSpec {
  value: string;
  label: string;
}

@Component({
  tag: "scania-fleetportal-dropdown",
  styleUrl: "scania-fleetportal-dropdown.css",
  shadow: true,
})
export class ScaniaFleetPortalDropdown {
  @Prop() placeholder: string;
  @Prop() items: Array<IRangeSpec>;
  @State() showDropdown: boolean = false;
  @State() rangeSelected: number = 0;
  @Event() toggleDropDown: EventEmitter;

  public toggleComponent(): void {
    this.showDropdown = !this.showDropdown;
  }

  private onSelect(item: IRangeSpec): void {
    this.toggleDropDown.emit({ range: item });
  }

  /**
   *
   * @todo get SCSS compiling and rewrite css to use sass
   */
  render() {
    return (
      <div>
        <div id="dropdown-heading" onClick={() => this.toggleComponent()}>
          <h3>{this.placeholder} </h3>
          {this.showDropdown ? <span>&#9650;</span> : <span>&#9660;</span>}
        </div>
        <ul class={this.showDropdown ? "active" : "inactive"}>
          {this.items.map((item) => (
            <li>
              <span onClick={() => this.onSelect(item)}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
