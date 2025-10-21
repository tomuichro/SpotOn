import {InputContainer, InputImage, Input} from './style'

export default function InputField(props) {
    return(
        <InputContainer>
            <InputImage source={props.image}/>
            <Input placeholder={props.placeholder} 
                   placeholderTextColor={props.color}
                   keyboardType={props.type}
                   secureTextEntry={props.secureTextEntry}
                   value={props.value}
                   onChangeText={props.onChangeText}>
            </Input>
        </InputContainer>
    );
}