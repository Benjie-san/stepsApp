import { View, Text } from 'react-native';
import SVG, {Circle} from 'react-native-svg';
import Animated, {useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated';
import { useEffect } from 'react';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({radius = 100, strokeWidth = 35, progress}) => {
    const color = '#EE0F55';
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, { duration: 1500 });
    }, [progress]);

    const animatedProps = useAnimatedProps( () => ({
        strokeDasharray: [circumference * fill.value, circumference]
    }));

    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center',
        }} >
            
            <SVG>
                {/*BG CIRCLE*/}
                <Circle 
                    r={innerRadius}
                    cx={radius}
                    cy={radius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    opacity={0.2}
                />
                {/*PROGRESS CIRCLE*/}
                <AnimatedCircle 
                    animatedProps={animatedProps}
                    r={innerRadius}
                    fill={'transparent'}
                    cx={radius}
                    cy={radius}
                    originX={radius}
                    originY={radius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeLinecap='round'
                    rotation='-90'
                
                />
            </SVG>

        </View>
    )
}

export default RingProgress