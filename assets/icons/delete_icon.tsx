import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const DeleteIcon = ({width, height,color}) => (
  <Svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 63 80.5"
    xmlSpace="preserve"
  >
    <G fill={color}>
      <Path d="M1.3 19.3 4.6 22v52.2c0 2.6 2.1 4.6 4.6 4.6h44.1c2.6 0 4.6-2.1 4.6-4.6V22l3.3-2.8v-4.6H1.3v4.7zm40.5 7.2h5.6v44.9h-5.6V26.5zm-13.3 0h5.6v44.9h-5.6V26.5zm-13.3 0h5.6v44.9h-5.6V26.5zM60.3 8.1H40.8V3.5c0-1-.8-1.9-1.9-1.9H23.7c-1 0-1.9.8-1.9 1.9v4.6H2.3c-.6 0-1.1.5-1.1 1.1v3.6h60.2V9.2c0-.6-.5-1.1-1.1-1.1zM37.3 7h-12V5.7c0-.3.3-.6.6-.6h10.8c.3 0 .6.3.6.6V7z" />
    </G>
  </Svg>
)

export default DeleteIcon
