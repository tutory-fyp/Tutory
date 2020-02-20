import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Keyboard,
    ScrollView,
    FlatList,
    Text,
} from 'react-native';
import {
    Searchbar,
    Title,
    Appbar,
    Badge,
    Theme,
} from 'react-native-paper';
import {
  Overlay as EOverlay, 
} from 'react-native-elements';
import {
    Icon as NBIcon
} from 'native-base';
import Riple from 'react-native-material-ripple';
import TopRatedTutorCard from '../../../components/TopRatedTutorCard';
import PopularCourseCard from '../../../components/PopularCourseCard';
import { PRIMARY_COLOR } from '../../../constants/commonColors';


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

    render() {
        return (
            <View style={styles.container} >
                <Appbar style={styles.header} >
                    <Appbar.Action icon="menu" onPress={this.props.navigation.openDrawer} />
                    <Appbar.Content title="Home" />
                    <Appbar.Action icon={() => {
                        return <Riple
                            onPress={this._gotoNotifications}
                        >
                            <NBIcon
                                type="MaterialCommunityIcons"
                                name="bell"
                                style={{ color: "white" }}
                            />
                        </Riple>
                    }} />
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
                    <FlatList
                        horizontal
                        data={topRatedTutors}
                        keyExtractor={(item, index) => (
                            index.toString()
                        )}
                        renderItem={({item, index}) => (
                            <TopRatedTutorCard
                                name={item.name}
                                description={item.desc}
                                startingPrice={item.sPrice}
                                rating={item.rating}
                            />
                        )}
                    />
                    <Title style={styles.title} >
                        Popular Courses
                    </Title>
                    <FlatList
                        horizontal
                        data={popCourses}
                        keyExtractor={(item,index) => (
                            index.toString()
                        )}
                        renderItem={({item}) => (
                            <PopularCourseCard 
                                description={item.desc}
                            />
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
    
    componentDidMount() {
        // const {
        //     navigation: { navigate }
        // } = this.props;
        // navigate('Search');
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