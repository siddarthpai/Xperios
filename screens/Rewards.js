import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const data = [
    {
        title: 'Arlos, HSR',
        description: 'Get a 25% off on Pizzas till 28th Feb!',
        image: require('../assets/pizza.png'),
    },
    {
        title: 'Buffalo Wings',
        description: 'Enjoy a 20% off on Game night at Buffalo Wings!',
        image: require('../assets/pizza.png'), // Using the same pizza image for Buffalo Wings
    },
    {
        title: 'Bistro Claytopia',
        description: 'Free entry to trivia night!',
        image: require('../assets/pizza.png'), // Using the same pizza image for Bistro Claytopia
    },
    {
        title: 'Hardrock Cafe',
        description: '20% off on bar bites and entry to Musical Sunday!',
        image: require('../assets/pizza.png'), // Using the same pizza image for Hardrock Cafe
    },
    // Add more data objects for additional cards
];


const Rewards = () => {
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.rewardsEarned}>Rewards Earned</Text>

            <View style={styles.frame4522}>
                <View style={styles.frame4521}>
                    <Text style={styles.pointsText}>🥇850 Points</Text>
                </View>
            </View>


            {data.map((card, index) => (
                <View style={styles.productCard}>
                    <Image source={require('../assets/pizza.png')} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{card.title}</Text>
                        <Text style={styles.productDescription}>{card.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.redeemButton}>
                        <Text style={styles.productPriceText}>Redeem →</Text>
                    </TouchableOpacity>
                </View>


            ))}


        </View>
    );
};

const styles = {

    rewardsEarned: {
        fontWeight: '700',
        fontSize: 30,
        color: '#761CBC',
        marginTop: 20,
        textAlign: 'center', // Center the text horizontally
    },

    redeemButton: {
        position: 'absolute',
        bottom: 0,
        right: 10,
    },
    pageContainer: {
        position: 'relative',
        height: 853,
        backgroundColor: 'rgba(176, 140, 221, 0.74)',
        borderRadius: 8.95,
        alignItems: 'center', // Center horizontally
    },



    frame4522: {
        padding: 10,
        alignItems: 'center', // Center horizontally
        alignSelf: 'center',
        paddingHorizontal: 14,
        position: 'absolute',
        width: 135,
        height: 50,
        top: 74,
        backgroundColor: '#380C72',
        borderRadius: 32,
        justifyContent: 'center',
    },

    frame4521: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', // Center vertically
        justifyContent: 'center',
    },


    pointsText: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        textAlign: "center",
        justifyContent: 'center',
        color: '#FFFFFF',
    },

    cardContainer: {
        position: 'relative',
        alignSelf: 'center',
        alignItems: 'flex-start',
        height: 101.46,
        width: 338,
        top: 45,
        marginVertical: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center'
    },
    cardImage: {
        position: 'absolute',
        width: 148.19,
        height: 91.69,
        borderRadius: 10,
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
        right: 0,   // Fixed value for the right
        marginBottom: 4,
    },

    productDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
        color: '#761CBC',
    },

};

export default Rewards;
