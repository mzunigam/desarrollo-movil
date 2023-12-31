import { Keyboard } from "react-native";

export const login = async (username, password, setNotification, setIsVisible, navigate) => {
    Keyboard.dismiss();

    if(!username && !password) {
        setNotification('Falta llenar los campos');
        setIsVisible('error');
        setTimeout(() => {
            setIsVisible('');
        },3000);
    }else if(username && !password) {
        setNotification('Falta llenar la contraseña');
        setIsVisible('error');
        setTimeout(() => {
            setIsVisible('');
        },3000);

    }else if(!username && password) {
        setNotification('Falta llenar el usuario');
        setIsVisible('error');
        setTimeout(() => {
            setIsVisible('');
        },3000);
    }

    try {
        const response = await fetch(`http://74.208.94.23:8082/api/user/find/${username}`);
        const json = await response.json();
        console.log(json.password,password);
        if(json.password === password){
            setNotification('Se ha validado correctamente');
            setIsVisible('good');
            setTimeout(() => {
                setIsVisible('');
                navigate('menu',{username});
            },3000);
        }else{
            setNotification('Contraseña incorrecta');
            setIsVisible('error');
            setTimeout(() => {
                setIsVisible('');
            },3000);
        }
    }catch (error) {
        console.error(error);
    }
}