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
import { connect } from 'react-redux';

import { setIsLoading } from '../../../redux/modules/tutor';

const { SearchResult } = studentComponents;

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

const mapStateToProps = state => {
  return {
    isLoading: state.tutor.isLoading,
    tutors: state.tutor.tutors,
  };
};
const mapDispatchToProps = {
  setIsLoading,
};

class SearchResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _goBack = () => {
    const {
      navigation: { goBack },
    } = this.props;
    goBack();
  };

  render() {
    return (
      <View style={styles.container}>
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
              <RefreshControl refreshing={this.props.isLoading} />
            }
            keyExtractor={(item, index) => index.toString()}
            data={new Array(10).fill(0)}
            renderItem={({ item, index }) => <SearchResult />}
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
