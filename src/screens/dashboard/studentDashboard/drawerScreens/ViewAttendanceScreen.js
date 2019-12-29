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
import AttendanceCard from '../../../../components/AttendanceCard';

class ViewAttendanceScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
        this._goBack = this._goBack.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }
    
    _onRefresh() {
    }

    _goBack() {
        this.props.navigation.navigate('Dashboard');
    }

    render() {
        return(
            <>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="View Attendance"
                    />
                </Appbar.Header>
                <FlatList
                    style={styles.listWrapper}
                    contentContainerStyle={styles.listContent}
                    data={[0, 2, 3, 4, 5]}
                    renderItem={({ item, index }) => (
                        <AttendanceCard data={item} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
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

export default ViewAttendanceScreen;