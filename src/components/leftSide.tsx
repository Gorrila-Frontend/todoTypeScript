import* as React from 'react';


interface Props {
}
interface State {
  leftDrive: boolean;
}

class LeftSlide extends React.Component<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
      leftDrive: false
    }
  }
  drivingSide = () => {
    this.setState({
      ...this.state,
      leftDrive: !this.state.leftDrive,
    })
  }
  render () {
    return (
      <div className="leftSlide">
        <button onClick={this.drivingSide.bind(this)}></button>
      </div>
    )
  }

  visibleLeftMenu
}
export default LeftSlide;