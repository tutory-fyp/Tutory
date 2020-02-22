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
import AttendanceDetailsCard from '../../../../components/studentDashboard/drawer/AttendanceDetailsCard';
import { Table, TableWrapper, Row, Rows, Col, Cell } from 'react-native-table-component';

let tableHead = [
    'Session Date',
    'Session Duration',
    'Attendance',
];

let tableData = [
    ['31-Sept-2019', '10:00 AM to 10:00 PM', 'Present'],
    ['1-Aug-2019', '10:00 AM to 10:00 PM', 'Present'],
    ['1-Aug-2019', '10:00 AM to 10:00 PM', 'Absent'],
    ['1-Aug-2019', '10:00 AM to 10:00 PM', 'Present'],
    ['1-Aug-2019', '10:00 AM to 10:00 PM', 'Absent'],
    ['1-Aug-2019', '10:00 AM to 10:00 PM', 'Present'],
    ['1-Aug-2019', '10:00 AM to 10:00 PM', 'Absent'],
    ['1-Aug-2019', '10:00 AM to 10:00 PM', 'Present'],
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
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9'}}>
                            <Row data={tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
                            {
                                tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        flexArr={[1, 1, 1]}
                                        style={[styles.row, rowData[2] === "Present" ? styles.rowPresent : styles.rowAbsent ]}
                                        textStyle={styles.rowText}
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
    container: { flex: 1, paddingTop: 30 },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 50, },
    rowPresent: { backgroundColor: 'green', },
    rowAbsent: { backgroundColor: 'red', },
    text: { textAlign: 'center', color: '#000', },
    rowText: { textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: "bold" },
    dataWrapper: { marginTop: -1 },
});

export default AttendanceDetailsScreen;