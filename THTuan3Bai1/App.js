import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from "react-native";
import imgBook from "./assets/book.png"

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pnlTop}>
        <View style={styles.pnlProduct}>
          <View>
            <Image source={imgBook}></Image>
          </View>

          <View style={styles.pnlRight}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: '2%' }}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 15, marginTop: '2%' }}>141.800 đ</Text>
            <Text style={{ fontWeight: 'bold', color: '#808080', fontSize: 13, marginTop: '2%', textDecorationLine: "line-through" }}>141.000 đ</Text>
            <View style={{ flexDirection: 'row', marginTop: '2%' }}>
              <TouchableOpacity style={{ backgroundColor: '#C4C4C4', width: '6%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#808080', textAlign: 'center' }}>-</Text>
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: '5%' }}>1</Text>
              <TouchableOpacity style={{ backgroundColor: '#C4C4C4', width: '6%', marginLeft: '5%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>+</Text>
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#134FEC', marginLeft: '40%' }}>Mua sau</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: '6%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Mã giảm giá đã lưu</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#134FEC', marginLeft: '10%' }}>Xem tại đây</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: '7%' }}>
          <TouchableOpacity style={{ borderWidth: 1, borderColor: '#808080', flexDirection: 'row', padding: '1%', width: '60%', marginRight: '20%' }}>
            <View style={{ backgroundColor: '#F2DD1B', width: '20%' }}></View>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: '5%' }}>Mã giảm giá</Text>
          </TouchableOpacity>

          <Button title="Áp dụng" color='#0A5EB7'></Button>
        </View>
      </View>

      <View style={styles.pnl2}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <Text style={{ marginLeft: '1%', color: '#134FEC', fontWeight: 'bold', fontSize: 15 }}>Nhập tại đây?</Text>
      </View>

      <View style={styles.pnl3}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Tạm tính</Text>
        <Text style={{ marginLeft: '54%', color: 'red', fontWeight: 'bold', fontSize: 15 }}>141.800 đ</Text>
      </View>

      <View style={styles.pnl4}>
        <View style={{ flexDirection: 'row', marginBottom: '5%' }}>
          <Text style={{ color: '#808080', fontWeight: 'bold', fontSize: 15 }}>Thành tiền</Text>
          <Text style={{ marginLeft: '50%', color: 'red', fontWeight: 'bold', fontSize: 15 }}>141.800 đ</Text>
        </View>
        <Button title="TIẾN HÀNH ĐẶT HÀNG" color='#E53935'></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4C4C4'
  },
  pnlTop: {
    backgroundColor: '#fff',
    padding: '5%'
  },
  pnlProduct: {
    flexDirection: 'row'
  },
  pnlRight: {
    marginLeft: '5%'
  },
  pnl2: {
    marginTop: "5%",
    paddingLeft: '1%',
    paddingTop: '5%',
    backgroundColor: '#fff',
    height: '10%',
    flexDirection: 'row'
  },
  pnl3: {
    marginTop: '5%',
    paddingLeft: '1%',
    paddingTop: '5%',
    backgroundColor: "#fff",
    flexDirection: 'row',
    height: '10%'
  },
  pnl4: {
    marginTop: '33%',
    backgroundColor: '#fff',
    padding: '1%',
    height: '14%'
  }
});

export default App;