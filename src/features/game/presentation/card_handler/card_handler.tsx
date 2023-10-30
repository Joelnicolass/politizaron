import {
  Dimensions,
  GestureResponderEvent,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import TinderCard from 'react-tinder-card';
import {Card} from '../../domain/entities/card';

interface Props {
  card: Card;
  onSwipe: (direction: 'left' | 'right' | 'up' | 'down') => void;
}

enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  NONE = 'none',
}

const CardHandler = ({card, onSwipe}: Props) => {
  const {
    id,
    title,
    description,
    img,
    type,
    right,
    left,
    achievement,
    specialEffect,
  } = card;

  const [direction, setDirection] = useState<Direction>(Direction.NONE);

  const calculateDirection = (e: GestureResponderEvent) => {
    const coordMove = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY,
    };

    if (coordMove.x < width / 2 - 50) {
      return setDirection(Direction.LEFT);
    }

    if (coordMove.x > width / 2 + 50) {
      return setDirection(Direction.RIGHT);
    }

    return setDirection(Direction.NONE);
  };

  return (
    <TinderCard key={id} preventSwipe={['up', 'down']} onSwipe={onSwipe}>
      <View
        style={styles.card}
        onTouchEnd={() => setDirection(Direction.NONE)}
        onTouchMove={calculateDirection}>
        <ImageBackground
          source={{uri: img}}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              {direction === Direction.LEFT && <Text>{left.text}</Text>}
            </View>
            <View style={styles.headerCenter}>
              <Text>{title}</Text>
            </View>
            <View style={styles.headerRight}>
              {direction === Direction.RIGHT && <Text>{right.text}</Text>}
            </View>
          </View>
          <View></View>
          <View></View>
        </ImageBackground>
      </View>
    </TinderCard>
  );
};

export default CardHandler;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    maxWidth: width * 0.8,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  header: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
    width: '100%',
    backgroundColor: 'red',
  },
  headerRight: {
    transform: [{rotate: '30deg'}],
    width: '33%',
    alignItems: 'center',
  },
  headerCenter: {
    width: '33%',
    display: 'flex',
    alignItems: 'center',
  },
  headerLeft: {
    width: '33%',
    transform: [{rotate: '-30deg'}],
    alignItems: 'center',
  },
});
