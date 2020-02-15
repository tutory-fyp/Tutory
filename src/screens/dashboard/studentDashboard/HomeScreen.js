import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Keyboard,
    ScrollView,
} from 'react-native';
import {
    Searchbar,
    Title,
    Appbar,
} from 'react-native-paper';
import TopRatedTutorCard from '../../../components/TopRatedTutorCard';
import PopularCourseCard from '../../../components/PopularCourseCard';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container} >
                <Appbar style={styles.header} >
                    <Appbar.Action icon="menu" onPress={this.props.navigation.openDrawer} />
                    <Appbar.Content title="Home" />
                </Appbar>
                <ScrollView>
                    <Searchbar
                        onTouchEnd={() => {
                            Keyboard.dismiss();
                            this.props.navigation.navigate('Search');
                        }}
                        style={styles.searchbar}
                        placeholder="Search for Courses"
                    />
                    <Title style={styles.title} >
                        Top Rated Tutors
                    </Title>
                    <View style={{ height: 300 }} >
                        <ScrollView
                            style={styles.trtcScroll}
                            horizontal
                        >
                            <TopRatedTutorCard />
                            <TopRatedTutorCard />
                            <TopRatedTutorCard />
                        </ScrollView>
                    </View>
                    <Title style={styles.title} >
                        Popular Courses
                    </Title>
                    <View style={{height: 280}} >
                        <ScrollView
                            horizontal
                            style={styles.popcScroll}
                        >
                            <PopularCourseCard />
                            <PopularCourseCard />
                            <PopularCourseCard />
                            <PopularCourseCard />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 8,
    },
    searchbar: {
        width: "90%",
        alignSelf: 'center',
    },
    title: {
        marginLeft: 8,
    },
    trtcScroll: {
        width: "100%",
        height: 25,
    },
    popcScroll: {
        width: "100%",
        height: 25,
    },
});

export default HomeScreen;