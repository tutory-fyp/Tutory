import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { Table, Row } from 'react-native-table-component';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

let tableHead = ['Session Date', 'Session Duration', 'Attendance'];

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

class StudentAttendanceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
    };
    this._goBack = this._goBack.bind(this);
  }

  _goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Attendance Details" />
        </Appbar.Header>
        <View style={styles.container}>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <Row
                data={tableHead}
                flexArr={[1, 1, 1]}
                style={styles.head}
                textStyle={styles.text}
              />
              {tableData.map((rowData, index) => {
                return (
                  <Row
                    key={index}
                    data={rowData}
                    flexArr={[1, 1, 1]}
                    style={[
                      styles.row,
                      rowData[2] === 'Present'
                        ? styles.rowPresent
                        : styles.rowAbsent,
                    ]}
                    textStyle={styles.rowText}
                  />
                );
              })}
            </Table>
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: hp('3%'),
            }}>
            <View
              style={{
                width: wp(100),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Button
                mode="contained"
                style={{
                  width: wp(25),
                  marginHorizontal: wp(2),
                }}
                onPress={() => {}}>
                ADD
              </Button>
              <Button
                onPress={() => {}}
                mode="contained"
                style={{
                  width: wp(25),
                  marginHorizontal: wp(2),
                }}>
                UPDATE
              </Button>
              <Button
                onPress={() => {}}
                mode="contained"
                style={{
                  width: wp(25),
                  marginHorizontal: wp(2),
                }}>
                DELETE
              </Button>
            </View>
          </View>
        </View>
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
  row: { height: 50 },
  rowPresent: {},
  rowAbsent: { backgroundColor: '#e0e0e0' },
  text: { textAlign: 'center', color: '#000' },
  rowText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  dataWrapper: { marginTop: -1 },
});

export default StudentAttendanceScreen;
