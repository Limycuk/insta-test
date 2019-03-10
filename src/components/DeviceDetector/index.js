/* global window */
import { Component } from 'react'
import PropTypes from 'prop-types'

import connect from './connect'
import calculateDevice from '../../services/calculateDevice'

class DeviceDetector extends Component {
  constructor(props) {
    super(props)

    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize() {
    const { appActions, deviceInfo } = this.props

    const newDeviceInfo = calculateDevice(window.innerWidth)

    if (deviceInfo.device !== newDeviceInfo.device) {
      appActions.changeDeviceInfo({ deviceInfo: newDeviceInfo })
    }
  }

  render() {
    return null
  }
}

DeviceDetector.propTypes = {
  deviceInfo: PropTypes.shape({
    device: PropTypes.string.isRequired,
  }).isRequired,
  appActions: PropTypes.shape({
    changeDeviceInfo: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(DeviceDetector)
