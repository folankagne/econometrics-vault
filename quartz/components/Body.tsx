// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
// @ts-ignore
import tikzjaxScript from "./scripts/tikzjax.inline"
import tikzjaxStyle from "./styles/tikzjax.inline.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

// Wrapped in its own IIFE: these inline scripts are each minified independently
// before being concatenated as plain strings, so without isolation their
// short, auto-generated top-level names (e.g. "wt") can collide and silently
// overwrite each other.
Body.afterDOMLoaded = clipboardScript + "\n" + `(function(){${tikzjaxScript}})();`
Body.css = clipboardStyle + "\n" + tikzjaxStyle

export default (() => Body) satisfies QuartzComponentConstructor
