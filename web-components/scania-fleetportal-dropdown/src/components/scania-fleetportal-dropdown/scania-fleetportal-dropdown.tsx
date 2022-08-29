import { Component, Prop, h, Event, EventEmitter, State } from "@stencil/core";
import { IRangeSpec } from "./interfaces/range-spec.interface";

// For local testing of component
const testData = [
  {
    value: "less",
    label: "<= 200.00km",
  },
  {
    value: "more",
    label: "> 200.00 km",
  },
];

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
