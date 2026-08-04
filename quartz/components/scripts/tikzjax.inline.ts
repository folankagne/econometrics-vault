let tikzjaxLoaded = false

function loadTikZJax() {
  if (tikzjaxLoaded) return
  tikzjaxLoaded = true

  const fontCss = document.createElement("link")
  fontCss.rel = "stylesheet"
  fontCss.type = "text/css"
  fontCss.href = "https://tikzjax.com/v1/fonts.css"
  document.head.appendChild(fontCss)

  const script = document.createElement("script")
  script.src = "https://tikzjax.com/v1/tikzjax.js"
  document.head.appendChild(script)
}

function tidyTikzSource(tikzSource: string): string {
  // Strip non-breaking spaces (rehype-pretty-code inserts these for blank lines)
  const cleaned = tikzSource.split(" ").join("")
  let lines = cleaned.split("\n")
  lines = lines.map((line) => line.trim())
  lines = lines.filter((line) => line.length > 0)
  return lines.join("\n")
}

document.addEventListener("nav", () => {
  const blocks = Array.from(
    document.querySelectorAll('pre[data-language="tikz"]:not([data-tikz-processed])'),
  ) as HTMLPreElement[]
  if (blocks.length === 0) return

  loadTikZJax()

  for (const pre of blocks) {
    pre.dataset.tikzProcessed = "true"

    const lineEls = pre.querySelectorAll("[data-line]")
    let source: string
    if (lineEls.length > 0) {
      source = Array.from(lineEls)
        .map((el) => (el as HTMLElement).textContent ?? "")
        .join("\n")
    } else {
      const code = pre.querySelector("code")
      source = code ? (code.textContent ?? "") : (pre.textContent ?? "")
    }
    source = tidyTikzSource(source)

    const container = document.createElement("div")
    container.className = "tikz-figure"

    const tikzScript = document.createElement("script")
    tikzScript.setAttribute("type", "text/tikz")
    tikzScript.setAttribute("data-show-console", "true")
    tikzScript.textContent = source

    container.appendChild(tikzScript)
    pre.replaceWith(container)
  }
})
