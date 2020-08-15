import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  FlatList,
  Dimensions,
} from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { studentComponents } from '../../../components';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';

// For Firestore
import firestore from '@react-native-firebase/firestore';
const appFirestore = firestore();
//
import { setIsLoading } from '../../../redux/modules/student';
import { error } from 'react-native-gifted-chat/lib/utils';

const { SearchResult } = studentComponents;

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

const mapStateToProps = state => {
  return {
    isLoading: state.student.isLoading,
    tutors: state.student.tutors,
  };
};
const mapDispatchToProps = {
  setIsLoading,
};

class SearchResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tutors: null,
    };
  }

  _fetchTutors = () => {
    const query = this.props?.navigation?.getParam('query');
    this.setState({ isLoading: true });
    (async () => {
      try {
        const querySnapshot = await appFirestore
          .collection('tutors')
          .where(`categories.${query.category}`, '==', true)
          .where(`subjects.${query.subject}`, '==', true)
          .get();
        let tutors = querySnapshot.docs.map(doc => doc.data());
        tutors = tutors
          .filter(
            tutor =>
              tutor.availabilitySlot.start <= query.minHour &&
              tutor.availabilitySlot.end >= query.maxHour,
          )
          .filter(
            tutor =>
              query.minPrice <= tutor.wage && query.maxPrice >= tutor.wage,
          );
        this.setState({ tutors, isLoading: false });
      } catch (error) {
        console.log('Error Getting Tutors', error);
      }
    })();
  };

  _goBack = () => {
    const {
      navigation: { goBack },
    } = this.props;
    goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={this._fetchTutors} />
        <Appbar style={styles.header}>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Searched Results" />
        </Appbar>
        <View style={styles.content}>
          <FlatList
            style={styles.flatListWrapper}
            contentContainerStyle={styles.flatListContent}
            ListHeaderComponentStyle={styles.listHeader}
            ListFooterComponentStyle={styles.listFooter}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isLoading}
                onRefresh={this._fetchTutors}
              />
            }
            keyExtractor={(item, index) => index.toString()}
            data={this.state.tutors}
            renderItem={({ item }) => (
              <SearchResult
                name={item.fname}
                rating={item.rating}
                availabilitySlot={item.availabilitySlot}
                category={this.props?.navigation.getParam('query').category}
                subject={this.props?.navigation.getParam('query').subject}
                wage={item.wage}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 2 }} />
            )}
            ListFooterComponent={() => <View style={{ marginBottom: 5 }} />}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.props?.setIsLoading(false);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  listHeader: {
    marginTop: 10,
  },
  listFooter: {
    marginBottom: 10,
  },
  flatListWrapper: {
    height: HEIGHT,
    width: WIDTH,
  },
  flatListContent: {
    alignItems: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultScreen);
