class Markdown {
  constructor() {
    this.init()
    this.addEventListeners()
  }

  init() {
    const input = this.input = CodeMirror.fromTextArea(
      document.querySelector('.js-input'),
      {
        lineNumbers: true,
        matchBrackets: false,
        mode: "text/x-markdown"
      }
    )
    this.compile(input.getValue())
  }

  compile(source) {
    const output = marked(source)
    document.querySelector('#markdown-output').innerHTML = output
  }

  addEventListeners() {
    const { input } = this
    let delay

    input.on("change", () => {
      clearTimeout(delay)
      delay = setTimeout(() => this.compile(input.getValue()), 300)
    })
  }
}