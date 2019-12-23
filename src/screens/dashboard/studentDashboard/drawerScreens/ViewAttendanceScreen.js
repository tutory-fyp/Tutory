import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    RefreshControl,
    ScrollView,
    Text,
} from 'react-native';
import {
    Drawer as PDrawer,
    Headline as PHeadline,
    Appbar as PAppbar,
    Searchbar as PSearchbar,
} from 'react-native-paper';

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
        this.props.navigation.goBack();
    }

    render() {
        return(
            <>
                <PAppbar.Header>
                    <PAppbar.BackAction
                        onPress={this._goBack}
                    />
                    <PAppbar.Content
                        title="View Attendance"
                    />
                </PAppbar.Header>
                <ScrollView 
                    style={styles.container}
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
                    }
                >
                </ScrollView>
            </>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ViewAttendanceScreen;