import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Keyboard,
    ScrollView,
    FlatList,
    Picker,
} from 'react-native';
import {
    Searchbar,
    Appbar,
    Text as PText,
    Title as PTitle,
    Chip as PChip,
    Divider as PDivider,
    Button as PButton,
} from 'react-native-paper';
import { 
    studentComponents,
} from "../../../components";

const {
    TopRatedTutorCard,
    PopularCourseCard,
} = studentComponents;

let topRatedTutors = [
    {
        name: "Muhammad Usman",
        desc: "Crash Course Physics HSSC-1",
        rating: 5.0,
        sPrice: 500,
    },
    {
        name: "Muhammad Usman",
        desc: "Crash Course Physics HSSC-1",
        rating: 5.0,
        sPrice: 500,
    },
    {
        name: "Muhammad Usman",
        desc: "Crash Course Physics HSSC-1",
        rating: 5.0,
        sPrice: 500,
    },
]

let popCourses = [
    {
        desc: "Maths Pre-Engineering",
    },
    {
        desc: "Compuer Science Pre-Engineering",
    },
    {
        desc: "Physics Pre-Engineering",
    },
]

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            overlayVisibility: false,
        };
    }

    _gotoNotifications = () => {
        const {
            navigation: {
                navigate
            }
        } = this.props;
        navigate('Notifications');
    }

    _gotoSearchScreen = () => {
        const {
            navigate,
        } = this.props.navigation;
        navigate('Search');
    }

    render() {
        return (
            <View style={styles.container} >
                <Appbar style={styles.header} >
                    <Appbar.Action icon="menu" onPress={this.props.navigation.openDrawer} />
                    <Appbar.Content title="Home" />
                    <Appbar.Action icon="bell" onPress={this._gotoNotifications} />
                </Appbar>
                <ScrollView>
                    <Searchbar
                        onTouchEnd={this._gotoSearchScreen}
                        style={styles.searchbar}
                        placeholder="Search for Courses"
                    />
                    <PTitle style={styles.title} >
                        Top Rated Tutors
                    </PTitle>
                    <FlatList
                        horizontal
                        data={topRatedTutors}
                        keyExtractor={(item, index) => (
                            index.toString()
                        )}
                        renderItem={({ item, index }) => (
                            <TopRatedTutorCard
                                name={item.name}
                                description={item.desc}
                                startingPrice={item.sPrice}
                                rating={item.rating}
                            />
                        )}
                    />
                    <PTitle style={styles.title} >
                        Popular Courses
                    </PTitle>
                    <FlatList
                        horizontal
                        data={popCourses}
                        keyExtractor={(item, index) => (
                            index.toString()
                        )}
                        renderItem={({ item }) => (
                            <PopularCourseCard
                                description={item.desc}
                            />
                        )}
                    />
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