/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IRangeSpec } from "./components/scania-fleetportal-dropdown/interfaces/range-spec.interface";
export namespace Components {
    interface ScaniaFleetportalDropdown {
        "items": Array<IRangeSpec>;
        "placeholder": string;
    }
}
export interface ScaniaFleetportalDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLScaniaFleetportalDropdownElement;
}
declare global {
    interface HTMLScaniaFleetportalDropdownElement extends Components.ScaniaFleetportalDropdown, HTMLStencilElement {
    }
    var HTMLScaniaFleetportalDropdownElement: {
        prototype: HTMLScaniaFleetportalDropdownElement;
        new (): HTMLScaniaFleetportalDropdownElement;
    };
    interface HTMLElementTagNameMap {
        "scania-fleetportal-dropdown": HTMLScaniaFleetportalDropdownElement;
    }
}
declare namespace LocalJSX {
    interface ScaniaFleetportalDropdown {
        "items"?: Array<IRangeSpec>;
        "onToggleDropDown"?: (event: ScaniaFleetportalDropdownCustomEvent<any>) => void;
        "placeholder"?: string;
    }
    interface IntrinsicElements {
        "scania-fleetportal-dropdown": ScaniaFleetportalDropdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "scania-fleetportal-dropdown": LocalJSX.ScaniaFleetportalDropdown & JSXBase.HTMLAttributes<HTMLScaniaFleetportalDropdownElement>;
        }
    }
}
