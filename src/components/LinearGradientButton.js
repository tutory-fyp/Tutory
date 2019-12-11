import React, { Component } from 'react';
import { 
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import {
    Text as EText,
} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

class LinearGradientButton extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
        };
        this._isLoading = this._isLoading.bind(this);
    }

    _isLoading() {
        if(this.props.loading) {
            return (
                <ActivityIndicator
                    size={this.props.loadingSize || 'small'}
                    color={this.props.loadingColor || 'cyan'}
                />
            );
        } else {
            return (
                <EText
                    style={{ color: this.props.labelColor || 'red', fontSize: this.props.labelFontSize || 10, 
                            fontWeight: this.props.labelFontWeight || 'normal' }}
                >
                    {this.props.label}
                </EText>
            );
        }
    }

    render() {
        return(
            <LinearGradient
                start={this.props.start}
                end={this.props.end}
                colors={this.props.colors}
                style={this.props.containerStyle || {
                    width: '100%',
                    height: 50,}}
            >
                <TouchableOpacity
                    style={{
                        flex: 1, alignItems: 'center',
                        justifyContent: 'center', borderRadius: this.props.containerStyle.borderRadius || 0,
                    }}
                    onPress={this.props.onPress}
                >
                    {this._isLoading()}
                </TouchableOpacity>
            </LinearGradient>
        );
    }
} 

export default LinearGradientButton;