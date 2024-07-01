import { View, Text } from "react-native";
import SVG, { Circle } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({ radius = 100, strokeWidth = 35, progress }) => {
  const color = "#EE0F55";
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1500 });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }));

  const circleProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    strokeWidth: strokeWidth,
    stroke: color,
    originX: radius,
    originY: radius,
    strokeLinecap: "round",
    rotation: "-90",
    fill: "transparent",
    };

    return (
        <View
            style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: "center",
            }}
        >
            <SVG>
                {/*BG CIRCLE*/}
                <Circle {...circleProps} opacity={0.2} />
                {/*PROGRESS CIRCLE*/}
                <AnimatedCircle animatedProps={animatedProps} {...circleProps} />
            </SVG>

            <AntDesign 
                name="arrowright" 
                size={strokeWidth * 0.80} 
                color="black" 
                style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    top: strokeWidth * 0.10,
                }}
            />
        </View>
    );
};

export default RingProgress;
