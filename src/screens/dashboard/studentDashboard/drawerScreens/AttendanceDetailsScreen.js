import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    FlatList,
    RefreshControl,
} from 'react-native';
import {
    Appbar,
    List,
} from 'react-native-paper';
import AttendanceDetailsCard from '../../../../components/AttendanceDetailsCard';

class AttendanceDetailsScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this._goBack = this._goBack.bind(this);
    }
    
    _goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return(
            <View style={styles.container} >
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Attendance Details"
                    />
                </Appbar.Header>
                <FlatList
                    style={styles.listWrapper}
                    contentContainerStyle={styles.listContent}
                    data={[0, 2, 3, 4, 5]}
                    renderItem={({ item, index }) => (
                        <AttendanceDetailsCard />
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
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listWrapper: {
        flex: 1,
    },
    listContent: {
        alignItems: 'center',
    },
});

export default AttendanceDetailsScreen;