import { JSX as PreactJSX } from 'preact';

declare module 'react' {
  export = Preact;
  export as namespace React;
  namespace JSX {
    export import Element = PreactJSX.Element;
    export import IntrinsicElements = PreactJSX.IntrinsicElements;
    export import IntrinsicAttributes = PreactJSX.IntrinsicAttributes;
    export import ElementChildrenAttribute = PreactJSX.ElementChildrenAttribute;
    export import DOMAttributes = PreactJSX.DOMAttributes;
  }
}