import React, {useState, useMemo, useEffect, useRef} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import CardHandler from '../../card_handler/card_handler';
import FadeIn from '../../animations/fade/fade';
import {Direction} from '../../../domain/entities/direction';
import {Stats} from '../../../domain/entities/stats';
import {Card} from '../../../domain/entities/card';
import {SafeAreaView} from 'react-native-safe-area-context';

const stats: Stats = [
  {
    icon: '',
    name: 'economic',
    value: 50,
  },
  {
    icon: '',
    name: 'popularity',
    value: 50,
  },
  {
    icon: '',
    name: 'political',
    value: 50,
  },
  {
    icon: '',
    name: 'corruption',
    value: 50,
  },
];

const card: Card = {
  id: '2dsd123',
  title: 'Reforma Laboral',
  description:
    'Quita de ley de indemnización por despido. Fomenta la contratación.',
  img: 'https://picsum.photos/200/300',
  type: '',
  right: {
    text: 'A favor',
    effect: [
      {
        name: 'economic',
        value: 10,
      },
      {
        name: 'social',
        value: -10,
      },
    ],
  },
  left: {
    text: 'En contra',
    effect: [
      {
        name: 'economic',
        value: -10,
      },
      {
        name: 'social',
        value: 10,
      },
    ],
  },
  specialEffect: null,
  achievement: null,
};

const listCards = [card];

const GameView = () => {
  const [cards, setCards] = useState(listCards);

  const nextCard = (direction: Direction) => {
    setTimeout(() => {
      const draft = [...cards];
      draft.shift();
      setCards(draft);
    }, 400);
  };

  const currentCard = useMemo(() => cards[0], [cards]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderBottomWidth: 1,
          borderBottomColor: 'white',
          zIndex: -1,
        }}>
        <Text style={{color: 'white'}}>Header</Text>
      </View>
      <View style={styles.cardContainer}>
        {currentCard && (
          <FadeIn key={currentCard.id}>
            <CardHandler card={currentCard} onSwipe={nextCard} />
          </FadeIn>
        )}
        <View style={styles.card} />
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderTopWidth: 1,
          borderTopColor: 'white',
          zIndex: -1,
        }}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  );
};

export default GameView;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#000',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 2,
    width: '100%',
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: width * 0.8,
    height: '100%',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
    transform: [{rotate: '-2deg'}],
    zIndex: -1,
  },
});
