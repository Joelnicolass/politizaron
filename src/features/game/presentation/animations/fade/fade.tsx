import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  direction?: 'left' | 'right' | 'up' | 'down';
  time?: number;
  delay?: number;
  force?: number;
};

const FadeIn = ({
  children,
  direction = 'down',
  time = 300,
  delay = 0,
  force = 100,
}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const calculateTrasnlateX = () => {
    const rules = {
      left: -force,
      right: force,
      up: 0,
      down: 0,
    };

    return rules[direction];
  };

  const calculateTrasnlateY = () => {
    const rules = {
      left: 0,
      right: 0,
      up: -force,
      down: force,
    };

    return rules[direction];
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: time,
      useNativeDriver: true,
      delay: delay,
      easing(value) {
        return 1 - Math.pow(1 - value, 2);
      },
    }).start();
  }, [delay, fadeAnim, time]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [
          {
            translateX: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [calculateTrasnlateX(), 0],
            }),
          },
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [calculateTrasnlateY(), 0],
            }),
          },
        ],
      }}>
      {children}
    </Animated.View>
  );
};

export default FadeIn;

const styles = StyleSheet.create({});
