import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Booking = () => {
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.Text}>Ticket Details</Text>


            <View style={styles.productCard}>
                <Image source={require('../assets/qrcode.png')} style={styles.productImage} />
                <View style={styles.productInfo}>
                    <Text style={styles.productDescription}>Name: <Text style={{ color: 'black' }} >Deep Shah</Text></Text>
                    <Text style={styles.productDescription}>Ticket ID : <Text style={{ color: 'black' }} >D0213</Text></Text>
                    <Text style={styles.productDescription}>Order ID : <Text style={{ color: 'black' }} >02D34 </Text></Text>
                    <Text style={styles.productDescription}>Price :<Text style={{ color: 'black' }} > 500 Rs/-</Text></Text>
                </View>

                <Text style={styles.productPriceText}>Please show this QR at the entrance</Text>

            </View>


            <View style={{ position: 'absolute', width: 328, height: 247, left: 33, top: 427 }}></View>
            <View style={{ position: 'absolute', width: 328, height: 247, left: 33, top: 427, backgroundColor: '#FDFDFD', borderRadius: 12 }}></View>
            <Text style={{ position: 'absolute', width: 56, height: 18, left: 50, top: 618, fontFamily: 'AirbnbCereal_W_Md', fontStyle: 'normal', fontWeight: '500', fontSize: 14, lineHeight: 18, display: 'flex', alignItems: 'center', textAlign: 'center', color: '#761CBC' }}>Seat : B6</Text>
            <Text style={{ position: 'absolute', width: 106, height: 18, left: 50, top: 584, fontFamily: 'AirbnbCereal_W_Md', fontStyle: 'normal', fontWeight: '500', fontSize: 14, lineHeight: 18, display: 'flex', alignItems: 'center', textAlign: 'center', color: '#761CBC' }}>Genre : Comedy</Text>
            <Text style={{ position: 'absolute', width: 145, height: 18, left: 49, top: 550, fontFamily: 'AirbnbCereal_W_Md', fontStyle: 'normal', fontWeight: '500', fontSize: 14, lineHeight: 18, display: 'flex', alignItems: 'center', textAlign: 'center', color: '#761CBC' }}>Timing : 7:00 - 9:00 PM</Text>
            <Text style={{ position: 'absolute', width: 120, height: 18, left: 50, top: 516, fontFamily: 'AirbnbCereal_W_Md', fontStyle: 'normal', fontWeight: '500', fontSize: 14, lineHeight: 18, display: 'flex', alignItems: 'center', textAlign: 'center', color: '#761CBC' }}>Date : 13 Mar, 2023</Text>
            <Text style={{ position: 'absolute', width: 292, height: 18, left: 49, top: 482, fontFamily: 'AirbnbCereal_W_Md', fontStyle: 'normal', fontWeight: '500', fontSize: 14, lineHeight: 18, display: 'flex', alignItems: 'center', textAlign: 'center', color: '#761CBC' }}>Venue : The Cheese Box Studios, Ahmedabad</Text>
            <Text style={{ position: 'absolute', width: 163, height: 23, left: 115, top: 443, fontFamily: 'AirbnbCereal_W_Bd', fontStyle: 'normal', fontWeight: '700', fontSize: 18, lineHeight: 23, display: 'flex', alignItems: 'center', textAlign: 'center', color: '#761CBC' }}>Ghar By Zakir Khan</Text>

        </View>
    );
};

const styles = {

    Text: {
        fontWeight: '700',
        fontSize: 30,
        color: '#761CBC',
        marginTop: 20,
        textAlign: 'center', // Center the text horizontally
    },

    pageContainer: {
        position: 'relative',
        height: 853,
        backgroundColor: 'rgba(176, 140, 221, 0.74)',
        borderRadius: 8.95,
        alignItems: 'center', // Center horizontally
    },

    cardContainer: {
        position: 'relative',
        alignSelf: 'center',
        alignItems: 'flex-start',
        height: 400,
        width: 328,
        top: 45,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center'
    },
    
    cardImage: {
        position: 'absolute',
        height: 40,
        width: 328,
        borderRadius: 20,
    },

    //

    productCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        padding: 16,
        marginBottom: 16,
        top: 120,
        width: 350,
    },
    productImage: {
        width: 112,
        height: 70,
        marginRight: 16,
    },
    productInfo: {
        flex: 1,
        marginBottom: 10,
        position: 'relative', // Make the container relative for positioning absolute elements inside
        gap: 5,
        alignItems: 'center',
    },

    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        fontWeight: 700,
        fontSize: 18,
        color: '#761CBC',
    },
    productPriceText: {
        fontSize: 17,
        fontWeight: 700,
        color: '#635A8F',
        position: 'absolute',
        bottom: 0,  // Fixed value for the bottom
        textAlign: 'center',
        marginBottom: 4,
        alignSelf: 'center',
    },

    productDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
        color: '#761CBC',
    },

};

export default Booking;
