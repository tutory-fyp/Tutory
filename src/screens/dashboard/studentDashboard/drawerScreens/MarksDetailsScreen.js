import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import {
    Appbar,
} from 'react-native-paper';
import { 
    Table, 
    TableWrapper, 
    Row, 
    Rows,
    Col, 
 } from 'react-native-table-component';

let tableHead = [
    'Quiz#',
    'Date',
    'Marks',
];

let tableData = [
    ['1', '1-Aug-2019', '10/10'],
    ['2', '1-Aug-2019', '8/10'],
    ['3', '1-Aug-2019', '9/10'],
    ['4', '1-Aug-2019', '4/10'],
    ['5', '1-Aug-2019', '5/10'],
    ['6', '1-Aug-2019', '4/10'],
    ['7', '1-Aug-2019', '3/10'],
    ['8', '1-Aug-2019', '0/10'],
    ['9', '1-Aug-2019', '8.5/10'],
];

class MarksDetailsScreen extends Component {
    
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
                        title="View Marks"
                    />
                </Appbar.Header>
                <View style={styles.container} >
                    <Table borderStyle={{ borderWidth: 1 }} >
                        <Row data={tableHead} flexArr={[1, 2, 1]} style={styles.head} textStyle={styles.text} />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            {
                                tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        flexArr={[1, 2, 1]}
                                        style={[styles.row]}
                                        textStyle={styles.text}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 30, },
    rowPresent: { backgroundColor: 'green', },
    rowAbsent: { backgroundColor: 'red', },
    text: { textAlign: 'center', color: '#000' },
    rowText: { textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: "bold" },
    dataWrapper: { marginTop: -1 },
});

export default MarksDetailsScreen;