import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const MessageBubble = ({text, whatType}) => {
    let bubbleStyle = null;

    if(whatType.toLowerCase() === ''){
        bubbleStyle = styles.hidden
    }else if(whatType.toLowerCase() === 'good'){
        bubbleStyle = styles.good;
    }else if(whatType.toLowerCase() === 'error'){
        bubbleStyle = styles.error;
    }

    return (
        <View style={[styles.container, bubbleStyle]}>
            <Text style={styles.insideText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: '90%',
        borderRadius: 8,
        padding: 10,
        marginVertical: 4,
        maxWidth: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sentBubble: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'center',
    },
    receivedBubble: {
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
    },
    insideText: {
        fontSize: 16,
        color: '#383838',
    },
    hidden: {
        display: 'none',
    },
    good: {
        backgroundColor: '#DCF8C6',
    },
    error: {
        backgroundColor: '#ff7777',
    }
});