const Bar = React.createClass({
  render() {
    return (
      <div>Danilo Zekovic</div>
      )
    }
  })

// We keep default export object anonymous
export default class extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
          <Bar/>
      )
    }
  }
