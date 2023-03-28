import * as React from "react"
import { Text, View } from "react-native"
import Svg, {  Path } from "react-native-svg"

const SvgComponent = (props) => (
  <>
  <Svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 347.38 169.14"
    {...props}
  >

    <Path
      d="M459.91 363.86H113.54V197.19s126.92 65.22 173.18 65.22 173.19-65.22 173.19-65.22Z"
      transform="translate(-113.04 -195.21)"
      style={{
        fill: "red",
        stroke: "rgba(0,0,0,0.5)",
        strokeMiterlimit: 10,
      }}
    >
      <View style={{position: 'absolute', backgroundColor: "green", height: 200, width: 200}}>
        <Text>Hello</Text>
      </View>
    </Path>
    <Path
      style={{
        fill: "none",
        stroke: "#231f20",
        strokeMiterlimit: 10,
      }}
      d="M.5.5h346.38"
    />
  </Svg>
  </>
)

export default SvgComponent
