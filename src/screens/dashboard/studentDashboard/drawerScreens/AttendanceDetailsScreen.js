import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import {
    Appbar,
    List,
} from 'react-native-paper';
import AttendanceDetailsCard from '../../../../components/AttendanceDetailsCard';
import { Table, TableWrapper, Row, Rows, Col, Cell } from 'react-native-table-component';

let tableHead = [
    'Session Date',
    'Session Duration',
    'Attendance',
];

let tableData = [
    ['1-Aug-2019', '23:00:00 to 24:00:00', 'Present'],
    ['1-Aug-2019', '23:00:00 to 24:00:00', 'Present'],
    ['1-Aug-2019', '23:00:00 to 24:00:00', 'Absent'],
    ['1-Aug-2019', '23:00:00 to 24:00:00', 'Present'],
    ['1-Aug-2019', '23:00:00 to 24:00:00', 'Absent'],
    ['1-Aug-2019', '23:00:00 to 24:00:00', 'Present'],
    ['1-Aug-2019', '23:00:00 to 24:00:00', 'Absent'],
    ['1-Aug-2019', '23:00:00 to 24:00:00', 'Present'],
];

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
            <>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Attendance Details"
                    />
                </Appbar.Header>
                <View style={styles.container} >
                    <Table borderStyle={{ borderWidth: 1 }} >
                        <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            {
                                tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        flexArr={[1, 2, 1, 1]}
                                        style={[styles.row]}
                                        textStyle={styles.text}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
                {/* <FlatList
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
                /> */}
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
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center', color: '#000000' },
    dataWrapper: { marginTop: -1 },
});

export default AttendanceDetailsScreen;