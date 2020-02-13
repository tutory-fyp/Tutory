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
} from 'react-native-paper';
import TopRatedTutorCard from '../../../components/TopRatedTutorCard';
import PopularCourseCard from '../../../components/PopularCourseCard';
import { Container, Icon } from 'native-base';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <ScrollView>
                    <Searchbar
                        onTouchEnd={() => {
                            Keyboard.dismiss();
                            this.props.navigation.navigate('Profile');
                        }}
                        style={styles.searchbar}
                        placeholder="Search for tutor"
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
        marginTop: 70,
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

