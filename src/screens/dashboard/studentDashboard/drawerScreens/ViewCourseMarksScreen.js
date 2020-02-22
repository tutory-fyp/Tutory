import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    RefreshControl,
    ScrollView,
    Text,
    Dimensions,
    FlatList,
} from 'react-native';
import {
    Appbar,
} from 'react-native-paper';
import CourseCardDrawer from '../../../../components/studentDashboard/drawer/CourseCardDrawer';

let data = [
    { id: 1, courseName: "Course 101", tutorName: "John Doe", present: 3, maxSessions: 10, },
    { id: 2, courseName: "Course 101", tutorName: "John Doe", present: 4, maxSessions: 10, },
    { id: 3, courseName: "Course 101", tutorName: "John Doe", present: 5, maxSessions: 10, },
    { id: 4, courseName: "Course 101", tutorName: "John Doe", present: 6, maxSessions: 10, },
    { id: 5, courseName: "Course 101", tutorName: "John Doe", present: 8, maxSessions: 10, },
    { id: 6, courseName: "Course 101", tutorName: "John Doe", present: 10, maxSessions: 10, },
    { id: 7, courseName: "Course 101", tutorName: "John Doe", present: 5, maxSessions: 10, },
    { id: 8, courseName: "Course 101", tutorName: "John Doe", present: 7, maxSessions: 10, },
]

class ViewCourseMarksScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
        this._goBack = this._goBack.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this._gotoDetails = this._gotoDetails.bind(this);
    }

    _gotoDetails() {
        this.props.navigation.navigate('MarksDetails', {
            data: this.props.data,
        });
    }

    _onRefresh() {
    }

    _goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="View Marks"
                    />
                </Appbar.Header>
                <FlatList
                    style={styles.listWrapper}
                    contentContainerStyle={styles.listContent}
                    data={data}
                    renderItem={({ item, index }) => (
                        <CourseCardDrawer
                            data={item}
                            viewDetails={this._gotoDetails}
                            isMarks={true}
                        />
                    )}
                    keyExtractor={(item, index) => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={() => { }}
                            title="Pull to refresh"
                            tintColor="#fff"
                            titleColor="#fff"
                        />
                    }
                />
            </>
        );
    }
}

const styles = StyleSheet.create({
    listWrapper: {
        flex: 1,
    },
    listContent: {
        alignItems: 'center',
    },
});

export default ViewCourseMarksScreen;