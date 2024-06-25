import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function CheckOutItem({ item }) {
    return (
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Image source={require('./bookImg/bookcover.jpg')} style={{ width: 70, height: 100, marginRight: 10 }} />
            <View>
                <Text>{item.name}</Text>
                <Text>RM{item.price} x {item.quantity}</Text>
            </View>
        </View>
    );
}

export function OrderItem  ({ book }) {
    return (
        <View style={styles.bookItem}>
            <Image source={require("./bookImg/bookcover.jpg")} style={styles.bookImage} />
            <View style={styles.bookDetailsLeft}>
                <Text style={styles.bookName}>{book.bookName}</Text>
                <Text style={styles.bookQuantity}>{book.quantity}</Text>
                <Text style={styles.bookPrice}>RM{book.price}</Text>
            </View>
            <Text style={styles.bookPrice}>Total: RM{(book.price * book.quantity).toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    bookImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    bookDetailsLeft: {
        flex: 1,
    },
    bookName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookQuantity: {
        fontSize: 16,
    },
    bookPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});