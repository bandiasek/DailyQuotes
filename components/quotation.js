import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { quotationStyles } from '../style/quotationStyle.js';

export default function Quotation({quote, language}) {
    return(
        <View style={quotationStyles.container}>
            <ImageBackground style={quotationStyles.background} source={require("../assets/backgroundQuote.png")}/>
            <View style={quotationStyles.quote}>
    <Text style={{paddingLeft:'70%',fontSize: 20,fontWeight: 'bold',paddingBottom:10, paddingTop:30}}>[{language.quotation.quote}]</Text>
                <Text style={quotationStyles.quoteText}>{quote.text}</Text>
            </View>

            <View style={quotationStyles.lowerBar}>
                <View style={{alignItems:'center',paddingRight:25}}>
                    <Text style={quotationStyles.naming}>[{language.quotation.date}]</Text>
                    <Text>.....</Text>
                </View>
                <View style={{alignItems:'center',paddingLeft:25}}>
                    <Text style={quotationStyles.naming}>[{language.quotation.author}]</Text>
                    <Text >{quote.autor}</Text>
                </View>
            </View>
        
        </View>
    );
}

